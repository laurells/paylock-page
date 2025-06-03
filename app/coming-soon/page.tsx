"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import PaylockLogo from "../components/paylock-logo"
import { Clock, Users, Shield, CheckCircle, Loader2, ArrowRight, Twitter, Linkedin, Github } from "lucide-react"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    try {
      // Using EmailJS (free tier) for email collection
      // In a real implementation, you would use your EmailJS credentials
      // Simulate API call (in production, use actual EmailJS API)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Failed to join waitlist. Please try again.")
      console.error("Waitlist error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = [
    { name: "Core Platform", progress: 85, status: "In Development" },
    { name: "API Integration", progress: 70, status: "Testing" },
    { name: "Security Audit", progress: 60, status: "In Progress" },
    { name: "Mobile App", progress: 40, status: "Planning" },
  ]

  const timeline = [
    { phase: "Beta Launch", date: "Q2 2024", status: "current" },
    { phase: "Public Launch", date: "Q3 2024", status: "upcoming" },
    { phase: "Mobile App", date: "Q4 2024", status: "planned" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <PaylockLogo size="md" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Something Amazing is
              <span className="text-blue-600 block">Coming Soon</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              We're building the future of secure escrow services. Join thousands of others who are waiting for the most
              trusted platform for digital transactions.
            </p>

            {/* Email Signup */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 text-green-700 px-6 py-4 rounded-lg inline-flex items-center gap-3 mb-8"
              >
                <CheckCircle className="w-6 h-6" />
                <div className="text-left">
                  <p className="font-medium">Thanks for joining our waitlist!</p>
                  <p className="text-sm">We'll notify you when we launch.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Notify Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

            {error && <p className="mt-3 text-sm text-red-600 mb-6">{error}</p>}

            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                12,000+ waiting
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Bank-level security
              </div>
            </div>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Development Progress</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={feature.name}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-slate-900">{feature.name}</h3>
                      <span className="text-sm text-slate-500">{feature.status}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${feature.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <div className="text-right text-sm text-slate-600">{feature.progress}%</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Launch Timeline</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {timeline.map((item, index) => (
                <div key={item.phase} className="flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                      item.status === "current"
                        ? "bg-blue-600 text-white"
                        : item.status === "upcoming"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.phase}</h3>
                  <p className="text-sm text-slate-500">{item.date}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-slate-600 mb-4">Follow us for updates</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
