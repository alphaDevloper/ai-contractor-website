import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

export default function ServiceArea({ onOpenModal }) {
  const cities = [
    "CALGARY NW", "AIRDRIE",
    "CALGARY SW", "COCHRANE",
    "CALGARY SE", "CHESTERMERE",
    "CALGARY NE", "OKOTOKS",
    "BELTLINE / INNER CITY", "STRATHMORE"
  ];

  return (
    <section className="section-padding serving-section" id="service-areas">
      <div className="container">
        
        <div className="serving-two-col-grid">
          
          {/* Left Column: Heading + 2-Column City Checklist */}
          <div className="serving-text-col">
            <div className="eyebrow-red">
              WHERE WE WORK
            </div>

            <h2 className="serving-heading">
              SERVING CALGARY & FOOTHILLS
            </h2>

            <p className="serving-intro">
              We focus 100% of our operations right here in Greater Calgary and surrounding Alberta communities, with daily in-house crew dispatch and rapid same-week emergency storm response.
            </p>

            {/* 2-Column City List */}
            <div className="serving-cities-grid">
              {cities.map((city, idx) => (
                <div key={idx} className="serving-city-pill">
                  <MapPin size={16} className="city-pin-icon" />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            <div className="serving-cta-wrap">
              <button 
                type="button" 
                onClick={() => onOpenModal('Service Area CTA')} 
                className="btn-orange"
              >
                <span>CHECK YOUR NEIGHBORHOOD</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Column: Styled Map Card */}
          <div className="serving-map-col">
            <div className="serving-map-card">
              <svg viewBox="0 0 500 320" className="calgary-map-svg" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="320" fill="#E8EEF4" />
                
                {/* Roads / Grid Background */}
                <line x1="0" y1="80" x2="500" y2="80" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="0" y1="160" x2="500" y2="160" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="0" y1="240" x2="500" y2="240" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="125" y1="0" x2="125" y2="320" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="250" y1="0" x2="250" y2="320" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="375" y1="0" x2="375" y2="320" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Bow River Blue Ribbon */}
                <path d="M50 40 Q 180 90, 240 160 T 360 220 T 480 290" fill="none" stroke="#BAE6FD" strokeWidth="16" strokeLinecap="round" />

                {/* Main Highways (Stoney Trail Ring & Deerfoot Trail) */}
                <path d="M250 10 L250 310" stroke="#94A3B8" strokeWidth="4" />
                <circle cx="250" cy="160" r="85" stroke="#94A3B8" strokeWidth="3" fill="none" opacity="0.6" />

                {/* Regional Nodes */}
                {/* Airdrie */}
                <circle cx="250" cy="50" r="6" fill="#102A43" />
                <text x="262" y="55" fill="#102A43" fontSize="12" fontWeight="bold">Airdrie</text>

                {/* Cochrane */}
                <circle cx="130" cy="100" r="6" fill="#102A43" />
                <text x="75" y="95" fill="#102A43" fontSize="12" fontWeight="bold">Cochrane</text>

                {/* Calgary Central Hub */}
                <circle cx="250" cy="160" r="16" fill="#EA580C" opacity="0.25" />
                <circle cx="250" cy="160" r="8" fill="#EA580C" />
                <text x="266" y="165" fill="#102A43" fontSize="14" fontWeight="900">CALGARY (HQ)</text>

                {/* Chestermere */}
                <circle cx="390" cy="160" r="6" fill="#102A43" />
                <text x="402" y="165" fill="#102A43" fontSize="12" fontWeight="bold">Chestermere</text>

                {/* Okotoks */}
                <circle cx="250" cy="270" r="6" fill="#102A43" />
                <text x="262" y="275" fill="#102A43" fontSize="12" fontWeight="bold">Okotoks</text>
              </svg>

              <div className="map-caption-bar">
                <span>DAILY IN-HOUSE CREW COVERAGE &bull; GREATER CALGARY AREA</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      
    </section>
  );
}
