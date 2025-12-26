import "./Hero.css";
import searchicon from "../../assets/Icons/search.svg";
import sectiongirlicon from "../../assets/Images/sectiongirl.svg";
import sectionmanicon from "../../assets/Images/sectionman.svg";
import student2kicon from "../../assets/Images/student2k.svg";
import success58kicon from "../../assets/Images/succcess58k.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-badge">Learn & Get Certificates</span>
          <h1 className="hero-title">
            Free Online Courses
            <br />
            With Certificates & Diplomas
          </h1>
          <p className="hero-sub">25 Million Learners. 15 Years. 100%.</p>

          <div className="hero-search">
            <input
              className="hero-search-input"
              placeholder="What do you want to learn today?"
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
            <img
              src={student2kicon}
              alt="student2k Icon"
              className="illustration-icon"
            />
            <div className="card small-card">
              <img
                src={sectiongirlicon}
                alt="Sectiongirl Icon"
                className="card-img"
              />
            </div>
            <div className="card large-card">
              <img src={sectionmanicon} alt="Sectionman-Icon" className="card-img" />
            </div>
            <img
              src={success58kicon}
              alt="Success58k Icon"
              className="success58k-icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
