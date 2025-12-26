import React from "react";
import "./Footer.css";
import logo from "../../assets/Icons/edunity.svg";
import Gallary1Icon from "../../assets/Images/Gallary/Gallary1.svg";
import Gallary2Icon from "../../assets/Images/Gallary/Gallary2.svg";
import Gallary3Icon from "../../assets/Images/Gallary/Gallary3.png";
import Gallary4Icon from "../../assets/Images/Gallary/Gallary4.png";
import Gallary5Icon from "../../assets/Images/Gallary/Gallary5.png";
import Gallary6Icon from "../../assets/Images/Gallary/Gallary6.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="logo" />
            <p>
              Edunity is a modern online education platform providing
              high-quality courses and expert instructors.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Our Services</h4>
              <ul>
                <li>> Web Development</li>
                <li>> UI/UX Design </li>
                <li>> Management </li>
                <li>> Digital Marketing</li>
                <li>> Blog News </li>
              </ul>
            </div>

            <div>
              <h4>Gallery</h4>
              <div className="mini-gallery">
                <img
                  src={Gallary1Icon}
                  alt="Gallary1 icon"
                  className="Gallary1-png"
                />
                <img
                  src={Gallary2Icon}
                  alt="Gallary2 icon"
                  className="Gallary2-png"
                />
                <img
                  src={Gallary3Icon}
                  alt="Gallary3 icon"
                  className="Gallary3-png"
                />
                <img
                  src={Gallary4Icon}
                  alt="Gallary4 icon"
                  className="Gallary4-png"
                />
                <img
                  src={Gallary5Icon}
                  alt="Gallary5 icon"
                  className="Gallary5-png"
                />
                <img
                  src={Gallary6Icon}
                  alt="Gallary6icon"
                  className="Gallary6-png"
                />
              </div>
            </div>

            <div>
              <h4>Subscribe</h4>
              <div className="subscribe">
                <input placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Edunity. All rights reserved.</div>
          <div className="footer-contact">
            1925 Burgess Street • (91) 875 764 568 • info@mail.com
          </div>
        </div>
      </div>
    </footer>
  );
}
