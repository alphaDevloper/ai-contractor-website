import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container-wide header-inner">
        
        {/* Brand Logo */}
        <a href="#" className="brand-logo" onClick={closeMenu}>
          <div className="brand-icon-box">
            <svg viewBox="0 0 40 40" fill="none" className="brand-logo-svg">
              <path d="M20 4L4 16H9V34H31V16H36L20 4Z" fill="#1677C8" />
              <path d="M20 9L9 17.5V31H16V22H24V31H31V17.5L20 9Z" fill="#55B8F5" />
              <path d="M20 2L3 15L5.5 18L20 7L34.5 18L37 15L20 2Z" fill="#102A43" />
              <circle cx="20" cy="15" r="2.5" fill="#EA580C" />
            </svg>
          </div>
          <div className="brand-title-box">
            <span className="brand-main">AeroDome</span>
            <span className="brand-sub">ROOFING &bull; CALGARY</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="header-nav">
          <a href="#services" className="nav-item">Services</a>
          <a href="#owner" className="nav-item">About Marcus</a>
          <a href="#proof" className="nav-item">Our Work</a>
          <a href="#reviews" className="nav-item">Reviews</a>
          <a href="#process" className="nav-item">Process</a>
          <a href="#service-areas" className="nav-item">Service Areas</a>
          <a href="#faq" className="nav-item">FAQ</a>
        </nav>

        {/* Right Actions: Phone + Orange CTA */}
        <div className="header-right-actions">
          <a href="tel:+1333456789" className="header-phone-link">
            <Phone size={16} className="phone-icon-accent" />
            <span>+1 333 456789</span>
          </a>

          <button 
            type="button" 
            onClick={() => onOpenModal('Header Estimate CTA')} 
            className="btn-orange header-cta-btn"
          >
            <span>GET AN ESTIMATE</span>
            <ChevronRight size={18} />
          </button>

          <button 
            type="button" 
            className="mobile-hamburger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-pane">
          <div className="mobile-nav-links">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#owner" onClick={closeMenu}>About Marcus</a>
            <a href="#proof" onClick={closeMenu}>Our Work</a>
            <a href="#reviews" onClick={closeMenu}>5.0 Google Reviews</a>
            <a href="#process" onClick={closeMenu}>How It Works</a>
            <a href="#special-offers" onClick={closeMenu}>Special Offers</a>
            <a href="#service-areas" onClick={closeMenu}>Service Areas</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </div>

          <div className="mobile-drawer-actions">
            <a href="tel:+1333456789" className="mobile-direct-phone">
              <Phone size={18} />
              <span>Call +1 333 456789</span>
            </a>
            <button 
              type="button" 
              onClick={() => { closeMenu(); onOpenModal('Mobile Drawer CTA'); }} 
              className="btn-orange"
              style={{ width: '100%' }}
            >
              <span>GET AN ESTIMATE</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #FFFFFF;
          border-bottom: 1px solid var(--color-border);
          transition: all var(--transition-normal);
        }
        .header-scrolled {
          box-shadow: 0 4px 16px rgba(16, 42, 67, 0.08);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .brand-icon-box {
          width: 40px;
          height: 40px;
        }
        .brand-logo-svg {
          width: 100%;
          height: 100%;
        }
        .brand-title-box {
          display: flex;
          flex-direction: column;
        }
        .brand-main {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: var(--color-navy);
          line-height: 0.95;
          letter-spacing: 0.02em;
        }
        .brand-sub {
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: var(--color-accent);
          margin-top: 2px;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .nav-item {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-navy);
          transition: color var(--transition-fast);
        }
        .nav-item:hover {
          color: var(--color-accent);
        }
        .header-right-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .header-phone-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--color-navy);
          letter-spacing: 0.04em;
          transition: color var(--transition-fast);
        }
        .header-phone-link:hover {
          color: var(--color-accent);
        }
        .phone-icon-accent {
          color: var(--color-accent);
        }
        .header-cta-btn {
          padding: 10px 20px;
          font-size: 1.1rem;
        }
        .mobile-hamburger {
          display: none;
          color: var(--color-navy);
          padding: 6px;
        }

        @media (max-width: 1050px) {
          .header-nav {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .header-phone-link {
            display: none;
          }
          .header-cta-btn {
            display: none;
          }
          .mobile-hamburger {
            display: block;
          }
          .mobile-drawer-pane {
            background: #FFFFFF;
            border-top: 1px solid var(--color-border);
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-shadow: var(--shadow-lg);
          }
          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .mobile-nav-links a {
            font-size: 1rem;
            font-weight: 700;
            color: var(--color-navy);
            padding: 6px 0;
            border-bottom: 1px solid var(--color-border-subtle);
          }
          .mobile-drawer-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .mobile-direct-phone {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px;
            background: var(--bg-canvas);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-xs);
            font-weight: 700;
            color: var(--color-navy);
          }
        }
      `}</style>
    </header>
  );
}
