import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Building2, 
  Layers, 
  Droplets, 
  Hammer, 
  Zap, 
  Sun, 
  CheckCircle2, 
  Phone, 
  ChevronRight, 
  Heart, 
  ShieldCheck, 
  Clock, 
  Calendar 
} from 'lucide-react';
import TickerRibbon from '../components/TickerRibbon';
import { 
  servicesHero, 
  servicesHub, 
  servicesShowcase, 
  specialOffersSection 
} from '../data/servicesData';

export default function ServicesPage({ onOpenModal }) {
  const location = useLocation();

  // Handle Hash Anchoring on mount or location change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Lead form state for bottom CTA
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: 'Residential Roof Replacement'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;
    setSubmitted(true);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Home': return <Home size={18} />;
      case 'Building2': return <Building2 size={18} />;
      case 'Layers': return <Layers size={18} />;
      case 'Droplets': return <Droplets size={18} />;
      case 'Hammer': return <Hammer size={18} />;
      case 'Zap': return <Zap size={18} />;
      case 'Sun': return <Sun size={18} />;
      default: return <Home size={18} />;
    }
  };

  const scrollToService = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="services-page-wrapper">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH BREADCRUMB & CREW BACKGROUND                         */}
      {/* ========================================================================= */}
      <section className="services-page-hero">
        <div className="services-hero-bg-wrapper">
          <img 
            src={servicesHero.bgImage} 
            alt="AeroDome Roofing Calgary crew on site" 
            className="services-hero-bg-img"
          />
          <div className="services-hero-overlay"></div>
        </div>

        <div className="container services-hero-container">
          <div className="services-hero-content">
            <nav className="services-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">HOME</Link>
              <span className="breadcrumb-divider">&gt;</span>
              <span className="breadcrumb-current">SERVICES</span>
            </nav>

            <div className="eyebrow-red" style={{ marginBottom: '14px' }}>
              {servicesHero.eyebrow}
            </div>

            <h1 className="services-hero-title">
              {servicesHero.headline}
            </h1>

            <p className="services-hero-subtitle">
              {servicesHero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Ticker Ribbon */}
      <TickerRibbon />

      {/* ========================================================================= */}
      {/* 2. SERVICES QUICK-NAVIGATION HUB (AERIAL PHOTO + SERVICE BUTTONS)         */}
      {/* ========================================================================= */}
      <section className="section-padding services-hub-section" id="services-overview">
        <div className="container">
          <div className="services-hub-grid">
            
            {/* Left: Aerial Project Photo */}
            <div className="services-hub-photo-col">
              <div className="services-hub-photo-frame">
                <img 
                  src={servicesHub.aerialImage} 
                  alt={servicesHub.aerialCaption} 
                  className="services-hub-img"
                />
                <div className="services-photo-badge">
                  <span>{servicesHub.aerialCaption}</span>
                </div>
              </div>
            </div>

            {/* Right: Hub Content & Grid of Service Buttons */}
            <div className="services-hub-content-col">
              <div className="services-hub-brand-logo">
                <img 
                  src="/aerodome-logo.png" 
                  alt="AeroDome Roofing" 
                  className="hub-logo-img" 
                />
              </div>

              <div className="eyebrow-red">
                {servicesHub.eyebrow}
              </div>

              <h2 className="services-hub-heading">
                {servicesHub.headline}
              </h2>

              <p className="services-hub-intro">
                {servicesHub.intro}
              </p>

              <div className="services-hub-buttons-grid">
                {servicesHub.buttons.map((btn, idx) => (
                  <button 
                    key={idx}
                    type="button"
                    className="services-hub-nav-btn"
                    onClick={() => scrollToService(btn.id)}
                  >
                    <span className="hub-btn-icon">{getIcon(btn.icon)}</span>
                    <span className="hub-btn-label">{btn.name}</span>
                    <ChevronRight size={16} className="hub-btn-arrow" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ticker Ribbon */}
      <TickerRibbon />

      {/* ========================================================================= */}
      {/* 3. ALTERNATING DETAILED SERVICE SHOWCASES                                 */}
      {/* ========================================================================= */}
      <section className="services-showcases-wrapper">
        {servicesShowcase.map((service, index) => {
          const isReversed = service.reverse;

          return (
            <div 
              key={service.id} 
              id={service.id}
              className={`service-showcase-row ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}
            >
              <div className="container">
                <div className={`service-showcase-grid ${isReversed ? 'grid-reversed' : ''}`}>
                  
                  {/* Photo Column */}
                  <div className="showcase-photo-col">
                    <div className="showcase-img-frame">
                      <img 
                        src={service.image} 
                        alt={service.imageAlt} 
                        className="showcase-img"
                      />
                      <div className="showcase-hover-tag">
                        <span>AERODOME CERTIFIED &bull; CALGARY & FOOTHILLS</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="showcase-content-col">
                    <div className="eyebrow-red">
                      {service.eyebrow}
                    </div>

                    <h2 className="showcase-title">
                      {service.title}
                    </h2>

                    <p className="showcase-desc">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="showcase-bullets-list">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="showcase-bullet-item">
                          <CheckCircle2 size={18} className="showcase-check-icon" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Dual Action Buttons */}
                    <div className="showcase-actions-row">
                      <button 
                        type="button" 
                        className="btn-orange showcase-btn-solid"
                        onClick={() => onOpenModal(`Service: ${service.title}`)}
                      >
                        <span>{service.ctaText}</span>
                        <ChevronRight size={16} />
                      </button>

                      <button 
                        type="button" 
                        className="btn-outline-orange showcase-btn-outline"
                        onClick={() => onOpenModal(`Estimate: ${service.title}`)}
                      >
                        <span>{service.secondaryCtaText}</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Ticker Ribbon */}
      <TickerRibbon />

      {/* ========================================================================= */}
      {/* 4. FREE INSPECTIONS ALWAYS & MILITARY DISCOUNT                            */}
      {/* ========================================================================= */}
      <section className="section-padding services-offers-section" id="offers">
        <div className="container">
          <div className="services-offers-box">
            
            <div className="eyebrow-red">
              {specialOffersSection.eyebrow}
            </div>

            <h2 className="services-offers-main-title">
              {specialOffersSection.title}
            </h2>

            <p className="services-offers-sub">
              {specialOffersSection.subtitle}
            </p>

            {/* Military & Veterans Banner Card */}
            <div className="military-card-block">
              <div className="military-badge-icon">
                <Heart size={26} />
              </div>

              <h3 className="military-title">
                {specialOffersSection.militaryDiscount.badge}
              </h3>

              <p className="military-desc">
                {specialOffersSection.militaryDiscount.description}
              </p>

              <div className="military-callout-strip">
                <span>{specialOffersSection.militaryDiscount.footnote}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LEAD CAPTURE SECTION (MATCHING HOME'S FINAL CTA)                       */}
      {/* ========================================================================= */}
      <section className="section-padding final-cta-section" id="services-estimate">
        <div className="container">
          <div className="final-cta-grid">
            
            {/* Left Column: Brand + Heading + Direct Phone */}
            <div className="final-cta-text-col">
              <div className="final-cta-brand">
                <img 
                  src="/aerodome-logo.png" 
                  alt="AeroDome Roofing" 
                  className="final-brand-logo-img" 
                />
              </div>

              <div className="eyebrow-red">
                READY TO GET STARTED?
              </div>

              <h2 className="final-cta-heading">
                GET YOUR FREE INSPECTION TODAY
              </h2>

              <p className="final-cta-desc">
                Whether you need hail damage verified for an Alberta insurance claim or want to replace aging shingles before winter, Marcus Delgray and our certified in-house crew are ready to inspect your property.
              </p>

              <a href="tel:+1333456789" className="final-phone-link-box">
                <div className="final-phone-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="final-phone-label">Direct Line &bull; Speaks Directly With Marcus</span>
                  <span className="final-phone-num">+1 333 456789</span>
                </div>
              </a>
            </div>

            {/* Right Column: Floating Dark Lead Form Card */}
            <div className="final-cta-form-col">
              <div className="lead-card-dark">
                <div className="card-top-header">
                  <h3 className="card-main-title">WE CALL YOU BACK IN 15 MINUTES!</h3>
                  <p className="card-sub-title">Free on-site roof inspection with photo report & transparent estimate.</p>
                </div>

                {submitted ? (
                  <div className="form-success-box" style={{ padding: '30px 10px', textAlign: 'center' }}>
                    <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 12px auto' }} />
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '8px' }}>Estimate Requested!</h3>
                    <p style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>
                      Thank you, <strong>{formData.firstName}</strong>. Marcus Delgray or our senior estimator will call you at <strong>{formData.phone}</strong> within 15 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label-white" htmlFor="serv-first-name">First Name *</label>
                        <input 
                          type="text" 
                          id="serv-first-name" 
                          required 
                          placeholder="John" 
                          className="form-control-dark"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label-white" htmlFor="serv-last-name">Last Name</label>
                        <input 
                          type="text" 
                          id="serv-last-name" 
                          placeholder="Smith" 
                          className="form-control-dark"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label-white" htmlFor="serv-phone-num">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="serv-phone-num" 
                        required 
                        placeholder="(403) 555-0199" 
                        className="form-control-dark"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label-white" htmlFor="serv-service-select">Service Needed</label>
                      <select 
                        id="serv-service-select"
                        className="form-control-dark"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="Residential Roof Replacement">Residential Roof Replacement</option>
                        <option value="Hail & Storm Damage Restoration">Hail & Storm Damage Restoration</option>
                        <option value="Concrete Driveways & Patios">Concrete Driveways & Patios</option>
                        <option value="James Hardie & Vinyl Siding">James Hardie & Vinyl Siding</option>
                        <option value="Commercial SBS Flat Roofing">Commercial SBS Flat Roofing</option>
                        <option value="Seamless Gutters & Eavestroughs">Seamless Gutters & Eavestroughs</option>
                        <option value="Emergency Roof Repair & Leak Tarping">Emergency Roof Repair & Leak Tarping</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-orange" 
                      style={{ width: '100%', marginTop: '8px' }}
                    >
                      <span>GET MY FREE ESTIMATE</span>
                      <ChevronRight size={18} />
                    </button>

                    <div className="form-guarantee-note">
                      <span>Free on-site inspection &bull; No obligation &bull; Flat-rate pricing</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dark Ticker Ribbon before Footer */}
      <TickerRibbon dark={true} />

      {/* ========================================================================= */}
      {/* PAGE SPECIFIC CSS STYLING                                                 */}
      {/* ========================================================================= */}
      <style>{`
        .services-page-wrapper {
          width: 100%;
          overflow-x: hidden;
          background: var(--bg-canvas);
        }

        /* ------------------ 1. HERO SECTION ------------------ */
        .services-page-hero {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          padding: 80px 0;
          overflow: hidden;
        }
        .services-hero-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .services-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
        }
        .services-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg, 
            rgba(16, 42, 67, 0.95) 0%, 
            rgba(16, 42, 67, 0.88) 60%, 
            rgba(16, 42, 67, 0.75) 100%
          );
        }
        .services-hero-container {
          position: relative;
          z-index: 2;
        }
        .services-hero-content {
          max-width: 820px;
        }
        .services-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.825rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }
        .services-breadcrumb a {
          color: #94A3B8;
          transition: color var(--transition-fast);
        }
        .services-breadcrumb a:hover {
          color: #FFFFFF;
        }
        .breadcrumb-divider {
          color: var(--color-accent);
        }
        .breadcrumb-current {
          color: #FFFFFF;
        }
        .services-hero-title {
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 5.5vw, 4.4rem);
          line-height: 0.98;
          margin-bottom: 16px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          text-transform: uppercase;
        }
        .services-hero-subtitle {
          color: #E2E8F0;
          font-size: 1.05rem;
          line-height: 1.5;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          font-weight: 600;
        }

        /* ------------------ 2. SERVICES QUICK-HUB ------------------ */
        .services-hub-section {
          background-color: #FFFFFF;
        }
        .services-hub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .services-hub-photo-frame {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--color-border);
        }
        .services-hub-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          max-height: 520px;
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
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          padding: 8px 12px;
          border-radius: var(--radius-xs);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .services-hub-brand-logo {
          margin-bottom: 12px;
        }
        .hub-logo-img {
          height: 48px;
          width: auto;
          max-width: 190px;
          object-fit: contain;
          display: block;
        }
        .services-hub-heading {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.02;
          margin-bottom: 14px;
          color: var(--color-navy);
        }
        .services-hub-intro {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }
        .services-hub-buttons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .services-hub-nav-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }
        .services-hub-nav-btn:hover {
          background: #FFFFFF;
          border-color: var(--color-accent);
          box-shadow: 0 4px 12px rgba(234, 88, 12, 0.12);
          transform: translateY(-1px);
        }
        .hub-btn-icon {
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hub-btn-label {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: var(--color-navy);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1.1;
        }
        .hub-btn-arrow {
          margin-left: auto;
          opacity: 0.35;
          color: var(--color-navy);
          transition: transform var(--transition-fast), opacity var(--transition-fast);
        }
        .services-hub-nav-btn:hover .hub-btn-arrow {
          opacity: 1;
          color: var(--color-accent);
          transform: translateX(3px);
        }

        /* ------------------ 3. DETAILED SHOWCASES ------------------ */
        .service-showcase-row {
          padding: clamp(60px, 8vw, 90px) 0;
          border-bottom: 1px solid var(--color-border);
        }
        .service-showcase-row.bg-white {
          background-color: #FFFFFF;
        }
        .service-showcase-row.bg-light {
          background-color: #F8FAFC;
        }
        .service-showcase-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 50px;
          align-items: center;
        }
        .service-showcase-grid.grid-reversed {
          grid-template-columns: 0.95fr 1.05fr;
        }
        .grid-reversed .showcase-photo-col {
          order: 2;
        }
        .grid-reversed .showcase-content-col {
          order: 1;
        }

        .showcase-img-frame {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--color-border);
          aspect-ratio: 4 / 3;
          background: #E2E8F0;
        }
        .showcase-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .showcase-img-frame:hover .showcase-img {
          transform: scale(1.02);
        }
        .showcase-hover-tag {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          background: rgba(16, 42, 67, 0.92);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          padding: 8px 12px;
          border-radius: var(--radius-xs);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .showcase-title {
          font-size: clamp(2.4rem, 4.5vw, 3.4rem);
          line-height: 1.02;
          color: var(--color-navy);
          margin-bottom: 16px;
        }
        .showcase-desc {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin-bottom: 22px;
        }
        .showcase-bullets-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .showcase-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-navy);
          line-height: 1.4;
        }
        .showcase-check-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .showcase-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .showcase-btn-solid {
          padding: 12px 24px;
        }
        .showcase-btn-outline {
          padding: 12px 22px;
          border: 2px solid var(--color-accent);
          color: var(--color-accent);
          font-family: var(--font-heading);
          font-size: 1.15rem;
          letter-spacing: 0.05em;
          border-radius: var(--radius-xs);
          background: transparent;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .showcase-btn-outline:hover {
          background: var(--color-accent);
          color: #FFFFFF;
        }

        /* ------------------ 4. FREE INSPECTIONS & OFFERS ------------------ */
        .services-offers-section {
          background-color: #FFFFFF;
        }
        .services-offers-box {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }
        .services-offers-main-title {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          line-height: 1.02;
          color: var(--color-navy);
          margin-bottom: 14px;
        }
        .services-offers-sub {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 36px;
        }
        .military-card-block {
          background: #FFFBF9;
          border: 1.5px solid #FDBA74;
          border-radius: var(--radius-md);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 20px rgba(234, 88, 12, 0.08);
        }
        .military-badge-icon {
          width: 54px;
          height: 54px;
          background: var(--color-navy);
          color: var(--color-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border: 2px solid var(--color-sky);
        }
        .military-title {
          font-size: 1.8rem;
          color: var(--color-accent);
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }
        .military-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          max-width: 640px;
          margin-bottom: 20px;
        }
        .military-callout-strip {
          padding: 8px 20px;
          border: 1px solid var(--color-navy);
          border-radius: var(--radius-xs);
          background: rgba(16, 42, 67, 0.05);
          font-family: var(--font-heading);
          font-size: 1rem;
          letter-spacing: 0.06em;
          color: var(--color-navy);
        }

        /* ------------------ 5. FINAL CTA SECTION ------------------ */
        .final-cta-section {
          background-color: #FFFFFF;
        }
        .final-cta-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 50px;
          align-items: center;
        }
        .final-cta-brand {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
        }
        .final-brand-logo-img {
          height: 48px;
          width: auto;
          max-width: 190px;
          object-fit: contain;
          display: block;
        }
        .final-cta-heading {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          line-height: 1.02;
          margin-bottom: 14px;
          color: var(--color-navy);
        }
        .final-cta-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 26px;
        }
        .final-phone-link-box {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: #F8FAFC;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 14px 22px;
          transition: all var(--transition-fast);
        }
        .final-phone-link-box:hover {
          border-color: var(--color-accent);
          background: #FFFFFF;
          box-shadow: var(--shadow-md);
        }
        .final-phone-icon {
          width: 48px;
          height: 48px;
          background: var(--color-navy);
          color: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .final-phone-label {
          display: block;
          font-size: 0.725rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          font-weight: 700;
        }
        .final-phone-num {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          color: var(--color-navy);
          letter-spacing: 0.04em;
        }

        /* ------------------ RESPONSIVE BREAKPOINTS ------------------ */
        @media (max-width: 992px) {
          .services-hub-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .service-showcase-grid,
          .service-showcase-grid.grid-reversed {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .grid-reversed .showcase-photo-col {
            order: 1;
          }
          .grid-reversed .showcase-content-col {
            order: 2;
          }
          .final-cta-grid {
            grid-template-columns: 1fr;
          }
          .final-cta-form-col {
            max-width: 540px;
          }
        }

        @media (max-width: 600px) {
          .services-hub-buttons-grid {
            grid-template-columns: 1fr;
          }
          .showcase-actions-row {
            flex-direction: column;
            align-items: stretch;
          }
          .showcase-actions-row button {
            width: 100%;
          }
        }
      `}</style>

    </div>
  );
}
