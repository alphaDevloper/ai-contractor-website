import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Process({ onOpenModal }) {
  const steps = [
    {
      num: "01",
      title: "SCHEDULE YOUR FREE ROOF INSPECTION",
      desc: "We inspect your roof, take high-resolution AI photos, and assess any hail, wind, or age-related shingle damage with zero sales pressure."
    },
    {
      num: "02",
      title: "GET A TRANSPARENT, FLAT-RATE PROPOSAL",
      desc: "Receive an itemized quote with guaranteed zero surprise fees. Compare GAF & IKO shingle lines and 0% financing plans up to 18 months."
    },
    {
      num: "03",
      title: "EXPERT INSTALLATION BY OUR LOCAL CREW",
      desc: "Our permanent, COR™ certified in-house crew completes most Calgary homes in 1 to 2 days, protected by full property tarps and magnetic lawn sweeps."
    },
    {
      num: "04",
      title: "FINAL WALKTHROUGH & 10-YEAR WARRANTY",
      desc: "Founder Marcus Delgray personally inspects your finished installation and issues your signed 10-Year Workmanship Warranty certificate."
    }
  ];

  return (
    <section className="section-padding process-section" id="process">
      <div className="container">
        
        <div className="process-two-col-grid">
          
          {/* Left Column: Large In-Progress/Completed Roof Photo */}
          <div className="process-photo-col">
            <div className="process-img-frame">
              <img 
                src="/images/after_roof.jpg" 
                alt="AeroDome residential roofing installation process in Calgary" 
                className="process-photo-img"
              />
              <div className="process-photo-badge">
                <span>100% IN-HOUSE CREW &bull; 10-YEAR WORKMANSHIP GUARANTEE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Heading + 4 Step Blocks + Orange CTA */}
          <div className="process-content-col">
            <div className="eyebrow-red">
              HOW IT WORKS
            </div>

            <h2 className="process-heading">
              FOUR STEPS, NO SURPRISES
            </h2>

            <p className="process-intro">
              We believe in transparent communication, guaranteed flat-rate pricing, and respectful treatment of your property from start to finish.
            </p>

            {/* 4 Step Blocks */}
            <div className="process-steps-list">
              {steps.map((s, idx) => (
                <div key={idx} className="process-step-block">
                  <div className="process-step-num-box">
                    <span>{s.num}</span>
                  </div>
                  <div className="process-step-info">
                    <h3 className="process-step-title">{s.title}</h3>
                    <p className="process-step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Orange Action Button */}
            <div className="process-btn-row">
              <button 
                type="button" 
                onClick={() => onOpenModal('Process CTA')} 
                className="btn-orange"
              >
                <span>GET AN ESTIMATE</span>
                <ChevronRight size={20} />
              </button>
            </div>

          </div>

        </div>

      </div>

      
    </section>
  );
}
