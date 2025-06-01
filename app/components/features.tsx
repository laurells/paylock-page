"use client"

import { useState } from "react"
import { Shield, Zap, Users, CheckCircle, Code, Globe, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

const features = [
  {
    icon: Shield,
    title: "Condition-based escrow",
    description:
      "Funds are only released when both parties confirm agreed conditions are met. Perfect for delivery confirmations, service completion, and milestone-based payments.",
    highlight: "99.8% success rate",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Real-time verification",
    description:
      "Instant condition verification with automated workflows. Both parties must call our API endpoints to accept conditions before funds are locked or released.",
    highlight: "< 200ms response time",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Developer-first API",
    description:
      "Built with NestJS and TypeScript for type-safe integration. RESTful endpoints, comprehensive docs, and SDKs for every major programming language.",
    highlight: "OpenAPI 3.0 spec",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Multi-party transactions",
    description:
      "Support for complex escrow scenarios with buyers, sellers, and platform operators. Flexible fee structures and automated dispute resolution.",
    highlight: "Up to 10 parties",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    title: "Multi-vertical support",
    description:
      "Works seamlessly across e-commerce, freelancing, courier services, and any platform where trust and verification matter.",
    highlight: "15+ industries",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: CheckCircle,
    title: "Automated compliance",
    description:
      "Built-in KYC/AML compliance, fraud detection, and regulatory reporting. SOC 2 Type II certified with bank-level security.",
    highlight: "SOC 2 Type II",
    color: "from-teal-500 to-blue-500",
  },
]

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-4 py-2 text-sm font-medium text-blue-700 mb-6"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Enterprise-grade features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              enterprise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Everything you need to build trust into your platform. From simple buy-sell transactions to complex
            multi-party escrows with custom conditions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                    {feature.highlight}
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      hoveredFeature === index ? "translate-x-2" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Interactive Code Example */}
        <motion.div
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 shadow-2xl border border-slate-700/50 overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-2 text-sm font-medium text-blue-300 mb-6"
              >
                <Code className="mr-2 h-4 w-4" />
                Developer Experience
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-6"
              >
                Simple, powerful API
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-slate-300 mb-8 leading-relaxed"
              >
                Create escrow transactions, set conditions, and handle releases with just a few API calls. Our
                TypeScript-first approach ensures type safety and excellent developer experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4 mb-8"
              >
                {[
                  "RESTful API with OpenAPI 3.0 spec",
                  "TypeScript SDKs and type definitions",
                  "Webhook events for real-time updates",
                  "Comprehensive documentation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-slate-300 text-lg">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  View Documentation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-4 font-medium">Condition Agreement</span>
              </div>
              <motion.pre
                className="text-green-400 text-sm overflow-x-auto font-mono leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <code>{`// Both parties must accept conditions
await paylock.transactions.acceptCondition({
  transactionId: 'txn_1234567890',
  partyType: 'buyer', // or 'seller'
  conditionMet: true,
  metadata: {
    deliveryConfirmed: true,
    qualityApproved: true
  }
});

// Funds released automatically when both accept
const transaction = await paylock.transactions.get(
  'txn_1234567890'
);
console.log(transaction.status); // 'completed'`}</code>
              </motion.pre>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
