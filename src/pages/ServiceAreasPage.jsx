import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Car, 
  UserCheck, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { 
  serviceAreasHero, 
  serviceAreaHighlights, 
  serviceAreaRegions, 
  serviceAreaContent, 
  serviceAreaMidBanner,
  serviceAreaLeadSection
} from '../data/serviceAreasData';
import { servicesShowcase } from '../data/servicesData';
import TickerRibbon from '../components/TickerRibbon';

export default function ServiceAreasPage({ onOpenModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lead Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequested: 'Residential Roofing',
    isCommercial: false,
    consent: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const renderHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'Clock': return <Clock size={22} />;
      case 'Car': return <Car size={22} />;
      case 'UserCheck': return <UserCheck size={22} />;
      default: return <MapPin size={22} />;
    }
  };

  return (
    <div className="service-areas-page-wrapper">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH BREADCRUMB & DARK OVERLAY                            */}
      {/* ========================================================================= */}
      <section className="service-areas-hero">
        <div className="service-areas-hero-bg">
          <img 
            src={serviceAreasHero.bgImage} 
            alt="Service area coverage" 
            className="service-areas-hero-img"
          />
          <div className="service-areas-hero-overlay"></div>
        </div>

        <div className="container service-areas-hero-container">
          <nav className="service-areas-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <span className="breadcrumb-active">SERVICE AREAS</span>
          </nav>

          <div className="eyebrow-gold">
            {serviceAreasHero.eyebrow}
          </div>

          <h1 className="service-areas-hero-title">
            {serviceAreasHero.headline}
          </h1>

          <p className="service-areas-hero-desc">
            {serviceAreasHero.subtitle}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 3 HIGHLIGHT / TRUST CARDS STRIP                                        */}
      {/* ========================================================================= */}
      <section className="service-areas-highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {serviceAreaHighlights.map((item, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-icon-badge">
                  {renderHighlightIcon(item.icon)}
                </div>
                <h3 className="highlight-card-title">{item.title}</h3>
                <p className="highlight-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHERE WE WORK & INTERACTIVE MAP SECTION                                */}
      {/* ========================================================================= */}
      <section className="section-padding where-we-work-section" id="service-coverage">
        <div className="container">
          <div className="where-we-work-grid">
            
            {/* Left Column: Regions & Locations List */}
            <div className="where-we-work-left">
              <div className="eyebrow-gold">
                {serviceAreaContent.eyebrow}
              </div>

              <h2 className="where-we-work-title">
                {serviceAreaContent.headline}
              </h2>

              <p className="where-we-work-intro">
                {serviceAreaContent.description}
              </p>

              {/* Regions 2-Column Grid */}
              <div className="service-regions-grid">
                {serviceAreaRegions.map((region, rIdx) => (
                  <div key={rIdx} className="region-group-box">
                    <h3 className="region-group-title">
                      {region.regionName}
                    </h3>
                    <ul className="region-locations-list">
                      {region.locations.map((loc, lIdx) => {
                        const slug = loc.toLowerCase().replace(/,\s*(mo|ks|ab)$/i, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                        return (
                          <li key={lIdx} className="region-location-item">
                            <MapPin size={13} className="location-pin-icon" />
                            <Link to={`/service-areas/${slug}`} className="location-item-link">
                              {loc}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Callout Strip for Missing Cities */}
              <div className="service-area-callout-strip">
                <p>
                  Don't see your city? Call us at{' '}
                  <a href={`tel:${serviceAreaContent.phone.replace(/[^0-9]/g, '')}`} className="callout-phone-link">
                    {serviceAreaContent.phone}
                  </a>{' '}
                  and we'll confirm if you're in our service area.
                </p>
              </div>
            </div>

            {/* Right Column: Responsive Interactive Map Frame */}
            <div className="where-we-work-right">
              <div className="service-map-frame-card">
                <div className="map-frame-header">
                  <div className="map-header-dot"></div>
                  <span className="map-header-text">{serviceAreaContent.mapHeader}</span>
                </div>
                <div className="map-iframe-wrapper">
                  <iframe 
                    title="Service Area Interactive Map"
                    src={serviceAreaContent.mapEmbedUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="map-frame-footer">
                  <div className="map-legend-item">
                    <span className="legend-marker marker-zone"></span>
                    <span>{serviceAreaContent.mapBadge}</span>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Kansas+City" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="map-open-link"
                  >
                    <span>View Larger Map</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Repeating Brand Ticker Ribbon */}
      <TickerRibbon dark={true} />

      {/* ========================================================================= */}
      {/* 4. MID-PAGE CTA BANNER ("IN YOUR AREA. READY TO HELP.")                    */}
      {/* ========================================================================= */}
      <section className="service-areas-mid-banner">
        <div className="container">
          <div className="mid-banner-content-box">
            <div className="eyebrow-gold">
              {serviceAreaMidBanner.eyebrow}
            </div>

            <h2 className="mid-banner-headline">
              {serviceAreaMidBanner.headline}
            </h2>

            <p className="mid-banner-desc">
              {serviceAreaMidBanner.description}
            </p>

            <div className="mid-banner-actions">
              <button 
                type="button" 
                className="btn-orange mid-banner-btn-primary"
                onClick={() => onOpenModal('Service Areas Banner CTA')}
              >
                <span>{serviceAreaMidBanner.primaryCtaText}</span>
              </button>

              <a href={`tel:${serviceAreaMidBanner.phone.replace(/[^0-9]/g, '')}`} className="btn-banner-phone">
                <Phone size={17} className="banner-phone-icon" />
                <span>CALL {serviceAreaMidBanner.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. READY TO GET STARTED? & LEAD CAPTURE FORM                              */}
      {/* ========================================================================= */}
      <section className="section-padding service-areas-cta-form-section" id="service-areas-estimate">
        <div className="container">
          <div className="cta-form-two-col">
            
            {/* Left Column: Brand, Headline, Direct Phone */}
            <div className="cta-brand-col">
              <div className="cta-logo-wrap">
                <img 
                  src="/aerodome-logo.png" 
                  alt="AeroDome Roofing" 
                  className="cta-brand-logo" 
                />
              </div>

              <div className="eyebrow-gold">{serviceAreaLeadSection.eyebrow}</div>
              <h2 className="cta-main-heading">{serviceAreaLeadSection.headline}</h2>

              <p className="cta-main-body">
                {serviceAreaLeadSection.description}
              </p>

              <a href={`tel:${serviceAreaLeadSection.phone.replace(/[^0-9]/g, '')}`} className="cta-direct-phone-box">
                <div className="cta-phone-icon-wrap">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="cta-phone-label">Direct Line &bull; Free Local Inspection</span>
                  <span className="cta-phone-number">{serviceAreaLeadSection.phone}</span>
                </div>
              </a>
            </div>

            {/* Right Column: Floating Dark Lead Form Card */}
            <div className="cta-form-col">
              <div className="lead-card-dark">
                <h3 className="lead-card-title">{serviceAreaLeadSection.formTitle}</h3>
                <p className="lead-card-sub">
                  {serviceAreaLeadSection.formSubtitle}
                </p>

                {submitted ? (
                  <div className="lead-submitted-box">
                    <CheckCircle2 size={46} color="#10B981" />
                    <h4>Estimate Request Received!</h4>
                    <p>
                      Thank you, <strong>{formData.fullName}</strong>. Our senior 
                      estimator will contact you at <strong>{formData.phone}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="lead-form-fields">
                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="areas-full-name" className="form-label-white">Your Name *</label>
                        <input 
                          type="text" 
                          id="areas-full-name" 
                          required 
                          placeholder="Your Name" 
                          className="form-control-dark"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="areas-phone" className="form-label-white">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="areas-phone" 
                          required 
                          placeholder="Phone Number" 
                          className="form-control-dark"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="areas-email" className="form-label-white">Email Address</label>
                      <input 
                        type="email" 
                        id="areas-email" 
                        placeholder="Email Address" 
                        className="form-control-dark"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="areas-service-select" className="form-label-white">How Can We Help?</label>
                      <select 
                        id="areas-service-select" 
                        className="form-control-dark"
                        value={formData.serviceRequested}
                        onChange={(e) => setFormData({ ...formData, serviceRequested: e.target.value })}
                      >
                        {servicesShowcase.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Commercial Roofing">Commercial Roofing</option>
                        <option value="Emergency Storm Tarping">Emergency Storm Tarping</option>
                        <option value="Other Exterior Services">Other Exterior Inquiry</option>
                      </select>
                    </div>

                    <div className="form-consent-wrap">
                      <input 
                        type="checkbox" 
                        id="areas-commercial" 
                        checked={formData.isCommercial}
                        onChange={(e) => setFormData({ ...formData, isCommercial: e.target.checked })}
                        className="field-checkbox"
                      />
                      <label htmlFor="areas-commercial" className="consent-text">
                        Commercial
                      </label>
                    </div>

                    <div className="form-consent-wrap">
                      <input 
                        type="checkbox" 
                        id="areas-consent" 
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="field-checkbox"
                        required
                      />
                      <label htmlFor="areas-consent" className="consent-text">
                        I agree to receive communications from Capstone Contracting Solutions at the phone number provided, including messages sent by autodialer. Consent is not a condition of any purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to cancel.
                      </label>
                    </div>

                    <button type="submit" className="btn-orange btn-submit-full">
                      <span>{serviceAreaLeadSection.submitBtnText}</span>
                      <ArrowRight size={18} />
                    </button>

                    <div className="hero-form-microcopy">
                      <ShieldCheck size={14} />
                      <span>{serviceAreaLeadSection.securityText}</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Repeating Brand Ticker Ribbon */}
      <TickerRibbon dark={true} />

    </div>
  );
}

