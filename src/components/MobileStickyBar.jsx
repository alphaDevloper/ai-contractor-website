import React from 'react';
import { Phone, ChevronRight } from 'lucide-react';

export default function MobileStickyBar({ onOpenModal }) {
  return (
    <div className="mobile-sticky-bar">
      <div className="mobile-sticky-inner">
        <a href="tel:+1333456789" className="mobile-sticky-btn mobile-call-btn">
          <Phone size={18} />
          <span>CALL NOW</span>
        </a>
        <button 
          type="button" 
          onClick={() => onOpenModal('Mobile Sticky Bar')} 
          className="mobile-sticky-btn mobile-estimate-btn"
        >
          <span>GET AN ESTIMATE</span>
          <ChevronRight size={18} />
        </button>
      </div>

      <style>{`
        .mobile-sticky-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2000;
          background: rgba(16, 42, 67, 0.98);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding: 10px 14px;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
        }
        .mobile-sticky-inner {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 10px;
          max-width: 500px;
          margin: 0 auto;
        }
        .mobile-sticky-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 10px;
          border-radius: var(--radius-xs);
          font-family: var(--font-heading);
          font-size: 1.15rem;
          text-align: center;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .mobile-call-btn {
          background: #FFFFFF;
          color: var(--color-navy);
          border: 1px solid var(--color-border);
        }
        .mobile-estimate-btn {
          background: var(--color-accent-gradient);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: var(--shadow-orange);
        }
        @media (max-width: 991px) {
          .mobile-sticky-bar {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
