const requestEndpoint = import.meta.env.VITE_REQUEST_ENDPOINT;

export function isProjectRequestConfigured() {
  return Boolean(requestEndpoint);
}

export async function createProjectRequest(form) {
  const response = await fetch(requestEndpoint, {
    method: "POST",
    body: new FormData(form)
  });

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }
}
