import React, { useState } from 'react';
import './FAQ.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, you do not need to be home. Most of our clients provide us with a spare key or garage code. We are fully insured and our team members are thoroughly vetted, so your home is always safe in our hands."
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer: "We bring all our own professional-grade cleaning supplies and equipment. However, if you have a specific product you'd prefer us to use, just let us know and leave it out for us."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that life happens. We kindly ask for at least 48 hours notice if you need to cancel or reschedule your cleaning to avoid a cancellation fee."
    },
    {
      question: "Are your cleaners insured?",
      answer: "Yes, Fern's Maid Service is fully bonded and insured. Your home and our employees are completely protected."
    }
  ];

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
