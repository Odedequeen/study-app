import "./Industry.css";
import section4icon from "../../assets/Images/section4/section4.svg";

export default function Industry() {
  return (
    <section className="industry">
      <div className="industry-container">
        <div className="industry-left">
          <span className="industry-badge">OUR STATUS VALUES</span>
          <h2 className="industry-title">Our Classroom Is A Different School Than The Others</h2>
          <p className="industry-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

          <ul className="industry-stats">
            <li>
              <div className="stat-label">Case study success</div>
              <div className="stat-bar"><div className="stat-fill" style={{width: '90%'}}></div><div className="stat-badge">90%</div></div>
            </li>
            <li>
              <div className="stat-label">Happy students</div>
              <div className="stat-bar"><div className="stat-fill" style={{width: '75%'}}></div><div className="stat-badge">75%</div></div>
            </li>
            <li>
              <div className="stat-label">Engaging</div>
              <div className="stat-bar"><div className="stat-fill" style={{width: '93%'}}></div><div className="stat-badge">93%</div></div>
            </li>
            <li>
              <div className="stat-label">Student Community</div>
              <div className="stat-bar"><div className="stat-fill" style={{width: '63%'}}></div><div className="stat-badge">63%</div></div>
            </li>
          </ul>
        </div>

        <div className="industry-right">
          <div className="industry-photo-frame">
            <div className="photo-accent"></div>
            <img src={section4icon} alt="Students holding books" className="industry-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
