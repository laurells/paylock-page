"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Header from "../../components/header";
import Footer from "../../components/footer";

const categories = [
  "All",
  "Getting Started",
  "Integration",
  "Advanced",
  "Security",
  "Best Practices",
];

const guides = [
  {
    title: "Quick Start: Your First Transaction",
    description:
      "Create your first escrow transaction in under 10 minutes with our step-by-step guide",
    difficulty: "Beginner",
    time: "10 min",
    category: "Getting Started",
    featured: true,
    steps: 5,
    icon: "🚀",
  },
  {
    title: "Marketplace Integration Guide",
    description:
      "Complete guide for integrating escrow into e-commerce and service marketplaces",
    difficulty: "Intermediate",
    time: "30 min",
    category: "Integration",
    featured: false,
    steps: 8,
    icon: "🏪",
  },
  {
    title: "Implementing Webhooks",
    description:
      "Set up real-time notifications for transaction events with secure webhook handling",
    difficulty: "Intermediate",
    time: "25 min",
    category: "Integration",
    featured: false,
    steps: 6,
    icon: "🔔",
  },
  {
    title: "Custom Condition Logic",
    description:
      "Build complex verification workflows with custom conditions and automated releases",
    difficulty: "Advanced",
    time: "45 min",
    category: "Advanced",
    featured: false,
    steps: 10,
    icon: "⚙️",
  },
  {
    title: "Error Handling Best Practices",
    description:
      "Handle API errors gracefully in production applications with retry logic and fallbacks",
    difficulty: "Intermediate",
    time: "20 min",
    category: "Best Practices",
    featured: false,
    steps: 7,
    icon: "🛡️",
  },
  {
    title: "Security Implementation Guide",
    description:
      "Secure your integration with authentication, encryption, and security best practices",
    difficulty: "Advanced",
    time: "35 min",
    category: "Security",
    featured: false,
    steps: 9,
    icon: "🔒",
  },
  {
    title: "Multi-Party Escrow Setup",
    description:
      "Configure escrow for complex transactions involving multiple parties and conditions",
    difficulty: "Advanced",
    time: "40 min",
    category: "Advanced",
    featured: false,
    steps: 12,
    icon: "👥",
  },
  {
    title: "Testing Your Integration",
    description:
      "Comprehensive testing strategies for escrow implementations using sandbox environment",
    difficulty: "Intermediate",
    time: "30 min",
    category: "Best Practices",
    featured: false,
    steps: 8,
    icon: "🧪",
  },
  {
    title: "Production Deployment Checklist",
    description:
      "Essential steps and considerations for deploying escrow services to production",
    difficulty: "Intermediate",
    time: "25 min",
    category: "Best Practices",
    featured: false,
    steps: 15,
    icon: "✅",
  },
];

const quickLinks = [
  {
    title: "API Authentication",
    description: "Set up API keys and authentication",
    time: "5 min",
    icon: "🔑",
  },
  {
    title: "SDK Installation",
    description: "Install and configure SDKs",
    time: "3 min",
    icon: "📦",
  },
  {
    title: "Sandbox Testing",
    description: "Test with sample transactions",
    time: "10 min",
    icon: "🏖️",
  },
  {
    title: "Webhook Setup",
    description: "Configure real-time notifications",
    time: "15 min",
    icon: "🔗",
  },
];

export default function GuidesPage() {
  const featuredGuide = guides.find((guide) => guide.featured);
  const otherGuides = guides.filter((guide) => !guide.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-yellow-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200/50 px-4 py-2 text-sm font-medium text-orange-700 mb-6">
              <BookOpen className="mr-2 h-4 w-4" />
              Step-by-Step Guides
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Learn with{" "}
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                guides
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Master Renvue with our comprehensive step-by-step guides. From
              basic setup to advanced implementations, we've got you covered.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search guides..."
                  className="pl-12 pr-4 py-4 text-lg border-slate-300 focus:border-orange-500 focus:ring-orange-500 rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={
                      index === 0 ? "bg-orange-600 hover:bg-orange-700" : ""
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Quick <span className="text-orange-600">start</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Jump right in with these essential setup guides
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="text-4xl mb-4">{link.icon}</div>
                  <CardTitle className="text-lg mb-2 group-hover:text-orange-600 transition-colors">
                    {link.title}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {link.description}
                  </CardDescription>
                  <div className="text-sm text-orange-600 font-medium">
                    {link.time}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      {featuredGuide && (
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Featured Guide
              </h2>
              <Card className="overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                        {featuredGuide.category}
                      </span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                    <CardTitle className="text-3xl mb-4">
                      {featuredGuide.title}
                    </CardTitle>
                    <CardDescription className="text-lg mb-6 leading-relaxed">
                      {featuredGuide.description}
                    </CardDescription>

                    <div className="flex items-center gap-6 text-sm text-slate-600 mb-8">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredGuide.time}
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          featuredGuide.difficulty === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : featuredGuide.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {featuredGuide.difficulty}
                      </span>
                      <span>{featuredGuide.steps} steps</span>
                    </div>

                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      Start Guide
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center text-8xl">
                    {featuredGuide.icon}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Guides */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              All <span className="text-orange-600">guides</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{guide.icon}</div>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                        {guide.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-orange-600 transition-colors">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-slate-500" />
                          {guide.time}
                        </div>
                        <span className="text-slate-500">
                          {guide.steps} steps
                        </span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          guide.difficulty === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : guide.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {guide.difficulty}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-orange-50 group-hover:border-orange-200"
                    >
                      Start Guide
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Need <span className="text-orange-600">help?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              Can't find the guide you're looking for? We're here to help you
              succeed.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-8">
                <div className="text-4xl mb-4">💬</div>
                <CardTitle className="mb-4">Live Chat</CardTitle>
                <CardDescription className="mb-6">
                  Get instant help from our support team
                </CardDescription>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Start Chat
                </Button>
              </Card>

              <Card className="text-center p-8">
                <div className="text-4xl mb-4">📚</div>
                <CardTitle className="mb-4">Documentation</CardTitle>
                <CardDescription className="mb-6">
                  Browse our comprehensive API documentation
                </CardDescription>
                <Button variant="outline" className="w-full">
                  View Docs
                </Button>
              </Card>

              <Card className="text-center p-8">
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="mb-4">Community</CardTitle>
                <CardDescription className="mb-6">
                  Join our Discord community for peer support
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Join Discord
                </Button>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
