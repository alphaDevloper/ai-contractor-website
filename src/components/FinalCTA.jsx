import React, { useState } from 'react';
import { Phone, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';

export default function FinalCTA({ onOpenModal }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: 'Residential Roof Replacement'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="section-padding final-cta-section" id="final-cta">
      <div className="container">
        
        <div className="final-cta-grid">
          
          {/* Left Column: Brand + Heading + Direct Phone */}
          <div className="final-cta-text-col">
            <div className="final-cta-brand">
              <svg viewBox="0 0 40 40" fill="none" className="final-brand-svg">
                <path d="M20 4L4 16H9V34H31V16H36L20 4Z" fill="#1677C8" />
                <path d="M20 9L9 17.5V31H16V22H24V31H31V17.5L20 9Z" fill="#55B8F5" />
                <path d="M20 2L3 15L5.5 18L20 7L34.5 18L37 15L20 2Z" fill="#102A43" />
                <circle cx="20" cy="15" r="2.5" fill="#EA580C" />
              </svg>
            </div>

            <div className="eyebrow-red">
              READY TO GET STARTED?
            </div>

            <h2 className="final-cta-heading">
              GET YOUR FREE INSPECTION TODAY
            </h2>

            <p className="final-cta-desc">
              Whether you need hail damage verified for an Alberta insurance claim or want to replace aging shingles before winter, Marcus Delgray and our certified in-house crew are ready to inspect your property.
            </p>

            <a href="tel:+1333456789" className="final-phone-link-box">
              <div className="final-phone-icon">
                <Phone size={22} />
              </div>
              <div>
                <span className="final-phone-sub">Call our local Calgary dispatch directly:</span>
                <span className="final-phone-num">+1 333 456789</span>
              </div>
            </a>
          </div>

          {/* Right Column: Dark Floating Lead Capture Card */}
          <div className="final-cta-form-col">
            <div className="lead-card-dark">
              <h3 className="lead-card-title">SEE WHAT YOUR PROJECT WILL COST</h3>
              <p className="lead-card-sub">
                Guaranteed flat-rate pricing &bull; 100% Free on-site inspection
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle size={44} color="#10B981" />
                  <h3>Estimate Request Sent!</h3>
                  <p>Thanks, {formData.firstName}. We will call you at <strong>{formData.phone}</strong> shortly to confirm your inspection.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="cta-first-name">First Name *</label>
                      <input 
                        type="text" 
                        id="cta-first-name" 
                        required 
                        placeholder="John" 
                        className="form-control-dark"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label-white" htmlFor="cta-last-name">Last Name</label>
                      <input 
                        type="text" 
                        id="cta-last-name" 
                        placeholder="Smith" 
                        className="form-control-dark"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label-white" htmlFor="cta-phone-num">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="cta-phone-num" 
                      required 
                      placeholder="(403) 555-0192" 
                      className="form-control-dark"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label-white" htmlFor="cta-email-addr">Email Address</label>
                    <input 
                      type="email" 
                      id="cta-email-addr" 
                      placeholder="john@example.com" 
                      className="form-control-dark"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label-white" htmlFor="cta-service-sel">Service Needed</label>
                    <select 
                      id="cta-service-sel" 
                      className="form-control-dark"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="Residential Roof Replacement">Residential Roof Replacement</option>
                      <option value="Hail & Storm Damage Restoration">Hail & Storm Damage Restoration</option>
                      <option value="Emergency Roof Repair">Emergency Roof Repair</option>
                      <option value="Eavestrough & Gutters">Eavestrough & Gutters</option>
                      <option value="Siding & Flashing">Siding & Flashing</option>
                    </select>
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
        .final-cta-section {
          background-color: #FFFFFF;
        }
        .final-cta-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 50px;
          align-items: center;
        }
        .final-cta-brand {
          width: 48px;
          height: 48px;
          margin-bottom: 12px;
        }
        .final-brand-svg {
          width: 100%;
          height: 100%;
        }
        .final-cta-heading {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          line-height: 1.02;
          margin-bottom: 14px;
          color: var(--color-navy);
        }
        .final-cta-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 26px;
        }
        .final-phone-link-box {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 14px 20px;
          background: var(--bg-canvas);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-sm);
          transition: border-color var(--transition-fast);
        }
        .final-phone-link-box:hover {
          border-color: var(--color-accent);
        }
        .final-phone-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-xs);
          background: var(--color-navy);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .final-phone-sub {
          display: block;
          font-size: 0.725rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          font-weight: 700;
        }
        .final-phone-num {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          color: var(--color-navy);
          letter-spacing: 0.04em;
        }

        @media (max-width: 992px) {
          .final-cta-grid {
            grid-template-columns: 1fr;
          }
          .final-cta-form-col {
            max-width: 540px;
          }
        }
      `}</style>
    </section>
  );
}
