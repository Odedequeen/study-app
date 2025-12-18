import './Experience.css'
import yearsIcon from '../../assets/Images/years.svg'
import singladysection from '../../assets/Images/singladysection.svg'
import twoladysvg from '../../assets/Images/twolady.svg'


export default function Experience(){
  return (
    <section id="experience" className="experience">
      <div className="experience-inner">
        <div className="experience-media">
          <div className="media-stack">
             <img src={singladysection} alt="Student A" className="media-large" /> 
            <div className="media-row">
              <img src={twoladysvg} alt="Student B" className="media-small" />
              <div className="years-badge">
                <img src={yearsIcon} alt="Years" />
                <div className="years-text"><span className="years-number">35+</span><span className="years-label">Years Experience</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-content">
          <div className="eyebrow">ABOUT US</div>
          <h2 className="exp-title">Benefit From Our Online Learning Expertise Earn <span className="accent">Professional</span></h2>
          <p className="exp-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

          <div className="exp-grid">
            <div className="exp-block">
              <h4>OUR MISSION</h4>
              <p>Suspendisse ultricies gravida dictum. Fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.</p>
            </div>

            <div className="exp-block">
              <h4>OUR VISION</h4>
              <p>Suspendisse ultricies gravida dictum. Fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.</p>
            </div>
          </div>

          <div className="exp-cta">
            <button className="btn-primary">Admission Open →</button>
          </div>
        </div>

      </div>
    </section>
  )
}
