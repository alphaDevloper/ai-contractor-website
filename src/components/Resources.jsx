import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Resources({ onOpenModal }) {
  const tips = [
    {
      img: "/images/hero_roofing.jpg",
      tag: "COST & PLANNING",
      title: "HOW MUCH DOES A ROOF REPLACEMENT COST IN CALGARY?",
      desc: "An unvarnished breakdown of architectural shingle costs in Alberta: square footage calculations, pitch multipliers, tear-off fees, and ice barrier requirements."
    },
    {
      img: "/images/before_hail.jpg",
      tag: "HAIL & STORM",
      title: "HOW TO SPOT HIDDEN HAIL DAMAGE BEFORE WINTER COMES",
      desc: "Why golf-ball hail causes invisible fractures beneath the fiberglass matting that only leak months later during Calgary's Chinook freeze-thaw cycles."
    },
    {
      img: "/images/after_roof.jpg",
      tag: "MATERIALS",
      title: "CLASS 4 IMPACT SHINGLES: ARE THEY WORTH THE UPGRADE IN ALBERTA?",
      desc: "Evaluating the UL 2218 impact test, insurance premium discounts across Canadian carriers, and long-term resale value for Calgary homeowners."
    }
  ];

  return (
    <section className="section-padding tips-section" id="resources">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow-red">
            KNOWLEDGE & RESOURCES
          </div>
          <h2 className="section-title">
            ROOFING TIPS FOR CALGARY HOMEOWNERS
          </h2>
          <p className="section-subtitle">
            Helpful guides to help you make informed, confident decisions about your home's roof.
          </p>
        </div>

        {/* 3 Visual Article Cards */}
        <div className="tips-grid">
          {tips.map((item, idx) => (
            <div key={idx} className="tip-card">
              <div className="tip-img-frame">
                <img src={item.img} alt={item.title} className="tip-img" />
              </div>
              <div className="tip-body">
                <span className="tip-tag">{item.tag}</span>
                <h3 className="tip-title">{item.title}</h3>
                <p className="tip-desc">{item.desc}</p>
                <button 
                  type="button" 
                  onClick={() => onOpenModal(`Tip: ${item.title}`)} 
                  className="tip-read-more"
                >
                  <span>READ MORE</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      
    </section>
  );
}
