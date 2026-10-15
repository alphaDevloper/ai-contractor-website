import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LeadModal from './components/LeadModal';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navigation from './Navigation';

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

      {/* Centralized Application Routes */}
      <main>
        <Navigation onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Mobile Fixed Bottom Bar */}
      <MobileStickyBar onOpenModal={handleOpenModal} />

      {/* Themed Floating Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Quick Estimate Modal */}
      <LeadModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        triggerSource={modalTrigger}
      />
    </div>
  );
}
