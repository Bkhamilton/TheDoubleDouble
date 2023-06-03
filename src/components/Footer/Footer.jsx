import * as React from 'react';
import { Link } from 'gatsby';
import './Footer.css';
import logo from '../../images/Double Double Logo.jpg';

export default function Footer() {
    return (
        <div className="footer">
          <ul className="footer-links">
            <li className='footer-item'>
              <Link to="/" className="footer-link"><span className='footer-link-text'>Home</span></Link>
            </li>
            <li className='footer-item'>
              <Link to="/draft-guide" className="footer-link"><span className='footer-link-text'>Draft Guide</span></Link>
            </li>
            <li className='footer-item'>
              <Link to="/blog" className="footer-link"><span className='footer-link-text'>Blog</span></Link>
            </li>
            <li className='footer-item'>
              <Link to="/contact-us" className="footer-link"><span className='footer-link-text'>Contact Us</span></Link>
            </li>
          </ul>
          <div className="footer-info">
            <img src={logo} alt="logo" className="footer-logo" />
            <p className="footer-message"><span className='footer-design-text'>Designed by Ben Hamilton</span></p>
          </div>
        </div>
      );
};
