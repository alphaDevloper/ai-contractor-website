import React from 'react';
import { Gift, Percent, ShieldCheck, ChevronRight } from 'lucide-react';

export default function SpecialOffers({ onOpenModal }) {
  return (
    <section className="section-padding offers-clean-section" id="special-offers">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow-red">
            SPECIAL OFFERS
          </div>
          <h2 className="section-title">
            FREE INSPECTIONS, ALWAYS
          </h2>
          <p className="section-subtitle">
            We never charge to inspect your roof, run AI photo damage scans, or provide an itemized flat-rate estimate. Period.
          </p>
        </div>

        {/* Center Feature Box matching reference */}
        <div className="center-offer-card">
          <div className="center-offer-icon-box">
            <Gift size={32} />
          </div>

          <h3 className="center-offer-heading">
            MILITARY, FIRST RESPONDERS & 0% FINANCING (UP TO 18 MO)
          </h3>

          <p className="center-offer-body">
            We proudly offer dedicated credits for Canadian military veterans, active service personnel, and Calgary first responders. In addition, all qualifying full roof replacements are eligible for our zero-interest 0% APR financing plans up to 18 months through our Canadian lending partners.
          </p>

          <div className="center-offer-btn-wrap">
            <button 
              type="button" 
              onClick={() => onOpenModal('Special Offers Center CTA')} 
              className="btn-orange"
            >
              <span>CLAIM YOUR OFFER</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>

      
    </section>
  );
}
