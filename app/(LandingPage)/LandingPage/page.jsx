import HeroSection from '@/components/HeroSection';
import Listings from '@/components/Listings';
//import Testimonials from '@/components/Testimonials';
import React from 'react';

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Listings />
      {/* <Testimonials /> */}
    </main>
  );
};

export default HomePage;