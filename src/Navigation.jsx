import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
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

function ServiceDetailWrapper({ onOpenModal }) {
  const { serviceId } = useParams();
  return <ServiceDetailPage key={serviceId} onOpenModal={onOpenModal} />;
}

function ServiceAreaDetailWrapper({ onOpenModal }) {
  const { areaSlug } = useParams();
  return <ServiceAreaDetailPage key={areaSlug} onOpenModal={onOpenModal} />;
}

function BlogDetailWrapper({ onOpenModal }) {
  const { slug } = useParams();
  return <BlogDetailPage key={slug} onOpenModal={onOpenModal} />;
}

export default function Navigation({ onOpenModal }) {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<HomePage onOpenModal={onOpenModal} />} />

      {/* About Us */}
      <Route path="/about" element={<AboutPage onOpenModal={onOpenModal} />} />
      <Route path="/about-us" element={<AboutPage onOpenModal={onOpenModal} />} />

      {/* Services */}
      <Route path="/services" element={<ServicesPage onOpenModal={onOpenModal} />} />
      <Route path="/services/:serviceId" element={<ServiceDetailWrapper onOpenModal={onOpenModal} />} />

      {/* Portfolio / Gallery / Case Studies */}
      <Route path="/gallery" element={<GalleryPage onOpenModal={onOpenModal} />} />
      <Route path="/our-work" element={<GalleryPage onOpenModal={onOpenModal} />} />
      <Route path="/portfolio" element={<GalleryPage onOpenModal={onOpenModal} />} />
      <Route path="/case-studies" element={<GalleryPage onOpenModal={onOpenModal} />} />

      {/* Service Areas */}
      <Route path="/service-areas" element={<ServiceAreasPage onOpenModal={onOpenModal} />} />
      <Route path="/service-areas/:areaSlug" element={<ServiceAreaDetailWrapper onOpenModal={onOpenModal} />} />

      {/* Dedicated Navigation Directory Page */}
      <Route path="/navigation" element={<NavigationPage onOpenModal={onOpenModal} />} />
      <Route path="/nav" element={<NavigationPage onOpenModal={onOpenModal} />} />
      <Route path="/sitemap" element={<NavigationPage onOpenModal={onOpenModal} />} />

      {/* Blog Listing & Dynamic Article Details */}
      <Route path="/blog" element={<BlogPage onOpenModal={onOpenModal} />} />
      <Route path="/blogs" element={<BlogPage onOpenModal={onOpenModal} />} />
      <Route path="/blog/:slug" element={<BlogDetailWrapper onOpenModal={onOpenModal} />} />
      <Route path="/blogs/:slug" element={<BlogDetailWrapper onOpenModal={onOpenModal} />} />

      {/* Direct Aliases for Financing, Resources, Contact */}
      <Route path="/financing" element={<Navigate to="/#financing" replace />} />
      <Route path="/resources" element={<Navigate to="/blog" replace />} />
      <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      <Route path="/contact-us" element={<Navigate to="/#contact" replace />} />

      {/* Catch-all Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
