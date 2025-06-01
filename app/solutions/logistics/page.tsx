"use client"

import { motion } from "framer-motion"
import { Truck, Shield, CheckCircle, ArrowRight, Camera, Clock } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardDescription, CardTitle } from "../../components/ui/card"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

const benefits = [
  {
    title: "Delivery Verification",
    description: "Confirm package delivery with photo and signature proof",
    icon: Camera,
    stat: "99.2%",
  },
  {
    title: "Package Condition Verification",
    description: "Document package condition at delivery to prevent disputes",
    icon: Shield,
    stat: "80%",
  },
  {
    title: "On-time Delivery Incentives",
    description: "Reward couriers for meeting delivery deadlines",
    icon: Clock,
    stat: "95%",
  },
  {
    title: "Automated Payments",
    description: "Instant payment upon delivery confirmation",
    icon: CheckCircle,
    stat: "< 1min",
  },
]

const useCases = [
  {
    title: "Last-Mile Delivery",
    description: "Secure payments for final delivery to customer with proof",
    example: "Food delivery with photo confirmation and customer rating",
  },
  {
    title: "Multi-Party Logistics",
    description: "Handle complex delivery chains with multiple handoffs",
    example: "International shipping with customs clearance verification",
  },
  {
    title: "High-Value Deliveries",
    description: "Extra security for expensive or fragile items",
    example: "Electronics delivery with condition verification and testing",
  },
  {
    title: "Time-Sensitive Deliveries",
    description: "Incentivize on-time delivery with bonus structures",
    example: "Medical supplies with time-based delivery confirmation",
  },
]

const caseStudy = {
  company: "CourierConnect",
  industry: "Last-Mile Delivery",
  challenge: "High dispute rates (20%) for damaged packages and delivery verification",
  solution: "Implemented Paylock's condition-based escrow with photo verification",
  results: [
    "99.2% successful deliveries (up from 80%)",
    "80% fewer disputes about package condition",
    "95% on-time delivery rate",
    "40% increase in courier satisfaction",
  ],
  quote:
    "Paylock has transformed our delivery operations. Couriers are paid instantly upon verification, customers trust our service more, and our support team spends 80% less time handling disputes.",
  author: "Emily Watson, Head of Product at CourierConnect",
}

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 px-4 py-2 text-sm font-medium text-green-700 mb-6">
              <Truck className="mr-2 h-4 w-4" />
              Logistics Solution
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Secure{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Logistics
              </span>{" "}
              Payments
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Build trust in your delivery operations with condition-based escrow. Verify deliveries, document package
              condition, and automate payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Transform your <span className="text-green-600">delivery operations</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-xl transition-all duration-300">
                  <benefit.icon className="w-16 h-16 text-green-600 mx-auto mb-6" />
                  <div className="text-3xl font-bold text-green-600 mb-2">{benefit.stat}</div>
                  <CardTitle className="text-lg mb-4">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Common <span className="text-green-600">use cases</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how logistics companies use escrow to improve delivery verification and payment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-lg transition-all duration-300">
                  <CardTitle className="text-xl mb-4">{useCase.title}</CardTitle>
                  <CardDescription className="text-base mb-6">{useCase.description}</CardDescription>
                  <div className="text-sm text-green-700 bg-green-50 p-4 rounded-lg">
                    <strong>Example:</strong> {useCase.example}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
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
              Success <span className="text-green-600">story</span>
            </h2>
          </motion.div>

          <Card className="max-w-4xl mx-auto p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="text-6xl mb-6">🚚</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{caseStudy.company}</h3>
                <p className="text-slate-600 mb-6">{caseStudy.industry}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                    <p className="text-slate-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                    <p className="text-slate-600">{caseStudy.solution}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-6">Results</h4>
                <ul className="space-y-4 mb-8">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className="text-slate-700">{result}</span>
                    </li>
                  ))}
                </ul>

                <blockquote className="border-l-4 border-green-600 pl-6 italic text-slate-700 mb-4">
                  "{caseStudy.quote}"
                </blockquote>
                <cite className="text-slate-600">— {caseStudy.author}</cite>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to transform your logistics operations?</h2>
            <p className="text-xl mb-8 opacity-90">Join hundreds of delivery companies using Paylock</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
