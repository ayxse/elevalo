const requestEndpoint = import.meta.env.VITE_BASIN_FORM_ENDPOINT?.trim();

export function isProjectRequestConfigured() {
  return Boolean(requestEndpoint);
}

export async function createProjectRequest(form, { businessImages = [] } = {}) {
  const payload = new FormData(form);

  for (const [name, value] of payload.entries()) {
    if (value instanceof File && value.size === 0) {
      payload.delete(name);
    }
  }

  payload.set("submissionPage", window.location.href);
  payload.set("submittedAt", new Date().toISOString());
  businessImages.forEach((file) => payload.append("attachments[]", file, file.name));

  const response = await fetch(requestEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: payload
  });

  if (!response.ok) {
    let message = `Request failed with ${response.status}`;

    try {
      const responseBody = await response.json();
      message = responseBody.message || responseBody.error || message;
    } catch {
      // Basin can return an HTML error page for some account-level errors.
    }

    throw new Error(message);
  }
}
