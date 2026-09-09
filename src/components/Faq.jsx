import React, { useState } from 'react';

const faqData = [
  {
    question: 'How long does a typical design sprint take?',
    answer: 'Our signature design sprint takes exactly 2 weeks from initial kickoff to final presentation. For complete multi-page web applications or custom design systems, projects typically range from 4 to 6 weeks.',
  },
  {
    question: 'What exact deliverables will I receive?',
    answer: 'You receive production-ready Figma design files, complete component UI kits, design system tokens, interactive prototypes, and fully functional front-end code (HTML/CSS/JS or Vite/React).',
  },
  {
    question: 'Do you offer ongoing design and development support?',
    answer: 'Yes! After launching your project, we offer flexible monthly retainer plans and design subscription passes for continuous feature updates, design iteration, and ongoing performance optimizations.',
  },
  {
    question: 'How do we get started on a project?',
    answer: 'Simply submit your details in the contact form or reach out directly. We will schedule a 30-minute alignment call to review your goals, scope, and target launch timeline.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        
        <div className="faq-grid">
          <div className="faq-left">
            <div className="section-badge">
              <span className="badge-dot"></span> FREQUENTLY ASKED
            </div>
            <h2 className="section-title">Got Questions?<br />We Have Answers.</h2>
            <p className="faq-subtitle">Everything you need to know about our design process, timelines, and deliverables.</p>
          </div>

          <div className="faq-right">
            <div className="faq-accordion">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div className="faq-item" key={index} data-open={isOpen}>
                    <div className="faq-question" onClick={() => toggleItem(index)}>
                      <span>{item.question}</span>
                      <span className="faq-icon" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
                    </div>
                    {isOpen && <p className="faq-answer">{item.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
