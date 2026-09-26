import React from 'react';
import { Award, ShieldCheck, ChevronRight } from 'lucide-react';

export default function OwnerStory({ onOpenModal }) {
  return (
    <section className="section-padding owner-section" id="owner">
      <div className="container">
        
        {/* Top 2-Column: Story on Left, Photo with Floating Badge on Right */}
        <div className="owner-top-grid">
          
          {/* Left: Story */}
          <div className="owner-text-col">
            <div className="eyebrow-red">
              LOCAL &bull; TRUSTED &bull; EXPERIENCED
            </div>

            <h2 className="owner-heading">
              OWNER-LED. LOCAL. CALGARY.
            </h2>

            <p className="owner-lead-text">
              In 2011, Marcus Delgray founded AeroDome Roofing with a strict promise: <strong>we will never subcontract a single roof.</strong> Calgary's volatile weather — from 100 km/h Chinook winds to severe summer hailstorms — demands specialized craftsmanship that out-of-province storm chasers simply cannot provide.
            </p>
            <p className="owner-body-text">
              Every shingle on your home is installed by our permanent, COR™ safety-certified crew. Marcus personally inspects your roof before and after completion, and backs the project with our signed 10-Year Workmanship Warranty.
            </p>

            <button 
              type="button" 
              onClick={() => onOpenModal('Owner Story CTA')} 
              className="btn-orange-outline owner-story-btn"
            >
              <span>READ OUR FULL STORY</span>
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Right: Marcus Photo with Floating Dark Badge */}
          <div className="owner-photo-col">
            <div className="owner-photo-wrapper">
              <img 
                src="/images/owner_marcus.jpg" 
                alt="Marcus Delgray, founder of AeroDome Roofing Calgary" 
                className="owner-photo-img"
              />
              
              {/* Overlapping Dark Badge on Bottom-Left (Reference Style) */}
              <div className="owner-floating-badge">
                <span className="owner-badge-years">14+</span>
                <div className="owner-badge-text">
                  <strong>YEARS IN BUSINESS</strong>
                  <span>FOUNDED 2011</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 2 Metric Boxes with Dividers (Exact Reference Pattern) */}
        <div className="owner-metric-boxes-grid">
          <div className="owner-metric-box">
            <div className="metric-box-icon">
              <Award size={26} />
            </div>
            <div className="metric-box-content">
              <h3 className="metric-box-title">14+ YEARS IN BUSINESS</h3>
              <p className="metric-box-desc">
                Serving Calgary, Airdrie, Cochrane, Chestermere, and Okotoks with over 850+ successfully completed roofs.
              </p>
            </div>
          </div>

          <div className="owner-metric-box">
            <div className="metric-box-icon">
              <ShieldCheck size={26} />
            </div>
            <div className="metric-box-content">
              <h3 className="metric-box-title">100% LOCAL CREWS</h3>
              <p className="metric-box-desc">
                Zero subcontracting. Every installer on your roof is our full-time, certified, and background-checked employee.
              </p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .owner-section {
          background-color: #FFFFFF;
        }
        .owner-top-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 50px;
        }
        .owner-text-col {
          display: flex;
          flex-direction: column;
        }
        .owner-heading {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          line-height: 1.02;
          margin-bottom: 16px;
          color: var(--color-navy);
        }
        .owner-lead-text, .owner-body-text {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin-bottom: 16px;
        }
        .owner-lead-text strong {
          color: var(--color-navy);
        }
        .owner-story-btn {
          align-self: flex-start;
          margin-top: 10px;
        }
        .owner-photo-wrapper {
          position: relative;
          max-width: 440px;
          margin-left: auto;
        }
        .owner-photo-img {
          width: 100%;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-lg);
          display: block;
        }
        .owner-floating-badge {
          position: absolute;
          bottom: -15px;
          left: -20px;
          background: var(--color-navy);
          border: 2px solid var(--color-accent);
          border-radius: var(--radius-xs);
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-xl);
          color: #FFFFFF;
        }
        .owner-badge-years {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          line-height: 1;
          color: var(--color-accent);
        }
        .owner-badge-text strong {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          letter-spacing: 0.05em;
          line-height: 1.1;
        }
        .owner-badge-text span {
          font-size: 0.725rem;
          color: var(--color-sky-light);
          letter-spacing: 0.08em;
        }

        /* Metric Boxes Bottom */
        .owner-metric-boxes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          padding-top: 30px;
          border-top: 1px solid var(--color-border);
        }
        .owner-metric-box {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: var(--bg-canvas);
          padding: 22px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }
        .metric-box-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-xs);
          background: var(--color-navy);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .metric-box-title {
          font-size: 1.3rem;
          color: var(--color-navy);
          margin-bottom: 4px;
          line-height: 1.1;
        }
        .metric-box-desc {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 900px) {
          .owner-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .owner-photo-wrapper {
            margin: 0 auto;
          }
          .owner-metric-boxes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
