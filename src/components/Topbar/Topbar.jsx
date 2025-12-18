import "./Topbar.css";
import clockicon from "../../assets/Icons/clock.svg";
import locationicon from "../../assets/Icons/location.svg";
import usericon from "../../assets/Icons/head.svg";
import linkicon from "../../assets/Icons/lindein.svg";
import FacebookIcon from "../../assets/Icons/Facebook.svg";
import TwitterIcon from "../../assets/Icons/Twitter.svg";
import kypeIcon from "../../assets/Icons/skype.svg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <img src={clockicon} alt="Clock Icon" className="topbar-icon" />
          <span className="topbar-text">
            Working : Monday - Friday, 9:am - 5:Pm
          </span>
          <img src={locationicon} alt="Location Icon" className="topbar-icon" />
          <span className="topbar-text">Hudson, Wisconsin(WI), 54016</span>
        </div>
        <div className="topbar-right">
          <img src={usericon} alt="User Icon" className="topbar-icon" />
          <span className="topbar-text">Login / Register</span>
          <img
            src={FacebookIcon}
            alt=" Facebook Icon"
            className="topbar-icon"
          />
          <img src={TwitterIcon} alt="Twitter Icon" className="topbar-icon" />
          <img src={kypeIcon} alt="skype Icon" className="topbar-icon" />
          <img src={linkicon} alt="Link Icon" className="topbar-icon" />
        </div>
      </div>
    </div>
  );
}
