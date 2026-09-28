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

      
    </section>
  );
}
