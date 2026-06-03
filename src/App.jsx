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
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScrollClick = (e) => {
      const target = e.target.closest('[data-scroll-to]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('data-scroll-to');
        if (window.innerWidth <= 768) {
          setIsQuoteModalOpen(true);
        } else {
          // If on home page, scroll
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            // Not on home, navigate to home with hash
            window.location.href = '/#' + id;
          }
        }
      }
    };
    document.addEventListener('click', handleScrollClick);
    return () => document.removeEventListener('click', handleScrollClick);
  }, []);

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
        <Footer />
        
        {/* Floating Action Button */}
        <button 
          className="floating-action-btn" 
          onClick={() => setIsQuoteModalOpen(true)}
          aria-label="Get a Free Quote"
        >
          <Sparkles size={24} />
          <span>Get a Quote</span>
        </button>

        {/* Global Quote Modal */}
        {isQuoteModalOpen && (
          <div className="quote-modal-overlay" onClick={(e) => {
            if (e.target.className === 'quote-modal-overlay') setIsQuoteModalOpen(false);
          }}>
            <div className="quote-modal-content">
              <button className="quote-modal-close" onClick={() => setIsQuoteModalOpen(false)}>&times;</button>
              <QuoteForm />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
