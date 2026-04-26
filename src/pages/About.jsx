import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
        <h1 className="section-title text-center" style={{ marginBottom: '40px' }}>About Fern's Maid Service</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
          <p style={{ marginBottom: '20px' }}>
            At Fern's Maid Service, we believe that your home should be your sanctuary—a place to relax, recharge, and spend time with the people you love. That's why we're dedicated to providing the highest standard of house cleaning services in Middle Tennessee.
          </p>
          <p style={{ marginBottom: '20px' }}>
            We understand that inviting someone into your home requires trust. Our team is carefully selected, fully vetted, and thoroughly trained to deliver not just a clean home, but peace of mind.
          </p>
          <h2 style={{ color: 'var(--primary-color)', marginTop: '40px', marginBottom: '20px' }}>Our Mission</h2>
          <p style={{ marginBottom: '20px' }}>
            To spread joy and peace through every home we touch, giving our clients the gift of time. We take the burden of cleaning off your shoulders so you can focus on what truly matters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
