import React from 'react';
import { Award, ShieldCheck, ChevronRight } from 'lucide-react';
import OwnerImg from "../assets/owner.webp";
import { ownerStoryContent } from '../data/homepageData';

export default function OwnerStory({ onOpenModal }) {
  const { eyebrow, heading, leadText, bodyText, ctaLabel, floatingBadge, metrics } = ownerStoryContent;
  return (
    <section className="section-padding owner-section" id="owner">
      <div className="container">
        
        {/* Top 2-Column: Story on Left, Photo with Floating Badge on Right */}
        <div className="owner-top-grid">
          
          {/* Left: Story */}
          <div className="owner-text-col">
            <div className="eyebrow-red">
              {eyebrow}
            </div>

            <h2 className="owner-heading">
              {heading}
            </h2>

            <p className="owner-lead-text">
              {leadText.split('we will never subcontract a Calgary roof.').length > 1 ? (
                <>
                  {leadText.split('we will never subcontract a Calgary roof.')[0]}
                  <strong>we will never subcontract a Calgary roof.</strong>
                  {leadText.split('we will never subcontract a Calgary roof.')[1]}
                </>
              ) : leadText}
            </p>
            <p className="owner-body-text">
              {bodyText}
            </p>

            <button 
              type="button" 
              onClick={() => onOpenModal('Owner Story CTA')} 
              className="btn-orange-outline owner-story-btn"
            >
              <span>{ctaLabel}</span>
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Right: Nolan Photo with Floating Dark Badge */}
          <div className="owner-photo-col">
            <div className="owner-photo-wrapper">
              <img 
                src={OwnerImg} 
                alt="Nolan Thrace, founder of AeroDome Roofing Calgary" 
                className="owner-photo-img"
              />
              
              {/* Overlapping Dark Badge on Bottom-Left (Reference Style) */}
              <div className="owner-floating-badge">
                <span className="owner-badge-years">{floatingBadge.years}</span>
                <div className="owner-badge-text">
                  <strong>{floatingBadge.strong}</strong>
                  <span>{floatingBadge.sub}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 2 Metric Boxes with Dividers (Exact Reference Pattern) */}
        <div className="owner-metric-boxes-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="owner-metric-box">
              <div className="metric-box-icon">
                {m.iconName === 'Award' ? <Award size={26} /> : <ShieldCheck size={26} />}
              </div>
              <div className="metric-box-content">
                <h3 className="metric-box-title">{m.title}</h3>
                <p className="metric-box-desc">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      
    </section>
  );
}
