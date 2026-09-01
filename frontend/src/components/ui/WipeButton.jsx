import rightArrow from "../../assets/homepage/rightArrow.svg";

/*
  WipeButton

  A button with a white panel that slides in from the left when you hover it.
  While the panel slides in, the label and the arrow turn black.

  Props
    variant   "fill"    -> solid blue button (this is the default)
              "outline"  -> see-through button with a white border
    icon      image to show after the label. Defaults to the arrow.
              Pass  icon={null}  to hide it.
    children  the button label
    ...props  anything else (onClick, type, disabled) goes straight to <button>
*/

// classes every WipeButton shares
const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden " +
  "rounded-lg px-7 py-4 font-display text-lg font-bold whitespace-nowrap cursor-pointer " +
  "transition-colors duration-300 ease-out";

// classes that depend on the variant
const fill = "bg-[#1e56a0] text-white shadow-lg hover:text-black";
const outline = "border border-white bg-transparent text-white hover:text-black";

export default function WipeButton({
  variant = "fill",
  icon = rightArrow,
  children,
  className = "",
  ...props
}) {
  const look = variant === "outline" ? outline : fill;

  return (
    <button className={`${base} ${look} ${className}`} {...props}>
      {/* the white panel: it starts squished to 0 width, then grows back to full on hover */}
      <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />

      {/* label + arrow sit above the white panel because of z-10 */}
      <span className="relative z-10">{children}</span>
      {icon && (
        <img
          src={icon}
          alt=""
          className="relative z-10 h-5 w-5 object-contain transition duration-300 group-hover:brightness-0"
        />
      )}
    </button>
  );
}
