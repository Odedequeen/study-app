import "./SectionTitle.css";

/**
 * Reusable Section Title Component
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Optional subtitle text
 * @param {string} props.align - Text alignment: 'left' | 'center' | 'right'
 */
export default function SectionTitle({ title, subtitle, align = "center" }) {
  return (
    <div className={`section-title section-title-${align}`}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2 className="section-heading">{title}</h2>
    </div>
  );
}
