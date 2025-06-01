"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Code, Users, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from "next/link"

const products = [
  {
    name: "Escrow API",
    description: "Core escrow infrastructure for secure transactions",
    icon: Shield,
    features: ["Condition-based releases", "Multi-party support", "Real-time verification", "Automated compliance"],
    pricing: "2.9% + $0.30",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dispute Resolution",
    description: "Automated and manual dispute handling system",
    icon: Users,
    features: ["AI-powered mediation", "Expert arbitrators", "Evidence management", "Resolution tracking"],
    pricing: "$50 per case",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Condition Engine",
    description: "Flexible condition verification and automation",
    icon: Zap,
    features: ["Custom conditions", "API integrations", "Smart contracts", "Workflow automation"],
    pricing: "Included",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Webhooks & Events",
    description: "Real-time notifications and event streaming",
    icon: Code,
    features: ["Real-time events", "Retry mechanisms", "Event filtering", "Delivery guarantees"],
    pricing: "Free",
    color: "from-orange-500 to-red-500",
  },
]

const integrations = [
  { name: "Stripe", logo: "💳", description: "Payment processing" },
  { name: "Plaid", logo: "🏦", description: "Bank verification" },
  { name: "Twilio", logo: "📱", description: "SMS notifications" },
  { name: "SendGrid", logo: "📧", description: "Email delivery" },
  { name: "Slack", logo: "💬", description: "Team notifications" },
  { name: "Zapier", logo: "⚡", description: "Workflow automation" },
]

export default function ProductsPage() {
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
              <Sparkles className="mr-2 h-4 w-4" />
              Complete escrow platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                secure transactions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From basic escrow to complex multi-party transactions with custom conditions and automated dispute
              resolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-lg">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-sm text-slate-500">Starting at</span>
                        <div className="text-xl font-bold text-slate-900">{product.pricing}</div>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
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
              Seamless <span className="text-blue-600">integrations</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Connect with your existing tools and services for a complete solution
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{integration.logo}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-slate-600">{integration.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of businesses securing transactions with Paylock</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
