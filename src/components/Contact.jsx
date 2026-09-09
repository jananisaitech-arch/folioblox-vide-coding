import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessDuration: '0-1',
    challenge: 'brand',
    marketingSpend: '1-5k',
    revenue: '0-100k',
    paidAds: 'no',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your inquiry has been submitted.`);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Header Row */}
        <div className="contact-header">
          <div className="contact-title-group">
            <h2 className="contact-title">
              <span className="light-text">READY TO</span><br />
              <span className="bold-grow">GROW</span> <span className="thin-text">& SCALE YOUR COMPANY?</span>
            </h2>
          </div>
          
          <div className="contact-badge-card">
            <span className="badge-tag">LET'S TALK</span>
            <p className="badge-text">Unique web layout & brand identity that works.</p>
          </div>
        </div>

        {/* 2-Column Form Grid */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            
            <div className="form-group">
              <label htmlFor="name">YOUR NAME*</label>
              <input
                type="text"
                id="name"
                placeholder="Jane Harrison"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">YOUR NUMBER*</label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 123-4567"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">YOUR EMAIL*</label>
              <input
                type="email"
                id="email"
                placeholder="jane@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="businessDuration">HOW LONG HAVE YOU BEEN IN BUSINESS?</label>
              <div className="select-wrapper">
                <select id="businessDuration" value={formData.businessDuration} onChange={handleChange}>
                  <option value="0-1">0-1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="challenge">WHAT'S YOUR BIGGEST CHALLENGE IN SCALING RIGHT NOW?</label>
              <div className="select-wrapper">
                <select id="challenge" value={formData.challenge} onChange={handleChange}>
                  <option value="brand">Brand Strategy & Identity</option>
                  <option value="leads">Lead Generation & Conversion</option>
                  <option value="design">UI/UX Design & Development</option>
                  <option value="other">Other Scaling Challenges</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="marketingSpend">HOW MUCH DO YOU SPEND ON MARKETING EACH MONTH?</label>
              <div className="select-wrapper">
                <select id="marketingSpend" value={formData.marketingSpend} onChange={handleChange}>
                  <option value="1-5k">$1k - $5k</option>
                  <option value="5-15k">$5k - $15k</option>
                  <option value="15k+">$15k+</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="revenue">WHAT'S YOUR ESTIMATED ANNUAL REVENUE?</label>
              <div className="select-wrapper">
                <select id="revenue" value={formData.revenue} onChange={handleChange}>
                  <option value="0-100k">$0 - $100k</option>
                  <option value="100-500k">$100k - $500k</option>
                  <option value="500k+">$500k+</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="paidAds">ARE YOU RUNNING PAID ADS RIGHT NOW?</label>
              <div className="select-wrapper">
                <select id="paidAds" value={formData.paidAds} onChange={handleChange}>
                  <option value="no">No</option>
                  <option value="meta-google">Yes - Meta / Google</option>
                  <option value="tiktok-other">Yes - TikTok / Other</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
            </div>

          </div>

          <div className="form-submit-row">
            <button type="submit" className="btn-submit-orange">
              SUBMIT INQUIRY
              <span className="arrow-badge orange-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
