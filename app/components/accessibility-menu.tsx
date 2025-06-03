"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Accessibility, Eye, Type, Volume2, Settings, X } from "lucide-react"

interface AccessibilitySettings {
  fontSize: number
  highContrast: boolean
  reducedMotion: boolean
  screenReader: boolean
  focusIndicator: boolean
  largerCursor: boolean
}

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
    focusIndicator: false,
    largerCursor: false,
  })

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem("accessibility-settings")
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings)
      setSettings(parsed)
      applySettings(parsed)
    }

    // Check for system preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSettings((prev) => ({ ...prev, reducedMotion: true }))
    }

    if (window.matchMedia("(prefers-contrast: high)").matches) {
      setSettings((prev) => ({ ...prev, highContrast: true }))
    }
  }, [])

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement

    // Font size
    root.style.fontSize = `${newSettings.fontSize}%`

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add("high-contrast")
    } else {
      root.classList.remove("high-contrast")
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add("reduce-motion")
    } else {
      root.classList.remove("reduce-motion")
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add("enhanced-focus")
    } else {
      root.classList.remove("enhanced-focus")
    }

    // Larger cursor
    if (newSettings.largerCursor) {
      root.classList.add("large-cursor")
    } else {
      root.classList.remove("large-cursor")
    }

    // Screen reader announcements
    if (newSettings.screenReader) {
      announceToScreenReader("Accessibility settings updated")
    }
  }

  const updateSetting = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    applySettings(newSettings)
    localStorage.setItem("accessibility-settings", JSON.stringify(newSettings))
  }

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 100,
      highContrast: false,
      reducedMotion: false,
      screenReader: false,
      focusIndicator: false,
      largerCursor: false,
    }
    setSettings(defaultSettings)
    applySettings(defaultSettings)
    localStorage.setItem("accessibility-settings", JSON.stringify(defaultSettings))
    announceToScreenReader("Accessibility settings reset to default")
  }

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = message
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }

  return (
    <>
      {/* Accessibility Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 p-0 shadow-lg"
        aria-label="Open accessibility menu"
      >
        <Accessibility className="w-6 h-6" />
      </Button>

      {/* Accessibility Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Accessibility className="w-6 h-6" />
                    Accessibility
                  </h2>
                  <Button onClick={() => setIsOpen(false)} variant="ghost" size="sm">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Font Size */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Type className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold">Font Size</h3>
                      </div>
                      <div className="space-y-3">
                        <input
                          type="range"
                          min="75"
                          max="150"
                          step="25"
                          value={settings.fontSize}
                          onChange={(e) => updateSetting("fontSize", Number.parseInt(e.target.value))}
                          className="w-full"
                          aria-label="Font size"
                        />
                        <div className="flex justify-between text-sm text-slate-600">
                          <span>Small</span>
                          <span>{settings.fontSize}%</span>
                          <span>Large</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Visual Settings */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Eye className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold">Visual</h3>
                      </div>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between">
                          <span>High Contrast</span>
                          <input
                            type="checkbox"
                            checked={settings.highContrast}
                            onChange={(e) => updateSetting("highContrast", e.target.checked)}
                            className="rounded"
                          />
                        </label>
                        <label className="flex items-center justify-between">
                          <span>Enhanced Focus</span>
                          <input
                            type="checkbox"
                            checked={settings.focusIndicator}
                            onChange={(e) => updateSetting("focusIndicator", e.target.checked)}
                            className="rounded"
                          />
                        </label>
                        <label className="flex items-center justify-between">
                          <span>Large Cursor</span>
                          <input
                            type="checkbox"
                            checked={settings.largerCursor}
                            onChange={(e) => updateSetting("largerCursor", e.target.checked)}
                            className="rounded"
                          />
                        </label>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Motion Settings */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Settings className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold">Motion</h3>
                      </div>
                      <label className="flex items-center justify-between">
                        <span>Reduce Motion</span>
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={(e) => updateSetting("reducedMotion", e.target.checked)}
                          className="rounded"
                        />
                      </label>
                    </CardContent>
                  </Card>

                  {/* Screen Reader */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Volume2 className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold">Screen Reader</h3>
                      </div>
                      <label className="flex items-center justify-between">
                        <span>Enhanced Announcements</span>
                        <input
                          type="checkbox"
                          checked={settings.screenReader}
                          onChange={(e) => updateSetting("screenReader", e.target.checked)}
                          className="rounded"
                        />
                      </label>
                    </CardContent>
                  </Card>

                  {/* Reset Button */}
                  <Button onClick={resetSettings} variant="outline" className="w-full">
                    Reset to Default
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
