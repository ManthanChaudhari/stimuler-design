import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Mission from "./components/Mission";
import PhoneShowcase from "./components/PhoneShowcase";
import Testimonial from "./components/Testimonial";
import TrophyShowcase from "./components/TrophyShowcase";
import { LearningJourneyCard } from "./components/LearningJourneyCard";
import Footer from "./components/Footer";
import ProductProcess from "./components/ProductProcess";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Mission Statement */}
      <Mission />

      {/* Testimonials Section */}
      <PhoneShowcase />

      <ProductProcess />
      <Testimonial />
      <TrophyShowcase />
      <LearningJourneyCard />





      {/* Footer */}
      <Footer />
    </div>
  );
}