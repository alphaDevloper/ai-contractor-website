import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LeadModal from './components/LeadModal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './pages/ServicesPage';

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
