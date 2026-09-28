import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function FAQ({ onOpenModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "HOW MUCH DOES A ROOF REPLACEMENT COST IN CALGARY?",
      a: "For most typical Calgary homes (1,800 to 2,500 sq ft), a complete tear-off and replacement with architectural shingles ranges from $6,800 to $13,500. The exact price depends on roof slope/pitch, complexity (dormers, valleys), layers of old shingles to remove, and whether you choose Class 3 or Class 4 impact-resistant shingles. AeroDome guarantees transparent flat-rate pricing — our written quote includes all materials, disposal fees, permits, and cleanups with zero hidden surprises."
    },
    {
      q: "DO YOU PROVIDE 100% FREE ON-SITE INSPECTIONS?",
      a: "Yes, 100% complimentary and with zero obligation. Marcus or one of our senior Calgary estimators will walk your property, inspect your shingles, vents, flashing, and gutter channels, and provide you with an AI-assisted damage report and an itemized written quote. We never practice high-pressure sales."
    },
    {
      q: "DO YOU HIRE SUBCONTRACTORS TO DO THE WORK?",
      a: "No. Absolutely never. Every technician working on your home is a permanent, full-time AeroDome employee certified under Alberta COR™ safety standards and manufacturer installation guidelines. Marcus Delgray personally manages quality control on every project."
    },
    {
      q: "WHAT WARRANTIES PROTECT MY HOME AFTER INSTALLATION?",
      a: "You receive two levels of comprehensive protection: First, AeroDome's own 10-Year Workmanship Warranty that covers any leak, flashing issue, or installation defect directly. Second, as a certified GAF Master Elite® and IKO ShieldPRO® contractor, your installation is eligible for non-prorated manufacturer material warranties of up to 50 years."
    },
    {
      q: "HOW DO YOU ASSIST WITH HAIL DAMAGE INSURANCE CLAIMS?",
      a: "We manage the technical documentation from start to finish. We document every square of damage with chalk markings and our AI photography, provide a standardized Xactimate-compatible scope of work, and will even meet your insurance adjuster on your roof in person to ensure all damaged soft metals, flashing, and shingles are included."
    }
  ];

  return (
    <section className="section-padding faq-reference-section" id="faq">
      <div className="container">
        
        {/* Header with Top Logo Icon */}
        <div className="section-header">
          <div className="faq-top-brand-icon">
            <img 
              src="/aerodome-logo.png" 
              alt="AeroDome Roofing" 
              className="faq-brand-logo-img" 
            />
          </div>

          <div className="eyebrow-red">
            GOT QUESTIONS?
          </div>

          <h2 className="section-title">
            FREQUENTLY ASKED
          </h2>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-box">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-row-item ${isOpen ? 'row-expanded' : ''}`}>
                <button
                  type="button"
                  className="faq-toggle-btn"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-action-symbol">
                    <Plus size={20} className="faq-plus-icon" />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-ans-body">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      
    </section>
  );
}
