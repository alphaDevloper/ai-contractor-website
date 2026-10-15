import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Compass } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer({ onOpenModal }) {
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="reference-footer">
      <div className="container-wide">
        <div className="footer-columns-grid">
          
          {/* Col 1: Brand & Bio */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <Link to="/" className="footer-logo-link" aria-label="AeroDome Roofing Home">
                <img 
                  src="/aerodome-logo.png" 
                  alt="AeroDome Roofing Calgary" 
                  className="footer-brand-logo-img" 
                />
              </Link>
            </div>

            <p className="footer-brand-text">
              Calgary's trusted residential roofing and storm restoration contractor. Founded in 2011 by Marcus Delgray. GAF Master Elite® & IKO ShieldPRO® certified. 100% in-house local crew.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">SERVICES</h4>
            <ul className="footer-list">
              <li><Link to="/services/residential-roofing">Roof Replacement</Link></li>
              <li><Link to="/services/windows">Window Replacement</Link></li>
              <li><Link to="/services/storm-damage">Hail Damage Restoration</Link></li>
              <li><Link to="/services/siding">James Hardie Siding</Link></li>
              <li><Link to="/services/gutters">Seamless Gutters</Link></li>
              <li><Link to="/services/concrete">Concrete Patios & Driveways</Link></li>
              <li><Link to="/services/commercial-roofing">Commercial Flat Roofing</Link></li>
              <li><Link to="/services">All Services Overview</Link></li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="footer-col">
            <h4 className="footer-heading">SERVICE AREAS</h4>
            <ul className="footer-list">
              <li><Link to="/service-areas/calgary-nw">Calgary NW</Link></li>
              <li><Link to="/service-areas/calgary-sw">Calgary SW</Link></li>
              <li><Link to="/service-areas/calgary-se">Calgary SE</Link></li>
              <li><Link to="/service-areas/calgary-ne">Calgary NE</Link></li>
              <li><Link to="/service-areas/airdrie">Airdrie</Link></li>
              <li><Link to="/service-areas/cochrane">Cochrane</Link></li>
              <li><Link to="/service-areas/chestermere">Chestermere</Link></li>
              <li><Link to="/service-areas/okotoks">Okotoks</Link></li>
              <li><Link to="/service-areas/strathmore">Strathmore</Link></li>
              <li><Link to="/service-areas" style={{ fontWeight: '700', color: 'var(--color-accent)' }}>All Service Areas &rarr;</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY & NAV</h4>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About AeroDome</Link></li>
              <li><Link to="/services">Services Overview</Link></li>
              <li><Link to="/gallery">Our Completed Projects Gallery</Link></li>
              <li><Link to="/navigation" style={{ fontWeight: '700', color: 'var(--color-accent)' }}>Site Navigation (All Routes)</Link></li>
              <li><Link to="/#reviews" onClick={() => handleSectionClick('reviews')}>5.0 Google Reviews</Link></li>
              <li><Link to="/#process" onClick={() => handleSectionClick('process')}>Four Steps, No Surprises</Link></li>
              <li><Link to="/#special-offers" onClick={() => handleSectionClick('special-offers')}>Free Inspections, Always</Link></li>
              <li><Link to="/#resources" onClick={() => handleSectionClick('resources')}>Roofing Tips & Cost Guide</Link></li>
              <li><Link to="/#faq" onClick={() => handleSectionClick('faq')}>Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Info & Action */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-heading">GET IN TOUCH</h4>
            <div className="footer-contact-details">
              <a href="tel:+1333456789" className="footer-contact-row">
                <Phone size={16} className="contact-icon" />
                <span>+1 333 456789</span>
              </a>
              <a href="mailto:info@aerodomeroofing.com" className="footer-contact-row">
                <Mail size={16} className="contact-icon" />
                <span>info@aerodomeroofing.com</span>
              </a>
              <div className="footer-contact-row">
                <MapPin size={16} className="contact-icon" />
                <span>Calgary & Foothills, Alberta</span>
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => onOpenModal('Footer CTA')} 
              className="btn-orange footer-cta-btn"
            >
              <span>GET AN ESTIMATE</span>
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

        {/* Legal Strip */}
        <div className="footer-bottom-strip">
          <div>
            &copy; 2011–{new Date().getFullYear()} AeroDome Roofing Inc. All rights reserved. Registered Alberta Business &bull; COR™ Safety Certified.
          </div>
          <div className="footer-legal-links">
            <Link to="/navigation">Site Directory</Link>
            <span>&bull;</span>
            <Link to="/#privacy" onClick={() => handleSectionClick('privacy')}>Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/#terms" onClick={() => handleSectionClick('terms')}>Terms of Service</Link>
            <span>&bull;</span>
            <Link to="/#warranty" onClick={() => handleSectionClick('warranty')}>10-Year Warranty Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
