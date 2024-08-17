import React from 'react'
import './NavBar.css'

const NavBar = () => {
  function showMenu(){
    let menu = document.querySelector('.nav-bar-menu')
    menu.classList.toggle("active")
  }
  return (
    <div className='navbar'>
        <div className="navbar-container">
        {/* Top Section with Email, Location, and Social Icons */}
        <div className="navbar-top">
        <div className="navbar-email-and-location">
            <p className="navbar-email">
                <i class="fa-solid fa-envelope"></i> info@company.com
            </p>

            <p className="navbar-location">
                <i class="fa-solid fa-map"></i> Sunny Isles Beach, FL 33160
            </p>
        </div>

          <div className="navbar-social">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        
        {/* Bottom Section with Logo, Menu, and Button */}
        <nav className="navbar-bottom">
          <a href="#" className="navbar-logo">VILLA</a>
          <div className="menu-items">
            <ul className="navbar-menu">
              <li><a href="#" className="navbar-item">Home</a></li>
              <li><a href="#" className="navbar-item">Properties</a></li>
              <li><a href="#" className="navbar-item">Property Details</a></li>
              <li><a href="#" className="navbar-item">Contact Us</a></li>
            </ul>
            <a href="#" className="navbar-button">
              <span className="button-icon">
                <i className="fas fa-calendar-alt"></i> {/* You can replace this with your icon */}
              </span>
              Schedule a visit
            </a>
          </div>
          <button className='bars' onClick={showMenu}> <i className='fas fa-bars'></i> </button>
        </nav>
        <div className="nav-bar-menu">
          <ul>
            <li><a href="#" className="navbar-item">Home</a></li>
            <li><a href="#" className="navbar-item">Properties</a></li>
            <li><a href="#" className="navbar-item">Property Details</a></li>
            <li><a href="#" className="navbar-item">Contact Us</a></li>
            <li style={{paddingLeft:"15px"}}><i class="fa-solid fa-envelope"></i> info@company.com</li>
            <li style={{paddingLeft:"15px"}}><i class="fa-solid fa-map"></i> Sunny Isles Beach, FL 33160</li>
            <li>
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar