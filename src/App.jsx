import React, { useState } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LeadModal from './components/LeadModal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import GalleryPage from './pages/GalleryPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ServiceAreaDetailPage from './pages/ServiceAreaDetailPage';

function ServiceDetailWrapper({ onOpenModal }) {
  const { serviceId } = useParams();
  return <ServiceDetailPage key={serviceId} onOpenModal={onOpenModal} />;
}

function ServiceAreaDetailWrapper({ onOpenModal }) {
  const { areaSlug } = useParams();
  return <ServiceAreaDetailPage key={areaSlug} onOpenModal={onOpenModal} />;
}

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
    <div className="app-layout">
      {/* Scroll to Top / Anchor Link Handler */}
      <ScrollToTop />

      {/* Top Storm Alert Bar */}
      <TopBar onOpenModal={handleOpenModal} />

      {/* Main Header with Logo & Navigation */}
      <Header onOpenModal={handleOpenModal} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={handleOpenModal} />} />
          <Route path="/about" element={<AboutPage onOpenModal={handleOpenModal} />} />
          <Route path="/services" element={<ServicesPage onOpenModal={handleOpenModal} />} />
          <Route path="/services/:serviceId" element={<ServiceDetailWrapper onOpenModal={handleOpenModal} />} />
          <Route path="/gallery" element={<GalleryPage onOpenModal={handleOpenModal} />} />
          <Route path="/our-work" element={<GalleryPage onOpenModal={handleOpenModal} />} />
          <Route path="/service-areas" element={<ServiceAreasPage onOpenModal={handleOpenModal} />} />
          <Route path="/service-areas/:areaSlug" element={<ServiceAreaDetailWrapper onOpenModal={handleOpenModal} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Mobile Fixed Bottom Bar */}
      <MobileStickyBar onOpenModal={handleOpenModal} />

      {/* Quick Estimate Modal */}
      <LeadModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        triggerSource={modalTrigger}
      />
    </div>
  );
}
