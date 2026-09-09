import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout, { AuthError, AuthField } from "./AuthLayout";
import { forgotPassword, resetPassword } from "../../../data/authApi";

export default function ForgotPassword() {
  const [email, setEmail] = useState(""); const [otp, setOtp] = useState(""); const [password, setPassword] = useState(""); const [passwordConfirmation, setPasswordConfirmation] = useState(""); const [step, setStep] = useState(1); const [message, setMessage] = useState(""); const [error, setError] = useState("");
  async function submit(event) {
    event.preventDefault(); setError(""); setMessage("");
    try { const result = step === 1 ? await forgotPassword(email) : await resetPassword({ email, otp, password, password_confirmation: passwordConfirmation }); setMessage(result.message); if (step === 1) setStep(2); else setTimeout(() => window.location.assign("/login"), 900); } catch (submitError) { setError(submitError.message); }
  }
  return <AuthLayout>
    <div className="auth-heading"><h1>Forgot Password?</h1><p>{step === 1 ? "Enter your email to receive a reset code" : "Enter the code and your new password"}</p></div>
    <form className="auth-form" onSubmit={submit}><AuthField label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" readOnly={step === 2} />{step === 2 && <><AuthField label="OTP code" inputMode="numeric" value={otp} onChange={(e) => setOtp(e.target.value)} required /><AuthField label="New password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="8" autoComplete="new-password" /><AuthField label="Re-enter new password" type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required autoComplete="new-password" /></>}<AuthError>{error}</AuthError>{message && <p className="auth-success">{message}</p>}<button className="auth-submit">{step === 1 ? "SEND RESET CODE" : "RESET PASSWORD"}</button></form>
    <Link className="auth-link auth-forgot" to="/login">Back to Sign In</Link>
  </AuthLayout>;
}