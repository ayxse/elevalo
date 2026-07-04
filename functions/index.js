const Busboy = require("busboy");
const admin = require("firebase-admin");
const { onRequest } = require("firebase-functions/v2/https");
const { defineString } = require("firebase-functions/params");
const nodemailer = require("nodemailer");

admin.initializeApp();

const emailTo = defineString("EMAIL_TO");
const emailFrom = defineString("EMAIL_FROM");
const smtpHost = defineString("SMTP_HOST");
const smtpPort = defineString("SMTP_PORT");
const smtpSecure = defineString("SMTP_SECURE", { default: "false" });
const smtpUser = defineString("SMTP_USER");
const smtpPass = defineString("SMTP_PASS");
const publicBaseUrl = defineString("PUBLIC_BASE_URL", { default: "" });

const MAX_FILES = 24;
const MAX_FILE_SIZE = 15 * 1024 * 1024;

function parseMultipartRequest(req) {
  return new Promise((resolve, reject) => {
    const fields = {};
    const files = [];
    const busboy = Busboy({
      headers: req.headers,
      limits: {
        fileSize: MAX_FILE_SIZE,
        files: MAX_FILES
      }
    });

    busboy.on("field", (name, value) => {
      fields[name] = value;
    });

    busboy.on("file", (name, file, info) => {
      const chunks = [];
      const fileInfo = {
        fieldName: name,
        filename: info.filename || "upload",
        mimeType: info.mimeType || "application/octet-stream",
        truncated: false
      };

      file.on("data", (chunk) => chunks.push(chunk));
      file.on("limit", () => {
        fileInfo.truncated = true;
      });
      file.on("end", () => {
        if (!fileInfo.filename || fileInfo.truncated) {
          return;
        }

        files.push({
          ...fileInfo,
          buffer: Buffer.concat(chunks)
        });
      });
    });

    busboy.on("error", reject);
    busboy.on("finish", () => resolve({ fields, files }));
    busboy.end(req.rawBody);
  });
}

function cleanFileName(filename) {
  return filename
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 120) || "upload";
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderValue(value) {
  if (!value) {
    return "<em>No incluido</em>";
  }

  return escapeHtml(value).replace(/\n/g, "<br>");
}

function buildEmailHtml(fields, uploadedFiles) {
  const rows = [
    ["Negocio", fields.businessName],
    ["Email", fields.clientEmail],
    ["Teléfono", fields.phone],
    ["Prefiere WhatsApp", fields.useWhatsapp ? "Sí" : "No"],
    ["Tipo de negocio", fields.businessType],
    ["Pueblo o área", fields.location],
    ["Objetivo principal", fields.goal],
    ["Visión", fields.vision],
    ["Misión / historia", fields.mission],
    ["Servicios / productos / menú", fields.services],
    ["Referencia o concepto", fields.referenceSite],
    ["Estilo deseado", fields.styleNotes],
    ["Notas adicionales", fields.details]
  ];

  const fileItems = uploadedFiles.length
    ? uploadedFiles
        .map((file) => `<li><a href="${escapeHtml(file.url)}">${escapeHtml(file.filename)}</a></li>`)
        .join("")
    : "<li>No se subieron archivos.</li>";

  return `
    <div style="font-family: Arial, sans-serif; color: #17191f; line-height: 1.5;">
      <h1>Nueva solicitud de website</h1>
      <p>Alguien completó el brief de Elevalo.</p>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <th align="left" style="border: 1px solid #e9edf4; background: #f7f9fc; width: 220px;">
                  ${escapeHtml(label)}
                </th>
                <td style="border: 1px solid #e9edf4;">${renderValue(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
      <h2>Archivos</h2>
      <ul>${fileItems}</ul>
    </div>
  `;
}

async function uploadFiles(fields, files) {
  const bucket = admin.storage().bucket();
  const safeBusinessName = cleanFileName(fields.businessName || "website-request");
  const requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  return Promise.all(
    files.map(async (file) => {
      const destination = `website-requests/${safeBusinessName}/${requestId}/${file.fieldName}-${cleanFileName(file.filename)}`;
      const storageFile = bucket.file(destination);

      await storageFile.save(file.buffer, {
        contentType: file.mimeType,
        resumable: false,
        metadata: {
          metadata: {
            originalName: file.filename,
            fieldName: file.fieldName
          }
        }
      });

      const [url] = await storageFile.getSignedUrl({
        action: "read",
        expires: Date.now() + 1000 * 60 * 60 * 24 * 14
      });

      return {
        filename: file.filename,
        mimeType: file.mimeType,
        path: destination,
        url
      };
    })
  );
}

function createTransport() {
  return nodemailer.createTransport({
    host: smtpHost.value(),
    port: Number(smtpPort.value() || 587),
    secure: smtpSecure.value() === "true",
    auth: {
      user: smtpUser.value(),
      pass: smtpPass.value()
    }
  });
}

exports.submitWebsiteRequest = onRequest(
  {
    cors: true,
    memory: "512MiB",
    region: "us-central1",
    timeoutSeconds: 120
  },
  async (req, res) => {
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    try {
      const { fields, files } = await parseMultipartRequest(req);

      if (!fields.businessName || !fields.clientEmail || !fields.businessType || !fields.goal || !fields.services) {
        res.status(400).json({ error: "Missing required fields" });
        return;
      }

      const uploadedFiles = await uploadFiles(fields, files);
      const requestDoc = await admin.firestore().collection("websiteRequests").add({
        ...fields,
        fileCount: uploadedFiles.length,
        files: uploadedFiles.map(({ filename, mimeType, path }) => ({ filename, mimeType, path })),
        source: publicBaseUrl.value(),
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });

      const html = buildEmailHtml(fields, uploadedFiles);
      const transport = createTransport();

      await transport.sendMail({
        from: emailFrom.value(),
        to: emailTo.value(),
        replyTo: fields.clientEmail,
        subject: `Nueva solicitud web: ${fields.businessName}`,
        html
      });

      res.status(200).json({
        ok: true,
        requestId: requestDoc.id,
        uploadedFiles: uploadedFiles.length
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Could not submit request" });
    }
  }
);
