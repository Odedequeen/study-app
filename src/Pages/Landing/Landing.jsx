import Hero from "../../components/Hero/Hero.jsx";
import Topbar from "../../components/Topbar/Topbar.jsx";
import TopTicker from "../../components/TopTicker/TopTicker.jsx";
import Header from "../../components/Header/Header.jsx";
import Benefits from "../../components/Benefits/Benefits.jsx";
import CourseFeatures from "../../components/CourseFeatures/CourseFeatures.jsx";
import ClassroomDescription from "../../components/ClassroomDescription/ClassroomDescription.jsx";
import FeatureIcons from "../../components/FeatureIcons/FeatureIcons.jsx";
import EnrollBanner from "../../components/EnrollBanner/EnrollBanner.jsx";
import ExamPreparation from "../../components/ExamPreparation/ExamPreparation.jsx";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents.jsx";
import ExpertInstructors from "../../components/ExpertInstructors/ExpertInstructors.jsx";
import MostPopular from "../../components/MostPopular/MostPopular.jsx";
import Footer from "../../components/Footer/Footer.jsx";

/**
 * Landing Page Component
 * Main landing page that assembles all sections in the correct order
 *
 * Structure:
 * 1. Topbar - Top navigation bar
 * 2. Header - Main navigation header
 * 3. Hero - Hero section with search
 * 4. Benefits - Mission and Vision section
 * 5. CourseFeatures - Featured courses grid
 * 6. ClassroomDescription - Classroom info with progress bars
 * 7. FeatureIcons - Feature icons section
 * 8. EnrollBanner - Call to action banner
 * 9. ExamPreparation - Exam preparation cards
 * 10. TopTicker - Online school ticker
 * 11. Testimonial - Student testimonials
 * 12. UpcomingEvents - Upcoming events section
 * 13. ExpertInstructors - Instructor profiles
 * 14. MostPopular - Popular blog posts
 * 15. Footer - Site footer
 */
export default function Landing() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Benefits />
      <CourseFeatures />
      <ClassroomDescription />
      <FeatureIcons />
      <EnrollBanner />
      <ExamPreparation />
      <TopTicker />
      <Testimonial />
      <UpcomingEvents />
      <ExpertInstructors />
      <MostPopular />
      <Footer />
    </>
  );
}
