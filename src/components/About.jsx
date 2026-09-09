import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <span className="section-tag">Behind the Designs</span>
        
        <div className="about-grid">
          {/* Left Main Heading */}
          <div className="about-left">
            <h2 className="section-title">Shaping<br />Experiences That<br />Make Life Simpler</h2>
          </div>

          {/* Right Content & CTA */}
          <div className="about-right">
            <p className="about-desc">I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.</p>
            <span className="about-subdesc">Let's Build Something Meaningful Together</span>
            <a href="#contact" className="btn-orange-pill">
              Get in touch
              <span className="arrow-badge orange-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
