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
          padding: 18px 0;
          box-shadow: var(--shadow-sm);
        }
        .trust-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .trust-col {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 4px 10px;
        }
        .trust-badge-icon {
          width: 44px;
          height: 44px;
          background: var(--color-navy);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 1.1rem;
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
        }
        .trust-name {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: var(--color-navy);
          line-height: 1.1;
          letter-spacing: 0.04em;
        }
        .trust-sub {
          font-size: 0.725rem;
          color: var(--color-text-secondary);
        }
        @media (max-width: 900px) {
          .trust-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 500px) {
          .trust-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
