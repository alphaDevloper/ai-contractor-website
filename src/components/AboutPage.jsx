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
import founderImg from '../assets/owner_marcus.jpg';
import logoImg from '../../public/aerodome-logo.png';

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

function CloudNineMarquee() {
  const items = [
    "CLOUD NINE ROOFING AND RESTORATION",
    "CLOUD NINE ROOFING AND RESTORATION",
    "CLOUD NINE ROOFING AND RESTORATION",
    "CLOUD NINE ROOFING AND RESTORATION",
    "CLOUD NINE ROOFING AND RESTORATION"
  ];

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
            ABOUT OUR ROOFING TEAM
          </div>

          <h1 className="about-exact-title">
            FAMILY-OWNED.<br />OWNER-MANAGED.
          </h1>

          <p className="about-exact-subtitle">
            FAIR PRICING, HONEST ESTIMATES, AND LOCAL INTEGRITY
          </p>
        </div>

        {/* Hero Bottom Trust Bar */}
        <div className="about-exact-hero-bar">
          <div className="container about-exact-hero-bar-inner">
            <span>LOCAL, FAMILY-OWNED ROOF REPAIR &amp; INSTALLATION</span>
            <span className="bar-bullet">&bull;</span>
            <span>FREE ON-SITE ROOF INSPECTIONS &amp; TRANSPARENT PRICING</span>
            <span className="bar-bullet">&bull;</span>
            <span>LICENSED AND INSURED IN INDIANA</span>
            <span className="bar-bullet">&bull;</span>
            <span>100% IN-HOUSE ROOFING SPECIALISTS</span>
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
                <div className="about-stat-num">105+</div>
                <div className="about-stat-label">FIVE-STAR GOOGLE REVIEWS</div>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-num">2</div>
                <div className="about-stat-label">DEDICATED FOUNDER-MANAGED CREWS</div>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-num">
                  5.0<span className="accent-star">★</span>
                </div>
                <div className="about-stat-label">AVERAGE CUSTOMER SATISFACTION</div>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-num">100%</div>
                <div className="about-stat-label">COMMUNICATION GUARANTEE</div>
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
              <div className="about-exact-eyebrow">OUR ORIGIN</div>
              <h2 className="about-origin-heading">
                BUILT ON<br />TRUST &amp; CRAFT
              </h2>
              <p className="about-origin-desc">
                That commitment has earned us a 5.0-star rating on both Google and Facebook, hundreds of completed projects across Hamilton County, Indiana, and more referrals than we can count. We do love our work as craftsmanship is what you're proud of.
              </p>

              <div className="about-origin-btns">
                <button 
                  type="button" 
                  onClick={() => onOpenModal('About Page: Origin Estimate')}
                  className="about-btn-orange"
                >
                  GET MY FREE ESTIMATE
                </button>
                <Link to="/gallery" className="about-btn-outline">
                  SEE OUR WORK
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="about-origin-img-wrap">
              <img 
                src={founderImg} 
                alt="Matt Lodgers, Founder of Cloud Nine Roofing" 
                className="about-origin-img" 
              />
              <div className="about-origin-tag">
                MATT LODGERS
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
            
            {/* Left Content */}
            <div>
              <div className="about-exact-eyebrow">MEET THE FOUNDER</div>
              <h2 className="about-founder-heading">
                OWNER-LED. LOCAL.<br />HAMILTON COUNTY.
              </h2>
              
              <p className="about-founder-desc">
                Cloud Nine Roofing &amp; Restoration is rooted in Hamilton County, not out-of-state storm chasers or commissioned sales agents. Owner Matt Lodgers oversees every project personally, from your initial drone photo and walk-through inspection to the final magnetic nail sweep. We don't believe in high-pressure tactics, unnecessary upsells, or hidden fees. Just honest advice, clear communication, and quality craftsmanship that protects your home for decades.
              </p>
              
              <p className="about-founder-desc">
                Serving Carmel, Westfield, Noblesville, Fishers, Zionsville, Cicero, and Sheridan with dedicated in-house roofing crews.
              </p>

              <button 
                type="button" 
                onClick={() => onOpenModal('About Page: Founder Inquiry')}
                className="about-founder-btn"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Photo with Overlapping Badge */}
            <div className="about-founder-img-wrap">
              <img 
                src={founderImg} 
                alt="Matt Lodgers on-site with roofing team" 
                className="about-founder-img" 
              />
              
              <div className="about-founder-floating-badge">
                <div className="about-floating-num">2</div>
                <div className="about-floating-info">
                  <span className="about-floating-years">YEARS LEADING</span>
                  <span className="about-floating-name">MATT LODGERS</span>
                  <span className="about-floating-role">Founder</span>
                </div>
              </div>
            </div>

          </div>

          {/* Mission & Vision Cards (Side by Side) */}
          <div className="about-mission-vision-grid">
            
            <div className="about-mv-card">
              <div className="about-mv-header">
                <div className="about-mv-icon-box">
                  <Flag size={18} />
                </div>
                <div className="about-mv-title">OUR MISSION</div>
              </div>
              <p className="about-mv-text">
                To deliver long-lasting, honest, and high-quality roofing solutions that protect what matters most—giving homeowners complete peace of mind through every season.
              </p>
            </div>

            <div className="about-mv-card">
              <div className="about-mv-header">
                <div className="about-mv-icon-box">
                  <Eye size={18} />
                </div>
                <div className="about-mv-title">OUR VISION</div>
              </div>
              <p className="about-mv-text">
                To be the most trusted, recommended, and customer-first exterior restoration contractor in Indiana, known for unmatched integrity and flawless craftsmanship.
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
          
          <div className="about-values-eyebrow">HOW WE OPERATE</div>
          <h2 className="about-values-heading">THE VALUES WE WORK BY</h2>
          <p className="about-values-sub">
            No shortcuts, no sales games. These are the principles that dictate every roof we inspect, repair, or replace.
          </p>

          <div className="about-values-grid">
            
            {/* Card 1 */}
            <div className="about-value-card">
              <div className="about-value-icon-box">
                <DollarSign size={28} />
              </div>
              <h3 className="about-value-title">YOU ONLY PAY FOR WHAT YOUR HOME NEEDS</h3>
              <p className="about-value-desc">
                Full roof replacement is not always the answer. If a proper repair or maintenance service protects your home for years to come, that's the only option we'll recommend.
              </p>
            </div>

            {/* Card 2 */}
            <div className="about-value-card">
              <div className="about-value-icon-box">
                <Award size={28} />
              </div>
              <h3 className="about-value-title">THREE CERTIFICATIONS, ALL TOP TIER</h3>
              <p className="about-value-desc">
                Every roofing project uses premium materials installed strictly to manufacturer specs. We never cut corners on underlayment, ice-and-water shield, or ventilation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="about-value-card">
              <div className="about-value-icon-box">
                <HardHat size={28} />
              </div>
              <h3 className="about-value-title">OWNER ON SITE, EVERY TIME</h3>
              <p className="about-value-desc">
                You won't deal with middlemen or commissioned salespeople. The owner oversees your project from initial drone photo inspection to final magnet sweep cleanup.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. UPPER SCROLLING TICKER RIBBON                                    */}
      {/* =================================================================== */}
      <CloudNineMarquee />

      {/* =================================================================== */}
      {/* 7. SECTION: "GET YOUR FREE INSPECTION TODAY" CTA                    */}
      {/* =================================================================== */}
      <section className="about-final-cta-section about-geometric-bg">
        <div className="container">
          <div className="about-final-cta-grid">
            
            {/* Left Content */}
            <div>
              <div className="about-cta-logo-wrap">
                <img src={logoImg} alt="Cloud Nine Roofing" className="about-cta-logo-img" />
              </div>
              
              <div className="about-cta-eyebrow">READY TO START?</div>
              <h2 className="about-cta-heading">
                GET YOUR FREE<br />INSPECTION TODAY
              </h2>
              
              <p className="about-cta-desc">
                Tell us about your home. We will connect with you in under five minutes and give you honest advice on the right solution.
              </p>
            </div>

            {/* Right Dark Floating Form Card - Styled matching Hero CTA */}
            <div className="lead-card-dark">
              <h2 className="lead-card-title">SEE WHAT YOUR PROJECT WILL COST</h2>
              <p className="lead-card-sub">
                Get a free on-site roof inspection and guaranteed flat-rate proposal.
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle size={44} color="#10B981" />
                  <h3>Estimate Request Sent!</h3>
                  <p>Thanks, {formData.firstName}. Marcus Delgray or our senior estimator will call you at <strong>{formData.phone}</strong> within 15 minutes.</p>
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
      </section>

      {/* =================================================================== */}
      {/* 8. LOWER SCROLLING TICKER RIBBON                                    */}
      {/* =================================================================== */}
      <CloudNineMarquee />

    </div>
  );
}
