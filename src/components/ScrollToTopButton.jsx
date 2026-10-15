import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button once user scrolls down past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top-btn ${visible ? 'btn-visible' : ''}`}
      aria-label="Scroll to top of page"
      title="Back to top"
    >
      <ArrowUp size={22} className="scroll-btn-icon" />

      <style>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent) 0%, #C2410C 100%);
          color: #FFFFFF;
          border: 2px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(234, 88, 12, 0.38), 0 2px 6px rgba(16, 42, 67, 0.15);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transform: translateY(16px) scale(0.9);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }

        .scroll-to-top-btn.btn-visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .scroll-to-top-btn:hover {
          background: linear-gradient(135deg, #102A43 0%, #1A365D 100%);
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: 0 12px 30px rgba(16, 42, 67, 0.35), 0 4px 10px rgba(234, 88, 12, 0.2);
          transform: translateY(-4px) scale(1.06);
        }

        .scroll-to-top-btn:active {
          transform: translateY(-1px) scale(0.98);
        }

        .scroll-btn-icon {
          transition: transform 0.25s ease;
        }

        .scroll-to-top-btn:hover .scroll-btn-icon {
          transform: translateY(-3px);
        }

        /* Responsive positioning: avoid overlapping mobile sticky bar on small screens */
        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 84px;
            right: 18px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </button>
  );
}
