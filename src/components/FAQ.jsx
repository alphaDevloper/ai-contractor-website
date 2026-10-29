import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Logo from '../assets/logo.png';
import { faqContent } from '../data/homepageData';

export default function FAQ({ onOpenModal }) {
  const [openIdx, setOpenIdx] = useState(0);
  const { eyebrow, heading, faqs } = faqContent;

  return (
    <section className="section-padding faq-reference-section" id="faq">
      <div className="container">
        
        {/* Header with Top Logo Icon */}
        <div className="section-header">
          <div className="faq-top-brand-icon">
            <img 
              src={Logo} 
              alt="AeroDome Roofing" 
              className="faq-brand-logo-img" 
            />
          </div>

          <div className="eyebrow-red">
            {eyebrow}
          </div>

          <h2 className="section-title">
            {heading}
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
