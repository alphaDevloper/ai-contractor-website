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

      <style>{`
        .top-bar {
          background-color: var(--color-navy-deep);
          color: #E2E8F0;
          font-size: 0.8125rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .top-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .storm-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(245, 158, 11, 0.2);
          color: #FBBF24;
          font-weight: 800;
          font-size: 0.725rem;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.05em;
          border: 1px solid rgba(245, 158, 11, 0.35);
        }
        .flash-icon {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .top-bar-msg {
          color: #CBD5E1;
          font-weight: 500;
        }
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .top-bar-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #94A3B8;
        }
        .top-bar-divider {
          width: 1px;
          height: 14px;
          background: rgba(255, 255, 255, 0.2);
        }
        .top-bar-phone {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #FFFFFF;
          transition: color var(--transition-fast);
        }
        .top-bar-phone strong {
          color: var(--color-sky);
        }
        .top-bar-phone:hover {
          color: var(--color-sky);
        }
        @media (max-width: 768px) {
          .top-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
