import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from "../assets/hero-bg.webp";
import HailBefore from "../assets/before_hail.jpg";
import Roof from "../assets/after_roof.jpg";

export default function Resources({ onOpenModal }) {
  const tips = [
    {
      img: Hero,
      tag: "COST & PLANNING",
      title: "HOW MUCH DOES A ROOF REPLACEMENT COST IN CALGARY?",
      slug: "roof-replacement-cost-in-kansas-city-what-drives-the-price",
      desc: "An unvarnished breakdown of architectural shingle costs: square footage calculations, pitch multipliers, tear-off fees, and ice barrier requirements."
    },
    {
      img: HailBefore,
      tag: "HAIL & STORM",
      title: "HOW TO SPOT HIDDEN HAIL DAMAGE BEFORE WINTER COMES",
      slug: "storm-chaser-roofers-in-overland-park-6-red-flags-homeowners-miss",
      desc: "Why golf-ball hail causes invisible fractures beneath the fiberglass matting that only leak months later during freeze-thaw cycles."
    },
    {
      img: Roof,
      tag: "MATERIALS",
      title: "CLASS 4 IMPACT SHINGLES: ARE THEY WORTH THE UPGRADE?",
      slug: "class-4-impact-resistant-shingles-worth-the-upgrade",
      desc: "Evaluating the UL 2218 impact test, insurance premium discounts across carriers, and long-term resale value for homeowners."
    }
  ];

  return (
    <section className="section-padding tips-section" id="resources">
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ position: 'relative' }}>
          <div className="eyebrow-red">
            KNOWLEDGE &amp; RESOURCES
          </div>
          <h2 className="section-title">
            ROOFING TIPS &amp; GUIDES FOR HOMEOWNERS
          </h2>
          <p className="section-subtitle">
            Helpful guides to help you make informed, confident decisions about your home's roof.
          </p>
          <div style={{ marginTop: '16px' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent)', fontWeight: '800', fontSize: '0.95rem' }}>
              <span>View All Roofing Articles &amp; Advice &rarr;</span>
            </Link>
          </div>
        </div>

        {/* 3 Visual Article Cards */}
        <div className="tips-grid">
          {tips.map((item, idx) => (
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
