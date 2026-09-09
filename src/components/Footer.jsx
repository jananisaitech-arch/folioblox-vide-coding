import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">FOLIOBLOX</h2>
            <p className="footer-tagline">Creative Direction & Digital Product Studio.<br />Shaping world-class digital experiences.</p>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4>Navigation</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#workflow">Workflow</a>
              <a href="#palette">Color Palette</a>
            </div>
            <div className="footer-col">
              <h4>Work</h4>
              <a href="#projects">Projects</a>
              <a href="#testimonials">Reviews</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Get in Touch</a>
            </div>
            <div className="footer-col">
              <h4>Socials</h4>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X ↗</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble ↗</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance ↗</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Folioblox. All rights reserved. Crafted for visionary brands.</p>
          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
