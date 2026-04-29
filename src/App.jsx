import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = window.location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Component to handle Typebot script
const TypebotWrapper = () => {
  useEffect(() => {
    const scriptId = 'typebot-script';
    if (!document.getElementById(scriptId)) {
      const typebotInitScript = document.createElement("script");
      typebotInitScript.id = scriptId;
      typebotInitScript.type = "module";
      typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'
      
      window.Typebot = Typebot;

      Typebot.initBubble({
        typebot: "clean-service",
        apiHost: "https://typebotapi.zapgestao.app.br",
        theme: {
          button: { backgroundColor: "#598E71" },
          chatWindow: { backgroundColor: "#338b8a" }
        }
      });
      
      // Inject pulse effect directly into the shadow DOM
      const injectPulse = () => {
        const bubble = document.querySelector('typebot-bubble') || document.querySelector('typebot-standard');
        if (bubble && bubble.shadowRoot) {
          if (!bubble.shadowRoot.querySelector('#tb-pulse-style')) {
            const style = document.createElement('style');
            style.id = 'tb-pulse-style';
            style.innerHTML = \`
              @keyframes tbPulse {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(89, 142, 113, 0.7); }
                70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(89, 142, 113, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(89, 142, 113, 0); }
              }
              button[part="button"] {
                animation: tbPulse 2s infinite;
                overflow: visible !important;
              }
              button[part="button"]::after {
                content: '';
                position: absolute;
                top: 0px;
                right: 0px;
                width: 14px;
                height: 14px;
                background-color: #ef4444;
                border-radius: 50%;
                border: 2px solid white;
                z-index: 100;
              }
              /* Fallback if part="button" is not used */
              div[class*="bubble-button-container"] button,
              .typebot-button {
                animation: tbPulse 2s infinite;
                overflow: visible !important;
              }
              div[class*="bubble-button-container"] button::after,
              .typebot-button::after {
                content: '';
                position: absolute;
                top: 0px;
                right: 0px;
                width: 14px;
                height: 14px;
                background-color: #ef4444;
                border-radius: 50%;
                border: 2px solid white;
                z-index: 100;
              }
            \`;
            bubble.shadowRoot.appendChild(style);
          }
        } else {
          setTimeout(injectPulse, 500);
        }
      };
      setTimeout(injectPulse, 1000);
      `;
      document.body.append(typebotInitScript);
    }
  }, []);
  
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TypebotWrapper />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
