"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle, ArrowRight, Copy, Play, Clock } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

const steps = [
  {
    step: "1",
    title: "Get Your API Key",
    description: "Sign up and get your API key from the dashboard",
    time: "1 min",
    code: `// Add to your environment variables
PAYLOCK_API_KEY=pk_test_your_api_key_here`,
  },
  {
    step: "2",
    title: "Install SDK",
    description: "Install the Paylock SDK for your language",
    time: "30 sec",
    code: `# Node.js
npm install @paylock/node

# Python
pip install paylock

# PHP
composer require paylock/paylock-php`,
  },
  {
    step: "3",
    title: "Initialize Client",
    description: "Create a Paylock client instance",
    time: "30 sec",
    code: `const Paylock = require('@paylock/node');

const paylock = new Paylock({
  apiKey: process.env.PAYLOCK_API_KEY,
  environment: 'sandbox' // Use 'production' for live
});`,
  },
  {
    step: "4",
    title: "Create Transaction",
    description: "Create your first escrow transaction",
    time: "2 min",
    code: `const transaction = await paylock.transactions.create({
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
  ]
});

console.log('Transaction created:', transaction.id);`,
  },
  {
    step: "5",
    title: "Handle Conditions",
    description: "Accept conditions to release funds",
    time: "1 min",
    code: `// Buyer accepts delivery
await paylock.transactions.acceptCondition({
  transactionId: transaction.id,
  partyType: 'buyer',
  conditionMet: true
});

// Seller confirms delivery
await paylock.transactions.acceptCondition({
  transactionId: transaction.id,
  partyType: 'seller',
  conditionMet: true
});

// Funds released automatically!`,
  },
];

const nextSteps = [
  {
    title: "Set up Webhooks",
    description: "Get real-time notifications about transaction events",
    link: "/developers/webhooks",
    icon: "🔔",
  },
  {
    title: "Custom Conditions",
    description: "Build complex verification logic for your use case",
    link: "/developers/conditions",
    icon: "⚙️",
  },
  {
    title: "Production Setup",
    description: "Deploy to production with best practices",
    link: "/developers/production",
    icon: "🚀",
  },
  {
    title: "Error Handling",
    description: "Handle API errors gracefully in your application",
    link: "/developers/errors",
    icon: "🛡️",
  },
];

export default function QuickStartPage() {
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
              Quick Start Guide
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Get started in{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                10 minutes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Create your first escrow transaction with Paylock. Follow this
              step-by-step guide to integrate secure transactions into your
              application.
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>~10 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Beginner friendly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        {step.time}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="bg-slate-900 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-slate-400 text-sm ml-4">
                            step-{step.step}.js
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
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold mb-6">Congratulations!</h2>
            <p className="text-xl mb-8 opacity-90">
              You've successfully created your first escrow transaction with
              Paylock. Your integration is ready to secure real transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Video Tutorial
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
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
              What's <span className="text-green-600">next?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Take your integration to the next level with these advanced
              features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <CardTitle className="text-lg mb-4 group-hover:text-green-600 transition-colors">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="mb-6">
                    {step.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-green-50 group-hover:border-green-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
