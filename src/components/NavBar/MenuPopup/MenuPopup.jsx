import React from 'react';
import { Link } from 'gatsby';
import './MenuPopup.css';

export default function MenuPopup({onClick, active}) {
  return (
    <div className={`menu-popup ${active ? 'active' : '' }`}>
      <button className="close-button" onClick={onClick}>
        <span className="close-icon">X</span>
      </button>
      <ul className="menu-popup-links">
        <li>
          <Link to="/" className="menu-popup-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/draft-guide" className="menu-popup-link">
            Draft Guide
          </Link>
        </li>
        <li>
          <Link to="/blog" className="menu-popup-link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="menu-popup-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};