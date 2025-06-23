"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card } from "./ui/card"
import { CheckCircle, Loader2, ArrowRight } from "lucide-react"
import { useSnackbar } from "./ui/snackbar-provider"

export default function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { showSnackbar } = useSnackbar()
   const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      showSnackbar("Please enter a valid email address", "error")
      setIsSubmitting(false)
      return
    }

    try {
      // POST to waitlist API
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Failed to join waitlist. Please try again.")
        showSnackbar(data.error || "Failed to join waitlist. Please try again.", "error")
        setIsSubmitting(false)
        return
      }
      setIsSuccess(true)
      setEmail("")
      showSnackbar("Successfully joined the waitlist!", "success")
    } catch (err) {
      setError("Failed to join waitlist. Please try again.")
      showSnackbar("Failed to join waitlist. Please try again.", "error")
      console.error("Waitlist error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Join the Waitlist for Early Access</h2>
          <p className="text-lg text-slate-600 mb-8">
            Be the first to experience our secure escrow platform when we launch. Get exclusive early access and special
            benefits.
          </p>

          {isSuccess ? (
            <Card className="bg-green-50 border-green-100 p-6 max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">You're on the list!</h3>
                <p className="text-green-700 mb-4">
                  Thank you for joining our waitlist. We'll notify you when we launch!
                </p>
                <div className="text-sm text-green-600">
                  Keep an eye on your inbox for updates and early access information.
                </div>
              </div>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-slate-600">Free early access</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-slate-600">Priority support</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-slate-600">Exclusive updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
