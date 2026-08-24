import "./Button.css";

/**
 * variant: "primary" | "outline"
 * All other props (onClick, type, disabled, etc.) pass through to <button>.
 */
export default function Button({ variant = "primary", children, className = "", ...rest }) {
  const variantClass = variant === "outline" ? "btn-outline" : "btn-primary";
  return (
    <button className={`btn ${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}