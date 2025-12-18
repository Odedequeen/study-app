import './Header.css'
import edunitylogo from '../../assets/Icons/edunity.svg'
import searchicon from '../../assets/Icons/search.svg'

export default function Header(){
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo"> 
          <img src={edunitylogo} alt="Edunity Logo" className="logo-icon" />
          
        </div>

        <nav className="main-nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Courses</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="icon-search" aria-label="search">
            <img src={searchicon} alt="Search" />
          </button>
          <button className="contact-btn">Contact Us →</button>
        </div>
      </div>
    </header>
  )
}
