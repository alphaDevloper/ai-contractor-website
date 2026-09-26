import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { servicesShowcase } from '../data/servicesData';

export default function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleSectionClick = (e, sectionId) => {
    closeMenu();
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

  const handleHomeClick = (e) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
  };

  const isHomeActive = location.pathname === '/' && !location.hash;
  const isAboutActive = location.pathname === '/about';
  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container-wide header-inner">
        
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={handleHomeClick}>
          <img 
            src="/aerodome-logo.png" 
            alt="AeroDome Roofing Calgary" 
            className="brand-logo-img" 
          />
        </Link>

        {/* Desktop Links */}
        <nav className="header-nav">
          <Link 
            to="/" 
            className={`nav-item ${isHomeActive ? 'nav-item-active' : ''}`} 
            onClick={handleHomeClick}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className={`nav-item ${isAboutActive ? 'nav-item-active' : ''}`} 
            onClick={closeMenu}
          >
            About
          </Link>

          {/* Services Nav Dropdown Item */}
          <div 
            className="nav-dropdown-wrapper"
            ref={dropdownRef}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="nav-dropdown-trigger">
              <Link 
                to="/services" 
                className={`nav-item ${isServicesActive ? 'nav-item-active' : ''}`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <button 
                type="button" 
                className={`dropdown-caret-btn ${servicesDropdownOpen ? 'dropdown-caret-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
                aria-label="Toggle Services Menu"
                aria-expanded={servicesDropdownOpen}
              >
                <ChevronDown size={14} className={`dropdown-caret-icon ${servicesDropdownOpen ? 'caret-flipped' : ''}`} />
              </button>
            </div>

            {/* Desktop Dropdown Flyout Menu */}
            {servicesDropdownOpen && (
              <div className="services-dropdown-popover">
                <div className="dropdown-popover-header">
                  <span>OUR SERVICES</span>
                </div>
                <div className="dropdown-links-list">
                  {servicesShowcase.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services#${s.id}`}
                      className="dropdown-service-item"
                      onClick={closeMenu}
                    >
                      <div className="dropdown-item-texts">
                        <span className="dropdown-item-title">{s.title}</span>
                        <span className="dropdown-item-sub">{s.eyebrow}</span>
                      </div>
                      <ChevronRight size={14} className="dropdown-item-arrow" />
                    </Link>
                  ))}
                </div>
                <div className="dropdown-popover-footer">
                  <Link 
                    to="/services" 
                    className="dropdown-all-link"
                    onClick={closeMenu}
                  >
                    <span>View All Services</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a 
            href="/#proof" 
            className="nav-item" 
            onClick={(e) => handleSectionClick(e, 'proof')}
          >
            Our Work
          </a>
          <a 
            href="/#reviews" 
            className="nav-item" 
            onClick={(e) => handleSectionClick(e, 'reviews')}
          >
            Reviews
          </a>
          <a 
            href="/#process" 
            className="nav-item" 
            onClick={(e) => handleSectionClick(e, 'process')}
          >
            Process
          </a>
          <a 
            href="/#service-areas" 
            className="nav-item" 
            onClick={(e) => handleSectionClick(e, 'service-areas')}
          >
            Service Areas
          </a>
          <a 
            href="/#faq" 
            className="nav-item" 
            onClick={(e) => handleSectionClick(e, 'faq')}
          >
            FAQ
          </a>
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
            <Link 
              to="/" 
              className={isHomeActive ? 'mobile-nav-active' : ''}
              onClick={handleHomeClick}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={isAboutActive ? 'mobile-nav-active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className="mobile-services-accordion">
              <div className="mobile-services-row">
                <Link 
                  to="/services" 
                  className={isServicesActive ? 'mobile-nav-active' : ''}
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <button 
                  type="button" 
                  className="mobile-services-arrow-btn"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-label="Toggle Services List"
                >
                  <ChevronDown size={18} className={`mobile-caret ${mobileServicesOpen ? 'mobile-caret-open' : ''}`} />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="mobile-services-submenu">
                  {servicesShowcase.map((s) => (
                    <Link 
                      key={s.id}
                      to={`/services#${s.id}`}
                      className="mobile-service-sublink"
                      onClick={closeMenu}
                    >
                      <span>{s.title}</span>
                      <ChevronRight size={14} />
                    </Link>
                  ))}
                  <Link 
                    to="/services" 
                    className="mobile-service-all-link"
                    onClick={closeMenu}
                  >
                    View All Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            <a href="/#proof" onClick={(e) => handleSectionClick(e, 'proof')}>Our Work</a>
            <a href="/#reviews" onClick={(e) => handleSectionClick(e, 'reviews')}>5.0 Google Reviews</a>
            <a href="/#process" onClick={(e) => handleSectionClick(e, 'process')}>How It Works</a>
            <a href="/#special-offers" onClick={(e) => handleSectionClick(e, 'special-offers')}>Special Offers</a>
            <a href="/#service-areas" onClick={(e) => handleSectionClick(e, 'service-areas')}>Service Areas</a>
            <a href="/#faq" onClick={(e) => handleSectionClick(e, 'faq')}>FAQ</a>
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
          text-decoration: none;
        }
        .brand-logo-img {
          height: 48px;
          width: auto;
          max-width: 190px;
          object-fit: contain;
          display: block;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 18px;
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
        .nav-item-active {
          color: var(--color-accent) !important;
          border-bottom: 2px solid var(--color-accent);
          padding-bottom: 2px;
        }

        /* Nav Dropdown */
        .nav-dropdown-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .nav-dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .dropdown-caret-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 4px 2px;
          color: var(--color-navy);
          transition: color var(--transition-fast);
        }
        .dropdown-caret-btn:hover,
        .dropdown-caret-active {
          color: var(--color-accent);
        }
        .dropdown-caret-icon {
          transition: transform 0.25s ease;
        }
        .caret-flipped {
          transform: rotate(180deg);
        }

        .services-dropdown-popover {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          width: 320px;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          box-shadow: 0 12px 36px rgba(16, 42, 67, 0.16);
          padding: 8px 0;
          z-index: 1100;
          animation: flyoutSlide 0.2s ease-out;
        }
        @keyframes flyoutSlide {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .dropdown-popover-header {
          padding: 8px 18px;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          color: var(--color-accent);
          letter-spacing: 0.08em;
          border-bottom: 1px solid var(--color-border-subtle);
        }
        .dropdown-links-list {
          display: flex;
          flex-direction: column;
        }
        .dropdown-service-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 18px;
          text-decoration: none;
          transition: all var(--transition-fast);
          border-left: 3px solid transparent;
        }
        .dropdown-service-item:hover {
          background: #F8FAFC;
          border-left-color: var(--color-accent);
        }
        .dropdown-item-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: var(--color-navy);
          letter-spacing: 0.03em;
          line-height: 1.1;
        }
        .dropdown-item-sub {
          display: block;
          font-size: 0.72rem;
          color: var(--color-text-muted);
          line-height: 1.2;
        }
        .dropdown-item-arrow {
          color: var(--color-accent);
          opacity: 0;
          transform: translateX(-4px);
          transition: all var(--transition-fast);
        }
        .dropdown-service-item:hover .dropdown-item-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .dropdown-popover-footer {
          padding: 8px 18px;
          border-top: 1px solid var(--color-border-subtle);
          background: #F8FAFC;
        }
        .dropdown-all-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-accent);
          text-decoration: none;
        }
        .dropdown-all-link:hover {
          text-decoration: underline;
        }

        .mobile-nav-active {
          color: var(--color-accent) !important;
          font-weight: 800 !important;
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

        @media (max-width: 1220px) {
          .header-nav {
            gap: 12px;
          }
          .nav-item {
            font-size: 0.85rem;
          }
        }
        @media (max-width: 1080px) {
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

          /* Mobile Services Accordion */
          .mobile-services-accordion {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid var(--color-border-subtle);
          }
          .mobile-services-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .mobile-services-row a {
            border-bottom: none !important;
            flex-grow: 1;
          }
          .mobile-services-arrow-btn {
            background: none;
            border: none;
            padding: 6px 10px;
            cursor: pointer;
            color: var(--color-navy);
          }
          .mobile-caret {
            transition: transform 0.25s ease;
          }
          .mobile-caret-open {
            transform: rotate(180deg);
            color: var(--color-accent);
          }
          .mobile-services-submenu {
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding: 8px 12px;
            background: #F8FAFC;
            border-radius: var(--radius-xs);
            margin: 6px 0 12px 0;
            border-left: 2px solid var(--color-accent);
          }
          .mobile-service-sublink {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.9rem !important;
            font-weight: 600 !important;
            color: var(--color-navy) !important;
            padding: 6px 8px !important;
            border-bottom: none !important;
            border-radius: var(--radius-xs);
          }
          .mobile-service-sublink:hover {
            background: #EEF2F6;
            color: var(--color-accent) !important;
          }
          .mobile-service-all-link {
            font-size: 0.85rem !important;
            font-weight: 800 !important;
            color: var(--color-accent) !important;
            padding: 6px 8px !important;
            border-bottom: none !important;
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
