import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.webp" alt="Fern's Maid Service Logo" />
        </Link>
        
        <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
          <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
        </nav>
        
        <div className="header-contact">
          <button data-scroll-to="quote-form" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', marginRight: '0.5rem' }}>
            Get a Quote
          </button>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
