import './Header.css';
import Button from '../Button/Button';
import edunitylogo from '../../assets/Icons/edunity.svg';
import searchicon from '../../assets/Icons/search.svg';

/**
 * Header Component
 * Main navigation header with logo, menu, and actions
 */
export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo"> 
          <img src={edunitylogo} alt="Edunity Logo" className="logo-icon" />
        </div>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#courses">Courses</a>
          <a href="#pages">Pages</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="icon-search" aria-label="search">
            <img src={searchicon} alt="Search" />
          </button>
          <Button variant="primary" size="medium" className="join-btn">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
}
