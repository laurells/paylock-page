"use client"

import { motion } from "framer-motion"
import { Users, Brain, FileText, Clock, ArrowRight, Shield } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardDescription, CardTitle } from "../../components/ui/card"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

const features = [
  {
    title: "AI-Powered Mediation",
    description: "Intelligent dispute analysis and resolution recommendations",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Expert Arbitrators",
    description: "Access to certified arbitrators for complex disputes",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Evidence Management",
    description: "Secure upload and management of dispute evidence",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Fast Resolution",
    description: "Average resolution time of 3-5 business days",
    icon: Clock,
    color: "from-orange-500 to-red-500",
  },
]

const process = [
  {
    step: "1",
    title: "Dispute Initiated",
    description: "Either party can initiate a dispute through the API or dashboard",
  },
  {
    step: "2",
    title: "Evidence Collection",
    description: "Both parties submit evidence and documentation",
  },
  {
    step: "3",
    title: "AI Analysis",
    description: "Our AI system analyzes the case and provides recommendations",
  },
  {
    step: "4",
    title: "Resolution",
    description: "Dispute is resolved automatically or escalated to human arbitrators",
  },
]

const stats = [
  { value: "95%", label: "Resolution Rate" },
  { value: "3.2 days", label: "Average Resolution Time" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "$50", label: "Cost per Case" },
]

export default function DisputeResolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 px-4 py-2 text-sm font-medium text-purple-700 mb-6">
              <Shield className="mr-2 h-4 w-4" />
              Dispute Resolution
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Fair & Fast{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dispute Resolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              AI-powered dispute resolution with expert arbitrators. Resolve conflicts quickly and fairly with our
              comprehensive dispute management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              Advanced <span className="text-purple-600">dispute handling</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-4">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              How it <span className="text-purple-600">works</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our streamlined process ensures fair and efficient dispute resolution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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
              Proven <span className="text-purple-600">results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to resolve disputes fairly?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of businesses using our dispute resolution system</p>
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
