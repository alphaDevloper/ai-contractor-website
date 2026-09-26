import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="reference-footer">
      <div className="container-wide">
        <div className="footer-columns-grid">
          
          {/* Col 1: Brand & Bio */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <svg viewBox="0 0 40 40" fill="none" className="footer-logo-svg">
                <path d="M20 4L4 16H9V34H31V16H36L20 4Z" fill="#1677C8" />
                <path d="M20 9L9 17.5V31H16V22H24V31H31V17.5L20 9Z" fill="#55B8F5" />
                <path d="M20 2L3 15L5.5 18L20 7L34.5 18L37 15L20 2Z" fill="#FFFFFF" />
                <circle cx="20" cy="15" r="2.5" fill="#EA580C" />
              </svg>
              <div className="footer-brand-title">
                <span className="footer-title-main">AERODOME</span>
                <span className="footer-title-sub">ROOFING &bull; CALGARY</span>
              </div>
            </div>

            <p className="footer-brand-text">
              Calgary's trusted residential roofing and storm restoration contractor. Founded in 2011 by Marcus Delgray. GAF Master Elite® & IKO ShieldPRO® certified. 100% in-house local crew.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">SERVICES</h4>
            <ul className="footer-list">
              <li><a href="#services">Roof Replacement</a></li>
              <li><a href="#services">Roof Repair & Leaks</a></li>
              <li><a href="#services">Storm & Hail Damage</a></li>
              <li><a href="#services">Seamless Gutters</a></li>
              <li><a href="#services">Siding & Flashing</a></li>
              <li><a href="#services">Commercial Roofing</a></li>
              <li><a href="#services">Skylights</a></li>
              <li><a href="#services">Flat Roofing</a></li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="footer-col">
            <h4 className="footer-heading">SERVICE AREAS</h4>
            <ul className="footer-list">
              <li><a href="#service-areas">Calgary NW</a></li>
              <li><a href="#service-areas">Calgary SW</a></li>
              <li><a href="#service-areas">Calgary SE</a></li>
              <li><a href="#service-areas">Calgary NE</a></li>
              <li><a href="#service-areas">Airdrie</a></li>
              <li><a href="#service-areas">Cochrane</a></li>
              <li><a href="#service-areas">Chestermere</a></li>
              <li><a href="#service-areas">Okotoks</a></li>
              <li><a href="#service-areas">Strathmore</a></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-list">
              <li><a href="#owner">About Marcus & Team</a></li>
              <li><a href="#proof">Our Work (Before & After)</a></li>
              <li><a href="#reviews">5.0 Google Reviews</a></li>
              <li><a href="#process">Four Steps, No Surprises</a></li>
              <li><a href="#special-offers">Free Inspections, Always</a></li>
              <li><a href="#resources">Roofing Tips & Cost Guide</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
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
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .footer-logo-svg {
          width: 38px;
          height: 38px;
        }
        .footer-brand-title {
          display: flex;
          flex-direction: column;
        }
        .footer-title-main {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: #FFFFFF;
          line-height: 0.95;
          letter-spacing: 0.04em;
        }
        .footer-title-sub {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: var(--color-accent);
          margin-top: 2px;
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
