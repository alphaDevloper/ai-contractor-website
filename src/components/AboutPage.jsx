import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Star, 
  Award, 
  CheckCircle, 
  ChevronRight, 
  ChevronDown, 
  Phone, 
  Mail, 
  User, 
  Wrench, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  HelpCircle,
  Home,
  Building2,
  CloudLightning,
  Hammer,
  AlertTriangle
} from 'lucide-react';
import TrustBar from './TrustBar';

export default function AboutPage({ onOpenModal }) {
  // Hero Lead Form State (Same as Home Hero)
  const [heroForm, setHeroForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: 'Residential Roof Replacement'
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // Accordion 1: Why Choose AeroDome (5 items, 1st active by default)
  const [activeWhyIdx, setActiveWhyIdx] = useState(0);

  // Accordion 2: Frequently Asked Questions (5 items, 1st active by default)
  const [activeFaqIdx, setActiveFaqIdx] = useState(0);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (!heroForm.firstName || !heroForm.phone) return;
    setHeroSubmitted(true);
  };

  const whyChooseItems = [
    {
      title: "SUPERIOR CRAFTSMANSHIP",
      content: "Every roof is installed strictly to manufacturer specifications by our permanent, in-house master roofers. We use a 6-nail high-wind application pattern, heavy-duty synthetic underlayment, and Class 4 impact protection built to endure Calgary's volatile weather."
    },
    {
      title: "TRANSPARENT PRICING & ZERO HIDDEN FEES",
      content: "We provide comprehensive line-item estimates detailing every square foot of decking, shingle, and flashing. What we quote is what you pay—no surprise add-ons, no pressure, and flexible 0% financing available up to 18 months."
    },
    {
      title: "PREMIUM IMPACT-RATED MATERIALS",
      content: "We partner directly with leading North American manufacturers including GAF, IKO, and CertainTeed. We specialize in hail-resistant Class 4 architectural shingles engineered specifically for Alberta's hailstorms."
    },
    {
      title: "100% IN-HOUSE CREWS (NO SUBCONTRACTORS)",
      content: "Unlike out-of-province storm chasers who subcontract their jobs to the lowest bidder, our full-time, COR™ safety-certified Calgary technicians handle your roof from start to finish with strict quality control."
    },
    {
      title: "10-YEAR SIGNED WORKMANSHIP WARRANTY",
      content: "In addition to manufacturer warranties of up to 50 years, founder Marcus Delgray personally signs our 10-Year Workmanship Warranty certificate for every single full roof replacement."
    }
  ];

  const faqItems = [
    {
      question: "How long has AeroDome Roofing been serving the Calgary area?",
      answer: "AeroDome Roofing was founded in Calgary in 2011 by Marcus Delgray. Over the past 14 years, we have successfully replaced and repaired over 3,200 residential and commercial roofs across Calgary, Cochrane, Airdrie, Chestermere, and the Foothills."
    },
    {
      question: "Do you hire subcontractors or use your own dedicated crews?",
      answer: "We maintain a strict zero-subcontracting policy. 100% of our roofing work is completed by our permanent, full-time, COR™ safety-certified Calgary technicians who take true pride in their craftsmanship."
    },
    {
      question: "What warranties do you provide on new roof replacements?",
      answer: "You receive dual warranty coverage: leading manufacturer product warranties (up to 50-year non-prorated warranties on GAF Master Elite® and IKO systems) PLUS our exclusive signed 10-Year Workmanship Warranty from Marcus Delgray."
    },
    {
      question: "Can you assist with hail and storm damage insurance claims?",
      answer: "Yes! We specialize in Calgary hail and storm restoration. We conduct photo and drone damage mapping, build comprehensive Xactimate® insurance claims, and meet directly with your insurance adjuster on-site to ensure your full roof replacement is approved."
    },
    {
      question: "How quickly can you inspect an active roof leak or storm emergency?",
      answer: "For active leaks and severe storm emergencies, our rapid-response dry-in crew provides same-day or 24-hour emergency tarping across Calgary to prevent interior water damage."
    }
  ];

  const serviceAreas = [
    "Calgary NW",
    "Calgary SW",
    "Calgary SE",
    "Calgary NE",
    "Airdrie",
    "Cochrane",
    "Chestermere",
    "Okotoks",
    "High River",
    "Strathmore"
  ];

  return (
    <div className="about-page-wrapper">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH HOME'S FORM & BACKGROUND (IMAGE REMOVED)             */}
      {/* ========================================================================= */}
      <section className="about-hero-section">
        {/* Background Graphic & Backdrop (Same as Home Hero) */}
        <div className="about-hero-bg-wrapper">
          <img 
            src="/images/hero_roofing.jpg" 
            alt="AeroDome Roofing contractor residential home in Calgary" 
            className="about-hero-bg-img"
          />
          <div className="about-hero-overlay"></div>
        </div>

        <div className="container about-hero-container">
          <div className="about-hero-grid">
            
            {/* Left Content */}
            <div className="about-hero-content">
              <div className="eyebrow-red about-hero-eyebrow">
                ABOUT AERODOME ROOFING CONTRACTORS
              </div>

              <h1 className="about-hero-headline">
                EXPERIENCED & TRUSTED ROOFING EXPERTS IN CALGARY
              </h1>

              {/* Google Rating Badge */}
              <div className="about-hero-rating-badge">
                <div className="google-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>
                <span className="rating-text"><strong>5.0★ ON GOOGLE</strong> (312+ REVIEWS)</span>
              </div>

              {/* 3 Checkmark Bullet Items */}
              <div className="about-hero-checks-list">
                <div className="about-hero-check-item">
                  <CheckCircle size={18} className="check-icon-orange" />
                  <span>10-Year Workmanship Warranty &bull; Dual Lifetime Manufacturer Warranty</span>
                </div>
                <div className="about-hero-check-item">
                  <CheckCircle size={18} className="check-icon-orange" />
                  <span>100% In-House Calgary Crew &bull; Strict Zero-Subcontracting Policy</span>
                </div>
                <div className="about-hero-check-item">
                  <CheckCircle size={18} className="check-icon-orange" />
                  <span>COR™ Safety Certified &bull; GAF Master Elite® & IKO ShieldPRO®</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Dark Lead Form Card (Matching Home Hero) */}
            <div className="about-hero-form-col">
              <div className="lead-card-dark">
                <h2 className="lead-card-title">GET A FREE QUOTE</h2>
                <p className="lead-card-sub">
                  Fast, detailed flat-rate proposal &bull; 100% free with zero obligation.
                </p>

                {heroSubmitted ? (
                  <div className="form-success-box">
                    <CheckCircle size={44} color="#10B981" />
                    <h3>Estimate Request Sent!</h3>
                    <p>Thanks, {heroForm.firstName}. Marcus Delgray or our senior Calgary estimator will call you at <strong>{heroForm.phone}</strong> within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit}>
                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label-white" htmlFor="about-hero-first-name">First Name *</label>
                        <input 
                          type="text" 
                          id="about-hero-first-name" 
                          required 
                          placeholder="John" 
                          className="form-control-dark"
                          value={heroForm.firstName}
                          onChange={(e) => setHeroForm({...heroForm, firstName: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label-white" htmlFor="about-hero-last-name">Last Name</label>
                        <input 
                          type="text" 
                          id="about-hero-last-name" 
                          placeholder="Smith" 
                          className="form-control-dark"
                          value={heroForm.lastName}
                          onChange={(e) => setHeroForm({...heroForm, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label-white" htmlFor="about-hero-phone">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="about-hero-phone" 
                          required 
                          placeholder="(403) 555-0192" 
                          className="form-control-dark"
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm({...heroForm, phone: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label-white" htmlFor="about-hero-email">Email Address</label>
                        <input 
                          type="email" 
                          id="about-hero-email" 
                          placeholder="john@example.com" 
                          className="form-control-dark"
                          value={heroForm.email}
                          onChange={(e) => setHeroForm({...heroForm, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label-white" htmlFor="about-hero-service">Service Needed</label>
                      <select 
                        id="about-hero-service" 
                        className="form-control-dark"
                        value={heroForm.service}
                        onChange={(e) => setHeroForm({...heroForm, service: e.target.value})}
                      >
                        <option value="Residential Roof Replacement">Residential Roof Replacement</option>
                        <option value="Storm & Hail Damage Repair">Storm & Hail Damage Repair</option>
                        <option value="Roof Repair & Leak Detection">Roof Repair & Leak Detection</option>
                        <option value="Commercial Flat Roofing">Commercial Flat Roofing</option>
                        <option value="Siding, Soffit & Gutters">Siding, Soffit & Gutters</option>
                        <option value="Free 21-Point Roof Inspection">Free 21-Point Roof Inspection</option>
                      </select>
                    </div>

                    <button type="submit" className="btn-orange" style={{ width: '100%', marginTop: '8px' }}>
                      <span>GET AN ESTIMATE</span>
                      <ChevronRight size={20} />
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
      {/* 2. TRUST & MANUFACTURER LOGOS STRIP                                       */}
      {/* ========================================================================= */}
      <div className="about-trust-strip">
        <TrustBar />
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION 1: ABOUT AERODOME ROOFING (2 COLUMNS)                          */}
      {/* ========================================================================= */}
      <section className="section-padding about-intro-section">
        <div className="container">
          <div className="about-two-col-grid">
            
            {/* Left Image: Residential Home in Calgary */}
            <div className="about-img-box">
              <div className="about-img-wrapper">
                <img 
                  src="/images/about_residential_home.jpg" 
                  alt="AeroDome residential roofing project in Calgary neighborhood" 
                  className="about-feature-img"
                />
                <div className="about-img-tag">
                  <span>OVER 3,200 ROOFS INSTALLED</span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="about-text-box">
              <div className="eyebrow-red">WHO WE ARE</div>
              <h2 className="about-section-heading">ABOUT AERODOME ROOFING</h2>
              <p className="about-body-paragraph">
                Founded in Calgary in 2011, AeroDome Roofing is Alberta's leading residential and commercial roofing contractor specializing in extreme-weather, hail-resistant architectural systems.
              </p>
              <p className="about-body-paragraph">
                We believe homeowners deserve complete honesty and uncompromised craftsmanship. While out-of-province storm chasers descend on Calgary after summer hail storms, take deposits, and subcontract to transient labor, AeroDome remains right here with a permanent, full-time local workforce.
              </p>
              <p className="about-body-paragraph">
                Every roof we build is engineered specifically to withstand 110 km/h Chinook wind gusts, severe freeze-thaw cycles, and heavy Rocky Mountain snow loads.
              </p>
              
              <div className="about-btn-wrap">
                <button 
                  type="button" 
                  onClick={() => onOpenModal('About Intro CTA')} 
                  className="btn-orange"
                >
                  <span>LEARN MORE ABOUT OUR PROCESS</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 2: OUR STORY (FULL-WIDTH ATMOSPHERIC BANNER)                    */}
      {/* ========================================================================= */}
      <section className="section-padding dark-banner-section story-banner">
        <div className="container">
          <div className="banner-content-box">
            <div className="banner-eyebrow">OUR HERITAGE</div>
            <h2 className="banner-heading">
              OUR STORY: FROM HUMBLE BEGINNINGS TO A TRUSTED LEADER
            </h2>
            <div className="banner-divider"></div>
            <p className="banner-text">
              In 2011, founder Marcus Delgray started AeroDome Roofing with a single pickup truck, two safety harnesses, and a steadfast principle: <em>we will never subcontract a single roof.</em>
            </p>
            <p className="banner-text">
              Witnessing firsthand how transient contractors cut corners on underlayment and rushed installations in Calgary's volatile weather, Marcus set out to build a different kind of roofing company. Over the past 14 years, our commitment to safety, continuous technician training, and transparent line-item pricing has propelled AeroDome into one of Calgary's most respected roofing contractors.
            </p>
            <p className="banner-text">
              Today, our fleet covers Calgary, Airdrie, Cochrane, Okotoks, and the Foothills, backed by hundreds of 5-star reviews and thousands of protected families.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 3: OUR MISSION (FULL-WIDTH STATEMENT)                           */}
      {/* ========================================================================= */}
      <section className="section-padding mission-section">
        <div className="container">
          <div className="mission-content-box">
            <div className="eyebrow-red">CORE VALUES</div>
            <h2 className="about-section-heading center-heading">
              OUR MISSION: QUALITY, INTEGRITY, AND SERVICE EXCELLENCE
            </h2>
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon-wrap">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="mission-card-title">UNCOMPROMISING QUALITY</h3>
                <p className="mission-card-desc">
                  We install only Class 4 hail-rated shingles, premium synthetic underlayment, and 6-nail high-wind patterns engineered specifically for Calgary's harsh climate.
                </p>
              </div>

              <div className="mission-card">
                <div className="mission-icon-wrap">
                  <CheckCircle size={28} />
                </div>
                <h3 className="mission-card-title">ABSOLUTE INTEGRITY</h3>
                <p className="mission-card-desc">
                  Honest line-item pricing with zero surprise charges. If your roof only needs a repair, we will never push for a full replacement.
                </p>
              </div>

              <div className="mission-card">
                <div className="mission-icon-wrap">
                  <Award size={28} />
                </div>
                <h3 className="mission-card-title">SERVICE EXCELLENCE</h3>
                <p className="mission-card-desc">
                  From rapid 2-hour estimate responses to our Zero-Nail Lawn Guarantee and signed 10-Year Workmanship Warranty, your peace of mind is guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 4: OUR TEAM (EXPERTISE YOU CAN TRUST)                          */}
      {/* ========================================================================= */}
      <section className="section-padding about-team-section">
        <div className="container">
          <div className="about-two-col-grid team-grid-reverse">
            
            {/* Left Content */}
            <div className="about-text-box">
              <div className="eyebrow-red">PERMANENT IN-HOUSE EXPERTS</div>
              <h2 className="about-section-heading">OUR TEAM: EXPERTISE YOU CAN TRUST</h2>
              <p className="about-body-paragraph">
                The foundation of our superior quality is our crew. While many roofing companies hire day laborers and subcontractors without safety credentials, every AeroDome roofer is a permanent, full-time employee.
              </p>
              <p className="about-body-paragraph">
                Our technicians undergo extensive ongoing certification with GAF, IKO, and the Alberta Construction Safety Association (COR™). They are trained in fall protection, complex architectural valley fabrication, and advanced attic ventilation systems.
              </p>
              <p className="about-body-paragraph">
                Founder Marcus Delgray personally conducts on-site quality checks before any job is signed off, guaranteeing that your roof meets our rigorous standards.
              </p>
              <div className="about-btn-wrap">
                <button 
                  type="button" 
                  onClick={() => onOpenModal('Team Consultation CTA')} 
                  className="btn-orange"
                >
                  <span>MEET OUR SPECIALISTS</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Image: Crew in front of truck */}
            <div className="about-img-box">
              <div className="about-img-wrapper">
                <img 
                  src="/images/service_crew.jpg" 
                  alt="AeroDome certified roofing crew in front of company fleet in Calgary" 
                  className="about-feature-img"
                />
                <div className="team-badge-overlay">
                  <ShieldCheck size={20} className="badge-check-icon" />
                  <span>100% PERMANENT LOCAL CREW &bull; COR™ CERTIFIED</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION 5: OUR SERVICES: COMPREHENSIVE ROOFING SOLUTIONS               */}
      {/* ========================================================================= */}
      <section className="section-padding dark-banner-section services-four-grid-section">
        <div className="container">
          
          <div className="section-header-dark">
            <div className="banner-eyebrow">WHAT WE DO</div>
            <h2 className="banner-heading">OUR SERVICES: COMPREHENSIVE ROOFING SOLUTIONS</h2>
            <p className="services-section-sub">
              Engineered to protect Calgary homes and commercial properties through Alberta's most demanding weather conditions.
            </p>
          </div>

          <div className="services-card-grid">
            
            {/* Service 1 */}
            <div className="service-solution-card">
              <div className="service-solution-icon">
                <Home size={30} />
              </div>
              <h3 className="service-solution-title">RESIDENTIAL ROOFING</h3>
              <p className="service-solution-desc">
                Complete architectural shingle replacements, hail-rated Class 4 systems, ice-and-water shield installations, and ridge ventilation optimization.
              </p>
              <button 
                type="button" 
                onClick={() => onOpenModal('Residential Service CTA')} 
                className="service-card-link-btn"
              >
                <span>Request Estimate</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Service 2 */}
            <div className="service-solution-card">
              <div className="service-solution-icon">
                <Building2 size={30} />
              </div>
              <h3 className="service-solution-title">COMMERCIAL ROOFING</h3>
              <p className="service-solution-desc">
                SBS 2-ply modified bitumen systems, TPO and EPDM single-ply flat membranes, commercial roof asset management, and leak remediation.
              </p>
              <button 
                type="button" 
                onClick={() => onOpenModal('Commercial Service CTA')} 
                className="service-card-link-btn"
              >
                <span>Request Estimate</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Service 3 */}
            <div className="service-solution-card">
              <div className="service-solution-icon">
                <Hammer size={30} />
              </div>
              <h3 className="service-solution-title">ROOF REPAIR & MAINTENANCE</h3>
              <p className="service-solution-desc">
                Precision leak pinpointing, chimney and skylight flashing repairs, missing shingle replacement, and seasonal 21-point roof tune-ups.
              </p>
              <button 
                type="button" 
                onClick={() => onOpenModal('Repair Service CTA')} 
                className="service-card-link-btn"
              >
                <span>Request Estimate</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Service 4 */}
            <div className="service-solution-card">
              <div className="service-solution-icon">
                <CloudLightning size={30} />
              </div>
              <h3 className="service-solution-title">STORM & HAIL RESTORATION</h3>
              <p className="service-solution-desc">
                Emergency leak tarping within hours, high-resolution hail dent scans, full Xactimate® insurance claim reports, and complete storm restoration.
              </p>
              <button 
                type="button" 
                onClick={() => onOpenModal('Storm Service CTA')} 
                className="service-card-link-btn"
              >
                <span>Request Estimate</span>
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 6: OUR COMMITMENT TO THE COMMUNITY                             */}
      {/* ========================================================================= */}
      <section className="section-padding community-section">
        <div className="container">
          <div className="community-content-box">
            <div className="eyebrow-red">GIVING BACK</div>
            <h2 className="about-section-heading center-heading">OUR COMMITMENT TO THE COMMUNITY</h2>
            <p className="community-lead-p">
              AeroDome Roofing isn't just an exterior contractor in Calgary—we are your neighbors. We believe that true success is measured by the positive impact we leave on the communities where we live and raise our families.
            </p>
            <div className="community-stats-row">
              <div className="community-stat-card">
                <span className="stat-number">14+</span>
                <span className="stat-label">Years of Calgary Service</span>
              </div>
              <div className="community-stat-card">
                <span className="stat-number">12</span>
                <span className="stat-label">Donated Roofs to Local Families</span>
              </div>
              <div className="community-stat-card">
                <span className="stat-number">8</span>
                <span className="stat-label">Youth Sports Teams Sponsored</span>
              </div>
              <div className="community-stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Calgary In-House Employees</span>
              </div>
            </div>
            <p className="community-sub-p">
              Through our annual AeroDome Community Shelter Initiative, we donate complete roof replacements to families facing hardship in Calgary and the Foothills. When you choose AeroDome, you support local families and youth programs right across Alberta.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION 7: WHY CHOOSE AERODOME ROOFING? (ANIMATED ACCORDION + PHOTO)   */}
      {/* ========================================================================= */}
      <section className="section-padding why-choose-about-section">
        <div className="container">
          <div className="about-two-col-grid">
            
            {/* Left: Happy Customer Photo */}
            <div className="about-img-box">
              <div className="about-img-wrapper">
                <img 
                  src="/images/about_happy_customer.jpg" 
                  alt="Delighted Calgary homeowners holding AeroDome Roofing yard sign" 
                  className="about-feature-img"
                />
                <div className="customer-review-badge">
                  <div className="badge-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" />
                    ))}
                  </div>
                  <span className="badge-quote">"Marcus and his crew finished our roof in one day. Not a single nail left on the lawn!"</span>
                  <span className="badge-author">— Dave & Karen M., NW Calgary</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Animated Accordion */}
            <div className="about-text-box">
              <div className="eyebrow-red">THE AERODOME ADVANTAGE</div>
              <h2 className="about-section-heading">WHY CHOOSE AERODOME ROOFING?</h2>
              <p className="about-body-paragraph">
                We combine 14 years of local expertise, master manufacturer certifications, and transparent communication to give you a stress-free roofing experience.
              </p>

              {/* Accordion List with Smooth Animation */}
              <div className="why-accordion-list">
                {whyChooseItems.map((item, idx) => {
                  const isOpen = activeWhyIdx === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`why-accordion-item ${isOpen ? 'accordion-open' : ''}`}
                    >
                      <button 
                        type="button" 
                        className="why-accordion-header"
                        onClick={() => setActiveWhyIdx(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <div className="accordion-title-wrap">
                          <CheckCircle2 size={18} className="accordion-check-icon" />
                          <span className="accordion-title-text">{item.title}</span>
                        </div>
                        <ChevronDown 
                          size={18} 
                          className={`accordion-chevron ${isOpen ? 'chevron-rotated' : ''}`} 
                        />
                      </button>

                      {/* Smooth CSS Grid Collapse Animation */}
                      <div className={`accordion-collapse-wrapper ${isOpen ? 'expanded' : ''}`}>
                        <div className="accordion-collapse-inner">
                          <div className="why-accordion-body">
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SECTION 8: FREQUENTLY ASKED QUESTIONS (ANIMATED FAQ ACCORDION)         */}
      {/* ========================================================================= */}
      <section className="section-padding dark-banner-section faq-about-section">
        <div className="container">
          
          <div className="section-header-dark">
            <div className="banner-eyebrow">COMMON QUESTIONS</div>
            <h2 className="banner-heading">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="services-section-sub">
              Everything you need to know about working with Calgary's most trusted roofing specialists.
            </p>
          </div>

          <div className="about-faq-container">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className={`about-faq-item ${isOpen ? 'faq-item-open' : ''}`}
                >
                  <button 
                    type="button" 
                    className="about-faq-question-btn"
                    onClick={() => setActiveFaqIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-question-title-wrap">
                      <HelpCircle size={18} className="faq-q-icon" />
                      <span className="faq-question-text">{item.question}</span>
                    </div>
                    <div className={`faq-toggle-icon ${isOpen ? 'toggle-open' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>

                  {/* Smooth CSS Grid Collapse Animation */}
                  <div className={`faq-collapse-wrapper ${isOpen ? 'expanded' : ''}`}>
                    <div className="faq-collapse-inner">
                      <div className="about-faq-answer-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. SECTION 9: GET IN TOUCH WITH US                                       */}
      {/* ========================================================================= */}
      <section className="section-padding get-in-touch-section">
        <div className="container">
          <div className="get-in-touch-card">
            <div className="touch-text-side">
              <h2 className="touch-heading">GET IN TOUCH WITH US</h2>
              <p className="touch-p">
                Have questions about your roof, active leaks, or storm damage insurance claims? Our Calgary team is ready to assist you with honest, expert advice.
              </p>
            </div>
            <div className="touch-actions-side">
              <a href="tel:+1333456789" className="btn-touch-phone">
                <Phone size={18} />
                <span>+1 333 456789</span>
              </a>
              <button 
                type="button" 
                onClick={() => onOpenModal('Get In Touch CTA')} 
                className="btn-orange"
              >
                <span>CONTACT OUR TEAM</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. SECTION 10: SCHEDULE CONSULTATION WITH CREW WORKING BACKGROUND        */}
      {/* ========================================================================= */}
      <section className="consultation-banner-section">
        {/* Background Crew Working Image & Deep Contrast Gradient Overlay */}
        <div className="consultation-bg-wrapper">
          <img 
            src="/images/service_crew.jpg" 
            alt="AeroDome certified roofing crew performing roof installation in Calgary" 
            className="consultation-bg-img"
          />
          <div className="consultation-overlay"></div>
        </div>

        <div className="container consultation-container">
          <div className="consultation-inner">
            <div className="banner-eyebrow">LIMITED TIME INSPECTIONS</div>
            <h2 className="consultation-heading">
              SCHEDULE A FREE ROOFING CONSULTATION IN CALGARY
            </h2>
            <p className="consultation-sub">
              Don't wait for the next Alberta storm season to find out if your roof is leaking. Book our certified 21-point roof & attic inspection today — 100% free and with zero sales pressure.
            </p>
            <button 
              type="button" 
              onClick={() => onOpenModal('Schedule Consultation CTA')} 
              className="btn-orange consultation-cta-btn"
            >
              <span>SCHEDULE CONSULTATION</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. SECTION 11: SERVICE AREAS: PROUDLY SERVING CALGARY & SURROUNDING      */}
      {/* ========================================================================= */}
      <section className="section-padding service-areas-about-section">
        <div className="container">
          
          <div className="section-header">
            <div className="eyebrow-red">LOCAL COVERAGE</div>
            <h2 className="about-section-heading center-heading">
              PROUDLY SERVING CALGARY & SURROUNDING AREAS
            </h2>
            <p className="section-subtitle">
              Fast, dedicated dispatch throughout the greater Calgary metropolitan area and foothills communities.
            </p>
          </div>

          <div className="areas-about-grid">
            
            {/* Map Representation Graphic */}
            <div className="service-map-card">
              <div className="map-inner-graphic">
                <svg viewBox="0 0 400 300" className="map-vector-svg">
                  <rect width="400" height="300" fill="#E8EEF4" />
                  {/* Rivers / Boundaries */}
                  <path d="M 50 20 Q 150 120 220 180 T 380 290" fill="none" stroke="#BAE6FD" strokeWidth="14" />
                  <path d="M 220 180 Q 280 140 370 120" fill="none" stroke="#BAE6FD" strokeWidth="8" />
                  {/* Grid Lines */}
                  <path d="M 0 80 H 400 M 0 160 H 400 M 0 240 H 400" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 100 0 V 300 M 200 0 V 300 M 300 0 V 300" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
                  {/* Radar Circles */}
                  <circle cx="200" cy="150" r="110" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" />
                  <circle cx="200" cy="150" r="60" fill="none" stroke="#EA580C" strokeWidth="2" strokeOpacity="0.6" />
                  {/* City Center Pin */}
                  <circle cx="200" cy="150" r="10" fill="#EA580C" />
                  <circle cx="200" cy="150" r="4" fill="#FFFFFF" />
                  <text x="200" y="130" textAnchor="middle" fill="#102A43" fontWeight="bold" fontSize="13" fontFamily="sans-serif">
                    CALGARY HQ (DOWNTOWN)
                  </text>
                  <text x="200" y="175" textAnchor="middle" fill="#EA580C" fontWeight="bold" fontSize="11" fontFamily="sans-serif">
                    45-MIN RAPID DISPATCH ZONE
                  </text>
                </svg>
                <div className="map-badge-corner">
                  <MapPin size={16} />
                  <span>CALGARY & FOOTHILLS</span>
                </div>
              </div>
            </div>

            {/* Location Pills Grid */}
            <div className="areas-pills-col">
              <div className="pills-two-col-grid">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="service-area-pill-item">
                    <MapPin size={16} className="pill-pin-icon" />
                    <span className="pill-text">{area}</span>
                  </div>
                ))}
              </div>

              <div className="areas-dispatch-note">
                <Clock size={18} className="dispatch-clock" />
                <span>Same-day on-site inspection available for all listed communities.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. EMERGENCY ORANGE ALERT BAR                                            */}
      {/* ========================================================================= */}
      <div className="emergency-alert-strip">
        <div className="container emergency-inner">
          <div className="emergency-text-wrap">
            <AlertTriangle size={22} className="emergency-triangle" />
            <span className="emergency-alert-text">
              EMERGENCY STORM & LEAK TARPING AVAILABLE 24/7 ACROSS CALGARY &bull; CALL +1 333 456789
            </span>
          </div>
          <a href="tel:+1333456789" className="emergency-call-btn">
            <span>CALL NOW</span>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PAGE SCOPED STYLING                                                       */}
      {/* ========================================================================= */}
      <style>{`
        .about-page-wrapper {
          width: 100%;
          overflow-x: hidden;
          background: var(--bg-canvas);
        }

        /* ------------------ HERO SECTION (MATCHING HOME) ------------------ */
        .about-hero-section {
          position: relative;
          min-height: 640px;
          display: flex;
          align-items: center;
          padding: 70px 0;
          overflow: hidden;
        }
        .about-hero-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .about-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg, 
            rgba(16, 42, 67, 0.94) 0%, 
            rgba(16, 42, 67, 0.88) 55%, 
            rgba(16, 42, 67, 0.72) 100%
          );
        }
        .about-hero-container {
          position: relative;
          z-index: 2;
        }
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }
        .about-hero-eyebrow {
          color: #FB923C;
          margin-bottom: 12px;
        }
        .about-hero-headline {
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 5.5vw, 4.4rem);
          line-height: 0.98;
          margin-bottom: 22px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          text-transform: uppercase;
        }

        /* Google Rating Badge */
        .about-hero-rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.95);
          padding: 8px 18px;
          border-radius: var(--radius-xs);
          margin-bottom: 25px;
          box-shadow: var(--shadow-md);
        }
        .google-icon-box {
          display: flex;
          align-items: center;
        }
        .rating-text {
          font-size: 0.85rem;
          color: var(--color-navy);
          letter-spacing: 0.05em;
        }
        .rating-text strong {
          color: var(--color-navy);
          font-size: 0.95rem;
        }

        /* Hero Checks List */
        .about-hero-checks-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .about-hero-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #F8FAFC;
          font-size: 1rem;
          font-weight: 500;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        .check-icon-orange {
          color: var(--color-accent);
          flex-shrink: 0;
        }

        /* Right Floating Lead Form Card */
        .about-hero-form-col {
          display: flex;
          justify-content: flex-end;
        }
        .about-hero-form-col .lead-card-dark {
          width: 100%;
          max-width: 440px;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .hero-form-microcopy {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--color-sky-light);
          margin-top: 12px;
        }
        .form-success-box {
          text-align: center;
          padding: 20px 0;
          color: #FFFFFF;
        }
        .form-success-box h3 {
          font-size: 1.8rem;
          color: #FFFFFF;
          margin: 12px 0 8px 0;
        }
        .form-success-box p {
          color: #E2E8F0;
          font-size: 0.95rem;
        }

        /* ------------------ SECTION 1: ABOUT TWO COLUMN ------------------ */
        .about-two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }
        .about-img-box {
          position: relative;
        }
        .about-img-wrapper {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
        }
        .about-feature-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
        }
        .about-img-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: var(--color-navy);
          color: #FFFFFF;
          padding: 8px 16px;
          border-radius: var(--radius-xs);
          font-family: var(--font-heading);
          font-size: 1.1rem;
          letter-spacing: 0.05em;
          border-left: 4px solid var(--color-accent);
          box-shadow: var(--shadow-md);
        }
        .about-text-box {
          display: flex;
          flex-direction: column;
        }
        .about-section-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: var(--color-navy);
          line-height: 1.05;
          letter-spacing: 0.02em;
          margin-bottom: 18px;
        }
        .about-section-heading.center-heading {
          text-align: center;
          margin-bottom: 30px;
        }
        .about-body-paragraph {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .about-btn-wrap {
          margin-top: 10px;
        }

        /* ------------------ SECTION 2: OUR STORY BANNER ------------------ */
        .dark-banner-section {
          background: linear-gradient(135deg, #0D233A 0%, #102A43 100%);
          color: #FFFFFF;
          position: relative;
        }
        .story-banner {
          background: radial-gradient(circle at 10% 50%, rgba(22, 119, 200, 0.18) 0%, transparent 50%),
                      linear-gradient(135deg, #081726 0%, #102A43 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .banner-content-box {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .banner-eyebrow {
          display: inline-block;
          color: var(--color-accent);
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .banner-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.3rem, 4.5vw, 3.4rem);
          color: #FFFFFF;
          line-height: 1.05;
          letter-spacing: 0.02em;
          margin-bottom: 18px;
        }
        .banner-divider {
          width: 80px;
          height: 4px;
          background: var(--color-accent);
          margin: 0 auto 24px auto;
          border-radius: var(--radius-pill);
        }
        .banner-text {
          font-size: 1.05rem;
          color: #CBD5E1;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .banner-text:last-child {
          margin-bottom: 0;
        }

        /* ------------------ SECTION 3: MISSION ------------------ */
        .mission-content-box {
          text-align: center;
        }
        .mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 35px;
          text-align: left;
        }
        .mission-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 30px 25px;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .mission-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-accent);
        }
        .mission-icon-wrap {
          width: 56px;
          height: 56px;
          background: var(--color-soft-blue);
          border: 1px solid var(--color-soft-blue-border);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          margin-bottom: 18px;
        }
        .mission-card-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: var(--color-navy);
          letter-spacing: 0.03em;
          margin-bottom: 10px;
        }
        .mission-card-desc {
          font-size: 0.925rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        /* ------------------ SECTION 4: TEAM ------------------ */
        .team-grid-reverse {
          grid-template-columns: 1fr 1fr;
        }
        .team-badge-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(16, 42, 67, 0.94);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 16px;
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #FFFFFF;
        }
        .badge-check-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }

        /* ------------------ SECTION 5: SERVICES 4-GRID ------------------ */
        .services-four-grid-section {
          background: #0B1C2D;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .section-header-dark {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px auto;
        }
        .services-section-sub {
          font-size: 1.05rem;
          color: #94A3B8;
          line-height: 1.5;
        }
        .services-card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .service-solution-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          padding: 30px 22px;
          display: flex;
          flex-direction: column;
          transition: all var(--transition-normal);
        }
        .service-solution-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-accent);
          transform: translateY(-4px);
        }
        .service-solution-icon {
          width: 58px;
          height: 58px;
          background: var(--color-accent-gradient);
          color: #FFFFFF;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: var(--shadow-orange);
        }
        .service-solution-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: #FFFFFF;
          letter-spacing: 0.04em;
          margin-bottom: 12px;
          line-height: 1.1;
        }
        .service-solution-desc {
          font-size: 0.875rem;
          color: #94A3B8;
          line-height: 1.55;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .service-card-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-sky);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: color var(--transition-fast);
        }
        .service-card-link-btn:hover {
          color: var(--color-accent);
        }

        /* ------------------ SECTION 6: COMMUNITY ------------------ */
        .community-section {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--color-border);
        }
        .community-content-box {
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
        }
        .community-lead-p {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 35px;
        }
        .community-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }
        .community-stat-card {
          background: var(--bg-canvas);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          color: var(--color-navy);
          line-height: 1;
          letter-spacing: 0.02em;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-text-muted);
        }
        .community-sub-p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        /* ------------------ SECTION 7: ANIMATED ACCORDION ------------------ */
        .why-choose-about-section {
          background: var(--bg-canvas);
        }
        .customer-review-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(16, 42, 67, 0.94);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-sm);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .badge-stars-row {
          display: flex;
          gap: 4px;
        }
        .badge-quote {
          font-size: 0.85rem;
          font-style: italic;
          color: #E2E8F0;
          line-height: 1.4;
        }
        .badge-author {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        /* Animated Accordion List */
        .why-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 15px;
        }
        .why-accordion-item {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .why-accordion-item:hover {
          border-color: var(--color-soft-blue-border);
        }
        .why-accordion-item.accordion-open {
          border-color: var(--color-accent);
          box-shadow: 0 4px 16px rgba(234, 88, 12, 0.15);
        }
        .why-accordion-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          text-align: left;
          background: #FFFFFF;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .why-accordion-item.accordion-open .why-accordion-header {
          background: var(--color-accent-soft);
        }
        .accordion-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .accordion-check-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .why-accordion-item.accordion-open .accordion-check-icon {
          transform: scale(1.1);
        }
        .accordion-title-text {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          letter-spacing: 0.03em;
          color: var(--color-navy);
          transition: color 0.3s ease;
        }
        .why-accordion-item.accordion-open .accordion-title-text {
          color: var(--color-accent-hover);
        }
        .accordion-chevron {
          color: var(--color-text-muted);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
        }
        .accordion-chevron.chevron-rotated {
          transform: rotate(180deg);
          color: var(--color-accent);
        }

        /* Smooth CSS Grid Collapse Animation */
        .accordion-collapse-wrapper,
        .faq-collapse-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .accordion-collapse-wrapper.expanded,
        .faq-collapse-wrapper.expanded {
          grid-template-rows: 1fr;
        }
        .accordion-collapse-inner,
        .faq-collapse-inner {
          overflow: hidden;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .accordion-collapse-wrapper.expanded .accordion-collapse-inner,
        .faq-collapse-wrapper.expanded .faq-collapse-inner {
          opacity: 1;
          transform: translateY(0);
        }
        .why-accordion-body {
          padding: 16px 20px 20px 50px;
          font-size: 0.925rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          border-top: 1px solid var(--color-border-subtle);
          background: #FFFFFF;
        }

        /* ------------------ SECTION 8: ANIMATED FAQ ACCORDION ------------------ */
        .faq-about-section {
          background: #091826;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .about-faq-container {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .about-faq-item {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .about-faq-item:hover {
          background: rgba(255, 255, 255, 0.07);
        }
        .about-faq-item.faq-item-open {
          border-color: var(--color-accent);
          background: rgba(255, 255, 255, 0.09);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        }
        .about-faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          text-align: left;
          cursor: pointer;
        }
        .faq-question-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .faq-q-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .about-faq-item.faq-item-open .faq-q-icon {
          transform: scale(1.1);
        }
        .faq-question-text {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: #FFFFFF;
          letter-spacing: 0.03em;
          transition: color 0.3s ease;
        }
        .about-faq-item.faq-item-open .faq-question-text {
          color: #FED7AA;
        }
        .faq-toggle-icon {
          width: 28px;
          height: 28px;
          border-radius: var(--radius-xs);
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: bold;
          flex-shrink: 0;
          transition: transform 0.35s ease, background-color 0.3s ease;
        }
        .about-faq-item.faq-item-open .faq-toggle-icon {
          background: var(--color-accent);
          transform: rotate(180deg);
        }
        .about-faq-answer-body {
          padding: 4px 22px 20px 52px;
          font-size: 0.95rem;
          color: #CBD5E1;
          line-height: 1.65;
        }

        /* ------------------ SECTION 9: GET IN TOUCH ------------------ */
        .get-in-touch-section {
          background: var(--bg-canvas);
        }
        .get-in-touch-card {
          background: var(--color-navy);
          border: 1px solid var(--color-navy-border);
          border-radius: var(--radius-md);
          padding: 40px 45px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          box-shadow: var(--shadow-lg);
        }
        .touch-heading {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          color: #FFFFFF;
          letter-spacing: 0.03em;
          margin-bottom: 8px;
        }
        .touch-p {
          font-size: 0.95rem;
          color: #CBD5E1;
          max-width: 600px;
          line-height: 1.5;
        }
        .touch-actions-side {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        .btn-touch-phone {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-sm);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          letter-spacing: 0.04em;
          transition: background var(--transition-fast);
        }
        .btn-touch-phone:hover {
          background: rgba(255, 255, 255, 0.18);
        }

        /* ------------------ SECTION 10: SCHEDULE CONSULTATION WITH CREW WORK BG ------------------ */
        .consultation-banner-section {
          position: relative;
          padding: 95px 0;
          text-align: center;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        .consultation-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .consultation-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
        }
        .consultation-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg, 
            rgba(8, 23, 38, 0.92) 0%, 
            rgba(16, 42, 67, 0.88) 50%, 
            rgba(8, 23, 38, 0.95) 100%
          );
        }
        .consultation-container {
          position: relative;
          z-index: 2;
        }
        .consultation-inner {
          max-width: 820px;
          margin: 0 auto;
        }
        .consultation-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 4.8vw, 3.6rem);
          color: #FFFFFF;
          line-height: 1.05;
          letter-spacing: 0.02em;
          margin-bottom: 16px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        .consultation-sub {
          font-size: 1.05rem;
          color: #E0F2FE;
          line-height: 1.6;
          margin-bottom: 30px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
        }
        .consultation-cta-btn {
          font-size: 1.35rem;
          padding: 16px 36px;
        }

        /* ------------------ SECTION 11: SERVICE AREAS ------------------ */
        .service-areas-about-section {
          background: var(--bg-surface);
        }
        .areas-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .service-map-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
        }
        .map-inner-graphic {
          position: relative;
          background: #E8EEF4;
        }
        .map-vector-svg {
          width: 100%;
          height: auto;
          display: block;
        }
        .map-badge-corner {
          position: absolute;
          top: 14px;
          left: 14px;
          background: var(--color-navy);
          color: #FFFFFF;
          padding: 6px 12px;
          border-radius: var(--radius-xs);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pills-two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .service-area-pill-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--bg-canvas);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          transition: all var(--transition-fast);
        }
        .service-area-pill-item:hover {
          border-color: var(--color-accent);
          background: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }
        .pill-pin-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .pill-text {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-navy);
        }
        .areas-dispatch-note {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-secondary);
        }
        .dispatch-clock {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        /* ------------------ EMERGENCY ALERT STRIP ------------------ */
        .emergency-alert-strip {
          background: var(--color-accent-gradient);
          color: #FFFFFF;
          padding: 14px 0;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        }
        .emergency-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .emergency-text-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .emergency-triangle {
          color: #FFFFFF;
          flex-shrink: 0;
        }
        .emergency-alert-text {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .emergency-call-btn {
          background: #FFFFFF;
          color: var(--color-accent);
          font-family: var(--font-heading);
          font-size: 1.05rem;
          letter-spacing: 0.05em;
          padding: 6px 16px;
          border-radius: var(--radius-xs);
          font-weight: bold;
          transition: background var(--transition-fast);
        }
        .emergency-call-btn:hover {
          background: #FFF7ED;
        }

        /* ------------------ RESPONSIVE BREAKPOINTS ------------------ */
        @media (max-width: 1024px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
          }
          .about-hero-form-col {
            justify-content: center;
          }
          .about-hero-form-col .lead-card-dark {
            max-width: 100%;
          }
          .services-card-grid {
            grid-template-columns: 1fr 1fr;
          }
          .community-stats-row {
            grid-template-columns: 1fr 1fr;
          }
          .about-two-col-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }
          .areas-about-grid {
            grid-template-columns: 1fr;
          }
          .get-in-touch-card {
            flex-direction: column;
            text-align: center;
          }
          .touch-actions-side {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .about-hero-headline {
            font-size: 2.3rem;
          }
          .services-card-grid {
            grid-template-columns: 1fr;
          }
          .mission-grid {
            grid-template-columns: 1fr;
          }
          .pills-two-col-grid {
            grid-template-columns: 1fr;
          }
          .emergency-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

    </div>
  );
}
