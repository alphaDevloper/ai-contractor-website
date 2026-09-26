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
            
            {/* Small Brand Mark */}
            <div className="services-brand-icon">
              <svg viewBox="0 0 40 40" fill="none" className="services-svg">
                <path d="M20 4L4 16H9V34H31V16H36L20 4Z" fill="#1677C8" />
                <path d="M20 9L9 17.5V31H16V22H24V31H31V17.5L20 9Z" fill="#55B8F5" />
                <path d="M20 2L3 15L5.5 18L20 7L34.5 18L37 15L20 2Z" fill="#102A43" />
                <circle cx="20" cy="15" r="2.5" fill="#EA580C" />
              </svg>
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

      <style>{`
        .services-section {
          background-color: #FFFFFF;
        }
        .services-two-col-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 50px;
          align-items: center;
        }
        .services-img-wrapper {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
          height: 100%;
          min-height: 480px;
        }
        .services-large-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .services-photo-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(16, 42, 67, 0.9);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          letter-spacing: 0.06em;
          padding: 8px 14px;
          border-radius: var(--radius-xs);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .services-content-col {
          display: flex;
          flex-direction: column;
        }
        .services-brand-icon {
          width: 44px;
          height: 44px;
          margin-bottom: 12px;
        }
        .services-svg {
          width: 100%;
          height: 100%;
        }
        .services-heading {
          font-size: clamp(2.3rem, 4vw, 3.4rem);
          line-height: 1.02;
          margin-bottom: 14px;
          color: var(--color-navy);
        }
        .services-intro {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 26px;
        }
        .services-button-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .service-btn-arrow {
          margin-left: auto;
          opacity: 0.4;
          transition: transform var(--transition-fast), opacity var(--transition-fast);
        }
        .service-btn:hover .service-btn-arrow {
          opacity: 1;
          transform: translateX(3px);
          color: var(--color-accent);
        }

        @media (max-width: 992px) {
          .services-two-col-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .services-img-wrapper {
            min-height: 340px;
            max-height: 420px;
          }
        }
        @media (max-width: 580px) {
          .services-button-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
