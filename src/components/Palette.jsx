import React from 'react';

const colors = [
  {
    cardClass: 'card-soft-white',
    name: 'Soft White',
    desc: 'Used for text and contrast, keeping the interface clean, readable and balanced.',
    hex: '#FFFFFF',
    rgb: '255 255 255',
  },
  {
    cardClass: 'card-dark-accent',
    name: 'Dark Accent',
    desc: 'Used for cards, panels and UI surfaces to support the layered glassmorphism effect.',
    hex: '#1A1C20',
    rgb: '26 28 32',
  },
  {
    cardClass: 'card-deep-bg',
    name: 'Deep Background',
    desc: 'Used as the main base color to create depth, focus and a premium SaaS atmosphere.',
    hex: '#0D0E14',
    rgb: '13 14 20',
  },
  {
    cardClass: 'card-electric-accent',
    name: 'Electric Accent',
    desc: 'Used for active states, highlights, key actions and brand identity emphasis.',
    hex: '#F05023',
    rgb: '240 80 35',
  },
];

export default function Palette() {
  return (
    <section id="palette" className="palette-section">
      <div className="container">
        
        <div className="section-badge">
          <span className="badge-dot"></span> COLOR PALETTE
        </div>
        <h2 className="palette-title">
          The palette supports focus, premium feel<br />and the idea of an intelligent AI-powered workspace.
        </h2>

        <div className="palette-showcase">
          <div className="palette-ring">
            <div className="ring-circle"></div>
            <div className="ring-node node-1"></div>
            <div className="ring-node node-2"></div>
            <div className="ring-node node-3"></div>
            <div className="ring-node node-4"></div>
          </div>

          {colors.map((c, i) => (
            <div className={`color-card ${c.cardClass}`} key={i}>
              <div className="card-header">
                <span className="color-name">{c.name}</span>
                <span className="card-close">×</span>
              </div>
              <p className="color-desc">{c.desc}</p>
              <div className="color-meta">
                <div className="meta-row"><span>HEX</span><strong>{c.hex}</strong><span>100%</span></div>
                <div className="meta-row"><span>RGB</span><strong>{c.rgb}</strong><span>100%</span></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
