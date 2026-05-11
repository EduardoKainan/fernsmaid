import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title text-center">About Us</h2>
        <div className="about-content">
          <h3 className="about-subtitle">A New Standard</h3>
          <p className="about-text">
            For our weekly and biweekly services, the same trusted two-person team arrives every time—delivering consistent, reliable, and efficient cleaning. Backed by a satisfaction guarantee, over 300 verified reviews, and real-time updates personally provided by a dedicated team member, you can rest assured you're in capable hands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
