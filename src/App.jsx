import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import QuoteForm from './components/QuoteForm';
import { Sparkles } from 'lucide-react';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

function App() {
  useEffect(() => {
    const handleScrollClick = (e) => {
      const target = e.target.closest('[data-scroll-to]');
      if (target) {
        e.preventDefault();
        const smsBody = encodeURIComponent("Hi! I found you through the website and would like to request a free quote.");
        window.location.href = `sms:+16153002559?body=${smsBody}`;
      }
    };
    document.addEventListener('click', handleScrollClick);
    return () => document.removeEventListener('click', handleScrollClick);
  }, []);

  const smsLink = `sms:+16153002559?body=${encodeURIComponent("Hi! I found you through the website and would like to request a free quote.")}`;

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Google Ads Sitelink Landing Pages */}
            <Route path="/free-quote" element={<Home pageTitle="Get a Free Quote in 60s | Fern's Maid Service" heroProps={{ title: "Get Your Free Quote ", highlight: "in 60 Seconds" }} />} />
            <Route path="/deep-cleaning" element={<Home pageTitle="Deep Cleaning Services | Fern's Maid Service" heroProps={{ title: "Transform Your Home With ", highlight: "Deep Cleaning" }} />} />
            <Route path="/move-in-out" element={<Home pageTitle="Move In/Out Cleaning | Fern's Maid Service" heroProps={{ title: "Stress-Free ", highlight: "Move In/Out Cleaning", subtitle: "Focus on your move while we handle the mess. Ensure you get your deposit back with our thorough cleaning." }} />} />
            <Route path="/top-rated-maids" element={<Home pageTitle="Top-Rated Maids in Nashville | Fern's Maid Service" heroProps={{ title: "Hire Nashville's ", highlight: "Top-Rated Maids", subtitle: "Trusted, background-checked, and reliable professionals dedicated to making your home spotless." }} />} />
            <Route path="/guarantee" element={<Home pageTitle="100% Satisfaction Guarantee | Fern's Maid Service" heroProps={{ title: "Backed By Our ", highlight: "100% Satisfaction Guarantee", subtitle: "We stand behind our work. If you're not completely satisfied, we'll re-clean for free." }} />} />

            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Form at the end of the site */}
        <div id="contact-form-section" style={{ backgroundColor: 'var(--background-light)', padding: '60px 0' }}>
          <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
            <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px', backgroundColor: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Get Your Free Quote</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Fill out the form and we'll get back to you within 24 hours with a personalized estimate.</p>
              <QuoteForm />
            </div>
          </div>
        </div>

        <Footer />
        
        {/* Floating Action Button */}
        <a 
          href={smsLink}
          className="floating-action-btn" 
          aria-label="Get a Free Quote"
          style={{ textDecoration: 'none' }}
        >
          <Sparkles size={24} />
          <span>Get a Quote</span>
        </a>
      </div>
    </Router>
  );
}

export default App;
