import React, { useState, useEffect, useCallback } from 'react';
import './Difference.css';

const carouselImages = [
  { src: '/before-after-bathroom.webp', alt: 'Bathroom before and after deep cleaning' },
  { src: '/before-after-kitchen.webp', alt: 'Kitchen before and after professional cleaning' },
  { src: '/before-after-bedroom.webp', alt: 'Bedroom before and after cleaning' },
  { src: '/clean-living-room.webp', alt: 'Pristine luxury living room' },
  { src: '/team.webp', alt: 'Our professional cleaning team' },
];

const Difference = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const differences = [
    {
      title: "Consistent",
      description: "Enjoy the confidence of seeing the same dedicated two-person team for each weekly or biweekly visit—ensuring seamless service, built-in trust, and exceptional efficiency."
    },
    {
      title: "Customized",
      description: "Every home is unique. We customize our services to match your specific needs, preferences, and lifestyle for a truly personalized clean."
    },
    {
      title: "Communication",
      description: "Stay informed with appointment reminders and real-time arrival updates. Reach us anytime via text, phone, or email—your messages are answered promptly by a real person, every day."
    },
    {
      title: "Transparent",
      description: "Upfront flat-rate pricing with no hidden fees. Prefer flexibility? Hourly options are available to suit your needs and schedule."
    },
    {
      title: "Satisfaction",
      description: "We stand behind our work. If you're not completely satisfied, we'll promptly make it right—no questions asked."
    },
    {
      title: "Professional",
      description: "Our experienced cleaning professionals are dedicated to delivering respectful, meticulous service with the highest standards of professionalism and excellence."
    }
  ];

  return (
    <section className="difference-section">
      <div className="container">
        <h2 className="section-title text-center">THE DIFFERENCE YOU DESERVE</h2>
        <div 
          className="difference-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {carouselImages.map((img, index) => (
            <div 
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={img.src} alt={img.alt} className="carousel-img" loading="lazy" />
            </div>
          ))}
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="difference-grid">
          {differences.map((diff, index) => (
            <div key={index} className="difference-card">
              <h4 className="difference-card-title">{diff.title}</h4>
              <p className="difference-card-text">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;
