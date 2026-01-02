import './ExpertInstructors.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';

/**
 * Expert Instructors Section Component
 * Displays instructor profiles
 */
export default function ExpertInstructors() {
  const instructors = [
    {
      id: 1,
      name: 'Nathan Paul',
      title: 'Trainer',
      image: '/src/assets/Images/instructor/groupexpert.svg'
    },
    {
      id: 2,
      name: 'Ethan Boyd',
      title: 'Trainer',
      image: '/src/assets/Images/instructor/groupexpert.svg'
    },
    {
      id: 3,
      name: 'John Kelvin',
      title: 'Trainer',
      image: '/src/assets/Images/instructor/groupexpert.svg'
    },
    {
      id: 4,
      name: 'Jenny Deley',
      title: 'Trainer',
      image: '/src/assets/Images/instructor/groupexpert.svg'
    }
  ];

  return (
    <section className="expert-instructors-section">
      <div className="expert-instructors-container">
        <SectionTitle 
          title="Meet Our Expert Instructor"
          align="center"
        />
        
        <div className="expert-instructors-grid">
          {instructors.map((instructor) => (
            <Card key={instructor.id} variant="instructor" className="instructor-card">
              <div className="instructor-image">
                <img src={instructor.image} alt={instructor.name} />
              </div>
              <h3 className="instructor-name">{instructor.name}</h3>
              <p className="instructor-title">{instructor.title}</p>
              <div className="instructor-badge">
                <span className="instructor-checkmark">✓</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
