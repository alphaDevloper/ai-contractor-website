import React from 'react';
import { Home, Hammer, Zap, Droplets, Layers, Building2, Sun, Search, FileText, ShieldCheck, ChevronRight } from 'lucide-react';
import ServiceBg from "../assets/after_roof.jpg";
import Logo from "../assets/logo.png";
import { servicesContent } from '../data/homepageData';

const ICON_MAP = {
  Home: <Home size={20} />,
  Hammer: <Hammer size={20} />,
  Zap: <Zap size={20} />,
  Droplets: <Droplets size={20} />,
  Layers: <Layers size={20} />,
  Building2: <Building2 size={20} />,
  Sun: <Sun size={20} />,
  Search: <Search size={20} />,
  FileText: <FileText size={20} />,
  ShieldCheck: <ShieldCheck size={20} />
};

export default function Services({ onOpenModal }) {
  const { eyebrow, heading, intro, photoBadge, photoAlt, buttons } = servicesContent;
  const serviceButtons = buttons.map(btn => ({
    ...btn,
    icon: ICON_MAP[btn.iconName] || <ShieldCheck size={20} />
  }));

  return (
    <section className="section-padding services-section" id="services">
      <div className="container">
        
        <div className="services-two-col-grid">
          
          {/* Left Column: Large Showcase Property Photo */}
          <div className="services-photo-col">
            <div className="services-img-wrapper">
              <img 
                src={ServiceBg}
                alt={photoAlt} 
                className="services-large-photo"
              />
              <div className="services-photo-badge">
                <span>{photoBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Logo + Headline + Interactive Service Buttons Grid */}
          <div className="services-content-col">
            
            {/* Brand Logo */}
            <div className="services-brand-icon">
              <img 
                src={Logo} 
                alt="AeroDome Roofing" 
                className="services-brand-logo-img" 
              />
            </div>

            <div className="eyebrow-red">
              {eyebrow}
            </div>

            <h2 className="services-heading">
              {heading}
            </h2>

            <p className="services-intro">
              {intro}
            </p>

            {/* The 2-Column Buttons Grid (Exactly as requested from reference) */}
            <div className="services-button-grid">
              {serviceButtons.map((btn, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onOpenModal(`Service: ${btn.name}`)}
                  className="service-btn"
                  title={`Request free estimate for ${btn.name}`}
                >
                  <span className="service-btn-icon">{btn.icon}</span>
                  <span className="service-btn-text">{btn.name}</span>
                  <ChevronRight size={16} className="service-btn-arrow" />
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>

      
    </section>
  );
}
