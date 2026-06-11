import React from 'react';
import './Hero.css';
import { Star } from 'lucide-react';
import QuoteForm from './QuoteForm';

const Hero = ({ 
  title = "Get Your Free Time Back.", 
  highlight = "We'll Handle the Cleaning.",
  subtitle = "Experience the highest standard of house cleaning in Nashville. Trusted, reliable, and tailored to your lifestyle. Come home to peace of mind with Fern's Maid Service."
}) => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {title}<br />
            <span className="hero-highlight">{highlight}</span>
          </h1>
          <p className="hero-subtitle">
            {subtitle}
          </p>
          <div className="hero-location-badge">
            <span>📍 Serving Nashville &amp; Middle Tennessee</span>
          </div>
          <div className="hero-cta">
            <a 
              href={`sms:+16153002559?body=${encodeURIComponent("Hi! I found you through the website and would like to request a free quote.")}`}
              className="btn btn-primary btn-large"
              style={{ textDecoration: 'none' }}
            >
              Get a Free Quote
            </a>
          </div>
          
          <div className="hero-social-proof">
            <div className="sp-avatars">
              <div className="sp-avatar"><Star size={12} fill="white" color="white" /></div>
              <div className="sp-avatar"><Star size={12} fill="white" color="white" /></div>
              <div className="sp-avatar"><Star size={12} fill="white" color="white" /></div>
              <div className="sp-avatar"><Star size={12} fill="white" color="white" /></div>
              <div className="sp-avatar"><Star size={12} fill="white" color="white" /></div>
            </div>
            <div className="sp-reviews">
              <span className="sp-count">1812</span>
              <span className="sp-text">Customer Reviews</span>
            </div>
            <div className="sp-divider"></div>
            <div className="sp-rating">
              <span className="sp-score">5/5</span>
              <div className="sp-stars">
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
