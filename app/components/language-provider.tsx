"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const RTL_LANGUAGES = ["ar", "he", "fa", "ur"]

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState("en")
  const [isRTL, setIsRTL] = useState(false)

  // Initialize language from browser/localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language")
    const browserLanguage = navigator.language.split("-")[0]

    const initialLanguage = savedLanguage || browserLanguage || "en"
    setLanguageState(initialLanguage)
    setIsRTL(RTL_LANGUAGES.includes(initialLanguage))
  }, [])

  // Update document direction and language
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = language

    // Update page title language indicator
    const originalTitle = document.title
    if (language !== "en") {
      document.title = `${originalTitle} | ${language.toUpperCase()}`
    } else {
      document.title = originalTitle.replace(/ \| [A-Z]{2}$/, "")
    }
  }, [language, isRTL])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    setIsRTL(RTL_LANGUAGES.includes(lang))
    localStorage.setItem("preferred-language", lang)

    // Trigger page reload for Google Translate to work properly
    if (typeof window !== "undefined") {
      // Small delay to allow state to update
      setTimeout(() => {
        window.location.reload()
      }, 100)
    }
  }

  return <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
