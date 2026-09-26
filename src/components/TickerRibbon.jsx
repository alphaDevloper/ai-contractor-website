import React from 'react';
import { Truck } from 'lucide-react';

export default function TickerRibbon({ dark = false }) {
  const items = [
    "ROOF REPLACEMENT",
    "HAIL & STORM RESTORATION",
    "10-YEAR WORKMANSHIP WARRANTY",
    "100% LOCAL IN-HOUSE CREW",
    "4.8★ ON GOOGLE (312 REVIEWS)",
    "GAF MASTER ELITE® CONTRACTOR",
    "COR™ SAFETY CERTIFIED ALBERTA",
    "TRANSPARENT FLAT-RATE PRICING",
    "EMERGENCY SAME-WEEK TARPING",
    "0% FINANCING UP TO 18 MONTHS"
  ];

  return (
    <div className={`ticker-ribbon ${dark ? 'ticker-dark' : ''}`}>
      <div className="ticker-track">
        {/* Repeating sequence twice for seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="ticker-item">
            <Truck size={16} className="ticker-truck-icon" />
            <span>{text}</span>
            <span className="ticker-dot"></span>
          </div>
        ))}
      </div>

      <style>{`
        .ticker-dark {
          background: #081726 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        .ticker-dark .ticker-item {
          color: #E2E8F0 !important;
        }
        .ticker-dark .ticker-dot {
          background: var(--color-sky) !important;
        }
        .ticker-dark .ticker-truck-icon {
          color: var(--color-sky) !important;
        }
      `}</style>
    </div>
  );
}
