import React from 'react';
import { Home, Hammer, Zap, Droplets, Layers, Building2, Sun, Search, FileText, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Services({ onOpenModal }) {
  const serviceButtons = [
    { name: "ROOF REPLACEMENT", icon: <Home size={20} />, query: "Residential Roof Replacement" },
    { name: "ROOF REPAIR", icon: <Hammer size={20} />, query: "Roof Repair & Leak Detection" },
    { name: "STORM DAMAGE", icon: <Zap size={20} />, query: "Hail & Storm Damage Restoration" },
    { name: "GUTTERS", icon: <Droplets size={20} />, query: "Eavestrough & Gutter Installation" },
    { name: "SIDING", icon: <Layers size={20} />, query: "Exterior Siding & Flashing" },
    { name: "COMMERCIAL ROOFING", icon: <Building2 size={20} />, query: "Commercial Roofing" },
    { name: "SKYLIGHTS", icon: <Sun size={20} />, query: "Skylight Installation & Replacement" },
    { name: "21-POINT INSPECTION", icon: <Search size={20} />, query: "Roof Inspections & Maintenance" },
    { name: "INSURANCE CLAIMS", icon: <FileText size={20} />, query: "Hail & Storm Damage Restoration" },
    { name: "FLAT ROOFING", icon: <ShieldCheck size={20} />, query: "Flat / Low-Slope Roofing" }
  ];

  return (
    <section className="section-padding services-section" id="services">
      <div className="container">
        
        <div className="services-two-col-grid">
          
          {/* Left Column: Large Showcase Property Photo */}
          <div className="services-photo-col">
            <div className="services-img-wrapper">
              <img 
                src="/images/after_roof.jpg" 
                alt="AeroDome completed residential architectural shingle roof in Calgary" 
                className="services-large-photo"
              />
              <div className="services-photo-badge">
                <span>RECENT COMPLETION &bull; ASPEN WOODS, CALGARY SW</span>
              </div>
            </div>
          </div>

          {/* Right Column: Logo + Headline + Interactive Service Buttons Grid */}
          <div className="services-content-col">
            
            {/* Brand Logo */}
            <div className="services-brand-icon">
              <img 
                src="/aerodome-logo.png" 
                alt="AeroDome Roofing" 
                className="services-brand-logo-img" 
              />
            </div>

            <div className="eyebrow-red">
              OUR SERVICES
            </div>

            <h2 className="services-heading">
              ROOFING + EXTERIORS, ONE ACCOUNTABLE TEAM
            </h2>

            <p className="services-intro">
              Whether you need a full replacement after a Calgary hailstorm, quick emergency leak repair, or a complete exterior overhaul, our certified in-house crew delivers uncompromising craftsmanship with zero subcontracting.
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
