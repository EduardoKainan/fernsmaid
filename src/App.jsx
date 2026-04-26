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
        previewMessage: {
          message: " Request a Free Quote",
          autoShowDelay: 7000,
          avatarUrl: "https://i.postimg.cc/Dy1FS4fJ/fotoperfil.jpg",
        },
        theme: {
          button: { backgroundColor: "#598E71" },
          chatWindow: { backgroundColor: "#338b8a" },
        },
      });
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
