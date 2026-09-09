import React from 'react';

export default function Brands() {
  return (
    <section className="brands-section">
      <div className="container brands-container">
        <span className="brands-label">Trusted by Brands I've Helped Shape</span>
        <div className="brands-logos">
          <div className="brand-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"></circle></svg>
            <span>Supa Blox</span>
          </div>
          <div className="brand-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 22 22 22 12 2"></polygon></svg>
            <span>Hype Blox</span>
          </div>
          <div className="brand-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>
            <span>Frame Blox</span>
          </div>
          <div className="brand-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            <span>Ultra Blox</span>
          </div>
        </div>
      </div>
    </section>
  );
}
