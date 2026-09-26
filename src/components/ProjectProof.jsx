import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export default function ProjectProof({ onOpenModal }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Class 4 Hail Restoration & Re-Roof",
      location: "Aspen Woods, Calgary SW",
      shingle: "GAF Timberline HDZ® Charcoal Slate",
      before: "/images/before_hail.jpg",
      after: "/images/after_roof.jpg"
    },
    {
      title: "Storm Wind Damage & Gutter System",
      location: "Bayside, Airdrie",
      shingle: "IKO Dynasty® Class 4 Impact",
      before: "/images/before_hail.jpg",
      after: "/images/service_gutters.jpg"
    }
  ];

  const curr = projects[activeProject];

  return (
    <section className="section-padding roofs-built-section" id="proof">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow-red">
            OUR WORK
          </div>
          <h2 className="section-title">
            ROOFS WE HAVE BUILT
          </h2>
          <p className="section-subtitle">
            Real transformations from homes in Calgary, Airdrie, Cochrane & surrounding areas.
          </p>
        </div>

        {/* Before & After Interactive Showcase */}
        <div className="roofs-showcase-box">
          <div 
            className="roofs-slider-pane"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
              setSliderPos((x / rect.width) * 100);
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
              setSliderPos((x / rect.width) * 100);
            }}
          >
            {/* After Image */}
            <img src={curr.after} alt="Completed roof replacement" className="roofs-img" />
            <span className="roofs-tag tag-after">AFTER: NEW ROOF</span>

            {/* Before Image (Clipped) */}
            <div className="roofs-before-clipper" style={{ width: `${sliderPos}%` }}>
              <img src={curr.before} alt="Hail damaged roof" className="roofs-img roofs-img-before" />
              <span className="roofs-tag tag-before">BEFORE: HAIL DAMAGE</span>
            </div>

            {/* Slider Handle */}
            <div className="roofs-handle-bar" style={{ left: `${sliderPos}%` }}>
              <div className="handle-line"></div>
              <div className="handle-circle-btn">
                <ArrowLeftRight size={18} />
              </div>
              <div className="handle-line"></div>
            </div>
          </div>

          {/* Project Details Footer Strip */}
          <div className="roofs-details-strip">
            <div className="roofs-details-left">
              <span className="roofs-loc-tag">{curr.location}</span>
              <h3 className="roofs-proj-title">{curr.title}</h3>
              <span className="roofs-shingle-spec">{curr.shingle} &bull; 10-Year Workmanship Warranty</span>
            </div>
            
            <div className="roofs-nav-btns">
              <button 
                type="button" 
                className="roof-nav-btn" 
                onClick={() => setActiveProject(activeProject === 0 ? 1 : 0)}
                aria-label="Previous Project"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                type="button" 
                className="roof-nav-btn" 
                onClick={() => setActiveProject(activeProject === 1 ? 0 : 1)}
                aria-label="Next Project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .roofs-built-section {
          background-color: #FFFFFF;
        }
        .roofs-showcase-box {
          max-width: 980px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }
        .roofs-slider-pane {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          cursor: ew-resize;
          user-select: none;
          background: #0B1D2D;
        }
        .roofs-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .roofs-before-clipper {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 2;
        }
        .roofs-img-before {
          width: 100%;
          min-width: 980px;
          max-width: none;
        }
        .roofs-handle-bar {
          position: absolute;
          top: 0;
          bottom: 0;
          transform: translateX(-50%);
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }
        .handle-line {
          width: 3px;
          flex-grow: 1;
          background: #FFFFFF;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        }
        .handle-circle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #FFFFFF;
          color: var(--color-navy);
          border: 2px solid var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        .roofs-tag {
          position: absolute;
          top: 16px;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          letter-spacing: 0.06em;
          padding: 6px 14px;
          border-radius: var(--radius-xs);
          z-index: 4;
        }
        .tag-after {
          right: 16px;
          background: var(--color-navy);
          color: #FFFFFF;
          border: 1px solid var(--color-sky);
        }
        .tag-before {
          left: 16px;
          background: #DC2626;
          color: #FFFFFF;
        }
        .roofs-details-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 28px;
          background: #FFFFFF;
          border-top: 1px solid var(--color-border);
        }
        .roofs-loc-tag {
          font-family: var(--font-body);
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-accent);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }
        .roofs-proj-title {
          font-size: 1.35rem;
          color: var(--color-navy);
          margin-bottom: 2px;
          line-height: 1.15;
        }
        .roofs-shingle-spec {
          font-size: 0.8125rem;
          color: var(--color-text-secondary);
        }
        .roofs-nav-btns {
          display: flex;
          gap: 8px;
        }
        .roof-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-xs);
          border: 1.5px solid var(--color-border);
          background: #FFFFFF;
          color: var(--color-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .roof-nav-btn:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        @media (max-width: 768px) {
          .roofs-slider-pane {
            height: 320px;
          }
          .roofs-details-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .roofs-nav-btns {
            align-self: flex-end;
          }
        }
      `}</style>
    </section>
  );
}
