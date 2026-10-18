import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_CATEGORIES, blogPosts, getFeaturedBlog } from '../data/blogs';
import FinalCTA from '../components/FinalCTA';
import TickerRibbon from '../components/TickerRibbon';
import heroBg from '../assets/about_residential_home.jpg';

const POSTS_PER_PAGE = 6;

export default function BlogPage({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef(null);

  const featuredPost = getFeaturedBlog();

  // Scroll to top on initial page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter posts (excluding featured post in the standard grid when on ALL, or filtering properly)
  const nonFeaturedPosts = blogPosts.filter((post) => !post.isFeatured);

  const filteredPosts = selectedCategory === 'ALL'
    ? nonFeaturedPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;

  // Sliced posts for active pagination page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="blog-page-wrapper">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="blog-hero">
        <img 
          src={heroBg} 
          alt="Roofing Knowledge & Advice background" 
          className="blog-hero-bg" 
        />
        <div className="blog-hero-overlay"></div>

        <div className="container blog-hero-container">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="blog-breadcrumb-divider">&gt;</span>
            <span className="blog-breadcrumb-current">BLOG</span>
          </nav>

          <span className="blog-hero-eyebrow">KNOWLEDGE &amp; ADVICE</span>
          <h1 className="blog-hero-title">ROOFING KNOWLEDGE &amp; ADVICE</h1>
          <p className="blog-hero-desc">
            Practical advice from the Capstone team on everything roofing. In-depth information to help you make smart decisions about your home.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED POST                                                          */}
      {/* ========================================================================= */}
      {featuredPost && (
        <section className="blog-featured-section">
          <div className="container">
            <div className="featured-eyebrow">FEATURED POST</div>
            <Link 
              to={`/blog/${featuredPost.slug}`} 
              className="featured-card"
              aria-label={`Read featured post: ${featuredPost.title}`}
            >
              <div className="featured-img-col">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.imageAlt || featuredPost.title} 
                  className="featured-img" 
                />
              </div>

              <div className="featured-content-col">
                <div className="featured-badge-row">
                  <span className="category-pill">{featuredPost.category}</span>
                  <span className="read-time-text">&bull; {featuredPost.readingTime}</span>
                </div>

                <h2 className="featured-title">
                  {featuredPost.title}
                </h2>

                <p className="featured-desc">
                  {featuredPost.excerpt}
                </p>

                <div className="featured-footer">
                  <span className="featured-date">{featuredPost.publishDate}</span>
                  <span className="featured-read-more">
                    Read more &gt;
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. CATEGORY FILTER TABS                                                   */}
      {/* ========================================================================= */}
      <section className="blog-filters-section" ref={gridTopRef}>
        <div className="container">
          <div className="blog-filter-tabs" role="tablist" aria-label="Filter blog posts by category">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                className={`category-tab-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RESPONSIVE BLOG CARD GRID                                              */}
      {/* ========================================================================= */}
      <section className="blog-grid-section">
        <div className="container">
          {currentPosts.length > 0 ? (
            <div className="blog-grid">
              {currentPosts.map((post) => (
                <article key={post.id} className="blog-card-wrap">
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="blog-card"
                    aria-label={`Read post: ${post.title}`}
                  >
                    <div className="blog-card-img-wrap">
                      <img 
                        src={post.image} 
                        alt={post.imageAlt || post.title} 
                        className="blog-card-img" 
                        loading="lazy"
                      />
                    </div>

                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="category-pill">{post.category}</span>
                        <span className="read-time-text">&bull; {post.readingTime}</span>
                      </div>

                      <h3 className="blog-card-title">
                        {post.title}
                      </h3>

                      <p className="blog-card-desc">
                        {post.excerpt}
                      </p>

                      <div className="blog-card-footer">
                        <span className="blog-card-date">{post.publishDate}</span>
                        <span className="blog-card-read-more">
                          Read more &gt;
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty-state">
              <h3>No Articles Found in this Category</h3>
              <p>Check back soon or browse all articles across our categories.</p>
              <button 
                type="button" 
                className="category-tab-btn active"
                onClick={() => handleCategorySelect('ALL')}
              >
                VIEW ALL ARTICLES
              </button>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 5. WORKING PAGINATION                                                     */}
          {/* ========================================================================= */}
          {totalPages > 1 && (
            <nav className="blog-pagination" aria-label="Blog pagination">
              <button
                type="button"
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
              >
                PREV
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
                  onClick={() => handlePageChange(pageNum)}
                  aria-label={`Page ${pageNum}`}
                  aria-current={currentPage === pageNum ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              ))}

              <button
                type="button"
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
              >
                NEXT
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BOTTOM ESTIMATE SECTION & TICKER (SHARED REUSABLE COMPONENTS)           */}
      {/* ========================================================================= */}
      <FinalCTA onOpenModal={onOpenModal} />
      <TickerRibbon dark={true} />

    </div>
  );
}
