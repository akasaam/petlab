import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import About from './components/About';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Booking from './components/Booking';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { initializeAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Process />
      <About />
      <Pricing />
      <FAQ />
      <Booking />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;