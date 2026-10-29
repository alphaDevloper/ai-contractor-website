import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from "../assets/hero-bg.webp";
import HailBefore from "../assets/before_hail.jpg";
import Roof from "../assets/after_roof.jpg";
import { resourcesContent } from '../data/homepageData';

const TIP_IMAGES = [Hero, HailBefore, Roof];

export default function Resources({ onOpenModal }) {
  const { eyebrow, heading, subtitle, viewAllLabel, tips } = resourcesContent;
  const tipsWithImages = tips.map((t, i) => ({ ...t, img: TIP_IMAGES[i] }));

  return (
    <section className="section-padding tips-section" id="resources">
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ position: 'relative' }}>
          <div className="eyebrow-red">
            {eyebrow}
          </div>
          <h2 className="section-title">
            {heading}
          </h2>
          <p className="section-subtitle">
            {subtitle}
          </p>
          <div style={{ marginTop: '16px' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent)', fontWeight: '800', fontSize: '0.95rem' }}>
              <span>{viewAllLabel}</span>
            </Link>
          </div>
        </div>

        {/* 3 Visual Article Cards */}
        <div className="tips-grid">
          {tipsWithImages.map((item, idx) => (
            <div key={idx} className="tip-card">
              <Link to={`/blog/${item.slug}`} className="tip-img-frame" style={{ display: 'block' }}>
                <img src={item.img} alt={item.title} className="tip-img" />
              </Link>
              <div className="tip-body">
                <span className="tip-tag">{item.tag}</span>
                <h3 className="tip-title">
                  <Link to={`/blog/${item.slug}`} style={{ color: 'inherit' }}>
                    {item.title}
                  </Link>
                </h3>
                <p className="tip-desc">{item.desc}</p>
                <Link 
                  to={`/blog/${item.slug}`} 
                  className="tip-read-more"
                >
                  <span>READ ARTICLE</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      
    </section>
  );
}
