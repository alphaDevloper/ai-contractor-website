import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { galleryHero, galleryCategories, galleryProjects } from '../data/galleryData';
import TickerRibbon from '../components/TickerRibbon';

export default function GalleryPage({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter projects by active tab
  const filteredProjects = activeCategory === 'All'
    ? galleryProjects
    : galleryProjects.filter(project => 
        project.category === activeCategory || 
        (project.categories && project.categories.includes(activeCategory))
      );

  // Bottom lead capture form state
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    serviceRequested: 'Residential Roofing',
    consent: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="gallery-page-wrapper">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH BREADCRUMB & DARK OVERLAY                            */}
      {/* ========================================================================= */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-bg">
          <img 
            src={galleryHero.bgImage} 
            alt="Completed contractor projects in Calgary" 
            className="gallery-hero-img"
          />
          <div className="gallery-hero-overlay"></div>
        </div>

        <div className="container gallery-hero-container">
          <nav className="gallery-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <span className="breadcrumb-active">OUR WORK</span>
          </nav>

          <div className="eyebrow-gold">
            {galleryHero.eyebrow}
          </div>

          <h1 className="gallery-hero-title">
            {galleryHero.headline}
          </h1>

          <p className="gallery-hero-desc">
            {galleryHero.subtitle}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTER TABS & PROJECT GRID (LIGHT THEME)                               */}
      {/* ========================================================================= */}
      <section className="gallery-content-section section-padding">
        <div className="container">
          
          {/* Category Filter Tabs */}
          <div className="gallery-filter-bar" role="tablist" aria-label="Project categories">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`gallery-filter-tab ${isActive ? 'gallery-tab-active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          {/* Project Grid */}
          <div className="gallery-projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="gallery-project-card">
                <div className="gallery-card-img-wrap">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt || project.title} 
                    className="gallery-card-img"
                    loading="lazy"
                  />
                </div>

                <div className="gallery-card-info-bar">
                  <h3 className="gallery-card-title">
                    {project.title}
                  </h3>
                  <span className="gallery-card-category-badge">
                    {project.categoryLabel || project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. READY TO GET STARTED? & LEAD CAPTURE FORM                              */}
      {/* ========================================================================= */}
      <section className="section-padding gallery-cta-form-section" id="gallery-estimate">
        <div className="container">
          <div className="cta-form-two-col">
            
            {/* Left Column: Brand, Headline, Direct Phone */}
            <div className="cta-brand-col">
              <div className="cta-logo-wrap">
                <img 
                  src="/aerodome-logo.png" 
                  alt="AeroDome Roofing Calgary" 
                  className="cta-brand-logo" 
                />
              </div>

              <div className="eyebrow-red">GET STARTED TODAY</div>
              <h2 className="cta-main-heading">READY TO GET STARTED?</h2>

              <p className="cta-main-body">
                The best time to protect your home is before the next Calgary storm hits. 
                Get started today with a free, no-obligation inspection and guaranteed flat-rate quote. 
                Locally owned, COR™ certified, fully insured, and just a click or call away.
              </p>

              <a href="tel:4039184444" className="cta-direct-phone-box">
                <div className="cta-phone-icon-wrap">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="cta-phone-label">Direct Line &bull; Speaks Directly With Marcus</span>
                  <span className="cta-phone-number">(403) 918-4444</span>
                </div>
              </a>
            </div>

            {/* Right Column: Floating Dark Lead Form Card */}
            <div className="cta-form-col">
              <div className="lead-card-dark">
                <h3 className="lead-card-title">GET MY FREE ESTIMATE</h3>
                <p className="lead-card-sub">
                  Fast response time &bull; 100% Free on-site inspection
                </p>

                {submitted ? (
                  <div className="lead-submitted-box">
                    <CheckCircle2 size={46} color="#10B981" />
                    <h4>Estimate Request Received!</h4>
                    <p>
                      Thank you, <strong>{formData.firstName}</strong>. Marcus Delgray or our senior 
                      estimator will contact you at <strong>{formData.phone}</strong> within 15 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="lead-form-fields">
                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="gallery-first-name" className="form-label-white">First Name *</label>
                        <input 
                          type="text" 
                          id="gallery-first-name" 
                          required 
                          placeholder="Your Name" 
                          className="form-control-dark"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="gallery-phone" className="form-label-white">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="gallery-phone" 
                          required 
                          placeholder="(403) 000-0000" 
                          className="form-control-dark"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="gallery-email" className="form-label-white">Email Address</label>
                      <input 
                        type="email" 
                        id="gallery-email" 
                        placeholder="you@example.com" 
                        className="form-control-dark"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="gallery-service-select" className="form-label-white">How Can We Help?</label>
                      <select 
                        id="gallery-service-select" 
                        className="form-control-dark"
                        value={formData.serviceRequested}
                        onChange={(e) => setFormData({ ...formData, serviceRequested: e.target.value })}
                      >
                        <option value="Residential Roofing">Residential Roofing</option>
                        <option value="Storm Damage Restoration">Storm Damage Restoration</option>
                        <option value="Siding & Gutters">Siding & Gutters</option>
                        <option value="Asphalt Roofing">Asphalt Roofing</option>
                        <option value="Commercial Roofing">Commercial Roofing</option>
                        <option value="General Exterior Inquiry">Other Exterior Services</option>
                      </select>
                    </div>

                    <div className="form-consent-wrap">
                      <input 
                        type="checkbox" 
                        id="gallery-consent" 
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="field-checkbox"
                        required
                      />
                      <label htmlFor="gallery-consent" className="consent-text">
                        I agree to receive communications regarding my estimate request. Message and data rates may apply. Reply STOP to cancel.
                      </label>
                    </div>

                    <button type="submit" className="btn-orange btn-submit-full">
                      <span>GET MY FREE ESTIMATE</span>
                      <ArrowRight size={18} />
                    </button>

                    <div className="hero-form-microcopy">
                      <ShieldCheck size={14} />
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
