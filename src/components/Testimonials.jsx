import React from 'react';

const testimonials = [
  {
    stars: '★★★★★',
    text: '"Working with Folioblox transformed our product strategy completely. The two-week design sprint brought clarity to our SaaS concept and elevated our visual identity beyond expectations."',
    avatar: 'SB',
    name: 'Alex Rivera',
    role: 'Founder & CEO, Supa Blox',
  },
  {
    stars: '★★★★★',
    text: '"The level of art direction and attention to detail was incredible. They delivered a world-class interface system that boosted our user conversion rate by 42% in the first month."',
    avatar: 'HB',
    name: 'Elena Rostova',
    role: 'Head of Product, Hype Blox',
  },
  {
    stars: '★★★★★',
    text: '"Rare combination of strategic thinking and flawless visual execution. The interactive smooth animations and glassmorphism design gave our brand the premium feel we needed."',
    avatar: 'UB',
    name: 'Marcus Vance',
    role: 'Design Director, Ultra Blox',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        
        <div className="section-badge">
          <span className="badge-dot"></span> CLIENT REVIEWS
        </div>
        <h2 className="testimonials-title">What Founders & Brands Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">{item.stars}</div>
              <p className="testimonial-text">{item.text}</p>
              <div className="author-info">
                <div className="author-avatar">{item.avatar}</div>
                <div>
                  <strong className="author-name">{item.name}</strong>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
