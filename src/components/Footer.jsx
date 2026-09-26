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
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')}>Roof Replacement</a></li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')}>Roof Repair & Leaks</a></li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')}>Storm & Hail Damage</a></li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')}>Seamless Gutters</a></li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')}>Siding & Flashing</a></li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')}>Commercial Roofing</a></li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')}>Skylights</a></li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')}>Flat Roofing</a></li>
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
              <li><a href="/#proof" onClick={(e) => handleSectionNav(e, 'proof')}>Our Work (Before & After)</a></li>
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

      <style>{`
        .reference-footer {
          background-color: var(--color-navy-deep);
          color: #94A3B8;
          font-size: 0.85rem;
          padding: 60px 0 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-columns-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.9fr 0.9fr 0.9fr 1.2fr;
          gap: 36px;
          margin-bottom: 50px;
        }
        .footer-brand-header {
          margin-bottom: 16px;
        }
        .footer-logo-link {
          display: inline-block;
          background: #FFFFFF;
          padding: 8px 14px;
          border-radius: var(--radius-xs);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: transform var(--transition-fast);
        }
        .footer-logo-link:hover {
          transform: translateY(-2px);
        }
        .footer-brand-logo-img {
          height: 48px;
          width: auto;
          max-width: 190px;
          object-fit: contain;
          display: block;
        }
        .footer-brand-text {
          font-size: 0.825rem;
          line-height: 1.6;
          color: #CBD5E1;
        }
        .footer-heading {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: #FFFFFF;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }
        .footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-list a {
          color: #94A3B8;
          font-size: 0.825rem;
          transition: color var(--transition-fast);
        }
        .footer-list a:hover {
          color: #FFFFFF;
        }
        .footer-contact-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }
        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #E2E8F0;
          font-size: 0.85rem;
        }
        .contact-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .footer-cta-btn {
          width: 100%;
          padding: 12px;
          font-size: 1.05rem;
        }
        .footer-bottom-strip {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.775rem;
          color: #64748B;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-legal-links {
          display: flex;
          gap: 10px;
        }
        .footer-legal-links a {
          color: #94A3B8;
        }
        .footer-legal-links a:hover {
          color: #FFFFFF;
        }

        @media (max-width: 1024px) {
          .footer-columns-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        @media (max-width: 700px) {
          .footer-columns-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-strip {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
