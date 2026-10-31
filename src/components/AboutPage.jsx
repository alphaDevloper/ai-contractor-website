import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight,
  Phone, 
  CheckCircle, 
  ShieldCheck, 
  Award, 
  DollarSign, 
  HardHat, 
  Flag, 
  Eye,
  Check
} from 'lucide-react';
import heroHouseImg from '../assets/about_residential_home.jpg';
import founderImg from '../assets/owner.webp';
import logoImg from '../assets/logo.png';
import {
  aboutHero,
  aboutStats,
  aboutOrigin,
  aboutFounder,
  aboutValues,
  aboutMarqueeText,
  aboutCta,
} from '../data/aboutData';

/* ==========================================================================
   PARTNER & CERTIFICATION BRAND LOGO SVGS (HIGH DEFINITION)
   ========================================================================== */

function IndianaMetalLogo() {
  return (
    <svg viewBox="0 0 170 46" height="38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Indiana Metal">
      <path d="M12 34 L22 8 L30 20 L38 8 L48 34" stroke="#DC2626" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 26 L38 26" stroke="#DC2626" strokeWidth="3" strokeLinecap="round"/>
      <text x="56" y="24" fill="#DC2626" fontFamily="Arial Black, Impact, sans-serif" fontSize="19" fontWeight="900" letterSpacing="-0.5">Indiana</text>
      <text x="56" y="39" fill="#1E293B" fontFamily="sans-serif" fontSize="12" fontWeight="800" letterSpacing="2">METAL</text>
    </svg>
  );
}

function ProContractorLogo() {
  return (
    <svg viewBox="0 0 145 46" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Pro Contractor">
      <rect x="4" y="5" width="36" height="36" rx="6" fill="#F97316"/>
      <path d="M14 23 L20 29 L30 17" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="46" y="23" fill="#0F172A" fontFamily="Impact, Arial Black, sans-serif" fontSize="18" fontWeight="900" letterSpacing="0.5">PRO</text>
      <text x="46" y="38" fill="#F97316" fontFamily="sans-serif" fontSize="10.5" fontWeight="800" letterSpacing="1.2">CONTRACTOR</text>
    </svg>
  );
}

function CertifiedContractorLogo() {
  return (
    <svg viewBox="0 0 165 46" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Certified Contractor">
      <circle cx="23" cy="23" r="18" fill="#059669" fillOpacity="0.12" stroke="#059669" strokeWidth="2.5"/>
      <path d="M16 23 L21 28 L30 17" stroke="#059669" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="49" y="22" fill="#059669" fontFamily="Impact, Arial Black, sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.8">CERTIFIED</text>
      <text x="49" y="37" fill="#1E293B" fontFamily="sans-serif" fontSize="10" fontWeight="800" letterSpacing="1.5">CONTRACTOR</text>
    </svg>
  );
}

function JamesHardieLogo() {
  return (
    <svg viewBox="0 0 175 46" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="James Hardie">
      <circle cx="21" cy="23" r="18" fill="#047857"/>
      <text x="21" y="30" fill="#FFFFFF" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="bold">JH</text>
      <text x="48" y="30" fill="#047857" fontFamily="Arial Black, Impact, sans-serif" fontSize="19" fontWeight="900" letterSpacing="-0.5">JamesHardie</text>
    </svg>
  );
}

function NeighborhoodFaveLogo() {
  return (
    <svg viewBox="0 0 165 46" height="38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Neighborhood Fave">
      <rect x="2" y="3" width="40" height="40" rx="8" fill="#10B981"/>
      <path d="M22 14 C18 10 12 13 12 18 C12 25 22 31 22 31 C22 31 32 25 32 18 C32 13 26 10 22 14 Z" fill="#FFFFFF"/>
      <text x="49" y="21" fill="#0F172A" fontFamily="sans-serif" fontSize="9.5" fontWeight="800" letterSpacing="0.8">NEIGHBORHOOD</text>
      <text x="49" y="38" fill="#10B981" fontFamily="Impact, Arial Black, sans-serif" fontSize="18" fontWeight="900" letterSpacing="0.5">FAVE</text>
    </svg>
  );
}

/* ==========================================================================
   MARQUEE CONTINUOUS TICKER COMPONENT
   ========================================================================== */

function AeroDomeMarquee() {
  const items = Array(5).fill(aboutMarqueeText);

  return (
    <div className="about-marquee-ribbon" aria-hidden="true">
      <div className="about-marquee-track">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="about-marquee-item">
            <img src={logoImg} alt="" className="about-marquee-logo" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN ABOUT PAGE COMPONENT
   ========================================================================== */

export default function AboutPage({ onOpenModal }) {
  // Lead form state for the bottom CTA card
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: 'Residential Roof Replacement',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="about-exact-page">

      {/* =================================================================== */}
      {/* 1. HERO SECTION                                                     */}
      {/* =================================================================== */}
      <section className="about-exact-hero">
        <div className="about-exact-hero-bg-wrap">
          <img 
            src={heroHouseImg} 
            alt="Residential home with roofing crew truck in driveway" 
            className="about-exact-hero-img" 
          />
          <div className="about-exact-hero-overlay"></div>
        </div>

        <div className="container about-exact-hero-container">
          <nav className="about-exact-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-arrow">&rsaquo;</span>
            <span className="breadcrumb-active">ABOUT US</span>
          </nav>

          <div className="about-exact-eyebrow">
            {aboutHero.eyebrow}
          </div>

          <h1 className="about-exact-title">
            {aboutHero.titleLine1}<br />{aboutHero.titleLine2}
          </h1>

          <p className="about-exact-subtitle">
            {aboutHero.subtitle}
          </p>
        </div>

        {/* Hero Bottom Trust Bar */}
        <div className="about-exact-hero-bar">
          <div className="container about-exact-hero-bar-inner">
            <span>{aboutHero.trustBar[0]}</span>
            <span className="bar-bullet">&bull;</span>
            <span>{aboutHero.trustBar[1]}</span>
            <span className="bar-bullet">&bull;</span>
            <span>{aboutHero.trustBar[2]}</span>
            <span className="bar-bullet">&bull;</span>
            <span>{aboutHero.trustBar[3]}</span>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. GEOMETRIC BACKGROUND: LOGOS & METRICS STRIP                      */}
      {/* =================================================================== */}
      <div className="about-geometric-bg">

        {/* Brand & Certification Logos Strip */}
        <section className="about-logos-strip">
          <div className="container">
            <div className="about-logos-grid">
              <div className="about-logo-item"><IndianaMetalLogo /></div>
              <div className="about-logo-item"><ProContractorLogo /></div>
              <div className="about-logo-item"><CertifiedContractorLogo /></div>
              <div className="about-logo-item"><JamesHardieLogo /></div>
              <div className="about-logo-item"><NeighborhoodFaveLogo /></div>
            </div>
          </div>
        </section>

        {/* 4 Stats / Metrics Cards */}
        <section className="about-stats-strip">
          <div className="container">
            <div className="about-stats-grid">
              
              <div className="about-stat-card">
                <div className="about-stat-num">{aboutStats[0].number}</div>
                <div className="about-stat-label">{aboutStats[0].label}</div>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-num">{aboutStats[1].number}</div>
                <div className="about-stat-label">{aboutStats[1].label}</div>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-num">
                  {aboutStats[2].number}<span className="accent-star">{aboutStats[2].accentStar}</span>
                </div>
                <div className="about-stat-label">{aboutStats[2].label}</div>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-num">{aboutStats[3].number}</div>
                <div className="about-stat-label">{aboutStats[3].label}</div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* =================================================================== */}
      {/* 3. SECTION: "BUILT ON TRUST & CRAFT"                                */}
      {/* =================================================================== */}
      <section className="about-origin-section">
        <div className="container">
          <div className="about-origin-grid">
            
            {/* Left Content */}
            <div>
              <div className="about-exact-eyebrow">{aboutOrigin.eyebrow}</div>
              <h2 className="about-origin-heading">
                {aboutOrigin.headingLine1}<br />{aboutOrigin.headingLine2}
              </h2>
              <p className="about-origin-desc">
                {aboutOrigin.description}
              </p>

              <div className="about-origin-btns">
                <button 
                  type="button" 
                  onClick={() => onOpenModal('About Page: Origin Estimate')}
                  className="about-btn-orange"
                >
                  {aboutOrigin.primaryBtn}
                </button>
                <Link to="/gallery" className="about-btn-outline">
                  {aboutOrigin.secondaryBtn}
                </Link>
              </div>
            </div>

            {/* Right: Nolan Photo with Floating Dark Badge (Matching Home Page Style) */}
            <div className="owner-photo-wrapper">
              <img 
                src={founderImg} 
                alt="Nolan Thrace, founder of AeroDome Roofing Calgary" 
                className="owner-photo-img" 
              />
              
              {/* Overlapping Dark Badge on Bottom-Left (Exact Home Page Style) */}
              <div className="owner-floating-badge">
                <span className="owner-badge-years">14+</span>
                <div className="owner-badge-text">
                  <strong>YEARS IN BUSINESS</strong>
                  <span>FOUNDED 2011</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. SECTION: "MEET THE FOUNDER"                                      */}
      {/* =================================================================== */}
      <section className="about-founder-section">
        <div className="container">
          
          <div className="about-founder-grid">
            
            {/* Left: Nolan Photo with Floating Dark Badge (Matching Home Page Style) */}
            <div className="owner-photo-wrapper">
              <img 
                src={founderImg} 
                alt="Nolan Thrace, founder of AeroDome Roofing Calgary" 
                className="owner-photo-img" 
              />
              
              {/* Overlapping Dark Badge on Bottom-Left (Exact Home Page Style) */}
              <div className="owner-floating-badge">
                <span className="owner-badge-years">14+</span>
                <div className="owner-badge-text">
                  <strong>YEARS IN BUSINESS</strong>
                  <span>FOUNDED 2011</span>
                </div>
              </div>
            </div>

            {/* Right: Founder Content */}
            <div>
              <div className="about-exact-eyebrow">{aboutFounder.eyebrow}</div>
              <h2 className="about-founder-heading">
                {aboutFounder.headingLine1}<br />{aboutFounder.headingLine2}
              </h2>
              
              <p className="about-founder-desc">
                {aboutFounder.paragraphOne}
              </p>
              
              <p className="about-founder-desc">
                {aboutFounder.paragraphTwo}
              </p>

              <button 
                type="button" 
                onClick={() => onOpenModal('About Page: Founder Inquiry')}
                className="about-founder-btn"
              >
                <span>{aboutFounder.ctaBtn}</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Mission & Vision Cards (Side by Side) */}
          <div className="about-mission-vision-grid">
            
            <div className="about-mv-card">
              <div className="about-mv-header">
                <div className="about-mv-icon-box">
                  <Flag size={18} />
                </div>
                <div className="about-mv-title">{aboutFounder.mission.title}</div>
              </div>
              <p className="about-mv-text">
                {aboutFounder.mission.text}
              </p>
            </div>

            <div className="about-mv-card">
              <div className="about-mv-header">
                <div className="about-mv-icon-box">
                  <Eye size={18} />
                </div>
                <div className="about-mv-title">{aboutFounder.vision.title}</div>
              </div>
              <p className="about-mv-text">
                {aboutFounder.vision.text}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. SECTION: "THE VALUES WE WORK BY"                                 */}
      {/* =================================================================== */}
      <section className="about-values-section">
        <div className="container">
          
          <div className="about-values-eyebrow">{aboutValues.eyebrow}</div>
          <h2 className="about-values-heading">{aboutValues.heading}</h2>
          <p className="about-values-sub">
            {aboutValues.subtext}
          </p>

          <div className="about-values-grid">
            
            {/* Card 1 */}
            <div className="about-value-card">
              <div className="about-value-icon-box">
                <DollarSign size={28} />
              </div>
              <h3 className="about-value-title">{aboutValues.cards[0].title}</h3>
              <p className="about-value-desc">
                {aboutValues.cards[0].description}
              </p>
            </div>

            {/* Card 2 */}
            <div className="about-value-card">
              <div className="about-value-icon-box">
                <Award size={28} />
              </div>
              <h3 className="about-value-title">{aboutValues.cards[1].title}</h3>
              <p className="about-value-desc">
                {aboutValues.cards[1].description}
              </p>
            </div>

            {/* Card 3 */}
            <div className="about-value-card">
              <div className="about-value-icon-box">
                <HardHat size={28} />
              </div>
              <h3 className="about-value-title">{aboutValues.cards[2].title}</h3>
              <p className="about-value-desc">
                {aboutValues.cards[2].description}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. UPPER SCROLLING TICKER RIBBON                                    */}
      {/* =================================================================== */}
      <AeroDomeMarquee />

      {/* =================================================================== */}
      {/* 7. SECTION: "GET YOUR FREE INSPECTION TODAY" CTA                    */}
      {/* =================================================================== */}
      <section className="about-final-cta-section about-geometric-bg">
        <div className="container">
          <div className="about-final-cta-grid">
            
            {/* Left Content */}
            <div>
              <div className="about-cta-logo-wrap">
                <img src={logoImg} alt="AeroDome Roofing" className="about-cta-logo-img" />
              </div>
              
              <div className="about-cta-eyebrow">{aboutCta.eyebrow}</div>
              <h2 className="about-cta-heading">
                {aboutCta.headingLine1}<br />{aboutCta.headingLine2}
              </h2>
              
              <p className="about-cta-desc">
                {aboutCta.description}
              </p>
            </div>

            {/* Right Dark Floating Form Card - Styled matching Hero CTA */}
            <div className="lead-card-dark">
              <h2 className="lead-card-title">{aboutCta.formCard.title}</h2>
              <p className="lead-card-sub">
                {aboutCta.formCard.subtitle}
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle size={44} color="#10B981" />
                  <h3>Estimate Request Sent!</h3>
                  <p>Thanks, {formData.firstName}. Nolan Thrace or our senior estimator will call you at <strong>{formData.phone}</strong> within 15 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="about-first-name">First Name *</label>
                      <input 
                        type="text" 
                        id="about-first-name" 
                        required 
                        placeholder="John" 
                        className="form-control-dark"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="about-last-name">Last Name</label>
                      <input 
                        type="text" 
                        id="about-last-name" 
                        placeholder="Smith" 
                        className="form-control-dark"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="about-phone-input">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="about-phone-input" 
                        required 
                        placeholder="(403) 555-0192" 
                        className="form-control-dark"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="about-email-input">Email Address</label>
                      <input 
                        type="email" 
                        id="about-email-input" 
                        placeholder="john@example.com" 
                        className="form-control-dark"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label-white" htmlFor="about-service-select">Service Needed</label>
                    <select 
                      id="about-service-select" 
                      className="form-control-dark"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="Residential Roof Replacement">Residential Roof Replacement</option>
                      <option value="Hail & Storm Damage Restoration">Hail & Storm Damage Restoration</option>
                      <option value="Roof Repair & Leak Detection">Roof Repair & Leak Detection</option>
                      <option value="Eavestrough & Gutters">Eavestrough & Gutters</option>
                      <option value="Siding & Flashing">Siding & Flashing</option>
                      <option value="Skylight Installation">Skylight Installation</option>
                      <option value="Commercial Roofing">Commercial Roofing</option>
                    </select>
                  </div>


                  <button type="submit" className="btn-orange" style={{ width: '100%', marginTop: '8px' }}>
                    <span>{aboutCta.submitBtn}</span>
                    <ChevronRight size={20} />
                  </button>

                  <div className="hero-form-microcopy">
                    <ShieldCheck size={14} />
                    <span>{aboutCta.microcopy}</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 8. LOWER SCROLLING TICKER RIBBON                                    */}
      {/* =================================================================== */}
      <AeroDomeMarquee />

    </div>
  );
}
