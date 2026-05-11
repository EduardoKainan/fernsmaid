import React, { useState } from 'react';
import './Checklist.css';
import { CheckCircle2 } from 'lucide-react';

const Checklist = () => {
  const [activeTab, setActiveTab] = useState('kitchen');

  const checklists = {
    living: [
      "Dust all surfaces, including furniture, shelves and decor",
      "Wipe down dinning room table",
      "Dust light fixtures and ceiling fans",
      "Straight up blankets and pillows",
      "Dust and wipe down baseboards",
      "Wash interior of windows",
      "Vacuuming and mopping"
    ],
    kitchen: [
      "Clean and sanitize all surfaces where food is prepared, including countertops and sinks",
      "Wipe down exterior of appliances",
      "Dust light fixtures and ceiling fans",
      "Wipe down back splash",
      "Wipe down interior of microwave",
      "Dust and wipe down baseboards",
      "Wipe down exterior of cabinets",
      "Wash interior of windows",
      "Vacuuming and mopping"
    ],
    bathroom: [
      "Clean and sanitize toilets, sinks, and showers/bathtubs",
      "Cleaning mirrors",
      "Dust and wipe down baseboards",
      "Wipe down exterior of cabinets",
      "Wash interior of windows",
      "Vacuuming and mopping"
    ],
    bedroom: [
      "Dust all surfaces, including furniture, shelves and decor",
      "Wash interior of windows",
      "Dust and wipe down baseboards",
      "Dust light fixtures and ceiling fans",
      "Vacuuming and mopping"
    ],
    general: [
      "Dust all surfaces, including furniture, shelves and decor",
      "Dust and wipe down baseboards",
      "Dust light fixtures and ceiling fans",
      "Wash interior of windows",
      "Vacuuming and mopping"
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
            
            <div className="tabs" style={{ flexWrap: 'wrap' }}>
              <button 
                className={`tab-btn ${activeTab === 'living' ? 'active' : ''}`}
                onClick={() => setActiveTab('living')}
              >
                Living/Dinning
              </button>
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
                className={`tab-btn ${activeTab === 'bedroom' ? 'active' : ''}`}
                onClick={() => setActiveTab('bedroom')}
              >
                Bedroom
              </button>
              <button 
                className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => setActiveTab('general')}
              >
                General Areas
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
