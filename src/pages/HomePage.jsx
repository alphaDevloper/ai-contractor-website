import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import TickerRibbon from '../components/TickerRibbon';
import SocialProof from '../components/SocialProof';
import OwnerStory from '../components/OwnerStory';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectProof from '../components/ProjectProof';
import Process from '../components/Process';
import SpecialOffers from '../components/SpecialOffers';
import Resources from '../components/Resources';
import FAQ from '../components/FAQ';
import ServiceArea from '../components/ServiceArea';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({ onOpenModal }) {
  return (
    <>
      {/* Hero Section with Lead Form */}
      <Hero onOpenModal={onOpenModal} />

      {/* Certifications & Manufacturer Trust Bar */}
      <TrustBar />

      {/* Ticker Ribbon 1 */}
      <TickerRibbon />

      {/* 5.0★ Google Reviews */}
      <SocialProof onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 2 */}
      <TickerRibbon />

      {/* Owner-Led Local Section (Marcus Delgray) */}
      <OwnerStory onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 3 */}
      <TickerRibbon />

      {/* Core Services Section with Service Buttons Grid (Not Cards) */}
      <Services onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 4 */}
      <TickerRibbon />

      {/* Built for Your Neighborhood */}
      <WhyChooseUs onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 5 */}
      <TickerRibbon />

      {/* Roofs We Have Built (Before & After Showcase) */}
      <ProjectProof onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 6 */}
      <TickerRibbon />

      {/* Four Steps, No Surprises Process */}
      <Process onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 7 */}
      <TickerRibbon />

      {/* Special Offers (Free Inspections, Always) */}
      <SpecialOffers onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 8 */}
      <TickerRibbon />

      {/* Homeowner Resources & Tips */}
      <Resources onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 9 */}
      <TickerRibbon />

      {/* Frequently Asked Questions */}
      <FAQ onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 10 */}
      <TickerRibbon />

      {/* Serving Calgary & Foothills + Map */}
      <ServiceArea onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 11 */}
      <TickerRibbon />

      {/* Final CTA + Lead Capture Form */}
      <FinalCTA onOpenModal={onOpenModal} />

      {/* Ticker Ribbon 12 (Dark before Footer) */}
      <TickerRibbon dark={true} />
    </>
  );
}
