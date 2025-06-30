import CallToAction from '@/components/CallToAction';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Listings from '@/components/Listings';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Listings />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default HomePage;