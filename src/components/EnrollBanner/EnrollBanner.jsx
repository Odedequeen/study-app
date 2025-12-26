import React from 'react'
import './EnrollBanner.css'

export default function EnrollBanner() {
  return (
    <section className="enroll-banner">
      <div className="enroll-overlay">
        <div className="enroll-content">
          <p className="eyebrow">Join Our New Session</p>
          <h2 className="enroll-title">Call To Enroll Your Child<br/> (+91)958423452</h2>
          <div className="enroll-actions">
            <button className="primary">Join With Us</button>
            <div className="play">
              <div className="play-circle">▶</div>
              <span className="watch">watch now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
