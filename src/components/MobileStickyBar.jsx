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
    </div>
  );
}
