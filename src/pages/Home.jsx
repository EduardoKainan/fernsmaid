import React from 'react';
import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import Services from '../components/Services';
import ServiceAreas from '../components/ServiceAreas';
import Checklist from '../components/Checklist';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <ServiceAreas />
      <TrustIndicators />
      <Services />
      <Checklist />
      <FAQ />
    </>
  );
};

export default Home;
