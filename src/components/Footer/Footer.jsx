import React from "react";
import "./Footer.css";
import Button from "../Button/Button";
import logo from "../../assets/Icons/edunity.svg";
import locationIcon from "../../assets/Icons/location.svg";
import Gallary1Icon from "../../assets/Images/Gallary/Gallary1.svg";
import Gallary2Icon from "../../assets/Images/Gallary/Gallary2.svg";
import Gallary3Icon from "../../assets/Images/Gallary/Gallary3.png";
import Gallary4Icon from "../../assets/Images/Gallary/Gallary4.png";
import Gallary5Icon from "../../assets/Images/Gallary/Gallary5.png";
import Gallary6Icon from "../../assets/Images/Gallary/Gallary6.png";
import FacebookIcon from "../../assets/Icons/Facebook.svg";
import TwitterIcon from "../../assets/Icons/Twitter.svg";
import LinkedInIcon from "../../assets/Icons/lindein.svg";

/**
 * Footer Component
 * Site footer with contact info, services, gallery, and subscription
 * Matches Figma design exactly
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-contact-bar">
          <div className="footer-contact-item">
            <img
              src={locationIcon}
              alt="Location"
              className="footer-contact-icon"
            />
            <span>1235 Boygua Street</span>
          </div>
          <div className="footer-contact-item">
            <svg
              className="footer-contact-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>(00) 875 704 565</span>
          </div>
          <div className="footer-contact-item">
            <svg
              className="footer-contact-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>info@gmail.com</span>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt="Edunity Logo" className="footer-logo" />
            <p className="footer-brand-text">
              providing high-quality courses and expert instructors to help you
              achieve your goals.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="footer-social-link">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
              <a href="#" aria-label="Twitter" className="footer-social-link">
                <img src={TwitterIcon} alt="Twitter" />
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-social-link">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Our Services</h4>
            <ul className="footer-column-list">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">SEO Management</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Diplomas</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Gallery</h4>
            <div className="footer-gallery">
              <img src={Gallary1Icon} alt="Gallery 1" />
              <img src={Gallary2Icon} alt="Gallery 2" />
              <img src={Gallary3Icon} alt="Gallery 3" />
              <img src={Gallary4Icon} alt="Gallery 4" />
              <img src={Gallary5Icon} alt="Gallery 5" />
              <img src={Gallary6Icon} alt="Gallery 6" />
            </div>
          </div>

          <div className="footer-column footer-subscribe-column">
            <h4 className="footer-column-title">Subscribe</h4>
            <div className="footer-subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-subscribe-input"
              />
              <Button
                variant="primary"
                size="small"
                className="footer-subscribe-btn"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2023 Edunity. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
