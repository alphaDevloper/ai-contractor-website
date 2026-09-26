import React from 'react';
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  const certs = [
    { name: "GAF MASTER ELITE®", sub: "Top 2% of Roofers in North America", badge: "GAF" },
    { name: "IKO SHIELDPRO®", sub: "Certified Commercial & Residential", badge: "IKO" },
    { name: "COR™ SAFETY CERTIFIED", sub: "Alberta Construction Safety Assoc.", badge: "COR" },
    { name: "JAMES HARDIE®", sub: "Preferred Exterior Siding Installer", badge: "JH" },
    { name: "10-YEAR WARRANTY", sub: "Workmanship Guarantee on All Installs", badge: "10-YR" }
  ];

  return (
    <section className="trust-strip">
      <div className="container-wide">
        <div className="trust-inner">
          {certs.map((c, i) => (
            <div key={i} className="trust-col">
              <div className="trust-badge-icon">
                <span>{c.badge}</span>
              </div>
              <div className="trust-details">
                <span className="trust-name">{c.name}</span>
                <span className="trust-sub">{c.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-strip {
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--color-border);
          padding: 16px 0;
          box-shadow: var(--shadow-sm);
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }
        .trust-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          gap: 8px;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        .trust-col {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 4px 6px;
          flex: 1 1 0;
          min-width: 0;
          max-width: 20%;
          box-sizing: border-box;
        }
        .trust-badge-icon {
          width: 42px;
          height: 42px;
          background: var(--color-navy);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-xs);
          border: 2px solid var(--color-sky);
          flex-shrink: 0;
        }
        .trust-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .trust-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          color: var(--color-navy);
          line-height: 1.1;
          letter-spacing: 0.03em;
        }
        .trust-sub {
          font-size: 0.725rem;
          color: var(--color-text-secondary);
        }

        /* Tablet Screens (e.g. 681px - 1024px) */
        @media (max-width: 1024px) {
          .trust-strip {
            padding: 12px 0;
          }
          .trust-inner {
            gap: 6px;
          }
          .trust-col {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 4px;
            padding: 2px 2px;
          }
          .trust-badge-icon {
            width: 32px;
            height: 32px;
            font-size: 0.82rem;
            border-width: 1.5px;
            border-radius: 4px;
          }
          .trust-details {
            align-items: center;
            text-align: center;
          }
          .trust-name {
            font-size: 0.82rem;
            line-height: 1.05;
          }
          .trust-sub {
            font-size: 0.6rem;
            line-height: 1.15;
          }
        }

        /* Mobile Screens (<= 680px) */
        @media (max-width: 680px) {
          .trust-strip {
            padding: 10px 0;
          }
          .trust-strip .container-wide {
            padding-left: 6px;
            padding-right: 6px;
          }
          .trust-inner {
            gap: 4px;
          }
          .trust-col {
            gap: 4px;
            padding: 2px 1px;
          }
          .trust-badge-icon {
            width: 28px;
            height: 28px;
            font-size: 0.7rem;
            border-width: 1.5px;
            border-radius: 4px;
          }
          .trust-name {
            font-size: 0.66rem;
            line-height: 1.05;
            letter-spacing: 0.01em;
          }
          .trust-sub {
            font-size: 0.52rem;
            line-height: 1.1;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }

        /* Extra Small Mobile (<= 400px) */
        @media (max-width: 400px) {
          .trust-strip {
            padding: 8px 0;
          }
          .trust-strip .container-wide {
            padding-left: 4px;
            padding-right: 4px;
          }
          .trust-inner {
            gap: 2px;
          }
          .trust-col {
            gap: 3px;
            padding: 1px 0;
          }
          .trust-badge-icon {
            width: 24px;
            height: 24px;
            font-size: 0.6rem;
            border-width: 1px;
            border-radius: 3px;
          }
          .trust-name {
            font-size: 0.58rem;
            line-height: 1.02;
          }
          .trust-sub {
            font-size: 0.48rem;
            line-height: 1.05;
          }
        }
      `}</style>
    </section>
  );
}
