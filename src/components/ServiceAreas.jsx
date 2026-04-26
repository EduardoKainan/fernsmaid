import React from 'react';
import './ServiceAreas.css';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    "Nashville", "Brentwood", "Franklin", "Hendersonville", 
    "Gallatin", "White House", "Cottowntown", "Goodlettsville", 
    "Madison", "Old Hickory", "Lebanon", "Mount Juliet", "Springfield"
  ];

  return (
    <section className="section service-areas-section">
      <div className="container">
        <div className="areas-container">
          <div className="areas-header">
            <MapPin size={32} className="areas-icon" />
            <h2 className="areas-title">Proudly Serving Middle Tennessee</h2>
            <p className="areas-subtitle">We bring our top-rated cleaning services directly to your neighborhood.</p>
          </div>
          <div className="cities-grid">
            {cities.map((city, index) => (
              <div key={index} className="city-pill">
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
