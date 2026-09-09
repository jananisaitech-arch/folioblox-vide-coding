import React from 'react';

const steps = [
  { stepClass: 'step-1', icon: '⬡', label: 'Research & references', duration: '1 day' },
  { stepClass: 'step-2', icon: '⚡', label: 'Product positioning', duration: '1 day' },
  { stepClass: 'step-3', icon: '◫', label: 'Landing page structure', duration: '1 day' },
  { stepClass: 'step-4', icon: '👁', label: 'Visual direction', duration: '2 days' },
  { stepClass: 'step-5', icon: '✦', label: 'AI concept exploration', duration: '2 days' },
  { stepClass: 'step-6', icon: '🎨', label: 'UI design', duration: '3 days' },
];

export default function Workflow() {
  return (
    <section id="workflow" className="workflow-section">
      <div className="container">
        
        {/* Header Row */}
        <div className="workflow-header">
          <div className="workflow-left">
            <div className="section-badge">
              <span className="badge-dot"></span> WORKFLOW PLAN
            </div>
            <h2 className="workflow-title">
              A focused <em className="italic-text">two-week</em> design sprint<br />from idea to visual concept.
            </h2>
          </div>

          <div className="workflow-right">
            <p className="workflow-desc">
              This concept was developed as a focused two-week design sprint — from product positioning and visual research to landing page structure, interface mockups and final Behance presentation. The process combined AI-assisted exploration with hands-on art direction, layout design and visual refinement.
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-wrapper">
          <div className="guide-lines">
            <div className="guide-line"></div>
            <div className="guide-line"></div>
            <div className="guide-line"></div>
            <div className="guide-line"></div>
            <div className="guide-line"></div>
          </div>

          <div className="timeline-items">
            {steps.map((item, idx) => (
              <div className={`timeline-step ${item.stepClass}`} key={idx}>
                <span className="step-icon">{item.icon}</span>
                <span className="step-label">{item.label}</span>
                <span className="duration-badge">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="workflow-footer-note">
          <span className="note-dot"></span>
          <p>A structured two-week workflow helped turn an AI SaaS idea into a polished landing page concept with a clear narrative, premium visual language and detailed interface presentation.</p>
        </div>

      </div>
    </section>
  );
}
