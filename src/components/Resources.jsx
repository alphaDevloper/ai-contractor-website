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

      <style>{`
        .tips-section {
          background-color: var(--bg-canvas);
        }
        .tips-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        .tip-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all var(--transition-fast);
        }
        .tip-card:hover {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .tip-img-frame {
          height: 200px;
          overflow: hidden;
        }
        .tip-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .tip-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .tip-tag {
          font-family: var(--font-body);
          font-size: 0.725rem;
          font-weight: 800;
          color: var(--color-accent);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .tip-title {
          font-size: 1.25rem;
          color: var(--color-navy);
          line-height: 1.15;
          margin-bottom: 10px;
        }
        .tip-desc {
          font-size: 0.85rem;
          line-height: 1.55;
          color: var(--color-text-secondary);
          margin-bottom: 18px;
          flex-grow: 1;
        }
        .tip-read-more {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-heading);
          font-size: 1rem;
          color: var(--color-accent);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0;
          align-self: flex-start;
          transition: gap var(--transition-fast);
        }
        .tip-read-more:hover {
          gap: 8px;
        }

        @media (max-width: 900px) {
          .tips-grid {
            grid-template-columns: 1fr;
          }
          .tip-img-frame {
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}
