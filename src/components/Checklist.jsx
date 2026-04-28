import React, { useState } from 'react';
import './Checklist.css';
import { CheckCircle2 } from 'lucide-react';

const Checklist = () => {
  const [activeTab, setActiveTab] = useState('kitchen');

  const checklists = {
    kitchen: [
      "Clean and sanitize countertops and sinks",
      "Clean exterior of all appliances",
      "Clean inside and outside of microwave",
      "Wipe down cabinet faces",
      "Sweep and mop floors",
      "Empty trash and replace liners"
    ],
    bathroom: [
      "Clean and sanitize toilets, showers, and tubs",
      "Wipe down mirrors and glass surfaces",
      "Clean and sanitize sinks and counters",
      "Dust light fixtures and vents",
      "Sweep and mop floors",
      "Empty trash"
    ],
    living: [
      "Dust all accessible surfaces",
      "Wipe down mirrors and glass fixtures",
      "Vacuum all carpets and rugs",
      "Sweep and mop hard floors",
      "Dust ceiling fans (within reach)",
      "Remove cobwebs"
    ]
  };

  return (
    <section className="section checklist-section">
      <div className="container">
        <div className="checklist-container">
          <div className="checklist-content">
            <h2 className="section-title" style={{textAlign: 'left'}}>The Fern's Standard</h2>
            <p className="checklist-subtitle">
              We don't just clean; we care for your home. Our comprehensive checklist ensures no detail is overlooked, giving you a consistently flawless result every single time.
            </p>
            
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'kitchen' ? 'active' : ''}`}
                onClick={() => setActiveTab('kitchen')}
              >
                Kitchen
              </button>
              <button 
                className={`tab-btn ${activeTab === 'bathroom' ? 'active' : ''}`}
                onClick={() => setActiveTab('bathroom')}
              >
                Bathrooms
              </button>
              <button 
                className={`tab-btn ${activeTab === 'living' ? 'active' : ''}`}
                onClick={() => setActiveTab('living')}
              >
                Living Areas
              </button>
            </div>
            
            <ul className="checklist-items">
              {checklists[activeTab].map((item, index) => (
                <li key={index} className="checklist-item">
                  <CheckCircle2 className="check-icon" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="checklist-image">
            <img src="/checklist_cleaner_kitchen.webp" alt="Cleaner organizing kitchen" className="checklist-img-real" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
