import './CourseFeatures.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import Card from '../Card/Card';

/**
 * Course Features Section Component
 * Displays featured courses in card format
 */
export default function CourseFeatures() {
  const courses = [
    {
      id: 1,
      title: 'UI Statistics Data Science And Business Analysis',
      instructor: 'Angela Yu',
      rating: 4.5,
      price: 50,
      originalPrice: 120,
      image: '/src/assets/Images/popularpost.svg'
    },
    {
      id: 2,
      title: 'UI Statistics Data Science And Business Analysis',
      instructor: 'Angela Yu',
      rating: 4.5,
      price: 50,
      originalPrice: 120,
      image: '/src/assets/Images/popularpost.svg'
    },
    {
      id: 3,
      title: 'UI Statistics Data Science And Business Analysis',
      instructor: 'Angela Yu',
      rating: 4.5,
      price: 50,
      originalPrice: 120,
      image: '/src/assets/Images/popularpost.svg'
    }
  ];

  return (
    <section className="course-features-section">
      <div className="course-features-container">
        <div className="course-features-header">
          <SectionTitle 
            title="Check Out Educate Features Win Any Exam"
            align="left"
          />
          <Button variant="primary" size="medium">
            View All Courses
          </Button>
        </div>
        
        <div className="course-features-grid">
          {courses.map((course) => (
            <Card key={course.id} variant="course" className="course-card">
              <div className="course-card-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-card-content">
                <h3 className="course-card-title">{course.title}</h3>
                <div className="course-card-rating">
                  <span className="course-card-stars">
                    {'★'.repeat(Math.floor(course.rating))}
                    {'☆'.repeat(5 - Math.floor(course.rating))}
                  </span>
                  <span className="course-card-rating-value">{course.rating}</span>
                </div>
                <p className="course-card-instructor">By {course.instructor}</p>
                <div className="course-card-price">
                  <span className="course-card-price-current">${course.price}</span>
                  <span className="course-card-price-original">${course.originalPrice}</span>
                </div>
                <Button variant="primary" size="small" className="course-card-button">
                  View Course
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
