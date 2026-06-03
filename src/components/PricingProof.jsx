import React from 'react';
import './PricingProof.css';

const PricingProof = () => {
  return (
    <section className="pricing-proof-section">
      <div className="container">
        <div className="pricing-proof-content">
          <h2 className="pricing-proof-title">See What You'll Pay — No Surprises</h2>
          
          <div className="pricing-proof-image">
            <img src="/before-after-bedroom.webp" alt="Bedroom before and after professional cleaning" className="pricing-proof-img" loading="lazy" />
          </div>
          
          <div className="pricing-columns">
            <div className="pricing-column">
              <h3>Standard Clean</h3>
              <div className="pricing-price">$149</div>
              <p>Perfect for apartments & small homes</p>
            </div>
            
            <div className="pricing-column highlight">
              <h3>Deep Clean</h3>
              <div className="pricing-price">$249</div>
              <p>Ideal for seasonal resets & move-ins</p>
            </div>
            
            <div className="pricing-column">
              <h3>Recurring (Weekly)</h3>
              <div className="pricing-price">$129<span>/visit</span></div>
              <p>Best value for busy families</p>
            </div>
          </div>
          
          <div className="pricing-proof-cta">
            <button 
              data-scroll-to="quote-form"
              className="btn btn-primary btn-large"
            >
              Get Your Free Quote
            </button>
          </div>
          
          <p className="pricing-proof-footer">
            Prices may vary based on home size and condition. Final quote provided after assessment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingProof;
