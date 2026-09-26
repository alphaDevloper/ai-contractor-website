import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

export default function SocialProof({ onOpenModal }) {
  const reviews = [
    {
      name: "Brenton & Tara S.",
      location: "Aspen Woods, Calgary SW",
      time: "1 month ago",
      text: "After the severe August hailstorm wiped out half our cedar shingles, Marcus personally came out with his AI camera equipment and mapped every impact point. The new Class 4 GAF shingles look breathtaking, and their crew cleaned up every single nail in our driveway with roller magnets. Incredible work."
    },
    {
      name: "Dean R.",
      location: "Bayside, Airdrie",
      time: "3 weeks ago",
      text: "A windstorm tore off 12 feet of ridge capping on our two-story roof on a Thursday evening. AeroDome had an emergency tarp crew at our home early Friday morning and fully repaired it by Monday. Flat-rate pricing was given upfront with zero surprise fees. You can tell they use their own local crew rather than subbing it out."
    },
    {
      name: "Kirsten M.",
      location: "Sunset Ridge, Cochrane",
      time: "2 months ago",
      text: "We replaced our 18-year-old original roof. Marcus walked us through the IKO vs. GAF options and helped us take advantage of the 0% financing plan for 18 months. The crew was courteous, worked from 7:30 AM to 6 PM, and wrapped up a 2,800 sq ft roof in just two days. Outstanding contractor."
    }
  ];

  return (
    <section className="section-padding reviews-section" id="reviews">
      <div className="container">
        
        {/* Header matching reference */}
        <div className="section-header">
          <div className="eyebrow-red">
            HEAR FROM OUR CLIENTS
          </div>
          <h2 className="section-title">
            5.0★ ON GOOGLE
          </h2>
          <p className="section-subtitle">
            REAL REVIEWS FROM REAL NEIGHBORS JUST LIKE YOU
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="reviews-cards-row">
          {reviews.map((r, idx) => (
            <div key={idx} className="reference-review-card">
              
              {/* Google G + 5 Stars + Time */}
              <div className="review-top-bar">
                <div className="review-google-g">
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>
                
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="star-filled" fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <span className="review-time-ago">{r.time}</span>
              </div>

              {/* Review Text */}
              <p className="reference-review-text">
                "{r.text}"
              </p>

              {/* Customer Box Bottom */}
              <div className="review-author-box">
                <div className="review-avatar-square">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h3 className="review-author-name">{r.name}</h3>
                  <span className="review-author-loc">{r.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Action Button Below */}
        <div className="reviews-bottom-action">
          <button 
            type="button" 
            onClick={() => onOpenModal('Reviews Section CTA')} 
            className="btn-orange-outline"
          >
            <span>SEE ALL 312+ GOOGLE REVIEWS</span>
            <ChevronRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .reviews-section {
          background-color: var(--bg-canvas);
        }
        .reviews-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 30px;
        }
        .reference-review-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }
        .reference-review-card:hover {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }
        .review-top-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .review-time-ago {
          margin-left: auto;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .reference-review-text {
          font-size: 0.925rem;
          line-height: 1.6;
          color: var(--color-text-primary);
          margin-bottom: 22px;
        }
        .review-author-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--color-border-subtle);
        }
        .review-avatar-square {
          width: 36px;
          height: 36px;
          background: var(--color-navy);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-xs);
        }
        .review-author-name {
          font-size: 0.925rem;
          color: var(--color-navy);
          line-height: 1.2;
          font-family: var(--font-body);
          font-weight: 700;
          text-transform: none;
        }
        .review-author-loc {
          font-size: 0.775rem;
          color: var(--color-text-muted);
        }
        .reviews-bottom-action {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        @media (max-width: 992px) {
          .reviews-cards-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
