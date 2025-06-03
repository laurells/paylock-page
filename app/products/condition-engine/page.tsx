"use client";
import React from 'react'
import { motion } from "framer-motion";
import {
  Zap,
  Settings,
  Code,
  CheckCircle,
  ArrowRight,
  Copy,
  Package,
  CheckSquare,
  SearchCheck,
  Clock,
  Users,
  Link2
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

const conditionTypes = [
  {
    name: "Delivery Confirmation",
    description: "Verify package delivery with tracking and photo confirmation",
    example: "Package delivered to correct address with photo proof",
    icon: Package,
  },
  {
    name: "Service Completion",
    description: "Confirm service delivery with milestone-based verification",
    example: "Website development completed and approved by client",
    icon: CheckSquare,
  },
  {
    name: "Quality Assurance",
    description: "Product quality verification with inspection periods",
    example: "Product meets specifications within 7-day inspection period",
    icon: SearchCheck,
  },
  {
    name: "Time-Based Release",
    description: "Automatic release after specified time period",
    example: "Funds released automatically after 30 days if no disputes",
    icon: Clock,
  },
  {
    name: "Multi-Party Approval",
    description: "Require approval from multiple parties before release",
    example: "Both buyer and platform operator must approve release",
    icon: Users,
  },
  {
    name: "External API Verification",
    description: "Integrate with external services for condition verification",
    example: "Verify payment through external payment processor",
    icon: Link2,
  },
];

const codeExample = `// Define custom conditions
const conditions = [
  {
    type: 'delivery_confirmation',
    description: 'Package delivered with photo proof',
    required_parties: ['buyer'],
    verification: {
      tracking_required: true,
      photo_required: true,
      signature_required: false
    }
  },
  {
    type: 'quality_inspection',
    description: 'Product quality approved within 7 days',
    required_parties: ['buyer'],
    timeout: '7d',
    auto_approve_on_timeout: true
  },
  {
    type: 'external_verification',
    description: 'Payment verified by external system',
    webhook_url: 'https://api.yourapp.com/verify-payment',
    required_data: ['payment_id', 'amount']
  }
];

// Create transaction with conditions
const transaction = await paylock.transactions.create({
  amount: 100000,
  currency: 'usd',
  buyer: { id: 'buyer_123' },
  seller: { id: 'seller_456' },
  conditions: conditions,
  metadata: {
    order_id: 'order_789'
  }
});`;

export default function ConditionEnginePage() {
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
              <Zap className="mr-2 h-4 w-4" />
              Condition Engine
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Flexible{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Condition Engine
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Create custom verification logic for any transaction scenario.
              From simple delivery confirmations to complex multi-party
              approvals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Start Building
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                View Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Condition Types */}
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
              Built-in <span className="text-green-600">condition types</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose from our library of pre-built conditions or create your own
              custom logic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditionTypes.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">
                    {React.createElement(condition.icon, { className: "w-10 h-10 text-green-600" })}
                  </div>
                  <CardTitle className="text-xl mb-3">
                    {condition.name}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    {condition.description}
                  </CardDescription>
                  <div className="text-sm text-green-700 bg-green-50 p-3 rounded-lg">
                    <strong>Example:</strong> {condition.example}
                  </div>
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
                Build custom verification logic
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Define exactly when and how funds should be released with our
                flexible condition system.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Pre-built condition templates",
                  "Custom webhook integrations",
                  "Time-based automatic releases",
                  "Multi-party approval workflows",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
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
                    conditions.js
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
              Powerful <span className="text-green-600">automation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <Settings className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <CardTitle className="text-xl mb-4">
                Flexible Configuration
              </CardTitle>
              <CardDescription>
                Configure conditions with timeouts, retries, and fallback
                behaviors
              </CardDescription>
            </Card>
            <Card className="text-center p-8">
              <Code className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <CardTitle className="text-xl mb-4">
                Webhook Integration
              </CardTitle>
              <CardDescription>
                Connect with external systems for real-time condition
                verification
              </CardDescription>
            </Card>
            <Card className="text-center p-8">
              <Zap className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <CardTitle className="text-xl mb-4">
                Real-time Processing
              </CardTitle>
              <CardDescription>
                Instant condition evaluation and automatic fund releases
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
