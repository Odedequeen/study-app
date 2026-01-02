import './ClassroomDescription.css';
import Button from '../Button/Button';
import section4icon from '../../assets/Images/section4/section4.svg';

/**
 * Classroom Description Section Component
 * Shows progress bars and classroom information
 * Matches Figma design with "OUR STATUS VALUES" badge
 */
export default function ClassroomDescription() {
  const stats = [
    { label: 'Case study success', value: 90 },
    { label: 'Happy students', value: 75 },
    { label: 'Engaging', value: 93 },
    { label: 'Student Community', value: 63 }
  ];

  return (
    <section className="classroom-description-section">
      <div className="classroom-description-container">
        <div className="classroom-description-left">
          <span className="classroom-badge">OUR STATUS VALUES</span>
          <h2 className="classroom-title">
            Our Classroom Is A Different School Than The Others
          </h2>
          
          <p className="classroom-description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          
          <ul className="classroom-stats">
            {stats.map((stat) => (
              <li key={stat.label} className="classroom-stat-item">
                <div className="classroom-stat-label">{stat.label}</div>
                <div className="classroom-stat-bar-wrapper">
                  <div className="classroom-stat-bar">
                    <div 
                      className="classroom-stat-bar-fill"
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                  <div className="classroom-stat-badge">{stat.value}%</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="classroom-description-right">
          <div className="classroom-photo-frame">
            <div className="classroom-photo-accent"></div>
            <img 
              src={section4icon} 
              alt="Students studying together" 
              className="classroom-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
