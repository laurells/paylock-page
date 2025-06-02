"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import TrustedBy from "./components/trusted-by";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
