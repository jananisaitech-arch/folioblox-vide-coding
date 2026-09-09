import React from 'react';
import ScrollCanvas from './components/ScrollCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Workflow from './components/Workflow';
import Palette from './components/Palette';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      {/* Background canvas and preloader */}
      <ScrollCanvas />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Wrapper */}
      <main id="content-wrapper">
        <Hero />
        <Brands />
        <About />
        <Workflow />
        <Palette />
        <Projects />
        <Contact />
        <Testimonials />
        <Faq />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
