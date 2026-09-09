import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.svg";

function Brand() {
  return (
    <Link className="auth-brand" to="/login" aria-label="TOC Construction login"><img src={logo} alt="TOC Construction" /></Link>
  );
}

export default function AuthLayout({ children }) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <Brand />
        {children}
      </section>
    </main>
  );
}

export function AuthField({ label, ...props }) {
  return <label className="auth-field"><span>{label}</span><input {...props} /></label>;
}

export function AuthError({ children }) {
  return children ? <p className="auth-error" role="alert">{children}</p> : null;
}