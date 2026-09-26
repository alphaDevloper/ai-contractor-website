import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import TickerRibbon from './components/TickerRibbon';
import SocialProof from './components/SocialProof';
import OwnerStory from './components/OwnerStory';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectProof from './components/ProjectProof';
import Process from './components/Process';
import SpecialOffers from './components/SpecialOffers';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import ServiceArea from './components/ServiceArea';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LeadModal from './components/LeadModal';

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
      {/* Top Storm Alert Bar */}
      <TopBar onOpenModal={handleOpenModal} />

      {/* Main Header */}
      <Header onOpenModal={handleOpenModal} />

      <main>
        {/* Hero Section with Lead Form */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Certifications & Manufacturer Trust Bar */}
        <TrustBar />

        {/* Ticker Ribbon 1 */}
        <TickerRibbon />

        {/* 5.0★ Google Reviews */}
        <SocialProof onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 2 */}
        <TickerRibbon />

        {/* Owner-Led Local Section (Marcus Delgray) */}
        <OwnerStory onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 3 */}
        <TickerRibbon />

        {/* Core Services Section with Service Buttons Grid (Not Cards) */}
        <Services onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 4 */}
        <TickerRibbon />

        {/* Built for Your Neighborhood */}
        <WhyChooseUs onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 5 */}
        <TickerRibbon />

        {/* Roofs We Have Built (Before & After Showcase) */}
        <ProjectProof onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 6 */}
        <TickerRibbon />

        {/* Four Steps, No Surprises Process */}
        <Process onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 7 */}
        <TickerRibbon />

        {/* Special Offers (Free Inspections, Always) */}
        <SpecialOffers onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 8 */}
        <TickerRibbon />

        {/* Homeowner Resources & Tips */}
        <Resources onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 9 */}
        <TickerRibbon />

        {/* Frequently Asked Questions */}
        <FAQ onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 10 */}
        <TickerRibbon />

        {/* Serving Calgary & Foothills + Map */}
        <ServiceArea onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 11 */}
        <TickerRibbon />

        {/* Final CTA + Lead Capture Form */}
        <FinalCTA onOpenModal={handleOpenModal} />

        {/* Ticker Ribbon 12 (Dark before Footer) */}
        <TickerRibbon dark={true} />
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
