"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Briefcase, Truck, Home, Gamepad2, Heart, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from "next/link"

const solutions = [
  {
    name: "E-commerce Marketplaces",
    description: "Secure buyer-seller transactions with delivery confirmation",
    icon: ShoppingCart,
    useCases: [
      "Product delivery verification",
      "Quality assurance holds",
      "Return protection",
      "Seller payment security",
    ],
    stats: { metric: "95%", label: "Dispute reduction" },
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Freelance Platforms",
    description: "Milestone-based payments and project completion verification",
    icon: Briefcase,
    useCases: ["Milestone payments", "Work completion verification", "Scope change protection", "Quality guarantees"],
    stats: { metric: "$2M+", label: "Protected monthly" },
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Logistics & Delivery",
    description: "Secure payments for courier and delivery services",
    icon: Truck,
    useCases: [
      "Delivery confirmation",
      "Package condition verification",
      "Time-based releases",
      "Multi-party logistics",
    ],
    stats: { metric: "99.2%", label: "Success rate" },
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Real Estate",
    description: "Property transactions and rental deposit management",
    icon: Home,
    useCases: ["Property purchase escrow", "Rental deposits", "Inspection contingencies", "Title verification"],
    stats: { metric: "$50M+", label: "Properties secured" },
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Gaming & Digital Assets",
    description: "Secure trading of in-game items and digital collectibles",
    icon: Gamepad2,
    useCases: ["NFT trading", "In-game item sales", "Account transfers", "Digital asset verification"],
    stats: { metric: "500K+", label: "Trades completed" },
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Healthcare Services",
    description: "Secure payments for medical services and consultations",
    icon: Heart,
    useCases: ["Telemedicine payments", "Treatment completion", "Insurance verification", "Medical equipment sales"],
    stats: { metric: "HIPAA", label: "Compliant" },
    color: "from-teal-500 to-blue-500",
  },
]

const caseStudies = [
  {
    company: "MarketHub",
    industry: "E-commerce",
    challenge: "High dispute rates and seller distrust",
    solution: "Implemented condition-based escrow with delivery verification",
    result: "90% reduction in disputes, 40% increase in seller retention",
    logo: "🏪",
  },
  {
    company: "FreelanceForge",
    industry: "Freelancing",
    challenge: "Payment delays and scope creep issues",
    solution: "Milestone-based escrow with automated releases",
    result: "95% on-time payments, 60% faster project completion",
    logo: "💼",
  },
  {
    company: "CourierConnect",
    industry: "Logistics",
    challenge: "Payment disputes for damaged packages",
    solution: "Photo verification and condition-based releases",
    result: "99.2% successful deliveries, 80% fewer disputes",
    logo: "🚚",
  },
]

export default function SolutionsPage() {
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
              Solutions for every{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                industry
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover how businesses across different industries use Paylock to build trust and secure transactions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
                  <CardHeader className="pb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{solution.name}</CardTitle>
                    <CardDescription className="text-base">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{solution.stats.metric}</div>
                        <div className="text-sm text-slate-600">{solution.stats.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Success <span className="text-blue-600">stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how companies transformed their businesses with Paylock
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{study.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{study.company}</CardTitle>
                        <CardDescription>{study.industry}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Result</h4>
                      <p className="text-green-700 text-sm font-medium">{study.result}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-16 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss how Paylock can solve your specific challenges</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/auth/signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
