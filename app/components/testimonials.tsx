"use client";

import { useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "MarketHub",
    content:
      "Renvue's condition-based escrow transformed our marketplace. Disputes dropped 90% and seller confidence increased dramatically. The API integration was seamless and their support team is world-class.",
    rating: 5,
    avatar: "SC",
    // companyLogo: "🏪",
    metrics: "90% fewer disputes",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "FreelanceForge",
    content:
      "The flexibility of custom conditions is incredible. We can handle everything from milestone payments to delivery confirmations. Best escrow API we've used, and we've tried them all.",
    rating: 5,
    avatar: "MR",
    // companyLogo: "💼",
    metrics: "$2M+ processed",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    company: "CourierConnect",
    content:
      "Real-time condition verification changed our business model. Drivers and customers both trust the system, and our transaction success rate is now 99.2%. Absolutely game-changing.",
    rating: 5,
    avatar: "EW",
    // companyLogo: "🚚",
    metrics: "99.2% success rate",
  },
  {
    name: "David Kim",
    role: "VP Engineering",
    company: "TechFlow",
    content:
      "Implementation took less than a week. The documentation is excellent, the API is intuitive, and the webhook system is rock solid. Our developers love working with Renvue.",
    rating: 5,
    avatar: "DK",
    // companyLogo: "⚡",
    metrics: "< 1 week integration",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-4 py-2 text-sm font-medium text-blue-700 mb-6"
          >
            <Star className="mr-2 h-4 w-4 fill-current" />
            Customer stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Loved by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              developers
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto"
          >
            See how companies use Renvue to build trust and grow their
            platforms
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-12 shadow-2xl border border-slate-200/50 mb-16 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-3 gap-12 items-center"
              >
                <div className="lg:col-span-2">
                  <Quote className="w-12 h-12 text-blue-600 mb-6" />
                  <blockquote className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8 font-light">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-slate-600 font-medium">
                        {testimonials[currentTestimonial].role},{" "}
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  {/* <div className="text-6xl mb-4">
                    {testimonials[currentTestimonial].companyLogo}
                  </div> */}
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {testimonials[currentTestimonial].metrics}
                  </div>
                  <div className="text-slate-600">Key improvement</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-blue-600 w-8"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border-slate-300 hover:border-blue-500 hover:text-blue-600"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border-slate-300 hover:border-blue-500 hover:text-blue-600"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { value: "$1.2B+", label: "Secured in escrow" },
            { value: "99.8%", label: "Success rate" },
            { value: "500+", label: "Platforms integrated" },
            { value: "24/7", label: "API uptime" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
