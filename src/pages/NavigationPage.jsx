import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Home, 
  Info, 
  Hammer, 
  Images, 
  MapPin, 
  DollarSign, 
  BookOpen, 
  PhoneCall, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Layers, 
  Grid, 
  Droplets, 
  Building2, 
  Zap, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import TickerRibbon from '../components/TickerRibbon';

export default function NavigationPage({ onOpenModal }) {
  const mainPages = [
    { title: "Home Page", path: "/", icon: <Home size={20} />, desc: "Landing page with hail damage specials, reviews, before/after proof, and estimate form." },
    { title: "About Us", path: "/about", alias: "/about-us", icon: <Info size={20} />, desc: "Our 14-year history in Calgary, in-house team, COR™ safety, and GAF Master Elite credentials." },
    { title: "Services Overview", path: "/services", icon: <Hammer size={20} />, desc: "Complete exterior restoration and roofing capabilities with interactive services hub." },
    { title: "Gallery & Projects", path: "/gallery", alias: "/portfolio", icon: <Images size={20} />, desc: "Interactive project gallery with filterable residential and commercial roof installations." },
    { title: "Service Areas Overview", path: "/service-areas", icon: <MapPin size={20} />, desc: "Interactive service radius map covering Greater Calgary and surrounding Alberta communities." }
  ];

  const servicePages = [
    { title: "Residential Roofing", path: "/services/residential-roofing", icon: <Home size={18} />, tag: "CORE SERVICE", desc: "Class 4 impact-resistant architectural shingles and full re-roofing." },
    { title: "Window Replacement", path: "/services/windows", icon: <Grid size={18} />, tag: "EXTERIOR", desc: "Energy Star® double & triple-pane thermal glass engineered for Calgary." },
    { title: "Storm & Hail Damage", path: "/services/storm-damage", icon: <Zap size={18} />, tag: "SPECIALTY", desc: "Digital drone inspections, insurance claim assistance, and rapid dry-in." },
    { title: "James Hardie Siding", path: "/services/siding", icon: <Layers size={18} />, tag: "EXTERIOR", desc: "Fire-resistant, fiber-cement exterior siding with custom trim." },
    { title: "Seamless Gutters", path: "/services/gutters", icon: <Droplets size={18} />, tag: "DRAINAGE", desc: "Continuous heavy-gauge aluminum eavestrough and leaf guards." },
    { title: "Concrete Patios & Driveways", path: "/services/concrete", icon: <Hammer size={18} />, tag: "FLATWORK", desc: "Engineered stamped and broomed concrete flatwork." },
    { title: "Commercial Flat Roofing", path: "/services/commercial-roofing", icon: <Building2 size={18} />, tag: "COMMERCIAL", desc: "SBS modified bitumen, TPO, and EPDM flat roof systems." }
  ];

  const serviceAreaPages = [
    { name: "Calgary NW", path: "/service-areas/calgary-nw", region: "Calgary Metro" },
    { name: "Calgary SW", path: "/service-areas/calgary-sw", region: "Calgary Metro" },
    { name: "Calgary SE", path: "/service-areas/calgary-se", region: "Calgary Metro" },
    { name: "Calgary NE", path: "/service-areas/calgary-ne", region: "Calgary Metro" },
    { name: "Airdrie", path: "/service-areas/airdrie", region: "Rocky View County" },
    { name: "Cochrane", path: "/service-areas/cochrane", region: "Bow Valley Corridor" },
    { name: "Chestermere", path: "/service-areas/chestermere", region: "East Calgary" },
    { name: "Okotoks", path: "/service-areas/okotoks", region: "Foothills County" },
    { name: "Strathmore", path: "/service-areas/strathmore", region: "Wheatland County" },
    { name: "Parkville, MO", path: "/service-areas/parkville", region: "Clay & Platte County" },
    { name: "Overland Park, KS", path: "/service-areas/overland-park", region: "Johnson County, KS" },
    { name: "Liberty, MO", path: "/service-areas/liberty", region: "Clay & Platte County" }
  ];

  const directSections = [
    { name: "5.0 Google Reviews", path: "/#reviews", icon: <Star size={18} />, note: "Customer testimonials & ratings" },
    { name: "Four-Step Process", path: "/#process", icon: <CheckCircle2 size={18} />, note: "How our roof replacement works" },
    { name: "0% Financing & Specials", path: "/financing", icon: <DollarSign size={18} />, note: "Up to 18-month 0% APR plans" },
    { name: "Roofing Tips & Blog", path: "/blog", icon: <BookOpen size={18} />, note: "Cost guides & storm maintenance" },
    { name: "Frequently Asked Questions", path: "/#faq", icon: <ShieldCheck size={18} />, note: "Permits, insurance & warranties" },
    { name: "Request Free Estimate / Contact", path: "/contact", icon: <PhoneCall size={18} />, note: "Schedule your free on-site roof inspection" }
  ];

  return (
    <div className="navigation-page-wrapper">
      
      {/* Hero Header */}
      <section className="nav-page-hero">
        <div className="container">
          <nav className="nav-page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <span className="breadcrumb-active">ALL ROUTES & NAVIGATION</span>
          </nav>

          <div className="eyebrow-red" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={16} />
            <span>WEBSITE DIRECTORY</span>
          </div>

          <h1 className="nav-page-title">
            COMPLETE SITE NAVIGATION & ALL ROUTES
          </h1>

          <p className="nav-page-subtitle">
            Every page, service offering, regional community, and interactive section across the AeroDome Roofing website is cataloged below for direct access.
          </p>
        </div>
      </section>

      <TickerRibbon />

      <div className="container section-padding">
        
        {/* Section 1: Main Application Pages */}
        <div className="nav-category-block">
          <div className="nav-category-header">
            <div className="category-badge">PRIMARY</div>
            <h2 className="nav-category-title">Main Application Pages</h2>
            <p className="nav-category-desc">Core top-level destinations across the site.</p>
          </div>

          <div className="nav-cards-grid">
            {mainPages.map((page, idx) => (
              <Link key={idx} to={page.path} className="nav-directory-card">
                <div className="nav-card-top">
                  <div className="nav-card-icon-box">{page.icon}</div>
                  <span className="nav-card-path">{page.path}</span>
                </div>
                <h3 className="nav-card-title">{page.title}</h3>
                <p className="nav-card-desc">{page.desc}</p>
                <div className="nav-card-action">
                  <span>Open Page</span>
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: Individual Service Pages */}
        <div className="nav-category-block" style={{ marginTop: '50px' }}>
          <div className="nav-category-header">
            <div className="category-badge">SERVICES</div>
            <h2 className="nav-category-title">Individual Service Detail Pages</h2>
            <p className="nav-category-desc">Dedicated full-detail landing pages for each specialized trade.</p>
          </div>

          <div className="nav-cards-grid">
            {servicePages.map((srv, idx) => (
              <Link key={idx} to={srv.path} className="nav-directory-card">
                <div className="nav-card-top">
                  <div className="nav-card-icon-box">{srv.icon}</div>
                  <span className="nav-card-badge">{srv.tag}</span>
                </div>
                <h3 className="nav-card-title">{srv.title}</h3>
                <span className="nav-card-path">{srv.path}</span>
                <p className="nav-card-desc">{srv.desc}</p>
                <div className="nav-card-action">
                  <span>View Service Details</span>
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 3: Service Area Pages */}
        <div className="nav-category-block" style={{ marginTop: '50px' }}>
          <div className="nav-category-header">
            <div className="category-badge">LOCAL COVERAGE</div>
            <h2 className="nav-category-title">Service Area Landing Pages</h2>
            <p className="nav-category-desc">Dedicated geographic hubs with local storm insights and neighborhood data.</p>
          </div>

          <div className="nav-areas-grid">
            {serviceAreaPages.map((area, idx) => (
              <Link key={idx} to={area.path} className="nav-area-pill-card">
                <div className="nav-area-pill-left">
                  <MapPin size={16} className="nav-area-pin" />
                  <div>
                    <span className="nav-area-name">{area.name}</span>
                    <span className="nav-area-region">{area.region}</span>
                  </div>
                </div>
                <ArrowRight size={16} className="nav-area-arrow" />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 4: Direct Section Anchors & Special Pages */}
        <div className="nav-category-block" style={{ marginTop: '50px' }}>
          <div className="nav-category-header">
            <div className="category-badge">FEATURES & ANCHORS</div>
            <h2 className="nav-category-title">Special Features & Fast Anchors</h2>
            <p className="nav-category-desc">Quick shortcuts to key sections and specialized customer programs.</p>
          </div>

          <div className="nav-cards-grid">
            {directSections.map((sec, idx) => (
              <Link key={idx} to={sec.path} className="nav-directory-card">
                <div className="nav-card-top">
                  <div className="nav-card-icon-box">{sec.icon}</div>
                  <span className="nav-card-path">{sec.path}</span>
                </div>
                <h3 className="nav-card-title">{sec.name}</h3>
                <p className="nav-card-desc">{sec.note}</p>
                <div className="nav-card-action">
                  <span>Go to Section</span>
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="nav-cta-banner">
          <div>
            <h3 className="nav-cta-title">Need a Custom Proposal for Your Roof?</h3>
            <p className="nav-cta-sub">Free 21-point on-site inspection, AI photo damage report, and guaranteed flat-rate quote.</p>
          </div>
          <button 
            type="button" 
            onClick={() => onOpenModal('Navigation Page CTA')}
            className="btn-orange"
          >
            <span>REQUEST FREE ESTIMATE</span>
            <ChevronRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .nav-page-hero {
          background: linear-gradient(135deg, #102A43 0%, #1A365D 100%);
          padding: 60px 0 40px;
          color: #FFFFFF;
        }
        .nav-page-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }
        .nav-page-breadcrumb .breadcrumb-link {
          color: #CBD5E1;
          text-decoration: none;
        }
        .nav-page-breadcrumb .breadcrumb-link:hover {
          color: var(--color-accent);
        }
        .nav-page-breadcrumb .breadcrumb-sep {
          color: #64748B;
        }
        .nav-page-breadcrumb .breadcrumb-active {
          color: var(--color-accent);
        }
        .nav-page-title {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #FFFFFF;
          margin: 12px 0 16px;
          letter-spacing: 0.02em;
        }
        .nav-page-subtitle {
          font-size: 1.05rem;
          color: #E2E8F0;
          max-width: 780px;
          line-height: 1.6;
        }

        .nav-category-block {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }
        .nav-category-header {
          margin-bottom: 24px;
        }
        .category-badge {
          display: inline-block;
          background: #FFE4D6;
          color: var(--color-accent);
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        .nav-category-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: var(--color-navy);
          margin-bottom: 6px;
        }
        .nav-category-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
        }

        .nav-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 18px;
        }
        .nav-directory-card {
          background: #F8FAFC;
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-sm);
          padding: 20px;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }
        .nav-directory-card:hover {
          background: #FFFFFF;
          border-color: var(--color-accent);
          box-shadow: 0 8px 24px rgba(16, 42, 67, 0.1);
          transform: translateY(-2px);
        }
        .nav-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .nav-card-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 6px;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-card-path {
          font-family: monospace;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          background: #EEF2F6;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .nav-card-badge {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--color-accent);
          background: #FFE4D6;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .nav-card-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: var(--color-navy);
          margin-bottom: 6px;
        }
        .nav-card-desc {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin-bottom: 16px;
          flex-grow: 1;
        }
        .nav-card-action {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-accent);
          margin-top: auto;
        }

        .nav-areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }
        .nav-area-pill-card {
          background: #F8FAFC;
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-xs);
          padding: 12px 16px;
          text-decoration: none;
          color: inherit;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s ease;
        }
        .nav-area-pill-card:hover {
          background: #FFFFFF;
          border-color: var(--color-accent);
          box-shadow: var(--shadow-sm);
          transform: translateX(3px);
        }
        .nav-area-pill-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-area-pin {
          color: var(--color-accent);
        }
        .nav-area-name {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          color: var(--color-navy);
          font-weight: 700;
        }
        .nav-area-region {
          display: block;
          font-size: 0.7rem;
          color: var(--color-text-muted);
        }
        .nav-area-arrow {
          color: var(--color-accent);
          opacity: 0.6;
        }
        .nav-area-pill-card:hover .nav-area-arrow {
          opacity: 1;
        }

        .nav-cta-banner {
          margin-top: 40px;
          background: linear-gradient(135deg, #102A43 0%, #1A365D 100%);
          border-radius: var(--radius-sm);
          padding: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: #FFFFFF;
          flex-wrap: wrap;
        }
        .nav-cta-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          margin-bottom: 6px;
        }
        .nav-cta-sub {
          font-size: 0.95rem;
          color: #CBD5E1;
        }

        @media (max-width: 768px) {
          .nav-category-block {
            padding: 20px;
          }
          .nav-cta-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

    </div>
  );
}
