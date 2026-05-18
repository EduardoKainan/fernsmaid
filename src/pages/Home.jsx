import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Difference from '../components/Difference';
import TrustIndicators from '../components/TrustIndicators';
import Services from '../components/Services';
import ServiceAreas from '../components/ServiceAreas';
import Checklist from '../components/Checklist';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = ({ heroProps, pageTitle }) => {
  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle;
    } else {
      document.title = "Fern's Maid Service | Top-Rated House Cleaning in Nashville";
    }
  }, [pageTitle]);

  return (
    <>
      <Hero {...heroProps} />
      <Difference />
      <ServiceAreas />
      <Testimonials />
      <TrustIndicators />
      <Services />
      <Checklist />
      <About />
      <FAQ />
    </>
  );
};

export default Home;
