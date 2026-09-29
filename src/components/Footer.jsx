import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer({ onOpenModal }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNav = (e, sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${sectionId}`);
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
              <Link to="/" className="footer-logo-link">
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
              <li><a href="/#service-areas" onClick={(e) => handleSectionNav(e, 'service-areas')}>Calgary NW</a></li>
              <li><a href="/#service-areas" onClick={(e) => handleSectionNav(e, 'service-areas')}>Calgary SW</a></li>
              <li><a href="/#service-areas" onClick={(e) => handleSectionNav(e, 'service-areas')}>Calgary SE</a></li>
              <li><a href="/#service-areas" onClick={(e) => handleSectionNav(e, 'service-areas')}>Calgary NE</a></li>
              <li><a href="/#service-areas" onClick={(e) => handleSectionNav(e, 'service-areas')}>Airdrie</a></li>
              <li><a href="/#service-areas" onClick={(e) => handleSectionNav(e, 'service-areas')}>Cochrane</a></li>
              <li><a href="/#service-areas" onClick={(e) => handleSectionNav(e, 'service-areas')}>Chestermere</a></li>
              <li><a href="/#service-areas" onClick={(e) => handleSectionNav(e, 'service-areas')}>Okotoks</a></li>
              <li><a href="/#service-areas" onClick={(e) => handleSectionNav(e, 'service-areas')}>Strathmore</a></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About AeroDome</Link></li>
              <li><Link to="/services">Services Overview</Link></li>
              <li><Link to="/gallery">Our Completed Projects Gallery</Link></li>
              <li><a href="/#reviews" onClick={(e) => handleSectionNav(e, 'reviews')}>5.0 Google Reviews</a></li>
              <li><a href="/#process" onClick={(e) => handleSectionNav(e, 'process')}>Four Steps, No Surprises</a></li>
              <li><a href="/#special-offers" onClick={(e) => handleSectionNav(e, 'special-offers')}>Free Inspections, Always</a></li>
              <li><a href="/#resources" onClick={(e) => handleSectionNav(e, 'resources')}>Roofing Tips & Cost Guide</a></li>
              <li><a href="/#faq" onClick={(e) => handleSectionNav(e, 'faq')}>Frequently Asked Questions</a></li>
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
            <a href="#privacy">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#terms">Terms of Service</a>
            <span>&bull;</span>
            <a href="#warranty">10-Year Warranty Terms</a>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
