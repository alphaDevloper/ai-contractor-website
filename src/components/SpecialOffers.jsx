import React from 'react';
import { Gift, Percent, ShieldCheck, ChevronRight } from 'lucide-react';
import { specialOffersContent } from '../data/homepageData';

export default function SpecialOffers({ onOpenModal }) {
  const { eyebrow, heading, subtitle, offerCard } = specialOffersContent;
  return (
    <section className="section-padding offers-clean-section" id="special-offers">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow-red">
            {eyebrow}
          </div>
          <h2 className="section-title">
            {heading}
          </h2>
          <p className="section-subtitle">
            {subtitle}
          </p>
        </div>

        {/* Center Feature Box matching reference */}
        <div className="center-offer-card">
          <div className="center-offer-icon-box">
            <Gift size={32} />
          </div>

          <h3 className="center-offer-heading">
            {offerCard.heading}
          </h3>

          <p className="center-offer-body">
            {offerCard.body}
          </p>

          <div className="center-offer-btn-wrap">
            <button 
              type="button" 
              onClick={() => onOpenModal('Special Offers Center CTA')} 
              className="btn-orange"
            >
              <span>{offerCard.ctaLabel}</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>

      
    </section>
  );
}
