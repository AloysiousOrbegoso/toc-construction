import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout, { AuthError, AuthField } from "./AuthLayout";
import { login } from "../../../data/authApi";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setBusy(true); setError("");
    try {
      const result = await login(form);
      localStorage.setItem("toc_token", result.token);
      localStorage.setItem("toc_user", JSON.stringify(result.user));
      navigate("/admin/dashboard", { replace: true });
    } catch (submitError) {
      setError(submitError.message);
      if (submitError.status === 429) setError(`${submitError.message} Please wait before trying again.`);
    } finally { setBusy(false); }
  }

  return <AuthLayout>
    <div className="auth-heading"><h1>Sign In</h1><p>Enter your credentials to manage active sites</p></div>
    <form className="auth-form" onSubmit={submit}>
      <AuthField label="Email address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required autoComplete="email" />
      <AuthField label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required autoComplete="current-password" />
      <AuthError>{error}</AuthError>
      <button className="auth-submit" disabled={busy}>{busy ? "SIGNING IN..." : "LOGIN"}</button>
    </form>
    <Link className="auth-link auth-forgot" to="/forgot-password">Forgot Password?</Link>
  </AuthLayout>;
}