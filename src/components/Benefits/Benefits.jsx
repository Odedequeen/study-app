import './Benefits.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';

/**
 * Benefits Section Component
 * Displays mission and vision information with images
 */
export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-left">
          <div className="benefits-images">
            <div className="benefits-image-wrapper">
              <img 
                src="/src/assets/Images/singladysection.svg" 
                alt="Student with backpack" 
                className="benefits-image"
              />
            </div>
            <div className="benefits-image-wrapper">
              <img 
                src="/src/assets/Images/twolady.svg" 
                alt="Students studying" 
                className="benefits-image"
              />
            </div>
            <div className="benefits-badge">
              <span className="benefits-badge-number">35+</span>
              <span className="benefits-badge-text">Expert Instructor</span>
            </div>
          </div>
        </div>
        
        <div className="benefits-right">
          <SectionTitle 
            title="Benefit From Our Online Learning Expertise Earn
             Professional"
            align="left"
          />
          
          <div className="benefits-content">
            <div className="benefits-column">
              <h3 className="benefits-column-title">Our Mission</h3>
              <p className="benefits-column-text">
                To provide accessible, high-quality online education that empowers 
                learners worldwide to achieve their professional and personal goals 
                through innovative learning experiences.
              </p>
            </div>
            
            <div className="benefits-column">
              <h3 className="benefits-column-title">Our Vision</h3>
              <p className="benefits-column-text">
                To become the leading online education platform that transforms 
                lives through comprehensive courses, expert instruction, and 
                recognized certifications.
              </p>
            </div>
          </div>
          
          <Button variant="primary" size="medium">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
