"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const RTL_LANGUAGES = ["ar", "he", "fa", "ur"]
const DEFAULT_LANGUAGE = "en"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE)
  const [isRTL, setIsRTL] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Set client-side flag
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initialize language from browser/localStorage
  useEffect(() => {
    if (!isClient) return

    try {
      const savedLanguage = localStorage.getItem("preferred-language")
      const browserLanguage = navigator.language.split("-")[0]
      const initialLanguage = savedLanguage || browserLanguage || DEFAULT_LANGUAGE
      
      setLanguageState(initialLanguage)
      setIsRTL(RTL_LANGUAGES.includes(initialLanguage))
    } catch (error) {
      console.error("Error initializing language:", error)
      setLanguageState(DEFAULT_LANGUAGE)
      setIsRTL(false)
    }
  }, [isClient])

  // Update document direction and language
  useEffect(() => {
    if (!isClient) return

    try {
      document.documentElement.dir = isRTL ? "rtl" : "ltr"
      document.documentElement.lang = language

      // Update page title language indicator
      const originalTitle = document.title
      if (language !== "en") {
        document.title = `${originalTitle} | ${language.toUpperCase()}`
      } else {
        document.title = originalTitle.replace(/\s*\|\s*[A-Z]{2}$/, "")
      }
    } catch (error) {
      console.error("Error updating document attributes:", error)
    }
  }, [language, isRTL, isClient])

  const setLanguage = (lang: string) => {
    if (!isClient) return

    try {
      setLanguageState(lang)
      const newIsRTL = RTL_LANGUAGES.includes(lang)
      setIsRTL(newIsRTL)
      localStorage.setItem("preferred-language", lang)

      // Update document attributes immediately
      document.documentElement.dir = newIsRTL ? "rtl" : "ltr"
      document.documentElement.lang = lang

      // Small delay to allow state to update before reload
      setTimeout(() => {
        window.location.reload()
      }, 100)
    } catch (error) {
      console.error("Error setting language:", error)
    }
  }

  // Only render children when client-side
  if (!isClient) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}