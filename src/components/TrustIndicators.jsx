import React from 'react';
import './TrustIndicators.css';
import { ShieldCheck, Sparkles, Leaf, Clock } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Trusted & Screened",
      description: "Our cleaners undergo strict background checks and training."
    },
    {
      icon: <Sparkles size={32} />,
      title: "The Fern's Standard",
      description: "A meticulous 40-point checklist for every clean."
    },
    {
      icon: <Leaf size={32} />,
      title: "Eco-Friendly Options",
      description: "Safe products for your family, pets, and the planet."
    },
    {
      icon: <Clock size={32} />,
      title: "Always on Time",
      description: "Reliable scheduling that respects your busy life."
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          {indicators.map((item, index) => (
            <div key={index} className="trust-card">
              <div className="trust-icon">{item.icon}</div>
              <h3 className="trust-title">{item.title}</h3>
              <p className="trust-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
