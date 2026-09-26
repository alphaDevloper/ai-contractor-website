import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Process({ onOpenModal }) {
  const steps = [
    {
      num: "01",
      title: "SCHEDULE YOUR FREE ROOF INSPECTION",
      desc: "We inspect your roof, take high-resolution AI photos, and assess any hail, wind, or age-related shingle damage with zero sales pressure."
    },
    {
      num: "02",
      title: "GET A TRANSPARENT, FLAT-RATE PROPOSAL",
      desc: "Receive an itemized quote with guaranteed zero surprise fees. Compare GAF & IKO shingle lines and 0% financing plans up to 18 months."
    },
    {
      num: "03",
      title: "EXPERT INSTALLATION BY OUR LOCAL CREW",
      desc: "Our permanent, COR™ certified in-house crew completes most Calgary homes in 1 to 2 days, protected by full property tarps and magnetic lawn sweeps."
    },
    {
      num: "04",
      title: "FINAL WALKTHROUGH & 10-YEAR WARRANTY",
      desc: "Founder Marcus Delgray personally inspects your finished installation and issues your signed 10-Year Workmanship Warranty certificate."
    }
  ];

  return (
    <section className="section-padding process-section" id="process">
      <div className="container">
        
        <div className="process-two-col-grid">
          
          {/* Left Column: Large In-Progress/Completed Roof Photo */}
          <div className="process-photo-col">
            <div className="process-img-frame">
              <img 
                src="/images/after_roof.jpg" 
                alt="AeroDome residential roofing installation process in Calgary" 
                className="process-photo-img"
              />
              <div className="process-photo-badge">
                <span>100% IN-HOUSE CREW &bull; 10-YEAR WORKMANSHIP GUARANTEE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Heading + 4 Step Blocks + Orange CTA */}
          <div className="process-content-col">
            <div className="eyebrow-red">
              HOW IT WORKS
            </div>

            <h2 className="process-heading">
              FOUR STEPS, NO SURPRISES
            </h2>

            <p className="process-intro">
              We believe in transparent communication, guaranteed flat-rate pricing, and respectful treatment of your property from start to finish.
            </p>

            {/* 4 Step Blocks */}
            <div className="process-steps-list">
              {steps.map((s, idx) => (
                <div key={idx} className="process-step-block">
                  <div className="process-step-num-box">
                    <span>{s.num}</span>
                  </div>
                  <div className="process-step-info">
                    <h3 className="process-step-title">{s.title}</h3>
                    <p className="process-step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Orange Action Button */}
            <div className="process-btn-row">
              <button 
                type="button" 
                onClick={() => onOpenModal('Process CTA')} 
                className="btn-orange"
              >
                <span>GET AN ESTIMATE</span>
                <ChevronRight size={20} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .process-section {
          background-color: var(--bg-canvas);
        }
        .process-two-col-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 50px;
          align-items: center;
        }
        .process-img-frame {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          height: 100%;
          min-height: 520px;
        }
        .process-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .process-photo-badge {
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
        .process-content-col {
          display: flex;
          flex-direction: column;
        }
        .process-heading {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          line-height: 1.02;
          margin-bottom: 14px;
          color: var(--color-navy);
        }
        .process-intro {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }
        .process-steps-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 26px;
        }
        .process-step-block {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #FFFFFF;
          padding: 18px 20px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          transition: border-color var(--transition-fast);
        }
        .process-step-block:hover {
          border-color: var(--color-accent);
        }
        .process-step-num-box {
          width: 44px;
          height: 44px;
          background: var(--color-navy);
          color: var(--color-accent);
          font-family: var(--font-heading);
          font-size: 1.45rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-xs);
          flex-shrink: 0;
          line-height: 1;
        }
        .process-step-title {
          font-size: 1.15rem;
          color: var(--color-navy);
          margin-bottom: 4px;
          line-height: 1.15;
        }
        .process-step-desc {
          font-size: 0.825rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin: 0;
        }
        .process-btn-row {
          margin-top: 6px;
        }

        @media (max-width: 992px) {
          .process-two-col-grid {
            grid-template-columns: 1fr;
          }
          .process-img-frame {
            min-height: 340px;
          }
        }
      `}</style>
    </section>
  );
}
