"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Shield, CheckCircle, Play, Star } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [animatedValue, setAnimatedValue] = useState(0)
  const [currentStat, setCurrentStat] = useState(0)
  const controls = useAnimation()

  const stats = [
    { label: "Secured in Escrow", value: 1200000000, prefix: "$", suffix: "B+" },
    { label: "Success Rate", value: 99.8, prefix: "", suffix: "%" },
    { label: "Platforms Integrated", value: 500, prefix: "", suffix: "+" },
    { label: "API Uptime", value: 99.99, prefix: "", suffix: "%" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const targetValue = stats[currentStat].value
    const duration = 2000
    const steps = 60
    const increment = targetValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetValue) {
        setAnimatedValue(targetValue)
        clearInterval(timer)
      } else {
        setAnimatedValue(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [currentStat])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 min-h-screen">
      {/* Premium background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.01)_25%,rgba(59,130,246,0.01)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.01)_75%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-32 h-32 md:w-64 md:h-64 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          {/* Left Content */}
          <motion.div className="text-slate-900" variants={containerVariants} initial="hidden" animate="visible">
            {/* Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-4 py-2 text-sm font-medium text-blue-700 mb-8 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <Shield className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                Enterprise-Grade Security
              </span>
              <span className="mx-2 text-blue-400">•</span>
              <span>SOC 2 Type II Certified</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 tracking-tight"
            >
              <span className="text-slate-900">Secure</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                financial
              </span>
              <br />
              <span className="text-slate-900">transactions</span>
              <br />
              <span className="text-slate-500 text-5xl sm:text-6xl md:text-6xl lg:text-7xl">at scale</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-light"
            >
              The most trusted escrow infrastructure for platforms and marketplaces. Secure billions in transactions
              with condition-based releases, automated compliance, and enterprise-grade reliability.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-slate-700">
                <span className="font-semibold">4.9/5</span> from 500+ reviews
              </div>
              <div className="text-slate-500">•</div>
              <div className="text-slate-700">
                <span className="font-semibold">$1.2B+</span> secured
              </div>
            </motion.div>

            {/* Interactive Stats */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-center">
                <motion.div
                  key={currentStat}
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3"
                >
                  {stats[currentStat].prefix}
                  {currentStat === 0
                    ? (animatedValue / 1000000000).toFixed(1)
                    : currentStat === 2
                      ? Math.floor(animatedValue)
                      : animatedValue.toFixed(currentStat === 3 ? 2 : 1)}
                  {stats[currentStat].suffix}
                </motion.div>
                <div className="text-lg text-slate-600 font-medium mb-4">{stats[currentStat].label}</div>
                <div className="flex justify-center gap-2">
                  {stats.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStat ? "bg-blue-600 w-8" : "bg-slate-300"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <Input
                  type="email"
                  placeholder="Enter your business email"
                  className="bg-white/80 backdrop-blur-sm border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500 h-14 text-lg shadow-lg"
                />
                <Link href="/auth/signup">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 h-14 text-lg whitespace-nowrap transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/60 backdrop-blur-sm border-slate-300 hover:bg-white/80 text-slate-700 font-medium px-8 h-14 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Free to start
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    No setup fees
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Dashboard */}
          <div className="relative hidden lg:block">
            {/* Main Dashboard */}
            <motion.div
              variants={floatingVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="absolute top-0 right-0 w-80 xl:w-96 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform rotate-2 border border-slate-200/50"
              whileHover={{ scale: 1.02, rotate: 1, y: -5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Escrow Dashboard</h3>
                <motion.div
                  className="w-4 h-4 bg-green-500 rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Active Escrows</span>
                  <motion.span
                    className="text-2xl font-bold text-slate-900"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    247
                  </motion.span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Total Volume</span>
                  <motion.span
                    className="text-2xl font-bold text-slate-900"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    $2.4M
                  </motion.span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Success Rate</span>
                    <span className="text-slate-900 font-semibold">98.7%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "98.7%" }}
                      transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* API Code Block */}
            <motion.div
              variants={floatingVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="absolute top-40 left-0 w-80 xl:w-96 bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform -rotate-2 border border-slate-700/50"
              whileHover={{ scale: 1.02, rotate: 0, y: -5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-4 font-medium">Create Escrow</span>
              </div>
              <motion.pre
                className="text-green-400 text-sm overflow-hidden font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <code>{`POST /api/v1/escrow
{
  "amount": 50000,
  "currency": "usd",
  "buyer_id": "usr_123",
  "seller_id": "usr_456",
  "condition": "Goods delivered",
  "auto_release": true
}`}</code>
              </motion.pre>
            </motion.div>

            {/* Transaction Card */}
            <motion.div
              variants={floatingVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.0 }}
              className="absolute bottom-0 right-16 w-72 xl:w-80 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform rotate-1 border border-slate-200/50"
              whileHover={{ scale: 1.02, rotate: -1, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-slate-900">Transaction #1247</span>
                <motion.span
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-semibold"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 2.5, duration: 0.6, type: "spring" }}
                >
                  Completed
                </motion.span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Amount</span>
                  <span className="text-xl font-bold text-slate-900">$500.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Condition</span>
                  <span className="text-sm text-green-600 font-semibold">✓ Delivered</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Time</span>
                  <span className="text-sm text-slate-500">2 mins ago</span>
                </div>
              </div>
            </motion.div>

            {/* Analytics Chart */}
            <motion.div
              variants={floatingVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="absolute bottom-24 left-8 w-64 xl:w-72 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform -rotate-1 border border-slate-200/50"
              whileHover={{ scale: 1.02, rotate: 1, y: -5 }}
            >
              <h4 className="text-lg font-bold text-slate-900 mb-4">Success Rate Trend</h4>
              <div className="flex items-end space-x-2 h-20 mb-4">
                {[65, 78, 85, 72, 92, 88, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t-lg flex-1"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 2.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                  />
                ))}
              </div>
              <div className="text-center">
                <motion.span
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.5, duration: 0.6, type: "spring" }}
                >
                  98.7%
                </motion.span>
                <p className="text-sm text-slate-600 font-medium">Average success rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
