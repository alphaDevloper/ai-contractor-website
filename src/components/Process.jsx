import React from 'react';
import { ChevronRight } from 'lucide-react';
import Roof from "../assets/after_roof.jpg";
import { processContent } from '../data/homepageData';

export default function Process({ onOpenModal }) {
  const { eyebrow, heading, intro, photoBadge, photoAlt, ctaLabel, steps } = processContent;

  return (
    <section className="section-padding process-section" id="process">
      <div className="container">
        
        <div className="process-two-col-grid">
          
          {/* Left Column: Large In-Progress/Completed Roof Photo */}
          <div className="process-photo-col">
            <div className="process-img-frame">
              <img 
                src={Roof} 
                alt={photoAlt} 
                className="process-photo-img"
              />
              <div className="process-photo-badge">
                <span>{photoBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Heading + 4 Step Blocks + Orange CTA */}
          <div className="process-content-col">
            <div className="eyebrow-red">
              {eyebrow}
            </div>

            <h2 className="process-heading">
              {heading}
            </h2>

            <p className="process-intro">
              {intro}
            </p>

            {/* 4 Step Blocks */}
            <div className="process-steps-list">
              {steps.map((s, idx) => (
                <div key={idx} className="process-step-block">
                  <div className="process-step-num-box">
                    <span>{s.num}</span>
                  </div>
                  <div className="process-step-info">
                    <h3 className="process-step-title">{s.title}</h3>
                    <p className="process-step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Orange Action Button */}
            <div className="process-btn-row">
              <button 
                type="button" 
                onClick={() => onOpenModal('Process CTA')} 
                className="btn-orange"
              >
                <span>{ctaLabel}</span>
                <ChevronRight size={20} />
              </button>
            </div>

          </div>

        </div>

      </div>

      
    </section>
  );
}
