import React from 'react';
import './Services.css';
import { Calendar, Sparkles, Home, Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Recurring Cleaning",
      icon: <Calendar size={40} />,
      description: "Weekly, bi-weekly, or monthly cleaning to keep your home consistently fresh and manageable.",
      price: "Starting at $120"
    },
    {
      id: 2,
      title: "Deep Cleaning",
      icon: <Sparkles size={40} />,
      description: "A top-to-bottom refresh reaching the often-overlooked areas. Ideal for seasonal resets.",
      price: "Starting at $250"
    },
    {
      id: 3,
      title: "Move In/Out Cleaning",
      icon: <Home size={40} />,
      description: "Ensure every surface is spotless and ready for what's next. We clean inside cabinets and appliances.",
      price: "Starting at $300"
    },
    {
      id: 4,
      title: "Commercial Cleaning",
      icon: <Building2 size={40} />,
      description: "Professional cleaning for offices and local businesses to maintain a pristine work environment.",
      price: "Custom Quote"
    }
  ];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Cleaning Services</h2>
          <p className="section-subtitle">Tailored cleaning plans to fit your schedule and lifestyle.</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <a href="mailto:fernsmaidservices@outlook.com" className="btn btn-outline">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
