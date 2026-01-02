import './Testimonial.css';
import Card from '../Card/Card';

/**
 * Testimonial Section Component
 * Displays student testimonials
 */
export default function Testimonial() {
  const testimonial = {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Olivia Rumani',
    role: 'Student, Edunity'
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-left">
          <div className="testimonial-image">
            <img 
              src="/src/assets/Images/singladysection.svg" 
              alt="Student testimonial" 
            />
          </div>
        </div>
        
        <div className="testimonial-right">
          <Card variant="testimonial" className="testimonial-card">
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-author">
              <h4 className="testimonial-author-name">{testimonial.author}</h4>
              <p className="testimonial-author-role">{testimonial.role}</p>
            </div>
            <div className="testimonial-dots">
              <span className="testimonial-dot active" />
              <span className="testimonial-dot" />
              <span className="testimonial-dot" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
