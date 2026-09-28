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
                      to={`/services/${s.id}`}
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
                      to={`/services/${s.id}`}
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

      
    </header>
  );
}
