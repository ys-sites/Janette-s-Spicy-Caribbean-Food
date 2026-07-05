/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import './i18n';

// Critical above-the-fold components – loaded eagerly
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Below-the-fold components – lazy-loaded to improve LCP
const About = lazy(() => import('./components/About'));
const MenuHighlights = lazy(() => import('./components/MenuHighlights'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const FoodGallery = lazy(() => import('./components/FoodGallery'));
const CateringSection = lazy(() => import('./components/CateringSection'));
const Reviews = lazy(() => import('./components/Reviews'));
const SocialFeedback = lazy(() => import('./components/SocialFeedback'));
const Contact = lazy(() => import('./components/Contact'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));

// Lightweight skeleton for lazy sections
function SectionSkeleton() {
  return (
    <div className="py-24 flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <SocialFeedback />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <MenuHighlights />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FoodGallery />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CateringSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Reviews />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
