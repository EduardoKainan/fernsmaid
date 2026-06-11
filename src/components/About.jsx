import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title text-center">About Us</h2>
        <div className="about-grid">
          <div className="about-content">
            <h3 className="about-subtitle">A New Standard</h3>
            <p className="about-text">
              For our weekly and biweekly services, the same trusted two-person team arrives every time—delivering consistent, reliable, and efficient cleaning. Backed by a satisfaction guarantee, over 300 verified reviews, and real-time updates personally provided by a dedicated team member, you can rest assured you're in capable hands.
            </p>
            <div className="about-cta">
              <a href={`sms:+16153002559?body=${encodeURIComponent("Hi! I found you through the website and would like to request a free quote.")}`} className="btn btn-primary" style={{ textDecoration: 'none' }}>
                Meet Your Team
              </a>
            </div>
          </div>
          <div className="about-image">
            <img src="/team.webp" alt="Fern's Maid Service cleaning team" className="about-img" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
