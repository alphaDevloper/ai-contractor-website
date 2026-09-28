import React from 'react';
import { Phone, ShieldCheck, Zap, AlertCircle } from 'lucide-react';

export default function TopBar({ onOpenModal }) {
  return (
    <div className="top-bar">
      <div className="container-wide top-bar-inner">
        <div className="top-bar-left">
          <span className="storm-tag">
            <Zap size={14} className="flash-icon" />
            CALGARY STORM ALERT
          </span>
          <span className="top-bar-msg">
            Same-Week Emergency Tarping & Repair Available Across Greater Calgary
          </span>
        </div>
        
        <div className="top-bar-right">
          <div className="top-bar-item hide-mobile">
            <ShieldCheck size={14} />
            <span>COR™ Certified & Alberta Licensed</span>
          </div>
          <div className="top-bar-divider hide-mobile"></div>
          <a href="tel:+1333456789" className="top-bar-phone">
            <Phone size={14} />
            <span>Call Now: <strong>+1 333 456789</strong></span>
          </a>
        </div>
      </div>
    </div>
  );
}
