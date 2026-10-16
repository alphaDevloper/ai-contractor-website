import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronRight, ChevronDown, Compass } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesShowcase } from '../data/servicesData';
import { serviceAreaDropdownList } from '../data/serviceAreasData';
import logo from "../../public/aerodome-logo.webp"

export default function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const areasDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
      if (areasDropdownRef.current && !areasDropdownRef.current.contains(event.target)) {
        setAreasDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns and mobile menu when route or hash changes
  useEffect(() => {
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
  };

  const handleSectionClick = (e, sectionId) => {
    closeMenu();
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = (e) => {
    closeMenu();
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHomeActive = location.pathname === '/' && !location.hash;
  const isAboutActive = location.pathname === '/about' || location.pathname === '/about-us';
  const isServicesActive = location.pathname.startsWith('/services');
  const isGalleryActive = 
    location.pathname === '/gallery' || 
    location.pathname === '/our-work' || 
    location.pathname === '/portfolio' || 
    location.pathname === '/case-studies';
  const isServiceAreasActive = location.pathname.startsWith('/service-areas');
  const isNavigationActive = 
    location.pathname === '/navigation' || 
    location.pathname === '/nav' || 
    location.pathname === '/sitemap';

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container-wide header-inner">
        
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={handleHomeClick} aria-label="AeroDome Roofing Home">
          <img 
            src={logo} 
            alt="AeroDome Roofing Calgary" 
            className="brand-logo-img" 
          />
        </Link>

        {/* Desktop Links */}
        <nav className="header-nav" aria-label="Main Navigation">
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

          <Link 
            to="/gallery" 
            className={`nav-item ${isGalleryActive ? 'nav-item-active' : ''}`}
            onClick={closeMenu}
          >
            Gallery
          </Link>

          {/* Service Areas Nav Dropdown Item */}
          <div 
            className="nav-dropdown-wrapper"
            ref={areasDropdownRef}
            onMouseEnter={() => setAreasDropdownOpen(true)}
            onMouseLeave={() => setAreasDropdownOpen(false)}
          >
            <div className="nav-dropdown-trigger">
              <Link 
                to="/service-areas" 
                className={`nav-item ${isServiceAreasActive ? 'nav-item-active' : ''}`}
                onClick={closeMenu}
              >
                Service Areas
              </Link>
              <button 
                type="button" 
                className={`dropdown-caret-btn ${areasDropdownOpen ? 'dropdown-caret-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setAreasDropdownOpen(!areasDropdownOpen);
                }}
                aria-label="Toggle Service Areas Menu"
                aria-expanded={areasDropdownOpen}
              >
                <ChevronDown size={14} className={`dropdown-caret-icon ${areasDropdownOpen ? 'caret-flipped' : ''}`} />
              </button>
            </div>

            {/* Desktop Dropdown Popover */}
            {areasDropdownOpen && (
              <div className="services-dropdown-popover areas-dropdown-popover">
                <div className="dropdown-popover-header">
                  <span>OUR SERVICE AREAS</span>
                </div>
                <div className="dropdown-links-list">
                  {serviceAreaDropdownList.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/service-areas/${area.slug}`}
                      className="dropdown-service-item"
                      onClick={closeMenu}
                    >
                      <div className="dropdown-item-texts">
                        <span className="dropdown-item-title">{area.name}</span>
                        <span className="dropdown-item-sub">{area.region}</span>
                      </div>
                      <ChevronRight size={14} className="dropdown-item-arrow" />
                    </Link>
                  ))}
                </div>
                <div className="dropdown-popover-footer">
                  <Link 
                    to="/service-areas" 
                    className="dropdown-all-link"
                    onClick={closeMenu}
                  >
                    <span>View All Service Areas</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Directory Page Link */}
          <Link 
            to="/navigation" 
            className={`nav-item ${isNavigationActive ? 'nav-item-active' : ''}`}
            onClick={closeMenu}
            title="Complete Site Directory & All Routes"
          >
            Navigation
          </Link>

          <Link 
            to="/#reviews" 
            className="nav-item" 
            onClick={(e) => handleSectionClick(e, 'reviews')}
          >
            Reviews
          </Link>

          <Link 
            to="/#process" 
            className="nav-item" 
            onClick={(e) => handleSectionClick(e, 'process')}
          >
            Process
          </Link>

          <Link 
            to="/#faq" 
            className="nav-item" 
            onClick={(e) => handleSectionClick(e, 'faq')}
          >
            FAQ
          </Link>
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

            <Link 
              to="/gallery" 
              className={isGalleryActive ? 'mobile-nav-active' : ''}
              onClick={closeMenu}
            >
              Gallery / Our Work
            </Link>

            {/* Mobile Service Areas Accordion */}
            <div className="mobile-services-accordion">
              <div className="mobile-services-row">
                <Link 
                  to="/service-areas" 
                  className={isServiceAreasActive ? 'mobile-nav-active' : ''}
                  onClick={closeMenu}
                >
                  Service Areas
                </Link>
                <button 
                  type="button" 
                  className="mobile-services-arrow-btn"
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                  aria-label="Toggle Service Areas Submenu"
                >
                  <ChevronDown size={18} className={`mobile-caret ${mobileAreasOpen ? 'mobile-caret-open' : ''}`} />
                </button>
              </div>

              {mobileAreasOpen && (
                <div className="mobile-services-submenu">
                  {serviceAreaDropdownList.map((area) => (
                    <Link 
                      key={area.slug} 
                      to={`/service-areas/${area.slug}`} 
                      className="mobile-service-sublink" 
                      onClick={closeMenu}
                    >
                      <span>{area.name}</span>
                      <ChevronRight size={14} />
                    </Link>
                  ))}
                  <Link 
                    to="/service-areas" 
                    className="mobile-service-all-link" 
                    onClick={closeMenu}
                  >
                    View All Service Areas &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Navigation Directory Link */}
            <Link 
              to="/navigation" 
              className={isNavigationActive ? 'mobile-nav-active' : ''}
              onClick={closeMenu}
              style={{ color: 'var(--color-accent)', fontWeight: '800' }}
            >
              Site Navigation (All Routes) &rarr;
            </Link>

            <Link to="/#reviews" onClick={(e) => handleSectionClick(e, 'reviews')}>5.0 Google Reviews</Link>
            <Link to="/#process" onClick={(e) => handleSectionClick(e, 'process')}>How It Works</Link>
            <Link to="/#special-offers" onClick={(e) => handleSectionClick(e, 'special-offers')}>Special Offers</Link>
            <Link to="/#faq" onClick={(e) => handleSectionClick(e, 'faq')}>FAQ</Link>
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
