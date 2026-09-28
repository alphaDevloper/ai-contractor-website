import React from 'react';
import { ShieldCheck, Users, Zap, DollarSign, Camera, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs({ onOpenModal }) {
  const points = [
    { title: "LOCAL CREWS ONLY (NO SUBS)", desc: "100% full-time in-house technicians. Zero subcontracting.", icon: <Users size={20} /> },
    { title: "10-YEAR WORKMANSHIP WARRANTY", desc: "Signed certificate issued directly by founder Marcus Delgray.", icon: <ShieldCheck size={20} /> },
    { title: "SAME-WEEK EMERGENCY TARPING", desc: "Rapid response to dry-in active storm and hail leaks immediately.", icon: <Zap size={20} /> },
    { title: "0% FINANCING UP TO 18 MONTHS", desc: "Predictable, zero-interest monthly plans for full replacements.", icon: <DollarSign size={20} /> },
    { title: "AI-ASSISTED DAMAGE SCANS", desc: "High-resolution photo mapping catches hidden shingle bruises.", icon: <Camera size={20} /> },
    { title: "ZERO-NAIL LAWN GUARANTEE", desc: "Triple magnetic roller sweeps protect children, pets, and tires.", icon: <CheckCircle2 size={20} /> }
  ];

  return (
    <section className="section-padding neighborhood-section" id="why-choose-us">
      <div className="container">
        
        <div className="neighborhood-grid">
          
          {/* Left Column: Heading + 6 Feature Items */}
          <div className="neighborhood-text-col">
            <div className="eyebrow-red">
              WHY WE'RE THE BEST CHOICE FOR YOU
            </div>

            <h2 className="neighborhood-heading">
              BUILT FOR YOUR NEIGHBORHOOD
            </h2>

            <p className="neighborhood-intro">
              Roof repairs and complete architectural installations engineered specifically for Calgary's extreme climate — surviving 110 km/h Chinook winds and severe hailstorms.
            </p>

            {/* 6 Feature Blocks (2 columns on desktop) */}
            <div className="neighborhood-features-grid">
              {points.map((p, idx) => (
                <div key={idx} className="neighborhood-feature-item">
                  <div className="feature-icon-wrap">
                    {p.icon}
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title">{p.title}</h3>
                    <p className="feature-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Angled House Photo */}
          <div className="neighborhood-photo-col">
            <div className="neighborhood-img-frame">
              <img 
                src="/images/service_crew.jpg" 
                alt="AeroDome certified roofing crew on Calgary home roof" 
                className="neighborhood-img"
              />
              <div className="neighborhood-photo-overlay-tag">
                <span>AERODOME CERTIFIED IN-HOUSE CREW &bull; CALGARY, ALBERTA</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      
    </section>
  );
}
