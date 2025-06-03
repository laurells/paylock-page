"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Mail, Users, CheckCircle, Loader2, ArrowRight } from "lucide-react"
import { trackWaitlistJoin, trackFormSubmission } from "./analytics"

interface WaitlistFormProps {
  variant?: "inline" | "modal" | "page"
  showExtendedFields?: boolean
}

export function WaitlistForm({ variant = "inline", showExtendedFields = false }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    interests: [] as string[],
    referralSource: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null)

  const interestOptions = [
    "E-commerce Transactions",
    "Freelance Payments",
    "Real Estate Deals",
    "API Integration",
    "Bulk Transactions",
    "International Payments",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setIsSuccess(true)
      setWaitlistPosition(data.position)

      // Track successful waitlist join
      trackWaitlistJoin(data.position)
      trackFormSubmission("waitlist", true)

      // Reset form
      setFormData({
        email: "",
        name: "",
        company: "",
        interests: [],
        referralSource: "",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      trackFormSubmission("waitlist", false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  if (isSuccess) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Welcome to the Waitlist! 🎉</h3>
            <p className="text-green-700 mb-4">
              You're #{waitlistPosition} on our waitlist. We'll keep you updated on our progress!
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-green-600">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                Check your email
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Position #{waitlistPosition}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className={variant === "page" ? "max-w-md mx-auto" : ""}>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              required
              className="mt-1"
            />
          </div>

          {showExtendedFields && (
            <>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label>What interests you most? (Optional)</Label>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={interest} className="text-sm font-normal">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="referral">How did you hear about us?</Label>
                <select
                  id="referral"
                  value={formData.referralSource}
                  onChange={(e) => setFormData((prev) => ({ ...prev, referralSource: e.target.value }))}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select an option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Friend/Colleague</option>
                  <option value="blog">Blog/Article</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-600 text-sm bg-red-50 p-3 rounded-md"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Joining Waitlist...
              </>
            ) : (
              <>
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">We'll never spam you. Unsubscribe at any time.</p>
        </form>
      </CardContent>
    </Card>
  )
}
