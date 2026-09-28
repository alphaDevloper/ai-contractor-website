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

            {/* Before Image (Clipped via responsive clipPath - no fixed min-width) */}
            <img 
              src={curr.before} 
              alt="Hail damaged roof" 
              className="roofs-img roofs-img-before" 
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            />
            {sliderPos > 14 && (
              <span className="roofs-tag tag-before">BEFORE: HAIL DAMAGE</span>
            )}

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

      
    </section>
  );
}
