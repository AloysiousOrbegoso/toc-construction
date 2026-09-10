const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    ...options,
  });
  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(body.message || "Something went wrong.");
    error.status = response.status;
    error.data = body;
    throw error;
  }

  return body;
}

export const login = (credentials) => request("/auth/login", {
  method: "POST",
  body: JSON.stringify(credentials),
});

export const forgotPassword = (email) => request("/auth/forgot-password", {
  method: "POST",
  body: JSON.stringify({ email }),
});

export const resetPassword = (details) => request("/auth/reset-password", {
  method: "POST",
  body: JSON.stringify(details),
});