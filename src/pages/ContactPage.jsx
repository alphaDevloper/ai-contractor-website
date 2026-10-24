import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Send, 
  AlertCircle, 
  ExternalLink, 
  Navigation as NavigationIcon,
  Sparkles
} from 'lucide-react';
import heroBg from '../assets/about_residential_home.jpg';
import logoImg from '../assets/logo.png';

/* ==========================================================================
   SCROLLING MARQUEE TICKER (MATCHING DESIGN)
   ========================================================================== */
function ContactMarquee() {
  const items = [
    "AERODOME ROOFING & RESTORATION",
    "AERODOME ROOFING & RESTORATION",
    "AERODOME ROOFING & RESTORATION",
    "AERODOME ROOFING & RESTORATION",
    "AERODOME ROOFING & RESTORATION"
  ];

  return (
    <div className="contact-marquee-ribbon" aria-hidden="true">
      <div className="contact-marquee-track">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="contact-marquee-item">
            <img src={logoImg} alt="" className="contact-marquee-logo" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   CONTACT PAGE COMPONENT
   ========================================================================== */
export default function ContactPage({ onOpenModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | AeroDome Roofing Calgary";
  }, []);

  // Main Contact Form State
  const [mainForm, setMainForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: '',
    isNotRobot: false,
    agreedToTerms: false
  });
  const [mainSubmitted, setMainSubmitted] = useState(false);
  const [mainError, setMainError] = useState('');

  // Bottom Quick Estimate Form State
  const [bottomForm, setBottomForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    isNotRobot: false,
    agreedToTerms: false
  });
  const [bottomSubmitted, setBottomSubmitted] = useState(false);
  const [bottomError, setBottomError] = useState('');

  // Handle Main Form Submission
  const handleMainSubmit = (e) => {
    e.preventDefault();
    setMainError('');

    if (!mainForm.fullName.trim() || !mainForm.phone.trim() || !mainForm.email.trim()) {
      setMainError('Please fill out all required fields.');
      return;
    }
    if (!mainForm.isNotRobot) {
      setMainError('Please check the verification box to confirm you are not a robot.');
      return;
    }

    setMainSubmitted(true);
  };

  // Handle Bottom Form Submission
  const handleBottomSubmit = (e) => {
    e.preventDefault();
    setBottomError('');

    if (!bottomForm.fullName.trim() || !bottomForm.phone.trim()) {
      setBottomError('Please fill out your name and phone number.');
      return;
    }
    if (!bottomForm.isNotRobot) {
      setBottomError('Please check the verification box to confirm you are not a robot.');
      return;
    }

    setBottomSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">

      {/* =================================================================== */}
      {/* 1. HERO SECTION                                                     */}
      {/* =================================================================== */}
      <section className="contact-page-hero">
        <div className="contact-hero-bg-wrapper">
          <img 
            src={heroBg} 
            alt="AeroDome Roofing Calgary Residential Exterior" 
            className="contact-hero-bg-img"
          />
          <div className="contact-hero-overlay"></div>
        </div>

        <div className="container contact-hero-container">
          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="contact-breadcrumb-divider">&gt;</span>
            <span className="contact-breadcrumb-active">CONTACT</span>
          </nav>

          <div className="contact-hero-eyebrow">
            GET IN TOUCH
          </div>

          <h1 className="contact-hero-title">
            CONTACT US
          </h1>

          <p className="contact-hero-subtitle">
            Ready to get started? Reach out by phone, email, or fill out the form below. We'll get back to you same day.
          </p>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. MAIN SECTION: FORM + CONTACT INFO CARDS (LIGHT THEME)            */}
      {/* =================================================================== */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">

            {/* ----------------- LEFT COLUMN: SEND US A MESSAGE FORM ----------------- */}
            <div className="contact-form-card">
              <h2 className="contact-form-title">SEND US A MESSAGE</h2>
              <p className="contact-form-subtitle">
                Fill out the form below and a member of our team will contact you within 24 hours to schedule your free inspection.
              </p>

              {mainSubmitted ? (
                <div className="contact-success-box">
                  <div className="contact-success-icon-wrap">
                    <CheckCircle2 size={54} color="#10B981" />
                  </div>
                  <h3 className="contact-success-title">Message Sent Successfully!</h3>
                  <p className="contact-success-desc">
                    Thank you, <strong>{mainForm.fullName}</strong>. Marcus Delgray or our senior roofing team will review your inquiry and call you at <strong>{mainForm.phone}</strong> shortly.
                  </p>
                  <button 
                    type="button" 
                    onClick={() => {
                      setMainSubmitted(false);
                      setMainForm({
                        fullName: '',
                        phone: '',
                        email: '',
                        address: '',
                        service: '',
                        message: '',
                        isNotRobot: false,
                        agreedToTerms: false
                      });
                    }}
                    className="contact-success-reset-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleMainSubmit} className="contact-actual-form">
                  {mainError && (
                    <div className="contact-error-alert" role="alert">
                      <AlertCircle size={18} />
                      <span>{mainError}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Phone Number */}
                  <div className="contact-form-row-2">
                    <div className="contact-field-group">
                      <label className="contact-label-light" htmlFor="main-fullname">
                        FULL NAME *
                      </label>
                      <input 
                        type="text" 
                        id="main-fullname"
                        required
                        placeholder="John Smith" 
                        className="contact-control-light"
                        value={mainForm.fullName}
                        onChange={(e) => setMainForm({ ...mainForm, fullName: e.target.value })}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label className="contact-label-light" htmlFor="main-phone">
                        PHONE NUMBER *
                      </label>
                      <input 
                        type="tel" 
                        id="main-phone"
                        required
                        placeholder="(403) 555-0192" 
                        className="contact-control-light"
                        value={mainForm.phone}
                        onChange={(e) => setMainForm({ ...mainForm, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Property Address */}
                  <div className="contact-form-row-2">
                    <div className="contact-field-group">
                      <label className="contact-label-light" htmlFor="main-email">
                        EMAIL ADDRESS *
                      </label>
                      <input 
                        type="email" 
                        id="main-email"
                        required
                        placeholder="john@example.com" 
                        className="contact-control-light"
                        value={mainForm.email}
                        onChange={(e) => setMainForm({ ...mainForm, email: e.target.value })}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label className="contact-label-light" htmlFor="main-address">
                        PROPERTY ADDRESS
                      </label>
                      <input 
                        type="text" 
                        id="main-address"
                        placeholder="123 Main St, Calgary, AB" 
                        className="contact-control-light"
                        value={mainForm.address}
                        onChange={(e) => setMainForm({ ...mainForm, address: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 3: How Can We Help? */}
                  <div className="contact-field-group">
                    <label className="contact-label-light" htmlFor="main-service">
                      HOW CAN WE HELP? *
                    </label>
                    <select 
                      id="main-service"
                      required
                      className="contact-control-light contact-select-light"
                      value={mainForm.service}
                      onChange={(e) => setMainForm({ ...mainForm, service: e.target.value })}
                    >
                      <option value="">Select a service...</option>
                      <option value="Residential Roof Replacement">Residential Roof Replacement</option>
                      <option value="Hail & Storm Damage Restoration">Hail &amp; Storm Damage Restoration</option>
                      <option value="Roof Repair & Leak Detection">Roof Repair &amp; Leak Detection</option>
                      <option value="Eavestrough & Gutters">Eavestrough &amp; Gutters</option>
                      <option value="James Hardie Siding">James Hardie Siding</option>
                      <option value="Skylight Installation & Repair">Skylight Installation &amp; Repair</option>
                      <option value="Commercial Roofing">Commercial Roofing</option>
                      <option value="Free Roof Inspection">Free Comprehensive Inspection</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div className="contact-field-group">
                    <label className="contact-label-light" htmlFor="main-message">
                      MESSAGE
                    </label>
                    <textarea 
                      id="main-message"
                      rows={5}
                      placeholder="Tell us about your project, current issues, or any questions you have..."
                      className="contact-control-light contact-textarea-light"
                      value={mainForm.message}
                      onChange={(e) => setMainForm({ ...mainForm, message: e.target.value })}
                    />
                  </div>

                  {/* Row 5: I am not a robot checkbox */}
                  <div className="contact-captcha-box">
                    <label className="contact-captcha-label">
                      <input 
                        type="checkbox" 
                        className="contact-custom-checkbox"
                        checked={mainForm.isNotRobot}
                        onChange={(e) => setMainForm({ ...mainForm, isNotRobot: e.target.checked })}
                      />
                      <span className="contact-captcha-text">I am not a robot</span>
                    </label>
                    <div className="contact-captcha-badge">
                      <img 
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                        alt="reCAPTCHA" 
                        className="contact-captcha-img" 
                      />
                      <span>reCAPTCHA</span>
                    </div>
                  </div>

                  {/* Row 6: SMS Consent Disclaimer */}
                  <div className="contact-consent-box">
                    <label className="contact-consent-label">
                      <input 
                        type="checkbox" 
                        className="contact-custom-checkbox"
                        checked={mainForm.agreedToTerms}
                        onChange={(e) => setMainForm({ ...mainForm, agreedToTerms: e.target.checked })}
                      />
                      <span className="contact-consent-text">
                        I agree to receive text messages from AeroDome Roofing related to my inquiry, follow-ups, and appointment reminders. Message and data rates may apply. Message frequency varies. Reply STOP to opt out anytime. Reply HELP for assistance. See our <Link to="/#privacy">privacy policy</Link> and <Link to="/#terms">terms and conditions</Link> for more details.
                      </span>
                    </label>
                  </div>

                  {/* Row 7: Submit Button */}
                  <button type="submit" className="contact-btn-submit">
                    <span>SEND MY MESSAGE</span>
                    <ArrowRight size={20} />
                  </button>

                  {/* Row 8: Microcopy */}
                  <p className="contact-form-microcopy">
                    No spam. No obligation. We typically respond within 2 hours.
                  </p>
                </form>
              )}
            </div>

            {/* ----------------- RIGHT COLUMN: INFO CARDS ----------------- */}
            <div className="contact-sidebar-cards">

              {/* CARD 1: CONTACT INFO */}
              <div className="contact-info-card">
                <h3 className="contact-card-heading">CONTACT INFO</h3>
                <div className="contact-items-list">
                  
                  {/* Phone */}
                  <div className="contact-info-item">
                    <div className="contact-info-icon-badge">
                      <Phone size={22} className="contact-icon-accent" />
                    </div>
                    <div className="contact-info-details">
                      <div className="contact-item-tag">PHONE</div>
                      <a href="tel:+1333456789" className="contact-item-link">
                        +1 333 456789
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-info-item">
                    <div className="contact-info-icon-badge">
                      <Mail size={22} className="contact-icon-accent" />
                    </div>
                    <div className="contact-info-details">
                      <div className="contact-item-tag">EMAIL</div>
                      <a href="mailto:info@aerodomeroofing.com" className="contact-item-link">
                        info@aerodomeroofing.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="contact-info-item">
                    <div className="contact-info-icon-badge">
                      <MapPin size={22} className="contact-icon-accent" />
                    </div>
                    <div className="contact-info-details">
                      <div className="contact-item-tag">ADDRESS</div>
                      <div className="contact-item-value">
                        915 NW High View Dr<br />
                        Calgary, AB T3B 2V6
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* CARD 2: BUSINESS HOURS */}
              <div className="contact-hours-card">
                <h3 className="contact-card-heading">BUSINESS HOURS</h3>
                <div className="contact-hours-table">
                  <div className="contact-hours-row">
                    <span className="contact-hours-day">Monday – Saturday</span>
                    <span className="contact-hours-time">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="contact-hours-row">
                    <span className="contact-hours-day">Sunday</span>
                    <span className="contact-hours-closed">Closed (emergency calls answered)</span>
                  </div>
                </div>

                {/* 24/7 Emergency Indicator */}
                <div className="contact-emergency-strip">
                  <span className="contact-pulse-dot"></span>
                  <span className="contact-emergency-text">24/7 Emergency Roofing Available</span>
                </div>
              </div>

              {/* CARD 3: SERVING GREATER CALGARY & SURROUNDING */}
              <div className="contact-service-area-card">
                <h3 className="contact-card-heading">SERVING GREATER CALGARY</h3>
                <p className="contact-service-area-sub">
                  Calgary Metro &amp; Surrounding Foothills Communities
                </p>
                <Link to="/service-areas" className="contact-view-area-btn">
                  <span>VIEW OUR SERVICE AREA</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. INTERACTIVE MAP SECTION                                          */}
      {/* =================================================================== */}
      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map-wrapper">
            
            {/* Overlay Location Badge */}
            <div className="contact-map-overlay-badge">
              <div className="contact-map-badge-header">
                <h4 className="contact-map-badge-title">Calgary Operations HQ</h4>
                <p className="contact-map-badge-sub">Calgary, AB, Canada</p>
              </div>
              <div className="contact-map-badge-actions">
                <a 
                  href="https://maps.google.com/?q=Calgary+AB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-map-action-link"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={14} />
                </a>
                <a 
                  href="https://maps.google.com/?daddr=Calgary+AB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-map-directions-btn"
                  title="Get Directions"
                >
                  <NavigationIcon size={14} />
                </a>
              </div>
            </div>

            {/* Google Map Embedded Iframe */}
            <iframe 
              title="AeroDome Roofing Calgary Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160533.9161749629!2d-114.21428357771764!3d51.02775553195328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map-iframe"
            />
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. SECTION: "READY TO GET STARTED?" BOTTOM CTA                      */}
      {/* =================================================================== */}
      <section className="contact-bottom-cta-section">
        <div className="container">
          <div className="contact-bottom-cta-grid">

            {/* Left Content */}
            <div className="contact-bottom-cta-left">
              <div className="contact-bottom-cta-logo-wrap">
                <img 
                  src={logoImg} 
                  alt="AeroDome Roofing" 
                  className="contact-bottom-cta-logo-img" 
                />
              </div>

              <div className="contact-bottom-cta-eyebrow">
                GET STARTED TODAY
              </div>

              <h2 className="contact-bottom-cta-heading">
                READY TO GET STARTED?
              </h2>

              <p className="contact-bottom-cta-desc">
                The best time to fix your roof is before the next Calgary storm hits. Get started today with a no-pressure consultation and a free roof inspection. AeroDome is family-owned, woman-led, owner-managed, and just a click or call away.
              </p>
            </div>

            {/* Right Form Card */}
            <div className="contact-estimate-card">
              <h3 className="contact-estimate-title">GET MY FREE ESTIMATE</h3>
              <p className="contact-estimate-sub">
                Fast response. Honest guidance. No pressure.
              </p>

              {bottomSubmitted ? (
                <div className="contact-success-box" style={{ background: 'transparent', padding: '20px 0' }}>
                  <CheckCircle2 size={46} color="#10B981" />
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.4rem', margin: '12px 0 6px' }}>
                    Estimate Request Sent!
                  </h4>
                  <p style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>
                    Thanks, <strong>{bottomForm.fullName}</strong>. We will contact you at <strong>{bottomForm.phone}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBottomSubmit} className="contact-bottom-form">
                  {bottomError && (
                    <div className="contact-error-alert" style={{ marginBottom: '12px' }} role="alert">
                      <AlertCircle size={16} />
                      <span>{bottomError}</span>
                    </div>
                  )}

                  <div className="contact-bottom-row-2">
                    <input 
                      type="text" 
                      placeholder="Your Name *"
                      required
                      className="contact-bottom-input"
                      value={bottomForm.fullName}
                      onChange={(e) => setBottomForm({ ...bottomForm, fullName: e.target.value })}
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number *"
                      required
                      className="contact-bottom-input"
                      value={bottomForm.phone}
                      onChange={(e) => setBottomForm({ ...bottomForm, phone: e.target.value })}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="contact-bottom-input"
                      value={bottomForm.email}
                      onChange={(e) => setBottomForm({ ...bottomForm, email: e.target.value })}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <select 
                      className="contact-bottom-input contact-bottom-select"
                      value={bottomForm.service}
                      onChange={(e) => setBottomForm({ ...bottomForm, service: e.target.value })}
                    >
                      <option value="">How Can We Help?</option>
                      <option value="Residential Roof Replacement">Residential Roof Replacement</option>
                      <option value="Hail & Storm Damage Restoration">Hail &amp; Storm Damage Restoration</option>
                      <option value="Roof Repair & Leak Detection">Roof Repair &amp; Leak Detection</option>
                      <option value="Eavestrough & Gutters">Eavestrough &amp; Gutters</option>
                      <option value="Siding & Flashing">Siding &amp; Flashing</option>
                      <option value="Commercial Roofing">Commercial Roofing</option>
                      <option value="Free Roof Inspection">Free Roof Inspection</option>
                    </select>
                  </div>

                  {/* Robot Checkbox */}
                  <div className="contact-captcha-box" style={{ background: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.15)' }}>
                    <label className="contact-captcha-label">
                      <input 
                        type="checkbox" 
                        className="contact-custom-checkbox"
                        checked={bottomForm.isNotRobot}
                        onChange={(e) => setBottomForm({ ...bottomForm, isNotRobot: e.target.checked })}
                      />
                      <span className="contact-captcha-text" style={{ color: '#FFFFFF' }}>I am not a robot</span>
                    </label>
                    <div className="contact-captcha-badge">
                      <img 
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                        alt="reCAPTCHA" 
                        className="contact-captcha-img" 
                      />
                      <span style={{ color: '#94A3B8' }}>reCAPTCHA</span>
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="contact-consent-box">
                    <label className="contact-consent-label">
                      <input 
                        type="checkbox" 
                        className="contact-custom-checkbox"
                        checked={bottomForm.agreedToTerms}
                        onChange={(e) => setBottomForm({ ...bottomForm, agreedToTerms: e.target.checked })}
                      />
                      <span className="contact-consent-text" style={{ color: '#94A3B8' }}>
                        I agree to receive text messages from AeroDome Roofing related to my inquiry, follow-ups, and appointment reminders. Message and data rates may apply. Message frequency varies. Reply STOP to opt out anytime. Reply HELP for assistance. See our <Link to="/#privacy" style={{ color: 'var(--color-sky)' }}>privacy policy</Link> and <Link to="/#terms" style={{ color: 'var(--color-sky)' }}>terms and conditions</Link> for more details.
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="contact-bottom-submit-btn">
                    <span>GET MY FREE ESTIMATE</span>
                    <ArrowRight size={18} />
                  </button>

                  <p className="contact-bottom-microcopy">
                    We will never send you unsolicited messages. No obligation. No pressure.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. CONTINUOUS TICKER RIBBON (BEFORE FOOTER)                         */}
      {/* =================================================================== */}
      <ContactMarquee />

    </div>
  );
}
