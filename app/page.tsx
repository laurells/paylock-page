"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import TrustedBy from "./components/trusted-by";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import WaitlistSection from "./components/waitlist-section";
import ChatWidgetDemo from "./components/chat-widget-demo";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <TrustedBy /> */}
      <Features />
      {/* <Testimonials /> */}
      <ChatWidgetDemo />
      <WaitlistSection />
      <Pricing />
      <Footer />
    </div>
  );
}