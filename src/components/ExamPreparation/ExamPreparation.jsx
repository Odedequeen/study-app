import React from "react";
import "./ExamPreparation.css";
import annualeaxme1icon from "../../assets/Images/eaxmespraperation.svg/annualeaxme1.svg";
import snnualeaxm2icon from "../../assets/Images/eaxmespraperation.svg/snnualeaxm2.svg";

const Tile = ({ title, text, variant = "dark" }) => (
  <div className={`prep-tile ${variant}`}>
    <div className="tile-content">
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="tile-btn">Join Now</button>
    </div>
  </div>
);

export default function ExamPreparation() {
  return (
    <section className="exam-prep">
      <div className="prep-header">
        <p className="subtle">EXAM PREPARATION</p>
        <h2>Annual Exam Preparation</h2>
      </div>
      <div className="prep-tiles">
        <div className="prep-tile-with-icon">
          <Tile
            title="Start From Today"
            text="Join Our Training Courses & Build Your Skill."
            variant="dark"
          />
          <img
            src={annualeaxme1icon}
            alt="Annualeaxme1 Icon"
            className="prep-icon"
          />
        </div>
        <div className="prep-tile-with-icon">
          <Tile
            title="Start From Today"
            text="Join Our Training Courses & Build Your Skill."
            variant="light"
          />
          <img
            src={snnualeaxm2icon}
            alt="Snnualeaxm2 Icon"
            className="prep-icon"
          />
        </div>
      </div>
    </section>
  );
}
