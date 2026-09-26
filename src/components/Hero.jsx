import React, { useState } from 'react';
import { Star, CheckCircle, ChevronRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: 'Residential Roof Replacement',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Graphic & Backdrop */}
      <div className="hero-bg-wrapper">
        <img 
          src="/images/hero_roofing.jpg" 
          alt="AeroDome Roofing contractor truck and residential home in Calgary" 
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          
          {/* Left Column: Heading & Value Points */}
          <div className="hero-content">
            <div className="eyebrow-red hero-eyebrow">
              CALGARY'S HAIL & STORM DAMAGE SPECIALISTS
            </div>

            <h1 className="hero-headline">
              CALGARY'S ROOFING, SIDING AND STORM RESTORATION CONTRACTOR
            </h1>

            {/* Google Rating Badge (Exact Reference Style) */}
            <div className="hero-rating-badge">
              <div className="google-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>
              <span className="rating-text"><strong>5.0★ ON GOOGLE</strong> (312+ REVIEWS)</span>
            </div>

            {/* 3 Checkmark Bullet Items */}
            <div className="hero-checks-list">
              <div className="hero-check-item">
                <CheckCircle size={18} className="check-icon" />
                <span>10-Year Workmanship Warranty &bull; Up to 50-Yr Material Protection</span>
              </div>
              <div className="hero-check-item">
                <CheckCircle size={18} className="check-icon" />
                <span>100% Local In-House Crew &bull; Zero Subcontracting</span>
              </div>
              <div className="hero-check-item">
                <CheckCircle size={18} className="check-icon" />
                <span>Free On-Site AI-Assisted Roof Damage Inspection</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Floating Lead Capture Card */}
          <div className="hero-form-col">
            <div className="lead-card-dark">
              <h2 className="lead-card-title">SEE WHAT YOUR PROJECT WILL COST</h2>
              <p className="lead-card-sub">
                Get a free on-site roof inspection and guaranteed flat-rate proposal.
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle size={44} color="#10B981" />
                  <h3>Estimate Request Sent!</h3>
                  <p>Thanks, {formData.firstName}. Marcus Delgray or our senior estimator will call you at <strong>{formData.phone}</strong> within 15 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="hero-first-name">First Name *</label>
                      <input 
                        type="text" 
                        id="hero-first-name" 
                        required 
                        placeholder="John" 
                        className="form-control-dark"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="hero-last-name">Last Name</label>
                      <input 
                        type="text" 
                        id="hero-last-name" 
                        placeholder="Smith" 
                        className="form-control-dark"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="hero-phone-input">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="hero-phone-input" 
                        required 
                        placeholder="(403) 555-0192" 
                        className="form-control-dark"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="hero-email-input">Email Address</label>
                      <input 
                        type="email" 
                        id="hero-email-input" 
                        placeholder="john@example.com" 
                        className="form-control-dark"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label-white" htmlFor="hero-service-select">Service Needed</label>
                    <select 
                      id="hero-service-select" 
                      className="form-control-dark"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="Residential Roof Replacement">Residential Roof Replacement</option>
                      <option value="Hail & Storm Damage Restoration">Hail & Storm Damage Restoration</option>
                      <option value="Roof Repair & Leak Detection">Roof Repair & Leak Detection</option>
                      <option value="Eavestrough & Gutters">Eavestrough & Gutters</option>
                      <option value="Siding & Flashing">Siding & Flashing</option>
                      <option value="Skylight Installation">Skylight Installation</option>
                      <option value="Commercial Roofing">Commercial Roofing</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label-white" htmlFor="hero-address-input">Calgary Address / Community</label>
                    <input 
                      type="text" 
                      id="hero-address-input" 
                      placeholder="e.g. Aspen Woods, Calgary" 
                      className="form-control-dark"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="btn-orange" style={{ width: '100%', marginTop: '8px' }}>
                    <span>GET AN ESTIMATE</span>
                    <ChevronRight size={20} />
                  </button>

                  <div className="hero-form-microcopy">
                    <ShieldCheck size={14} />
                    <span>Free on-site inspection &bull; No obligation &bull; Flat-rate pricing</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 640px;
          display: flex;
          align-items: center;
          padding: 70px 0;
          overflow: hidden;
        }
        .hero-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg, 
            rgba(16, 42, 67, 0.94) 0%, 
            rgba(16, 42, 67, 0.88) 55%, 
            rgba(16, 42, 67, 0.72) 100%
          );
        }
        .hero-container {
          position: relative;
          z-index: 2;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }
        .hero-eyebrow {
          color: #FB923C;
          margin-bottom: 12px;
        }
        .hero-headline {
          color: #FFFFFF;
          font-size: clamp(2.8rem, 5.5vw, 4.4rem);
          line-height: 0.98;
          margin-bottom: 22px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        .hero-rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: var(--radius-xs);
          margin-bottom: 24px;
        }
        .google-icon-box {
          display: flex;
          align-items: center;
        }
        .rating-text {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: #FFFFFF;
          letter-spacing: 0.05em;
        }
        .rating-text strong {
          color: #FBBF24;
        }
        .hero-checks-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .hero-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #F1F5F9;
          font-size: 0.925rem;
          font-weight: 500;
        }
        .check-icon {
          color: var(--color-sky);
          flex-shrink: 0;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .hero-form-microcopy {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #94A3B8;
          font-size: 0.725rem;
          margin-top: 10px;
          text-align: center;
        }
        .form-success-box {
          padding: 30px 10px;
          text-align: center;
          color: #FFFFFF;
        }
        .form-success-box h3 {
          color: #FFFFFF;
          font-size: 1.5rem;
          margin: 12px 0 8px 0;
        }
        .form-success-box p {
          color: #CBD5E1;
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-form-col {
            max-width: 540px;
          }
        }
        @media (max-width: 580px) {
          .form-row-2 {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
}
