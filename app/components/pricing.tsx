"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { CheckCircle, Sparkles, Zap, Crown } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small platforms getting started",
    price: "Free",
    period: "up to $10K/month",
    icon: Sparkles,
    features: [
      "Up to $10,000 monthly volume",
      "2.9% + $0.30 per transaction",
      "Basic condition types",
      "Email support",
      "Standard dispute resolution",
      "API access & documentation",
      "Basic webhook events",
    ],
    cta: "Start free",
    popular: false,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Growth",
    description: "For scaling platforms and growing businesses",
    price: "$199",
    period: "per month",
    icon: Zap,
    features: [
      "Up to $500K monthly volume",
      "2.4% + $0.30 per transaction",
      "Custom conditions & workflows",
      "Priority support (24h response)",
      "Advanced dispute tools",
      "Real-time webhooks & events",
      "Multi-currency support",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Start 14-day trial",
    popular: true,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Enterprise",
    description: "For large-scale operations and custom needs",
    price: "Custom",
    period: "volume pricing",
    icon: Crown,
    features: [
      "Unlimited monthly volume",
      "Custom transaction rates",
      "White-label solutions",
      "24/7 phone & chat support",
      "Custom API integrations",
      "99.99% SLA guarantees",
      "Dedicated infrastructure",
      "Compliance consulting",
      "Custom reporting & analytics",
      "Priority feature requests",
    ],
    cta: "Contact sales",
    popular: false,
    color: "from-purple-500 to-pink-500",
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-white to-slate-50/50">
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
            Simple, transparent pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Choose your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8"
          >
            Start free and scale with your business. No hidden fees or setup costs.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-white rounded-2xl p-2 shadow-lg border border-slate-200/50"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                !isAnnual ? "bg-blue-600 text-white shadow-lg" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                isAnnual ? "bg-blue-600 text-white shadow-lg" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border ${
                plan.popular
                  ? "border-blue-200 ring-2 ring-blue-500/20 scale-105"
                  : "border-slate-200/50 hover:border-blue-200/50"
              } group overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most popular
                  </span>
                </div>
              )}

              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    {plan.price !== "Free" && plan.price !== "Custom" && isAnnual && (
                      <span className="text-3xl font-bold text-slate-900 line-through opacity-50 ml-2">
                        ${Number.parseInt(plan.price.replace("$", "")) * 12}
                      </span>
                    )}
                    <span className="text-slate-600 ml-2 block text-lg">{plan.period}</span>
                  </div>
                  {isAnnual && plan.price !== "Free" && plan.price !== "Custom" && (
                    <div className="text-green-600 font-semibold text-sm">
                      Save ${Number.parseInt(plan.price.replace("$", "")) * 12 * 0.2}/year
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-14 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-600 mb-6 text-lg">
            All plans include bank-level security, PCI compliance, and 99.9% uptime SLA
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>No monthly minimums</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>24/7 support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
