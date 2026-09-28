import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  TrendingDown, 
  Award, 
  Clock, 
  Check, 
  Plus, 
  Minus, 
  Phone, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { getServiceDetail, servicesShowcase } from '../data/servicesData';

export default function ServiceDetailPage({ onOpenModal }) {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Load dynamic service data
  const service = getServiceDetail(serviceId);

  // Scroll to top when serviceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [serviceId]);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  // Estimate Form State
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    serviceRequested: service ? service.title : 'Roofing & Exteriors',
    consent: true
  });
  const [submitted, setSubmitted] = useState(false);

  // Update selected service in form when service changes
  useEffect(() => {
    if (service) {
      setFormData(prev => ({
        ...prev,
        serviceRequested: service.title
      }));
      setSubmitted(false);
    }
  }, [service]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;
    setSubmitted(true);
  };

  // Helper to render icon for "Why Aerodome" cards
  const renderWhyIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={20} />;
      case 'ShieldCheck': return <ShieldCheck size={20} />;
      case 'TrendingDown': return <TrendingDown size={20} />;
      case 'Award': return <Award size={20} />;
      case 'Clock': return <Clock size={20} />;
      default: return <ShieldCheck size={20} />;
    }
  };

  // If service not found, provide graceful fallback
  if (!service) {
    return (
      <div className="service-not-found-page">
        <div className="container text-center">
          <AlertCircle size={56} className="not-found-icon" />
          <h1 className="not-found-title">SERVICE NOT FOUND</h1>
          <p className="not-found-desc">
            We couldn't locate the service you were looking for. Please browse our comprehensive list of Calgary roofing and exterior services.
          </p>
          <div className="not-found-actions">
            <Link to="/services" className="btn-orange">
              <span>VIEW ALL SERVICES</span>
              <ChevronRight size={18} />
            </Link>
            <Link to="/" className="btn-outline-navy">
              <span>RETURN HOME</span>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }

  // Get related service objects
  const relatedServiceObjects = (service.relatedServices || [])
    .map(relId => servicesShowcase.find(s => s.id === relId))
    .filter(Boolean);

  return (
    <div className="service-detail-wrapper">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH BREADCRUMBS, HEADLINE & DUAL CTAS                   */}
      {/* ========================================================================= */}
      <section className="service-detail-hero">
        <div className="service-hero-bg">
          <img 
            src={service.image} 
            alt={service.imageAlt || service.title} 
            className="service-hero-img"
          />
          <div className="service-hero-overlay"></div>
        </div>

        <div className="container service-hero-container">
          {/* Breadcrumb */}
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <Link to="/services" className="breadcrumb-link">SERVICES</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <span className="breadcrumb-active">{service.breadcrumb || service.title}</span>
          </nav>

          {/* Eyebrow */}
          <div className="detail-hero-eyebrow">
            {service.eyebrow}
          </div>

          {/* Headline */}
          <h1 className="detail-hero-title">
            {service.heroHeadline || service.title}
          </h1>

          {/* Subtitle / Description */}
          <p className="detail-hero-desc">
            {service.description}
          </p>

          {/* Dual Action CTAs */}
          <div className="detail-hero-actions">
            <button 
              type="button" 
              className="btn-orange detail-hero-btn-primary"
              onClick={() => onOpenModal(`Service Detail: ${service.title}`)}
            >
              <span>GET FREE INSPECTION</span>
              <ArrowRight size={18} />
            </button>

            <a href="tel:4039184444" className="btn-hero-phone">
              <Phone size={17} className="btn-phone-icon" />
              <span>CALL (403) 918-4444</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TWO-COLUMN: WHY AERODOME & SCOPE OF WORK (LIGHT THEME)                 */}
      {/* ========================================================================= */}
      <section className="section-detail-features">
        <div className="container">
          <div className="features-two-col-grid">
            
            {/* Left Column: Why Aerodome */}
            <div className="features-left-col">
              <div className="eyebrow-red">
                {service.whyEyebrow}
              </div>
              <h2 className="section-col-heading">
                {service.whyHeading}
              </h2>

              <div className="why-cards-list">
                {service.whyItems.map((item, idx) => (
                  <div key={idx} className="why-card-item">
                    <div className="why-card-badge">
                      {renderWhyIcon(item.icon)}
                    </div>
                    <div className="why-card-text">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Scope of Work / What's Included */}
            <div className="features-right-col">
              <div className="eyebrow-red">
                {service.scopeEyebrow}
              </div>
              <h2 className="section-col-heading">
                {service.scopeHeading}
              </h2>

              <div className="included-items-grid">
                {service.includedItems.map((item, idx) => (
                  <div key={idx} className="included-card-item">
                    <div className="included-check-box">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="included-card-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE PROCESS / HOW IT WORKS (4 STEP CARDS - LIGHT THEME)                */}
      {/* ========================================================================= */}
      <section className="section-detail-process">
        <div className="container">
          <div className="section-header-center">
            <div className="eyebrow-red">
              {service.processEyebrow}
            </div>
            <h2 className="section-title-large">
              {service.processHeading}
            </h2>
            <div className="accent-divider-line"></div>
            <p className="section-subtitle-center">
              {service.processSubtitle}
            </p>
          </div>

          <div className="process-cards-grid">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="process-step-card">
                <div className="process-step-num-badge">
                  {step.step}
                </div>
                <h3 className="process-step-title">
                  {step.title}
                </h3>
                <p className="process-step-desc">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMMON QUESTIONS (FAQ ACCORDION - LIGHT THEME)                         */}
      {/* ========================================================================= */}
      <section className="section-detail-faqs">
        <div className="container container-narrow">
          <div className="section-header-center">
            <div className="eyebrow-red">
              {service.faqEyebrow}
            </div>
            <h2 className="section-title-large">
              {service.faqHeading}
            </h2>
            <div className="accent-divider-line"></div>
          </div>

          <div className="faqs-accordion-list">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-accordion-item ${isOpen ? 'faq-item-open' : ''}`}
                >
                  <button 
                    type="button" 
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className="faq-action-symbol">
                      <Plus size={18} className={`faq-plus-icon ${isOpen ? 'icon-rotated' : ''}`} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p className="faq-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LIGHT BRAND MARQUEE RIBBON DIVIDER                                     */}
      {/* ========================================================================= */}
      <div className="detail-brand-marquee">
        <div className="brand-marquee-track">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="brand-marquee-unit">
              <img 
                src="/aerodome-logo.png" 
                alt="AeroDome Logo" 
                className="brand-marquee-logo" 
              />
              <span className="brand-marquee-text">AERODOME CONTRACTING SOLUTIONS</span>
              <span className="brand-marquee-dot">&bull;</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. YOU MAY ALSO NEED (RELATED SERVICES - LIGHT THEME)                    */}
      {/* ========================================================================= */}
      {/* <section className="section-detail-related">
        <div className="container">
          <div className="section-header-center">
            <div className="eyebrow-red">EXPLORE MORE</div>
            <h2 className="section-title-large">YOU MAY ALSO NEED</h2>
            <div className="accent-divider-line"></div>
          </div>

          <div className="related-services-grid">
            {relatedServiceObjects.map((rel, idx) => (
              <Link 
                key={rel.id || idx} 
                to={`/services/${rel.id}`}
                className="related-service-card"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
              >
                <div className="related-card-content">
                  <h3 className="related-card-title">{rel.title}</h3>
                  <div className="related-card-link">
                    <span>Learn more</span>
                    <ChevronRight size={16} className="related-link-arrow" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* ========================================================================= */}
      {/* 7. READY TO GET STARTED? & LEAD CAPTURE FORM (LIGHT THEME SECTION)        */}
      {/* ========================================================================= */}
      <section className="section-detail-cta-form" id="estimate-form">
        <div className="container">
          <div className="cta-form-two-col">
            
            {/* Left Column: Brand & Copy */}
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

            {/* Right Column: Signature Floating Dark Lead Form Card */}
            <div className="cta-form-col">
              <div className="lead-card-dark">
                <h3 className="lead-card-title">GET MY FREE ESTIMATE</h3>
                <p className="lead-card-sub">
                  Guaranteed flat-rate pricing &bull; 100% Free on-site inspection
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
                        <label htmlFor="detail-first-name" className="form-label-white">First Name *</label>
                        <input 
                          type="text" 
                          id="detail-first-name" 
                          required 
                          placeholder="Your Name" 
                          className="form-control-dark"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="detail-phone" className="form-label-white">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="detail-phone" 
                          required 
                          placeholder="(403) 000-0000" 
                          className="form-control-dark"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="detail-email" className="form-label-white">Email Address</label>
                      <input 
                        type="email" 
                        id="detail-email" 
                        placeholder="you@example.com" 
                        className="form-control-dark"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="detail-service-select" className="form-label-white">How Can We Help?</label>
                      <select 
                        id="detail-service-select" 
                        className="form-control-dark"
                        value={formData.serviceRequested}
                        onChange={(e) => setFormData({ ...formData, serviceRequested: e.target.value })}
                      >
                        {servicesShowcase.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="General Exterior Inquiry">Other Exterior Services</option>
                      </select>
                    </div>

                    <div className="form-consent-wrap">
                      <input 
                        type="checkbox" 
                        id="detail-consent" 
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="field-checkbox"
                        required
                      />
                      <label htmlFor="detail-consent" className="consent-text">
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

      {/* ========================================================================= */}
      {/* 8. SLEEK DARK MARQUEE RIBBON BEFORE GLOBAL FOOTER                         */}
      {/* ========================================================================= */}
      <div className="detail-brand-marquee marquee-dark-bottom">
        <div className="brand-marquee-track">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="brand-marquee-unit">
              <img 
                src="/aerodome-logo.png" 
                alt="AeroDome Logo" 
                className="brand-marquee-logo-light" 
              />
              <span className="brand-marquee-text-light">AERODOME CONTRACTING SOLUTIONS</span>
              <span className="brand-marquee-dot-light">&bull;</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
