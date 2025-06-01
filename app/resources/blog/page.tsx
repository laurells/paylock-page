"use client"

import { motion } from "framer-motion"
import { BookOpen, Clock, User, ArrowRight, Search } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import Header from "../../components/header"
import Footer from "../../components/footer"

const categories = ["All", "Technical", "Best Practices", "Case Studies", "Product Updates", "Security"]

const blogPosts = [
  {
    title: "Building Trust in Digital Marketplaces: A Complete Guide",
    excerpt:
      "Learn how to implement escrow services that build buyer and seller confidence in your marketplace platform.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Best Practices",
    image: "📊",
    featured: true,
  },
  {
    title: "Implementing Condition-Based Escrow: Technical Deep Dive",
    excerpt:
      "A comprehensive technical walkthrough of implementing custom conditions and automated verification systems.",
    author: "Marcus Rodriguez",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    category: "Technical",
    image: "⚙️",
    featured: false,
  },
  {
    title: "Escrow API Security: Best Practices for Production",
    excerpt: "Essential security considerations when implementing escrow services in production environments.",
    author: "Emily Watson",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Security",
    image: "🔒",
    featured: false,
  },
  {
    title: "Multi-Party Escrow: Handling Complex Transactions",
    excerpt: "How to design and implement escrow systems for transactions involving multiple parties and stakeholders.",
    author: "David Kim",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    category: "Technical",
    image: "🤝",
    featured: false,
  },
  {
    title: "Case Study: How MarketHub Reduced Disputes by 90%",
    excerpt: "A detailed look at how MarketHub implemented Paylock to transform their marketplace experience.",
    author: "Alex Thompson",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "Case Studies",
    image: "📈",
    featured: false,
  },
  {
    title: "Webhook Implementation: Real-time Transaction Updates",
    excerpt: "Step-by-step guide to implementing webhooks for real-time transaction status updates.",
    author: "Lisa Park",
    date: "Dec 3, 2024",
    readTime: "9 min read",
    category: "Technical",
    image: "🔔",
    featured: false,
  },
  {
    title: "Announcing Paylock API v2.0",
    excerpt: "Introducing new features, improved performance, and enhanced security in our latest API version.",
    author: "Paylock Team",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    category: "Product Updates",
    image: "🚀",
    featured: false,
  },
  {
    title: "Compliance and Regulatory Considerations for Escrow",
    excerpt: "Understanding the legal and regulatory landscape for escrow services in different jurisdictions.",
    author: "Jennifer Adams",
    date: "Nov 28, 2024",
    readTime: "11 min read",
    category: "Best Practices",
    image: "⚖️",
    featured: false,
  },
]

export default function BlogPage() {
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
              <BookOpen className="mr-2 h-4 w-4" />
              Developer Blog
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay updated with the latest tutorials, best practices, case studies, and product updates from the Paylock
              team.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-12 pr-4 py-4 text-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer">
              <div className="grid lg:grid-cols-2">
                <div className="p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                  <CardTitle className="text-3xl mb-4 hover:text-blue-600 transition-colors">
                    {blogPosts[0].title}
                  </CardTitle>
                  <CardDescription className="text-lg mb-6 leading-relaxed">{blogPosts[0].excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-8xl">
                  {blogPosts[0].image}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Latest Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
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
                      <div className="text-4xl">{post.image}</div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
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
              Load More Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-16 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Stay updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest articles, tutorials, and product updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/40"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
