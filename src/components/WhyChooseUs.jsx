import React from 'react';
import { ShieldCheck, Users, Zap, DollarSign, Camera, CheckCircle2 } from 'lucide-react';
import Crew from "../assets/service_crew.jpg";
import { whyChooseUsContent } from '../data/homepageData';

const ICON_MAP = {
  Users: <Users size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Zap: <Zap size={20} />,
  DollarSign: <DollarSign size={20} />,
  Camera: <Camera size={20} />,
  CheckCircle2: <CheckCircle2 size={20} />
};

export default function WhyChooseUs({ onOpenModal }) {
  const { eyebrow, heading, intro, photoAlt, photoTag, points } = whyChooseUsContent;
  const mappedPoints = points.map(p => ({
    ...p,
    icon: ICON_MAP[p.iconName] || <ShieldCheck size={20} />
  }));

  return (
    <section className="section-padding neighborhood-section" id="why-choose-us">
      <div className="container">
        
        <div className="neighborhood-grid">
          
          {/* Left Column: Heading + 6 Feature Items */}
          <div className="neighborhood-text-col">
            <div className="eyebrow-red">
              {eyebrow}
            </div>

            <h2 className="neighborhood-heading">
              {heading}
            </h2>

            <p className="neighborhood-intro">
              {intro}
            </p>

            {/* 6 Feature Blocks (2 columns on desktop) */}
            <div className="neighborhood-features-grid">
              {mappedPoints.map((p, idx) => (
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
                src={Crew} 
                alt={photoAlt} 
                className="neighborhood-img"
              />
              <div className="neighborhood-photo-overlay-tag">
                <span>{photoTag}</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      
    </section>
  );
}
