import React from 'react';
import './Testimonials.css';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Nashville, TN",
      text: "Fern's Maid Service has been a lifesaver. With two kids and a full-time job, keeping the house clean was impossible. Now, I come home to a spotless house every other Friday. Highly recommend!",
      rating: 5
    },
    {
      id: 2,
      name: "James L.",
      location: "Brentwood, TN",
      text: "The attention to detail is incredible. They cleaned places I didn't even know were dirty. The deep clean was worth every penny.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily R.",
      location: "Franklin, TN",
      text: "I love that they use eco-friendly products. It's safe for my dog and the house smells amazingly fresh, not like harsh chemicals. The team is always so friendly.",
      rating: 5
    }
  ];

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Don't just take our word for it.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
