import React from 'react';
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { trustBarItems } from '../data/homepageData';

export default function TrustBar() {
  const certs = trustBarItems;

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
