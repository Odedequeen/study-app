import "./Hero.css";
import searchicon from "../../assets/Icons/search.svg";
import sectiongirlicon from "../../assets/Images/sectiongirl.svg";
import sectionmanicon from "../../assets/Images/sectionman.svg";
import student2kicon from "../../assets/Images/student2k.svg";
import success58kicon from "../../assets/Images/succcess58k.svg";

/**
 * Hero Section Component
 * Main hero section with title, search bar, and student images
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-author">By Victoria Lee, CEO, Edunity</p>
          <h1 className="hero-title">
            Free Online Courses With Certificates & Diplomas
          </h1>

          <div className="hero-search">
            <input
              className="hero-search-input"
              placeholder="What do you want to learn?"
              type="text"
            />
            <button className="hero-search-btn" aria-label="search">
              <img
                src={searchicon}
                alt="Search Icon"
                className="hero-search-icon"
              />
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-illustration">
            <div className="hero-card hero-card-small">
              <img
                src={sectiongirlicon}
                alt="Student"
                className="hero-card-img"
              />
            </div>
            <div className="hero-card hero-card-large">
              <img src={sectionmanicon} alt="Student" className="hero-card-img" />
            </div>
            <div className="hero-badge hero-badge-students">
              <span className="hero-badge-number">2k+</span>
              <span className="hero-badge-text">Students</span>
            </div>
            <div className="hero-badge hero-badge-reviews">
              <span className="hero-badge-number">5.8k</span>
              <span className="hero-badge-text">Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
