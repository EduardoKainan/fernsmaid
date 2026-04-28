import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    '/reviews/1pronto.webp',
    '/reviews/2pronto.webp',
    '/reviews/3pronto.webp',
    '/reviews/4pronto.webp',
    '/reviews/5pronto.webp',
    '/reviews/6pronto.webp'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const maxIndex = 2; // Both desktop (6-4=2) and mobile (3-1=2) have 3 total states

  useEffect(() => {
    if (selectedImage) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [selectedImage]);

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real feedback from real clients.</p>
        </div>
        
        <div className="testimonials-carousel" style={{ '--current-index': currentIndex }}>
          <div className="carousel-inner">
            {reviews.map((review, index) => (
              <div key={index} className="carousel-item">
                <div 
                  className="testimonial-image-card clickable"
                  onClick={() => setSelectedImage(review)}
                >
                  <img src={review} alt={`Review ${index + 1}`} className="testimonial-image" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-indicators">
            {[0, 1, 2].map((index) => (
              <button 
                key={index} 
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
            <img src={selectedImage} alt="Enlarged review" className="lightbox-image" loading="lazy" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
