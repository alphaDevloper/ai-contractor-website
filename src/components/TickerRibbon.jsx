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
    </div>
  );
}
