import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { socialProofContent } from '../data/homepageData';

export default function SocialProof({ onOpenModal }) {
  const { eyebrow, heading, subtitle, ctaLabel, reviews } = socialProofContent;

  return (
    <section className="section-padding reviews-section" id="reviews">
      <div className="container">
        
        {/* Header matching reference */}
        <div className="section-header">
          <div className="eyebrow-red">
            {eyebrow}
          </div>
          <h2 className="section-title">
            {heading}
          </h2>
          <p className="section-subtitle">
            {subtitle}
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
            <span>{ctaLabel}</span>
            <ChevronRight size={18} />
          </button>
        </div>

      </div>

      
    </section>
  );
}
