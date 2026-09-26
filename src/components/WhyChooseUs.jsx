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

      <style>{`
        .neighborhood-section {
          background-color: var(--bg-canvas);
        }
        .neighborhood-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 50px;
          align-items: center;
        }
        .neighborhood-heading {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          line-height: 1.02;
          margin-bottom: 14px;
          color: var(--color-navy);
        }
        .neighborhood-intro {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 28px;
        }
        .neighborhood-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .neighborhood-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #FFFFFF;
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          transition: border-color var(--transition-fast);
        }
        .neighborhood-feature-item:hover {
          border-color: var(--color-accent);
        }
        .feature-icon-wrap {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .feature-title {
          font-size: 1.05rem;
          color: var(--color-navy);
          margin-bottom: 3px;
          line-height: 1.15;
        }
        .feature-desc {
          font-size: 0.775rem;
          color: var(--color-text-secondary);
          line-height: 1.4;
          margin: 0;
        }
        .neighborhood-img-frame {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          height: 100%;
          min-height: 480px;
        }
        .neighborhood-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .neighborhood-photo-overlay-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(16, 42, 67, 0.9);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          letter-spacing: 0.06em;
          padding: 8px 12px;
          border-radius: var(--radius-xs);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 992px) {
          .neighborhood-grid {
            grid-template-columns: 1fr;
          }
          .neighborhood-img-frame {
            min-height: 340px;
          }
        }
        @media (max-width: 600px) {
          .neighborhood-features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
