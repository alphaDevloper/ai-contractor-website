import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout & Global Components
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LeadModal from './components/LeadModal';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

// Application Pages
import HomePage from './pages/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import GalleryPage from './pages/GalleryPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ServiceAreaDetailPage from './pages/ServiceAreaDetailPage';
import NavigationPage from './pages/NavigationPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState('Global CTA');

  const handleOpenModal = (triggerSource = 'Global CTA') => {
    setModalTrigger(triggerSource);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* Automatic Scroll-to-Top and Dynamic Document Title */}
        <ScrollToTop />

        {/* Top Announcement Bar */}
        <TopBar onOpenModal={handleOpenModal} />

        {/* Main Navbar */}
        <Header onOpenModal={handleOpenModal} />

        {/* Central Application Routes */}
        <main>
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage onOpenModal={handleOpenModal} />} />

            {/* About */}
            <Route path="/about" element={<AboutPage onOpenModal={handleOpenModal} />} />
            <Route path="/about-us" element={<AboutPage onOpenModal={handleOpenModal} />} />

            {/* Services Hub & Detail Pages */}
            <Route path="/services" element={<ServicesPage onOpenModal={handleOpenModal} />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage onOpenModal={handleOpenModal} />} />

            {/* Gallery & Portfolio */}
            <Route path="/gallery" element={<GalleryPage onOpenModal={handleOpenModal} />} />
            <Route path="/our-work" element={<GalleryPage onOpenModal={handleOpenModal} />} />
            <Route path="/portfolio" element={<GalleryPage onOpenModal={handleOpenModal} />} />
            <Route path="/case-studies" element={<GalleryPage onOpenModal={handleOpenModal} />} />

            {/* Service Areas */}
            <Route path="/service-areas" element={<ServiceAreasPage onOpenModal={handleOpenModal} />} />
            <Route path="/service-areas/:areaSlug" element={<ServiceAreaDetailPage onOpenModal={handleOpenModal} />} />

            {/* Blog & Articles */}
            <Route path="/blog" element={<BlogPage onOpenModal={handleOpenModal} />} />
            <Route path="/blogs" element={<BlogPage onOpenModal={handleOpenModal} />} />
            <Route path="/blog/:slug" element={<BlogDetailPage onOpenModal={handleOpenModal} />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage onOpenModal={handleOpenModal} />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactPage onOpenModal={handleOpenModal} />} />
            <Route path="/contact-us" element={<ContactPage onOpenModal={handleOpenModal} />} />

            {/* Sitemap & Navigation Directory */}
            <Route path="/navigation" element={<NavigationPage onOpenModal={handleOpenModal} />} />
            <Route path="/nav" element={<NavigationPage onOpenModal={handleOpenModal} />} />
            <Route path="/sitemap" element={<NavigationPage onOpenModal={handleOpenModal} />} />

            {/* Redirects */}
            <Route path="/financing" element={<Navigate to="/#financing" replace />} />
            <Route path="/resources" element={<Navigate to="/blog" replace />} />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenModal={handleOpenModal} />

        {/* Mobile Sticky Bar */}
        <MobileStickyBar onOpenModal={handleOpenModal} />

        {/* Floating Scroll to Top */}
        <ScrollToTopButton />

        {/* Quick Estimate Modal */}
        <LeadModal 
          isOpen={modalOpen} 
          onClose={handleCloseModal} 
          triggerSource={modalTrigger}
        />
      </div>
    </BrowserRouter>
  );
}
