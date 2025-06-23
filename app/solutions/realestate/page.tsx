"use client";

import { motion } from "framer-motion";
import {
  Home,
  Shield,
  CheckCircle,
  ArrowRight,
  Key,
  FileText,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

const benefits = [
  {
    title: "Secure Property Transactions",
    description: "Hold funds securely until all closing conditions are met",
    icon: Shield,
    stat: "$50M+",
  },
  {
    title: "Inspection Contingencies",
    description: "Release funds only after successful property inspections",
    icon: CheckCircle,
    stat: "95%",
  },
  {
    title: "Rental Deposit Protection",
    description: "Secure deposits with condition-based releases",
    icon: Key,
    stat: "90%",
  },
  {
    title: "Title Verification",
    description: "Automated title verification and document handling",
    icon: FileText,
    stat: "99.9%",
  },
];

const useCases = [
  {
    title: "Property Purchase Escrow",
    description:
      "Secure the entire property purchase process from offer to closing",
    example:
      "Residential home purchase with inspection and financing contingencies",
  },
  {
    title: "Rental Deposits",
    description:
      "Protect both landlords and tenants with condition-based deposit handling",
    example: "Apartment rental with move-in/move-out condition verification",
  },
  {
    title: "Renovation Payments",
    description:
      "Milestone-based payments for property renovations and construction",
    example: "Home remodeling with progress-based payment releases",
  },
  {
    title: "Commission Disbursements",
    description: "Automated agent commission payments upon successful closing",
    example: "Real estate agent commission split with brokerage verification",
  },
];

const caseStudy = {
  company: "PropertyPro",
  industry: "Real Estate Platform",
  challenge:
    "Complex closing processes with multiple contingencies and high dispute rates",
  solution:
    "Implemented Renvue's condition-based escrow with document verification",
  results: [
    "95% reduction in closing disputes",
    "30% faster closing times",
    "99.9% accurate title verification",
    "85% increase in client satisfaction",
  ],
  quote:
    "Renvue has revolutionized our closing process. What used to take weeks now happens in days, with complete transparency and security for all parties involved.",
  author: "Michael Chen, CEO at PropertyPro",
};

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 px-4 py-2 text-sm font-medium text-orange-700 mb-6">
              <Home className="mr-2 h-4 w-4" />
              Real Estate Solution
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Secure{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Real Estate
              </span>{" "}
              Transactions
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Streamline property transactions with secure escrow services. From
              purchase agreements to rental deposits, protect all parties with
              condition-based releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
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
              Transform{" "}
              <span className="text-orange-600">property transactions</span>
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
                  <benefit.icon className="w-16 h-16 text-orange-600 mx-auto mb-6" />
                  <div className="text-3xl font-bold text-orange-600 mb-2">
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
              Common <span className="text-orange-600">use cases</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how real estate companies use escrow to secure property
              transactions
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
                  <div className="text-sm text-orange-700 bg-orange-50 p-4 rounded-lg">
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
              Success <span className="text-orange-600">story</span>
            </h2>
          </motion.div>

          <Card className="max-w-4xl mx-auto p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="text-6xl mb-6">🏠</div>
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

                <blockquote className="border-l-4 border-orange-600 pl-6 italic text-slate-700 mb-4">
                  "{caseStudy.quote}"
                </blockquote>
                <cite className="text-slate-600">— {caseStudy.author}</cite>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to transform your real estate transactions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of real estate companies using Renvue
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
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
