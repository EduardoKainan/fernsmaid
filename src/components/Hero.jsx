import React from 'react';
import './Hero.css';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Get Your Free Time Back.<br />
            <span className="hero-highlight">We'll Handle the Cleaning.</span>
          </h1>
          <p className="hero-subtitle">
            Experience the highest standard of house cleaning in Nashville. 
            Trusted, reliable, and tailored to your lifestyle. 
            Come home to peace of mind with Fern's Maid Service.
          </p>
          <div className="hero-cta">
            <button 
              onClick={(e) => { e.preventDefault(); window.Typebot?.open(); }} 
              className="btn btn-primary btn-large"
            >
              Get a Free Quote
            </button>
            <a href="tel:+16153002559" className="btn btn-outline btn-large">
              Call (615) 300-2559
            </a>
          </div>
          
          <div className="hero-social-proof">
            <div className="sp-avatars">
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
              <span className="sp-score">4.7/5</span>
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
        
        <div className="hero-image-wrapper">
          <img src="/hero_cleaner_team.png" alt="Professional Cleaning Team" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
