import React from 'react';

const projects = [
  { img: '/assets/card_jacket.jpg', alt: 'Apparel Packaging Design' },
  { img: '/assets/card_headphones.jpg', alt: 'Audio Product Design' },
  { img: '/assets/card_bottle.jpg', alt: 'Luxury Packaging Design' },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="cards-grid">
          {projects.map((proj, idx) => (
            <div className="showcase-card" key={idx}>
              <img src={proj.img} alt={proj.alt} className="card-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
