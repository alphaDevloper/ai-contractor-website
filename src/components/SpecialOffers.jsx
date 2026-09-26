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

      <style>{`
        .offers-clean-section {
          background-color: #FFFFFF;
        }
        .center-offer-card {
          max-width: 820px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 40px 48px;
          text-align: center;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .center-offer-icon-box {
          width: 60px;
          height: 60px;
          background: var(--color-navy);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-xs);
          margin-bottom: 18px;
        }
        .center-offer-heading {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          color: var(--color-navy);
          margin-bottom: 14px;
          line-height: 1.1;
        }
        .center-offer-body {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          max-width: 680px;
          margin-bottom: 24px;
        }
        .center-offer-btn-wrap {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .center-offer-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
}
