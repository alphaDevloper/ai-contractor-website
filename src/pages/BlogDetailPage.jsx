import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Copy, 
  Phone, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs } from '../data/blogs';
import FinalCTA from '../components/FinalCTA';
import TickerRibbon from '../components/TickerRibbon';
import heroBg from '../assets/about_residential_home.jpg';

export default function BlogDetailPage({ onOpenModal }) {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const post = getBlogBySlug(slug);

  // Scroll to top whenever slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-page-wrapper" style={{ padding: '140px 24px 100px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ color: 'var(--color-navy)', fontSize: '3rem', marginBottom: '16px' }}>ARTICLE NOT FOUND</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '32px' }}>
            The roofing guide you are looking for may have moved or been updated.
          </p>
          <Link to="/blog" className="pagination-btn active" style={{ display: 'inline-flex', padding: '12px 28px', height: 'auto' }}>
            &larr; BACK TO ROOFING BLOG
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedBlogs(post.slug, post.category, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="blog-detail-wrapper">

      {/* ========================================================================= */}
      {/* 1. ARTICLE HERO BANNER WITH COMPACT HEIGHT                                 */}
      {/* ========================================================================= */}
      <section className="blog-detail-hero">
        <img 
          src={heroBg} 
          alt={post.title} 
          className="blog-detail-hero-bg" 
        />
        <div className="blog-detail-hero-overlay"></div>

        <div className="container blog-detail-hero-container">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="blog-breadcrumb-divider">&rsaquo;</span>
            <Link to="/blog">BLOG</Link>
            <span className="blog-breadcrumb-divider">&rsaquo;</span>
            <span className="blog-breadcrumb-current">{post.category}</span>
          </nav>

          <div className="blog-detail-meta-row">
            <span className="category-pill">{post.category}</span>
            <span className="blog-detail-meta-text">{post.readingTime}</span>
            <span className="blog-detail-meta-text">{post.publishDate}</span>
          </div>

          <h1 className="blog-detail-title">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN ARTICLE BODY + SIDEBAR (LIGHT THEME)                              */}
      {/* ========================================================================= */}
      <section className="blog-detail-body-section">
        <div className="container">
          <div className="blog-article-layout">
            
            {/* Main Article Content */}
            <main className="blog-article-content">
              
              {/* Article Top Navigation & Meta Strip */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '28px', paddingBottom: '18px', borderBottom: '1px solid var(--color-border-subtle)' }}>
                <Link to="/blog" className="blog-back-link">
                  <ArrowLeft size={16} />
                  <span>Back to All Articles</span>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  <span>Published {post.publishDate}</span>
                  <span>&bull;</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>

              {/* Subtitle / Lead Paragraph */}
              {post.fullArticle.heroSubtitle && (
                <p className="blog-lead-paragraph">
                  {post.fullArticle.heroSubtitle}
                </p>
              )}

              {/* Key Takeaways Callout Box */}
              {post.fullArticle.keyTakeaways && post.fullArticle.keyTakeaways.length > 0 && (
                <div className="blog-key-takeaways">
                  <div className="blog-takeaways-title">
                    <ShieldCheck size={22} color="var(--color-accent)" />
                    <span>KEY TAKEAWAYS FOR HOMEOWNERS</span>
                  </div>
                  <ul className="blog-takeaways-list">
                    {post.fullArticle.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="blog-takeaways-item">
                        <span className="blog-takeaways-bullet">&#x2713;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dynamic Article Sections */}
              {post.fullArticle.sections && post.fullArticle.sections.map((section, sIdx) => (
                <div key={sIdx} className="blog-article-block">
                  {section.heading && <h2>{section.heading}</h2>}

                  {section.content && section.content.map((pText, pIdx) => (
                    <p key={pIdx}>{pText}</p>
                  ))}

                  {section.list && (
                    <ul>
                      {section.list.map((lItem, lIdx) => (
                        <li key={lIdx}>{lItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Expert Quote Callout */}
              {post.fullArticle.expertQuote && (
                <blockquote className="blog-quote-box">
                  <p>&ldquo;{post.fullArticle.expertQuote}&rdquo;</p>
                  <cite className="blog-quote-author">&mdash; Master Roofer &amp; Inspection Team</cite>
                </blockquote>
              )}

              {/* Tags & Social Share Footer Strip */}
              <div className="blog-article-footer-strip">
                <div className="blog-tags-list">
                  {post.fullArticle.tags?.map((tag, tIdx) => (
                    <span key={tIdx} className="blog-tag-pill">#{tag}</span>
                  ))}
                </div>

                <div className="blog-share-btns">
                  <span className="blog-share-label">Share:</span>
                  <button 
                    type="button" 
                    onClick={handleCopyLink} 
                    className="blog-share-btn"
                    title="Copy Article Link"
                    aria-label="Copy Article Link"
                  >
                    <Copy size={16} />
                  </button>
                  {copied && (
                    <span style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: '700' }}>
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              {/* Return to Blog button */}
              <div style={{ marginTop: '36px' }}>
                <Link to="/blog" className="pagination-btn active" style={{ display: 'inline-flex', padding: '10px 22px', height: 'auto' }}>
                  &larr; Return to All Articles
                </Link>
              </div>

            </main>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              
              {/* Card 1: Get Free Estimate Card */}
              <div className="sidebar-cta-card sidebar-estimate-card">
                <div className="sidebar-card-badge">FAST &amp; TRANSPARENT</div>
                <h4>GET FREE ESTIMATE</h4>
                <p>
                  Schedule an unhurried, comprehensive photo inspection and transparent quote with our certified in-house crew.
                </p>
                <button 
                  type="button" 
                  onClick={() => onOpenModal(`Blog Sidebar Estimate: ${post.title}`)} 
                  className="btn-orange"
                  style={{ width: '100%' }}
                >
                  <span>GET FREE ESTIMATE</span>
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Card 2: Call Us Directly Card */}
              <div className="sidebar-cta-card sidebar-call-card">
                <div className="sidebar-call-icon-wrap">
                  <Phone size={24} />
                </div>
                <h4>CALL US DIRECTLY</h4>
                <p>
                  Have questions about your roof or need immediate advice? Speak directly with our roofing specialists today.
                </p>
                <a href="tel:+1333456789" className="sidebar-call-btn">
                  <Phone size={18} />
                  <span>+1 (333) 456-789</span>
                </a>
                <span className="sidebar-call-hours">Mon &ndash; Sat: 7:00 AM &ndash; 7:00 PM</span>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RELATED POSTS SECTION (LIGHT THEME)                                    */}
      {/* ========================================================================= */}
      {relatedPosts.length > 0 && (
        <section className="blog-related-section">
          <div className="container">
            <div className="blog-related-header">
              <div>
                <div className="blog-related-eyebrow">CONTINUE READING</div>
                <h2 className="blog-related-title">RELATED ROOFING ARTICLES</h2>
              </div>
              <Link to="/blog" className="blog-view-all-link">
                <span>View All Articles</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="blog-grid">
              {relatedPosts.map((rPost) => (
                <article key={rPost.id} className="blog-card-wrap">
                  <Link 
                    to={`/blog/${rPost.slug}`} 
                    className="blog-card"
                    aria-label={`Read related post: ${rPost.title}`}
                  >
                    <div className="blog-card-img-wrap">
                      <img 
                        src={rPost.image} 
                        alt={rPost.imageAlt || rPost.title} 
                        className="blog-card-img" 
                        loading="lazy"
                      />
                    </div>

                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="category-pill">{rPost.category}</span>
                        <span className="read-time-text">&bull; {rPost.readingTime}</span>
                      </div>

                      <h3 className="blog-card-title">
                        {rPost.title}
                      </h3>

                      <p className="blog-card-desc">
                        {rPost.excerpt}
                      </p>

                      <div className="blog-card-footer">
                        <span className="blog-card-date">{rPost.publishDate}</span>
                        <span className="blog-card-read-more">
                          Read more &gt;
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. BOTTOM ESTIMATE SECTION & TICKER (SHARED REUSABLE COMPONENTS)           */}
      {/* ========================================================================= */}
      <FinalCTA onOpenModal={onOpenModal} />
      <TickerRibbon dark={true} />

    </div>
  );
}
