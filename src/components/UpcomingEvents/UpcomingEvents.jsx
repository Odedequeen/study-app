import './UpcomingEvents.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';

/**
 * Upcoming Events Section Component
 * Displays information about upcoming events
 */
export default function UpcomingEvents() {
  return (
    <section className="upcoming-events-section">
      <div className="upcoming-events-container">
        <div className="upcoming-events-left">
          <SectionTitle 
            title="Our Best Upcoming Events"
            align="left"
          />
          
          <p className="upcoming-events-description">
            Join us for exciting educational events designed to enhance your learning 
            experience. Our upcoming events feature expert speakers, hands-on workshops, 
            and networking opportunities with fellow learners.
          </p>
          
          <Button variant="primary" size="medium">
            View All Events
          </Button>
        </div>
        
        <div className="upcoming-events-right">
          <div className="upcoming-events-image">
            <img 
              src="/src/assets/Images/upcomingevnet.svg" 
              alt="Upcoming events" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
