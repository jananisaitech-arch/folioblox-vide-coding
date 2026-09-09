import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">Folioblox</a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#workflow">Workflow</a>
          <a href="#palette">Palette</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Reviews</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn-get-in-touch">
            Get in touch
            <span className="arrow-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
