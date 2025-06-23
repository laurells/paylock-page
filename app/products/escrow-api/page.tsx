"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, ArrowRight, Copy, Play } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

import { Users, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Condition-Based Releases",
    description:
      "Funds are only released when predefined conditions are met by all parties",
    icon: CheckCircle,
  },
  {
    title: "Multi-Party Support",
    description:
      "Handle complex transactions with buyers, sellers, and intermediaries",
    icon: Users,
  },
  {
    title: "Real-Time Verification",
    description: "Instant condition verification with automated workflows",
    icon: Zap,
  },
  {
    title: "Automated Compliance",
    description: "Built-in KYC/AML compliance and regulatory reporting",
    icon: ShieldCheck,
  },
];

const codeExample = `// Create an escrow transaction
const transaction = await Renvue.transactions.create({
  amount: 50000, // $500.00 in cents
  currency: 'usd',
  buyer: {
    id: 'user_123',
    email: 'buyer@example.com'
  },
  seller: {
    id: 'user_456',
    email: 'seller@example.com'
  },
  conditions: [
    {
      type: 'delivery_confirmation',
      description: 'Package delivered to buyer',
      required_parties: ['buyer', 'seller']
    }
  ],
  auto_release: true,
  metadata: {
    order_id: 'order_789'
  }
});

// Both parties accept conditions
await Renvue.transactions.acceptCondition({
  transactionId: transaction.id,
  partyType: 'buyer',
  conditionMet: true
});

// Funds released automatically when all conditions met`;

export default function EscrowAPIPage() {
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
              <Shield className="mr-2 h-4 w-4" />
              Core Product
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Escrow{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                API
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              The most trusted escrow infrastructure for platforms and
              marketplaces. Secure transactions with condition-based releases
              and automated compliance.
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
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
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
              Everything you need for{" "}
              <span className="text-blue-600">secure transactions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">
                    {React.createElement(feature.icon, {
                      className: "w-10 h-10",
                    })}
                  </div>
                  <CardTitle className="text-xl mb-4">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Simple, powerful integration
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Create secure escrow transactions with just a few lines of code.
                Our API handles all the complexity.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "RESTful API with comprehensive documentation",
                  "Real-time webhooks for transaction updates",
                  "Sandbox environment for testing",
                  "99.99% uptime SLA",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Documentation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400 text-sm ml-4">
                    escrow-example.js
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto font-mono leading-relaxed">
                <code>{codeExample}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              Simple, transparent <span className="text-blue-600">pricing</span>
            </h2>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-white max-w-2xl mx-auto">
              <div className="text-6xl font-bold mb-4">2.9%</div>
              <div className="text-xl mb-6">+ $0.30 per transaction</div>
              <p className="text-blue-100 mb-8">
                No setup fees, no monthly minimums. Pay only for what you use.
              </p>
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
