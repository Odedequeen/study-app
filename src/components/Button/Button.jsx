import "./Button.css";

/**
 * Reusable Button Component
 * @param {Object} props
 * @param {string} props.variant - Button style variant: 'primary' | 'secondary' | 'outline'
 * @param {string} props.size - Button size: 'small' | 'medium' | 'large'
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
export default function Button({
  variant = "primary",
  size = "medium",
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
