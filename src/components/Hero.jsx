import React from 'react';

const services = [
  { num: '#01', name: 'Brand Strategy' },
  { num: '#02', name: 'Brand Identity Design' },
  { num: '#03', name: 'Packaging Design' },
  { num: '#04', name: 'Creative Direction' },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-left">
            <span className="hero-subtitle">Hey, I'm a</span>
            <h1 className="hero-title">Creative<br />Director</h1>
          </div>

          {/* Right Column */}
          <div className="hero-right">
            <h3 className="hero-right-head">Great design should<br />feel invisible.</h3>
            <p className="hero-right-text">From logo to language, I build brands that connect and convert.</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="hero-services-grid">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <span className="service-num">{service.num}</span>
              <span className="service-name">{service.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
