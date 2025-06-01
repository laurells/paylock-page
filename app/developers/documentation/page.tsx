"use client"

import { motion } from "framer-motion"
import { Book, Code, Search, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import Header from "../../components/header"
import Footer from "../../components/footer"

const sections = [
  {
    title: "Getting Started",
    description: "Quick start guide and basic concepts",
    items: ["Authentication", "Making your first API call", "Understanding escrow flow", "Testing with sandbox"],
    icon: "🚀",
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples",
    items: ["Transactions API", "Conditions API", "Disputes API", "Webhooks API"],
    icon: "📚",
  },
  {
    title: "Guides",
    description: "Step-by-step implementation guides",
    items: ["Marketplace integration", "Custom conditions", "Webhook handling", "Error handling"],
    icon: "📖",
  },
  {
    title: "SDKs",
    description: "Official libraries and code samples",
    items: ["Node.js SDK", "Python SDK", "PHP SDK", "Code examples"],
    icon: "💻",
  },
]

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <Book className="mr-2 h-4 w-4" />
              Documentation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Complete{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Everything you need to integrate Paylock into your application. From quick start guides to comprehensive
              API references.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  className="pl-12 pr-4 py-4 text-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Quick Start Guide
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Code className="mr-2 w-5 h-5" />
                API Reference
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{section.icon}</div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-base">{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          <ArrowRight className="w-4 h-4 text-slate-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full mt-6 group-hover:bg-blue-50 group-hover:border-blue-200"
                    >
                      Explore
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Popular <span className="text-blue-600">guides</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Most accessed documentation and tutorials</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quick Start: Your First Transaction",
                description: "Create your first escrow transaction in under 10 minutes",
                time: "10 min read",
                difficulty: "Beginner",
              },
              {
                title: "Implementing Webhooks",
                description: "Set up real-time notifications for transaction events",
                time: "15 min read",
                difficulty: "Intermediate",
              },
              {
                title: "Custom Condition Logic",
                description: "Build complex verification workflows with custom conditions",
                time: "25 min read",
                difficulty: "Advanced",
              },
              {
                title: "Marketplace Integration Guide",
                description: "Complete guide for e-commerce marketplace integration",
                time: "30 min read",
                difficulty: "Intermediate",
              },
              {
                title: "Error Handling Best Practices",
                description: "Handle API errors gracefully in production applications",
                time: "20 min read",
                difficulty: "Intermediate",
              },
              {
                title: "Security Implementation",
                description: "Secure your integration with best practices and examples",
                time: "35 min read",
                difficulty: "Advanced",
              },
            ].map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-3 hover:text-blue-600 transition-colors">{guide.title}</CardTitle>
                    <CardDescription className="mb-4">{guide.description}</CardDescription>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">{guide.time}</span>
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Need <span className="text-blue-600">help?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              Can't find what you're looking for? Our team is here to help.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-8">
                <div className="text-4xl mb-4">💬</div>
                <CardTitle className="mb-4">Live Chat</CardTitle>
                <CardDescription className="mb-6">Get instant help from our support team</CardDescription>
                <Button className="w-full">Start Chat</Button>
              </Card>

              <Card className="text-center p-8">
                <div className="text-4xl mb-4">📧</div>
                <CardTitle className="mb-4">Email Support</CardTitle>
                <CardDescription className="mb-6">
                  Send us your questions and we'll respond within 24 hours
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </Card>

              <Card className="text-center p-8">
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="mb-4">Community</CardTitle>
                <CardDescription className="mb-6">Join our Discord community for peer support</CardDescription>
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
  )
}
