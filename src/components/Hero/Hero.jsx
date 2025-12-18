import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-left">
                    <span className="hero-badge">Learn & Get Certificates</span>
                    <h1 className="hero-title">Free Online Courses<br />With Certificates & Diplomas</h1>
                    <p className="hero-sub">25 Million Learners. 15 Years. 100%.</p>

                    <div className="hero-search">
                        <input className="hero-search-input" placeholder="What do you want to learn today?" />
                        <button className="hero-search-btn" aria-label="search">🔍</button>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-illustration">
                        <div className="card small-card"> </div>
                        <div className="card large-card"> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}