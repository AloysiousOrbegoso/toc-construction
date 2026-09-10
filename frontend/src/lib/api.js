const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";

async function parseJsonResponse(response) {
  const body = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(body?.message ?? "Something went wrong. Please try again.");
    error.status = response.status;
    error.errors = body?.errors ?? null;
    throw error;
  }

  return body;
}

export async function fetchProjects(category) {
  const params = category && category !== "All" ? `?category=${encodeURIComponent(category)}` : "";
  const response = await fetch(`${API_URL}/projects${params}`);
  const body = await parseJsonResponse(response);
  return body.data;
}

export async function fetchProject(id) {
  const response = await fetch(`${API_URL}/projects/${encodeURIComponent(id)}`);
  const body = await parseJsonResponse(response);
  return body.data;
}

export async function fetchJobs() {
  const response = await fetch(`${API_URL}/jobs`);
  const body = await parseJsonResponse(response);
  return body.data;
}

export async function submitQuoteRequest(formData) {
  const response = await fetch(`${API_URL}/quote-requests`, {
    method: "POST",
    body: formData,
  });
  return parseJsonResponse(response);
}

export async function submitJobApplication(formData) {
  const response = await fetch(`${API_URL}/job-applications`, {
    method: "POST",
    body: formData,
  });
  return parseJsonResponse(response);
}
