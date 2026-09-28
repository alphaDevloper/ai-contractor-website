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
                      <Link 
                        to={`/services/${service.id}`}
                        className="btn-orange showcase-btn-solid"
                      >
                        <span>{service.ctaText}</span>
                        <ChevronRight size={16} />
                      </Link>

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

    </div>
  );
}
