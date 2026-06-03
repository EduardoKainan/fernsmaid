import React from 'react';
import './Services.css';
import { Calendar, Sparkles, Home, Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Recurring Cleaning",
      price: { prefix: "From", amount: "$129", suffix: "/visit" },
      icon: <Calendar size={40} />,
      description: "Weekly, bi-weekly, or monthly cleaning to keep your home consistently fresh and manageable."
    },
    {
      id: 2,
      title: "Deep Cleaning",
      price: { prefix: "From", amount: "$249", suffix: "" },
      icon: <Sparkles size={40} />,
      description: "A top-to-bottom refresh reaching the often-overlooked areas. Ideal for seasonal resets."
    },
    {
      id: 3,
      title: "Move In/Out Cleaning",
      price: { prefix: "From", amount: "$299", suffix: "" },
      icon: <Home size={40} />,
      description: "Ensure every surface is spotless and ready for what's next. We clean inside cabinets and appliances."
    },
    {
      id: 4,
      title: "Commercial Cleaning",
      price: { prefix: "", amount: "Contact for pricing", suffix: "", isContact: true },
      icon: <Building2 size={40} />,
      description: "Professional cleaning for offices and local businesses to maintain a pristine work environment."
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
              
              <div className="service-price-block">
                <div className={`service-price ${service.price.isContact ? 'contact-price' : ''}`}>
                  {service.price.prefix && <span className="price-prefix">{service.price.prefix}</span>}
                  <span className="price-amount">{service.price.amount}</span>
                  {service.price.suffix && <span className="price-suffix">{service.price.suffix}</span>}
                </div>
                {!service.price.isContact && (
                  <p className="price-disclaimer">No hidden fees. Upfront pricing.</p>
                )}
              </div>

              <p className="service-desc">{service.description}</p>
              <div className="service-footer">
                <button 
                  data-scroll-to="quote-form"
                  className="btn btn-outline"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
