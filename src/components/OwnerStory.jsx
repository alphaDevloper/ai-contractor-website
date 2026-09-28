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

      
    </section>
  );
}
