"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Cookie, Settings, X } from "lucide-react"
import { Checkbox } from "./ui/checkbox"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
      initializeServices(savedPreferences)
    }
  }, [])

  const initializeServices = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      // Initialize Google Analytics
      console.log("Analytics enabled")
    }
    if (prefs.marketing) {
      // Initialize marketing pixels
      console.log("Marketing enabled")
    }
    if (prefs.functional) {
      // Initialize functional cookies
      console.log("Functional enabled")
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    initializeServices(allAccepted)
    setShowBanner(false)
  }

  const acceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    initializeServices(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const minimal = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(minimal)
    localStorage.setItem("cookie-consent", JSON.stringify(minimal))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <Card className="max-w-4xl mx-auto border-slate-200 shadow-lg">
          <CardContent className="p-6">
            {!showSettings ? (
              <div className="flex items-start gap-4">
                <Cookie className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2">We use cookies to enhance your experience</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    We use cookies to analyze our traffic, personalize content, and provide social media features. You
                    can manage your preferences or learn more in our{" "}
                    <a href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={acceptAll} className="bg-blue-600 hover:bg-blue-700">
                      Accept All
                    </Button>
                    <Button onClick={rejectAll} variant="outline">
                      Reject All
                    </Button>
                    <Button onClick={() => setShowSettings(true)} variant="ghost" className="gap-2">
                      <Settings className="w-4 h-4" />
                      Customize
                    </Button>
                  </div>
                </div>
                <Button onClick={() => setShowBanner(false)} variant="ghost" size="sm" className="flex-shrink-0">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Cookie Preferences</h3>
                  <Button onClick={() => setShowSettings(false)} variant="ghost" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900">Necessary Cookies</h4>
                      <p className="text-sm text-slate-600">
                        Essential for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <Checkbox checked={true} disabled />
                  </div>
                  <div className="flex items-start justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900">Analytics Cookies</h4>
                      <p className="text-sm text-slate-600">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <Checkbox
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, analytics: checked as boolean }))
                      }
                    />
                  </div>
                  <div className="flex items-start justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900">Marketing Cookies</h4>
                      <p className="text-sm text-slate-600">
                        Used to deliver personalized advertisements and track campaign performance.
                      </p>
                    </div>
                    <Checkbox
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, marketing: checked as boolean }))
                      }
                    />
                  </div>
                  <div className="flex items-start justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900">Functional Cookies</h4>
                      <p className="text-sm text-slate-600">
                        Enable enhanced functionality like live chat and personalized content.
                      </p>
                    </div>
                    <Checkbox
                      checked={preferences.functional}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, functional: checked as boolean }))
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button onClick={acceptSelected} className="bg-blue-600 hover:bg-blue-700">
                    Save Preferences
                  </Button>
                  <Button onClick={acceptAll} variant="outline">
                    Accept All
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}
