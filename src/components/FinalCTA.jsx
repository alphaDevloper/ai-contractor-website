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
              <img 
                src="/aerodome-logo.png" 
                alt="AeroDome Roofing" 
                className="final-brand-logo-img" 
              />
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

      
    </section>
  );
}
