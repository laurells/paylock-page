"use client"

import { motion } from "framer-motion"
import { BookOpen, Video, FileText, Users, Calendar, ArrowRight, Clock, User } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"

const resourceCategories = [
  {
    name: "Documentation",
    description: "Comprehensive guides and API references",
    icon: BookOpen,
    count: "50+ guides",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Video Tutorials",
    description: "Step-by-step video walkthroughs",
    icon: Video,
    count: "25+ videos",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Case Studies",
    description: "Real-world implementation examples",
    icon: FileText,
    count: "15+ studies",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Community",
    description: "Connect with other developers",
    icon: Users,
    count: "2K+ members",
    color: "from-orange-500 to-red-500",
  },
]

const blogPosts = [
  {
    title: "Building Trust in Digital Marketplaces: A Complete Guide",
    excerpt: "Learn how to implement escrow services that build buyer and seller confidence in your marketplace.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Best Practices",
    image: "📊",
  },
  {
    title: "Implementing Condition-Based Escrow: Technical Deep Dive",
    excerpt: "A technical walkthrough of implementing custom conditions and automated verification systems.",
    author: "Marcus Rodriguez",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    category: "Technical",
    image: "⚙️",
  },
  {
    title: "Escrow API Security: Best Practices for Production",
    excerpt: "Essential security considerations when implementing escrow services in production environments.",
    author: "Emily Watson",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Security",
    image: "🔒",
  },
  {
    title: "Multi-Party Escrow: Handling Complex Transactions",
    excerpt: "How to design and implement escrow systems for transactions involving multiple parties.",
    author: "David Kim",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    category: "Advanced",
    image: "🤝",
  },
]

const webinars = [
  {
    title: "Building Secure Marketplaces with Escrow APIs",
    date: "Jan 15, 2025",
    time: "2:00 PM EST",
    speaker: "Sarah Chen, CTO at MarketHub",
    description: "Learn how to integrate escrow services into your marketplace platform.",
    status: "upcoming",
  },
  {
    title: "Advanced Escrow Patterns for Enterprise",
    date: "Jan 22, 2025",
    time: "3:00 PM EST",
    speaker: "Marcus Rodriguez, Lead Engineer",
    description: "Deep dive into complex escrow scenarios and implementation patterns.",
    status: "upcoming",
  },
  {
    title: "Escrow Security and Compliance",
    date: "Dec 18, 2024",
    time: "2:00 PM EST",
    speaker: "Emily Watson, Security Lead",
    description: "Best practices for secure escrow implementation and regulatory compliance.",
    status: "recorded",
  },
]

const guides = [
  {
    title: "Quick Start Guide",
    description: "Get up and running with Paylock in under 10 minutes",
    difficulty: "Beginner",
    time: "10 min",
  },
  {
    title: "Integration Patterns",
    description: "Common patterns for integrating escrow into your application",
    difficulty: "Intermediate",
    time: "30 min",
  },
  {
    title: "Custom Conditions",
    description: "Building complex verification logic with custom conditions",
    difficulty: "Advanced",
    time: "45 min",
  },
  {
    title: "Webhook Implementation",
    description: "Setting up real-time notifications and event handling",
    difficulty: "Intermediate",
    time: "25 min",
  },
]

export default function ResourcesPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Learn and{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">grow</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover guides, tutorials, case studies, and best practices to help you build better with Paylock.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group cursor-pointer">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-sm text-blue-600 font-medium mb-4">{category.count}</div>
                    <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-200">
                      Explore
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
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
              Latest from our <span className="text-blue-600">blog</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest insights, tutorials, and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{post.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                            {post.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2 hover:text-blue-600 transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-base">{post.excerpt}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Posts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Guides */}
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
              Popular <span className="text-blue-600">guides</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Step-by-step tutorials to help you master Paylock
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                    </div>
                    <CardDescription className="mb-4">{guide.description}</CardDescription>
                    <div className="flex items-center gap-4 text-sm">
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
                      <span className="text-slate-500">{guide.time}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
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
              Upcoming <span className="text-blue-600">webinars</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Join our experts for live sessions and Q&A</p>
          </motion.div>

          <div className="space-y-6">
            {webinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <CardTitle className="text-xl">{webinar.title}</CardTitle>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              webinar.status === "upcoming" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {webinar.status === "upcoming" ? "Upcoming" : "Recorded"}
                          </span>
                        </div>
                        <CardDescription className="mb-3">{webinar.description}</CardDescription>
                        <div className="flex items-center gap-6 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {webinar.date} at {webinar.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {webinar.speaker}
                          </div>
                        </div>
                      </div>
                      <Button
                        className={
                          webinar.status === "upcoming"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-gray-600 hover:bg-gray-700"
                        }
                      >
                        {webinar.status === "upcoming" ? "Register" : "Watch Recording"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
