"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

const benefits = [
  {
    title: "Reduce Disputes by 90%",
    description:
      "Condition-based escrow eliminates payment disputes and chargebacks",
    icon: Shield,
    stat: "90%",
  },
  {
    title: "Increase Seller Trust",
    description: "Sellers know they'll get paid when conditions are met",
    icon: CheckCircle,
    stat: "95%",
  },
  {
    title: "Boost Buyer Confidence",
    description:
      "Buyers feel secure knowing funds are protected until delivery",
    icon: Star,
    stat: "98%",
  },
  {
    title: "Improve Conversion",
    description: "Higher trust leads to more completed transactions",
    icon: TrendingUp,
    stat: "40%",
  },
];

const useCases = [
  {
    title: "Product Delivery Verification",
    description:
      "Funds released only when buyer confirms delivery and product condition",
    example: "Electronics marketplace with photo verification",
  },
  {
    title: "Quality Assurance Period",
    description:
      "Buyers get inspection time before funds are released to seller",
    example: "Fashion marketplace with 7-day return window",
  },
  {
    title: "Return Protection",
    description: "Automatic refund processing for returns within policy period",
    example: "Home goods marketplace with 30-day returns",
  },
  {
    title: "Seller Payment Security",
    description:
      "Sellers protected from fraudulent chargebacks and payment reversals",
    example: "Digital goods marketplace with instant delivery",
  },
];

const caseStudy = {
  company: "MarketHub",
  industry: "Multi-vendor Marketplace",
  challenge: "High dispute rates (15%) and seller churn due to payment issues",
  solution:
    "Implemented Renvue's condition-based escrow with delivery verification",
  results: [
    "90% reduction in payment disputes",
    "40% increase in seller retention",
    "25% boost in buyer satisfaction scores",
    "60% faster dispute resolution",
  ],
  quote:
    "Renvue transformed our marketplace. Sellers trust us more, buyers feel secure, and our support team can focus on growth instead of disputes.",
  author: "Sarah Chen, CTO at MarketHub",
};

export default function EcommercePage() {
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
              <ShoppingCart className="mr-2 h-4 w-4" />
              E-commerce Solution
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Secure{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                E-commerce
              </span>{" "}
              Transactions
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Build trust between buyers and sellers with condition-based
              escrow. Reduce disputes, increase conversions, and create a safer
              marketplace experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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
              Transform your <span className="text-blue-600">marketplace</span>
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
                  <benefit.icon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {benefit.stat}
                  </div>
                  <CardTitle className="text-lg mb-4">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
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
              Common <span className="text-blue-600">use cases</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how e-commerce platforms use escrow to build trust and reduce
              risk
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
                  <CardTitle className="text-xl mb-4">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    {useCase.description}
                  </CardDescription>
                  <div className="text-sm text-blue-700 bg-blue-50 p-4 rounded-lg">
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
              Success <span className="text-blue-600">story</span>
            </h2>
          </motion.div>

          <Card className="max-w-4xl mx-auto p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="text-6xl mb-6">🏪</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {caseStudy.company}
                </h3>
                <p className="text-slate-600 mb-6">{caseStudy.industry}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Challenge
                    </h4>
                    <p className="text-slate-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Solution
                    </h4>
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

                <blockquote className="border-l-4 border-blue-600 pl-6 italic text-slate-700 mb-4">
                  "{caseStudy.quote}"
                </blockquote>
                <cite className="text-slate-600">— {caseStudy.author}</cite>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to secure your marketplace?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of e-commerce platforms using Renvue
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
