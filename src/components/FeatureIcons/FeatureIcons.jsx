import './FeatureIcons.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';

/**
 * Feature Icons Section Component
 * Displays features with icons in a grid layout
 */
export default function FeatureIcons() {
  const features = [
    {
      id: 1,
      icon: '🎓',
      title: 'Best Coaching',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      id: 2,
      icon: '📚',
      title: 'Best Coaching',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      id: 3,
      icon: '🏆',
      title: 'Best Coaching',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      id: 4,
      icon: '💬',
      title: 'Best Coaching',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ];

  return (
    <section className="feature-icons-section">
      <div className="feature-icons-container">
        <SectionTitle 
          title="Check Out Educate Features Win Any Exam"
          align="center"
        />
        
        <div className="feature-icons-grid">
          {features.map((feature) => (
            <Card key={feature.id} variant="feature" className="feature-icon-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon-emoji">{feature.icon}</span>
              </div>
              <h3 className="feature-icon-title">{feature.title}</h3>
              <p className="feature-icon-description">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
