"use client"

import { motion } from "framer-motion"
import { Briefcase, Shield, CheckCircle, ArrowRight, Clock, Zap } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardDescription, CardTitle } from "../../components/ui/card"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

const benefits = [
  {
    title: "Secure Milestone Payments",
    description: "Release funds only when work is completed and approved",
    icon: Shield,
    stat: "95%",
  },
  {
    title: "Reduce Payment Disputes",
    description: "Clear conditions prevent disagreements about payment terms",
    icon: CheckCircle,
    stat: "85%",
  },
  {
    title: "Faster Project Completion",
    description: "Incentivize on-time delivery with secure payment structure",
    icon: Clock,
    stat: "40%",
  },
  {
    title: "Instant Releases",
    description: "Immediate payment upon milestone approval",
    icon: Zap,
    stat: "< 1min",
  },
]

const useCases = [
  {
    title: "Milestone-Based Projects",
    description: "Break large projects into funded milestones with individual approvals",
    example: "Web development project with design, frontend, and backend milestones",
  },
  {
    title: "Work Completion Verification",
    description: "Verify work quality before releasing payment to freelancers",
    example: "Content creation with editorial review and approval process",
  },
  {
    title: "Scope Change Protection",
    description: "Protect both parties when project requirements change",
    example: "Software development with change request documentation",
  },
  {
    title: "Quality Guarantees",
    description: "Ensure work meets quality standards before payment",
    example: "Graphic design with revision cycles and final approval",
  },
]

const caseStudy = {
  company: "FreelanceForge",
  industry: "Freelance Platform",
  challenge: "Payment delays and scope creep causing freelancer dissatisfaction",
  solution: "Implemented Paylock's milestone-based escrow with automated releases",
  results: [
    "95% on-time payments (up from 60%)",
    "60% faster project completion",
    "85% reduction in payment disputes",
    "40% increase in freelancer retention",
  ],
  quote:
    "Paylock transformed our platform economics. Freelancers get paid faster, clients feel protected, and our support team spends 70% less time on payment disputes.",
  author: "Marcus Rodriguez, Founder at FreelanceForge",
}

export default function FreelancePage() {
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
              <Briefcase className="mr-2 h-4 w-4" />
              Freelance Solution
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Secure{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Freelance
              </span>{" "}
              Payments
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Build trust between clients and freelancers with milestone-based escrow. Ensure quality work and timely
              payments for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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
              Transform your <span className="text-purple-600">freelance platform</span>
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
                  <benefit.icon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                  <div className="text-3xl font-bold text-purple-600 mb-2">{benefit.stat}</div>
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
              Common <span className="text-purple-600">use cases</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how freelance platforms use escrow to build trust and ensure quality
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
                  <div className="text-sm text-purple-700 bg-purple-50 p-4 rounded-lg">
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
              Success <span className="text-purple-600">story</span>
            </h2>
          </motion.div>

          <Card className="max-w-4xl mx-auto p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="text-6xl mb-6">💼</div>
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

                <blockquote className="border-l-4 border-purple-600 pl-6 italic text-slate-700 mb-4">
                  "{caseStudy.quote}"
                </blockquote>
                <cite className="text-slate-600">— {caseStudy.author}</cite>
              </div>
            </div>
          </Card>
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
            <h2 className="text-4xl font-bold mb-6">Ready to transform your freelance platform?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of freelance platforms using Paylock</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
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
