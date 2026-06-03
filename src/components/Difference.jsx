import React from 'react';
import './Difference.css';

const Difference = () => {
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
        <div className="difference-before-after">
          <img src="/before-after-bathroom.webp" alt="Bathroom before and after deep cleaning" className="difference-ba-img" loading="lazy" />
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
