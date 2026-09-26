import React, { useState } from 'react';
import { X, CheckCircle, ChevronRight, ShieldCheck } from 'lucide-react';

export default function LeadModal({ isOpen, onClose, triggerSource = 'Direct CTA' }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: triggerSource.includes('Service:') 
      ? triggerSource.replace('Service:', '').trim() 
      : 'Residential Roof Replacement',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div className="modal-card-reference" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-cross" 
          onClick={handleResetAndClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-submitted-box">
            <CheckCircle size={48} color="#10B981" />
            <h3 className="modal-done-title">Estimate Request Confirmed!</h3>
            <p className="modal-done-text">
              Thank you, <strong>{formData.firstName}</strong>. Marcus Delgray or our senior estimator will review your property details and contact you at <strong>{formData.phone}</strong> within 15 minutes.
            </p>
            <button 
              type="button" 
              onClick={handleResetAndClose} 
              className="btn-orange"
              style={{ width: '100%', marginTop: '16px' }}
            >
              RETURN TO WEBSITE
            </button>
          </div>
        ) : (
          <div className="modal-body-content">
            <div className="eyebrow-red" style={{ marginBottom: '4px' }}>
              FAST &bull; ACCURATE &bull; NO OBLIGATION
            </div>
            <h2 className="modal-main-heading">SEE WHAT YOUR PROJECT WILL COST</h2>
            <p className="modal-main-sub">
              Free on-site roof inspection with AI damage scan and itemized flat-rate proposal.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label-white" htmlFor="modal-first-name">First Name *</label>
                  <input 
                    type="text" 
                    id="modal-first-name" 
                    required 
                    placeholder="John" 
                    className="form-control-dark"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label-white" htmlFor="modal-last-name">Last Name</label>
                  <input 
                    type="text" 
                    id="modal-last-name" 
                    placeholder="Smith" 
                    className="form-control-dark"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label-white" htmlFor="modal-phone-num">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="modal-phone-num" 
                    required 
                    placeholder="(403) 555-0192" 
                    className="form-control-dark"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label-white" htmlFor="modal-email-addr">Email Address</label>
                  <input 
                    type="email" 
                    id="modal-email-addr" 
                    placeholder="john@example.com" 
                    className="form-control-dark"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label-white" htmlFor="modal-service-sel">Service Needed</label>
                <select 
                  id="modal-service-sel" 
                  className="form-control-dark"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="Residential Roof Replacement">Residential Roof Replacement</option>
                  <option value="Roof Repair & Leak Detection">Roof Repair & Leak Detection</option>
                  <option value="Hail & Storm Damage Restoration">Hail & Storm Damage Restoration</option>
                  <option value="Eavestrough & Gutters">Eavestrough & Gutters</option>
                  <option value="Siding & Flashing">Siding & Flashing</option>
                  <option value="Commercial Roofing">Commercial Roofing</option>
                  <option value="Skylight Installation">Skylight Installation</option>
                  <option value="Flat / Low-Slope Roofing">Flat / Low-Slope Roofing</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label-white" htmlFor="modal-addr-input">Calgary Address / Community</label>
                <input 
                  type="text" 
                  id="modal-addr-input" 
                  placeholder="e.g. Aspen Woods, Calgary" 
                  className="form-control-dark"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <button type="submit" className="btn-orange" style={{ width: '100%', marginTop: '10px' }}>
                <span>GET AN ESTIMATE</span>
                <ChevronRight size={20} />
              </button>

              <div className="modal-footnote">
                <ShieldCheck size={14} />
                <span>100% Free &bull; Zero sales pressure &bull; 10-Year Workmanship Warranty</span>
              </div>
            </form>
          </div>
        )}

      </div>

      <style>{`
        .modal-card-reference {
          background: rgba(16, 42, 67, 0.96);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-md);
          width: 100%;
          max-width: 500px;
          padding: 32px 28px;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          animation: modalSlide 0.2s ease;
        }
        @keyframes modalSlide {
          from { transform: translateY(15px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .modal-close-cross {
          position: absolute;
          top: 16px;
          right: 16px;
          color: #CBD5E1;
          padding: 6px;
          transition: color var(--transition-fast);
        }
        .modal-close-cross:hover {
          color: #FFFFFF;
        }
        .modal-main-heading {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: #FFFFFF;
          margin-bottom: 4px;
          line-height: 1.05;
        }
        .modal-main-sub {
          font-size: 0.825rem;
          color: var(--color-sky-light);
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .modal-footnote {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #94A3B8;
          font-size: 0.725rem;
          margin-top: 12px;
          text-align: center;
        }
        .modal-submitted-box {
          padding: 30px 10px;
          text-align: center;
          color: #FFFFFF;
        }
        .modal-done-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: #FFFFFF;
          margin: 14px 0 8px 0;
        }
        .modal-done-text {
          font-size: 0.9rem;
          color: #CBD5E1;
          line-height: 1.6;
        }

        @media (max-width: 540px) {
          .modal-card-reference {
            padding: 24px 18px;
          }
        }
      `}</style>
    </div>
  );
}
