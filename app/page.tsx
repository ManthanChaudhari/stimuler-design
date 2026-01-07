'use client';

import { useState } from 'react';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Mission from "./components/Mission";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  const [shouldAnimateMission, setShouldAnimateMission] = useState(false);

  const handleStatsAnimationComplete = () => {
    console.log('Stats animation completed, triggering mission animation');
    setShouldAnimateMission(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features onStatsAnimationComplete={handleStatsAnimationComplete} />

      {/* Mission Statement */}
      <Mission shouldAnimate={shouldAnimateMission} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <About />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}