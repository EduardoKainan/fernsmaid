import React from 'react';
import Services from '../components/Services';
import Checklist from '../components/Checklist';

const ServicesPage = () => {
  return (
    <div className="page-container" style={{ padding: '40px 0' }}>
      <div className="container">
        <h1 className="section-title text-center" style={{ marginBottom: '20px' }}>Our Cleaning Solutions</h1>
        <p className="text-center" style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          From routine maintenance to complete top-to-bottom deep cleans, we have a package that fits your needs.
        </p>
      </div>
      <Services />
      <Checklist />
    </div>
  );
};

export default ServicesPage;
