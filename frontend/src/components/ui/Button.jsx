/**
 * variant: "primary" | "outline"
 * All other props (onClick, type, disabled, etc.) pass through to <button>.
 */
const BASE_CLASSES =
  "inline-flex items-center gap-[clamp(0.4rem,0.35rem+0.3vw,0.6rem)] " +
  "text-body font-semibold whitespace-nowrap " +
  "py-[clamp(0.65rem,0.6rem+0.3vw,0.85rem)] px-[clamp(1.25rem,1.1rem+1vw,1.75rem)] " +
  "rounded-lg border-0 cursor-pointer " +
  "transition-[transform,box-shadow,background-color,border-color] duration-[180ms] ease-in-out " +
  "disabled:opacity-60 disabled:cursor-not-allowed";

const VARIANT_CLASSES = {
  primary:
    "bg-blue-500 text-white " +
    "[&:hover:not(:disabled)]:bg-[#2650c2] " +
    "[&:hover:not(:disabled)]:-translate-y-px " +
    "[&:hover:not(:disabled)]:shadow-[0_10px_24px_-8px_rgba(47,95,224,0.55)]",
  outline:
    "bg-transparent text-white border-[1.5px] border-white/35 " +
    "[&:hover:not(:disabled)]:border-white [&:hover:not(:disabled)]:bg-white/[0.06]",
};

export default function Button({ variant = "primary", children, className = "", ...rest }) {
  const variantClass = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary;
  return (
    <button className={`${BASE_CLASSES} ${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}