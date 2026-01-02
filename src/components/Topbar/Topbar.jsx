import "./Topbar.css";

/**
 * Topbar Component
 * Displays top navigation bar with contact info and login/register links
 */
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <span className="topbar-item">24/7 Online Classes</span>
          <span className="topbar-separator">|</span>
          <span className="topbar-item">Online Membership</span>
          <span className="topbar-separator">|</span>
          <span className="topbar-item">Live Support</span>
        </div>
        <div className="topbar-right">
          <a href="#" className="topbar-link">Login</a>
          <span className="topbar-separator">|</span>
          <a href="#" className="topbar-link">Register</a>
        </div>
      </div>
    </div>
  );
}
