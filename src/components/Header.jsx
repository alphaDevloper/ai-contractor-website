import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

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
          <a 
            href="/#services" 
            className="nav-item" 
            onClick={(e) => handleSectionClick(e, 'services')}
          >
            Services
          </a>
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
            <a href="/#services" onClick={(e) => handleSectionClick(e, 'services')}>Services</a>
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
