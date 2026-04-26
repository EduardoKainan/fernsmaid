import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <img src="/logo.png" alt="Fern's Maid Service" className="footer-logo" />
            <p className="footer-desc">
              Providing top-rated house cleaning services. We give you back your free time so you can focus on what matters most.
            </p>
            <div className="social-links">
              {/* Add social links here when available */}
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Recurring Cleaning</Link></li>
              <li><Link to="/services">Deep Cleaning</Link></li>
              <li><Link to="/services">Move In/Out Cleaning</Link></li>
              <li><Link to="/services">Commercial Cleaning</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Areas Served</h4>
            <ul className="footer-links">
              <li>Nashville</li>
              <li>Brentwood</li>
              <li>Franklin</li>
              <li>Murfreesboro</li>
              <li>Spring Hill</li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <a href="tel:+16153002559">(615) 300-2559</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:fernsmaidservices@outlook.com">fernsmaidservices@outlook.com</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Serving the Greater Nashville Area</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fern's Maid Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
