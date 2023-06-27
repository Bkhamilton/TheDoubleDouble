import React, { useState } from 'react';
import { Link } from 'gatsby';
import './NavBar.css';
import '../../constants/typefaces.css';
import logo from '../../images/Double Double Logo.jpg';
import MenuPopup from './MenuPopup/MenuPopup';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className='navbar-menu'>
        <button className="menu-button" onClick={handleMenuToggle} alt="Menu Button">
          <div>
            <span className='menu-icon'></span>
          </div>
        </button>
        {menuOpen && (
        <div className={`menu-popup-wrapper ${menuOpen ? 'menu-active' : 'menu-off'}`}>
          <MenuPopup onClick={handleMenuToggle} active={menuOpen}/>
        </div>
        )}
      </div>
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img className='navbar-logo' src={logo} alt="Double Double Logo"></img>
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
                <p>Home</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/draft-guide" className="nav-link">
                <p>Draft Guide</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
                <p>Blog</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">
                <p>Contact Us</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};