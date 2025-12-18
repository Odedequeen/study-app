import './CheckoutSection.css'
import courseImg1 from '../../assets/Images/Gallary/Gallary1.svg'
import courseImg2 from '../../assets/Images/Gallary/Gallary2.svg'
import courseImg3 from '../../assets/Images/Gallary/Gallary3.png'

export default function CheckoutSection(){
  return (
    <section id="checkout-section" className="checkout-section">
      <div className="checkout-inner">
        <div className="checkout-header">
          <div className="checkout-head-left">
            <div className="eyebrow">TOP POPULAR COURSE</div>
            <h2 className="checkout-title">Check Out Educate Features
              <span className="checkout-sub"> Win Any Exam</span>
            </h2>
          </div>

          <div className="checkout-cta">
            <button className="btn-ghost">Browse Edunity Courses →</button>
          </div>
        </div>

        <div className="cards-row">
          {[{img:courseImg1},{img:courseImg2},{img:courseImg3}].map((c, i) => (
            <article className="course-card" key={i}>
              <div className="card-media">
                <span className="tag">Development</span>
                <img src={c.img} alt={`course-${i}`} />
              </div>

              <div className="card-body">
                <div className="rating">★★★★★ <span className="rate">(4.7)</span></div>
                <h3 className="card-title">It Statistics Data Science And Business Analysis</h3>

                <ul className="meta">
                  <li>📘 Lesson 10</li>
                  <li>⏱ 19h 30m</li>
                  <li>👥 Students 20+</li>
                </ul>

                <div className="card-footer">
                  <div className="author">By Angela in Development</div>
                  <div className="price"><strong>$60</strong> <span className="old">$120</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
