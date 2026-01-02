import './Card.css';

/**
 * Reusable Card Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.variant - Card variant: 'default' | 'course' | 'feature' | 'instructor' | 'testimonial'
 */
export default function Card({ children, className = '', variant = 'default', ...props }) {
  return (
    <div className={`card card-${variant} ${className}`} {...props}>
      {children}
    </div>
  );
}
