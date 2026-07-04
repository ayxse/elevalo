# Firebase backend setup

This project can send website requests to a Firebase HTTPS Function.

## What it does

- Receives the full website request form as `multipart/form-data`.
- Accepts one logo file and multiple business images.
- Uploads files to Firebase Storage.
- Saves a copy of the request metadata in Firestore.
- Sends an email with the request details and signed links to uploaded files.

Files are linked instead of attached directly because large image attachments can make emails fail.

## Frontend config

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Set:

```bash
VITE_REQUEST_ENDPOINT=https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/submitWebsiteRequest
```

Rebuild after changing `.env`:

```bash
npm run build
```

## Firebase Functions config

Create `functions/.env` from `functions/.env.example`:

```bash
cp functions/.env.example functions/.env
```

Set:

```bash
EMAIL_TO=your-personal-email@example.com
EMAIL_FROM=Elevalo <no-reply@yourdomain.com>
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
PUBLIC_BASE_URL=https://ayxse.github.io/elevalo/
```

Use a real SMTP provider or transactional email service. Gmail can work with an app password, but a provider like Resend, Postmark, SendGrid, or Mailgun is usually cleaner for production.

## Deploy

Install Firebase CLI if needed:

```bash
npm install -g firebase-tools
```

Log in and select the project:

```bash
firebase login
firebase use YOUR_PROJECT_ID
```

Deploy the function:

```bash
firebase deploy --only functions
```

After deploy, copy the function URL into the frontend `.env` as `VITE_REQUEST_ENDPOINT`, rebuild, and deploy the site.
