import React from "react";
import "./FeatureIcons.css";

// Import SVGs (prefer SVGR/react component if available) using exact filenames
import Checkout1Icon from "../../assets/Icons/Checkout1.svg";
import Checkout2Icon from "../../assets/Icons/Checkout2.svg";
import Checkout3Icon from "../../assets/Icons/Checkout3.svg";
import Checkout4Icon from "../../assets/Icons/Checkout4.svg";
import Checkout0Icon from "../../assets/Icons/Checkout0.svg";

const FeatureCard = ({ icon, title, text }) => {
  const renderIcon = () => {
    // SVG/bitmap imported as URL (Vite default for raw import)
    if (typeof icon === "string" && /\.(svg|png|jpe?g|gif)$/i.test(icon)) {
      return <img src={icon} alt={title} className="feature-icon-img" />;
    }

    // Already a React element: clone and add className
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, { className: "feature-icon-svg" });
    }

    // Component/function (SVGR default export) -> render it
    if (typeof icon === "function") {
      const IconComp = icon;
      return <IconComp className="feature-icon-svg" />;
    }

    // Fallback (emoji / text)
    return <span className="feature-icon-symbol">{icon}</span>;
  };

  return (
    <div className="feature-card">
      <div className="feature-icon">{renderIcon()}</div>
      <h4 className="feature-title">{title}</h4>
      <p className="feature-text">{text}</p>
      <button className="feature-btn">View Details</button>
    </div>
  );
};

export default function Features() {
  const features = [
    {
      id: 1,
      icon: <img src={Checkout1Icon} alt="Best Coaching" />,
      title: "Best Coaching",
      text: "In pellentesque massa vitae placerat dui. Cursus sit amet dictum sit amet.",
    },
    {
      id: 2,
      icon: <img src={Checkout2Icon} alt="Expert Tutors" />,
      title: "Expert Teachers",
      text: "Experienced teachers helping students reach learning goals with care.",
    },
    {
      id: 3,
      icon: <img src={Checkout3Icon} alt="Performance Tracking" />,
      title: "Practical Labs",
      text: "Hands-on exercises and projects to reinforce concepts.",
    },
    {
      id: 4,
      icon: <img src={Checkout4Icon} alt="Smart Analytics" />,
      title: "Performance Tracking",
      text: "Track progress and improve with personalized feedback.",
    },
   
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <p className="subtle">
          <img src={Checkout0Icon} alt="icon" className="heading-icon" />
          <span className="subtle-text">EDUNITY FEATURE</span>
          <img src={Checkout0Icon} alt="icon" className="heading-icon" />
        </p>
        <h2>Check Out Educate Features — Win Any Exam</h2>
      </div>
      <div className="features-grid">
        {features.map((f, i) => (
          <FeatureCard key={i} icon={f.icon} title={f.title} text={f.text} />
        ))}
      </div>
    </section>
  );
}



