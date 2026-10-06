import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  ChevronRight, 
  Plus, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { 
  getServiceAreaDetail, 
  serviceMenuItems, 
  serviceAreaLeadSection 
} from '../data/serviceAreasData';
import { servicesShowcase } from '../data/servicesData';
import TickerRibbon from '../components/TickerRibbon';

export default function ServiceAreaDetailPage({ onOpenModal }) {
  const { areaSlug } = useParams();
  
  // Dynamically load service area data
  const area = getServiceAreaDetail(areaSlug || 'parkville');

  // Scroll to top on initial load and route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [areaSlug]);

  // FAQ Accordion State (first item open by default)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

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

  return (
    <div className="area-detail-page-wrapper">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH BREADCRUMB & CTA BUTTONS                            */}
      {/* ========================================================================= */}
      <section className="area-detail-hero">
        <div className="area-detail-hero-bg">
          <img 
            src={area.bgImage} 
            alt={`Roofing Contractor in ${area.fullName}`} 
            className="area-detail-hero-img"
          />
          <div className="area-detail-hero-overlay"></div>
        </div>

        <div className="container area-detail-hero-container">
          <nav className="area-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <Link to="/service-areas" className="breadcrumb-link">SERVICE AREAS</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <span className="breadcrumb-active">{area.city.toUpperCase()}</span>
          </nav>

          <div className="eyebrow-gold">
            {area.region}
          </div>

          <h1 className="area-detail-hero-title">
            {area.heroHeadline}
          </h1>

          <p className="area-detail-hero-desc">
            {area.heroSubtitle}
          </p>

          <div className="area-detail-hero-actions">
            <button 
              type="button" 
              className="btn-orange area-hero-btn-primary"
              onClick={() => onOpenModal(`Service Area: ${area.fullName} Hero Free Inspection`)}
            >
              <span>GET FREE INSPECTION</span>
              <ArrowRight size={18} />
            </button>

            <a href="tel:8165424103" className="btn-hero-phone">
              <Phone size={17} className="hero-phone-icon" />
              <span>CALL (816) 542-4103</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. QUICK METRICS / STATS BAR                                              */}
      {/* ========================================================================= */}
      <section className="area-metrics-bar-section">
        <div className="container">
          <div className="area-metrics-grid">
            <div className="metric-box">
              <span className="metric-label">COVERAGE</span>
              <span className="metric-value">{area.stats.coverage}</span>
            </div>
            <div className="metric-box">
              <span className="metric-label">DISTANCE</span>
              <span className="metric-value">{area.stats.distance}</span>
            </div>
            <div className="metric-box">
              <span className="metric-label">RESPONSE TIME</span>
              <span className="metric-value">{area.stats.responseTime}</span>
            </div>
            <div className="metric-box">
              <span className="metric-label">TRAVEL FEES</span>
              <span className="metric-value">{area.stats.travelFees}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. VALUE PROPS & CLIMATE NOTES (2 COLUMNS)                                */}
      {/* ========================================================================= */}
      <section className="section-padding area-values-section">
        <div className="container">
          <div className="area-values-grid">
            
            {/* Left Column: Why Homeowners Choose Capstone */}
            <div className="area-why-choose-col">
              <div className="eyebrow-gold">
                {area.whyChooseEyebrow}
              </div>

              <h2 className="area-section-heading">
                {area.whyChooseTitle}
              </h2>

              <div className="area-numbered-points-list">
                {area.whyChoosePoints.map((item, idx) => (
                  <div key={idx} className="area-numbered-point-card">
                    <div className="point-number-badge">
                      {item.num}
                    </div>
                    <p className="point-text">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Climate Notes & Top Services Pills */}
            <div className="area-climate-col">
              <div className="eyebrow-gold">
                {area.climateEyebrow}
              </div>

              <h2 className="area-section-heading">
                {area.climateHeadline}
              </h2>

              <p className="area-climate-desc">
                {area.climateDescription}
              </p>

              <div className="area-top-services-card">
                <span className="top-services-card-title">
                  TOP SERVICES IN {area.city.toUpperCase()}
                </span>
                <div className="top-services-pills-wrap">
                  {area.topServices.map((service, sIdx) => (
                    <Link 
                      key={sIdx} 
                      to={service.path} 
                      className="area-service-pill-link"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICES 14-BUTTON GRID & NEIGHBORHOODS COVERED (2 COLUMNS)            */}
      {/* ========================================================================= */}
      <section className="section-padding area-services-neighborhoods-section">
        <div className="container">
          <div className="area-services-neighborhoods-grid">
            
            {/* Left Column: Every Roofing Service, One Trusted Crew */}
            <div className="area-services-col">
              <div className="eyebrow-gold">
                SERVICES AVAILABLE IN {area.city.toUpperCase()}
              </div>

              <h2 className="area-section-heading">
                EVERY ROOFING SERVICE, ONE TRUSTED CREW
              </h2>

              <p className="area-services-intro">
                We bring the full Capstone service menu to {area.fullName}. Click any service to see what is included and request an on-site quote:
              </p>

              <div className="area-services-buttons-grid">
                {serviceMenuItems.map((item, mIdx) => (
                  <Link 
                    key={mIdx} 
                    to={item.path} 
                    className="area-service-nav-btn"
                  >
                    <span className="service-nav-btn-name">{item.name}</span>
                    <ChevronRight size={14} className="service-nav-btn-arrow" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Neighborhoods & Adjacent Communities */}
            <div className="area-neighborhoods-col">
              <div className="eyebrow-gold">
                NEIGHBORHOODS WE SERVE
              </div>

              <h2 className="area-section-heading">
                ACROSS {area.city.toUpperCase()}
              </h2>

              <p className="area-neighborhoods-intro">
                {area.neighborhoodsIntro}
              </p>

              {/* Sub-card 1: City Neighborhoods */}
              <div className="neighborhoods-sub-box">
                <span className="neighborhoods-sub-title">
                  {area.city.toUpperCase()} NEIGHBORHOODS
                </span>
                <div className="neighborhoods-pills-wrap">
                  {area.neighborhoods.map((nName, nIdx) => (
                    <span key={nIdx} className="neighborhood-pill">
                      {nName}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sub-card 2: Adjacent Communities */}
              <div className="neighborhoods-sub-box">
                <span className="neighborhoods-sub-title">
                  ADJACENT COMMUNITIES
                </span>
                <div className="neighborhoods-pills-wrap">
                  {area.adjacentCommunities.map((adj, aIdx) => (
                    <Link 
                      key={aIdx} 
                      to={`/service-areas/${adj.slug}`} 
                      className="neighborhood-pill neighborhood-pill-link"
                    >
                      {adj.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FAQ ACCORDION SECTION (MATCHING HOME PAGE FAQ STYLING)                */}
      {/* ========================================================================= */}
      <section className="section-padding faq-reference-section" id="area-faqs">
        <div className="container">
          
          {/* Header with Top Logo Icon */}
          <div className="section-header">
            <div className="faq-top-brand-icon">
              <img 
                src="/aerodome-logo.png" 
                alt="AeroDome Roofing" 
                className="faq-brand-logo-img" 
              />
            </div>

            <div className="eyebrow-red">
              {area.city.toUpperCase()} ROOFING QUESTIONS
            </div>

            <h2 className="section-title">
              FREQUENTLY ASKED
            </h2>
          </div>

          {/* Accordion Box */}
          <div className="faq-accordion-box">
            {area.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div key={fIdx} className={`faq-row-item ${isOpen ? 'row-expanded' : ''}`}>
                  <button
                    type="button"
                    className="faq-toggle-btn"
                    onClick={() => toggleFaq(fIdx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <span className="faq-action-symbol">
                      <Plus size={20} className="faq-plus-icon" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-ans-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. READY TO GET STARTED? & LEAD CAPTURE FORM                              */}
      {/* ========================================================================= */}
      <section className="section-padding service-areas-cta-form-section" id="area-estimate-form">
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

              <a href="tel:8165424103" className="cta-direct-phone-box">
                <div className="cta-phone-icon-wrap">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="cta-phone-label">Direct Line &bull; Free Local Inspection</span>
                  <span className="cta-phone-number">(816) 542-4103</span>
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
                        <label htmlFor="area-full-name" className="form-label-white">Your Name *</label>
                        <input 
                          type="text" 
                          id="area-full-name" 
                          required 
                          placeholder="Your Name" 
                          className="form-control-dark"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="area-phone" className="form-label-white">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="area-phone" 
                          required 
                          placeholder="Phone Number" 
                          className="form-control-dark"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="area-email" className="form-label-white">Email Address</label>
                      <input 
                        type="email" 
                        id="area-email" 
                        placeholder="Email Address" 
                        className="form-control-dark"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="area-service-select" className="form-label-white">How Can We Help?</label>
                      <select 
                        id="area-service-select" 
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
                        id="area-commercial" 
                        checked={formData.isCommercial}
                        onChange={(e) => setFormData({ ...formData, isCommercial: e.target.checked })}
                        className="field-checkbox"
                      />
                      <label htmlFor="area-commercial" className="consent-text">
                        Commercial
                      </label>
                    </div>

                    <div className="form-consent-wrap">
                      <input 
                        type="checkbox" 
                        id="area-consent" 
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="field-checkbox"
                        required
                      />
                      <label htmlFor="area-consent" className="consent-text">
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
