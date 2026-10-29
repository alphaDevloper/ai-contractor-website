import React from 'react';
import { Truck } from 'lucide-react';
import { tickerItems } from '../data/homepageData';

export default function TickerRibbon({ dark = false }) {
  const items = tickerItems;

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
