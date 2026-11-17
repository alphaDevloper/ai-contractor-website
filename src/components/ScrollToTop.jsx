import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getServiceDetail } from '../data/servicesData';
import { getServiceAreaDetail } from '../data/serviceAreasData';
import { getBlogBySlug } from '../data/blogs';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Scroll to top or anchor element
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    // 2. Dynamic Document Title Handler for all routes
    if (pathname === '/') {
      document.title = "AeroDome Roofing Calgary | Residential Roofing Contractor – Roof Replacement & Hail Damage Repair";
    } else if (pathname === '/about' || pathname === '/about-us') {
      document.title = "About Us | AeroDome Roofing Calgary";
    } else if (pathname === '/services') {
      document.title = "Roofing & Exterior Services Calgary | AeroDome Roofing";
    } else if (pathname.startsWith('/services/')) {
      const serviceId = pathname.replace('/services/', '');
      const service = getServiceDetail(serviceId);
      if (service && service.title) {
        document.title = `${service.title} | AeroDome Roofing Calgary`;
      } else {
        document.title = "Roofing Services | AeroDome Roofing Calgary";
      }
    } else if (
      pathname === '/gallery' ||
      pathname === '/our-work' ||
      pathname === '/portfolio' ||
      pathname === '/case-studies'
    ) {
      document.title = "Project Gallery & Portfolio | AeroDome Roofing Calgary";
    } else if (pathname === '/service-areas') {
      document.title = "Service Areas | AeroDome Roofing Calgary";
    } else if (pathname.startsWith('/service-areas/')) {
      const areaSlug = pathname.replace('/service-areas/', '');
      const area = getServiceAreaDetail(areaSlug);
      if (area) {
        document.title = `Roofing Contractor in ${area.city || area.fullName} | AeroDome Roofing Calgary`;
      } else {
        document.title = "Service Area | AeroDome Roofing Calgary";
      }
    } else if (pathname === '/blog' || pathname === '/blogs') {
      document.title = "Roofing Blog & Insights | AeroDome Roofing Calgary";
    } else if (pathname.startsWith('/blog/') || pathname.startsWith('/blogs/')) {
      const slug = pathname.replace(/^\/blogs?\//, '');
      const post = getBlogBySlug(slug);
      if (post && post.title) {
        document.title = `${post.title} | AeroDome Roofing Calgary`;
      } else {
        document.title = "Roofing Guide | AeroDome Roofing Calgary";
      }
    } else if (pathname === '/contact' || pathname === '/contact-us') {
      document.title = "Contact Us | AeroDome Roofing Calgary";
    } else if (pathname === '/navigation' || pathname === '/nav' || pathname === '/sitemap') {
      document.title = "Site Directory & Navigation | AeroDome Roofing Calgary";
    } else {
      document.title = "AeroDome Roofing Calgary | Professional Roofing Contractor";
    }
  }, [pathname, hash]);

  return null;
}
