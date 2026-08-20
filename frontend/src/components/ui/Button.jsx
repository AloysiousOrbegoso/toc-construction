import React from "react";

/**
 * Shared Button used across all sections.
 *
 * variant: "primary" | "outline"
 * All other props (onClick, type, etc.) pass through to the underlying <button>.
 */
export default function Button({ variant = "primary", children, className = "", ...rest }) {
  const variantClass = variant === "outline" ? "btn-outline" : "btn-primary";
  return (
    <button className={`btn ${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
