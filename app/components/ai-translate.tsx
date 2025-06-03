"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"


// Translation Status Indicator
export function TranslationStatus() {
  const { language } = useLanguage()

  if (language === "en") return null

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg text-sm flex items-center gap-2">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <span>Translating to {language.toUpperCase()}...</span>
    </div>
  )
}

export function useAITranslation() {
  const { language } = useLanguage()
  const [cache, setCache] = useState<Record<string, string>>({})

  const translateText = async (text: string, targetLang: string = language): Promise<string> => {
    if (targetLang === "en") return text

    const cacheKey = `${text}_${targetLang}`
    if (cache[cacheKey]) return cache[cacheKey]

    try {
      // Using a translation API (you can replace with your preferred service)
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, targetLang, sourceLang: "en" }),
      })

      if (response.ok) {
        const { translatedText } = await response.json()
        setCache((prev) => ({ ...prev, [cacheKey]: translatedText }))
        return translatedText
      }
    } catch (error) {
      console.error("Translation failed:", error)
    }

    return text // Fallback to original text
  }

  return { translateText }
}

// Component wrapper for auto-translation
export function AutoTranslate({
  children,
  text,
}: {
  children?: React.ReactNode
  text?: string
}) {
  const { language } = useLanguage()
  const { translateText } = useAITranslation()
  const [translatedText, setTranslatedText] = useState(text || "")

  useEffect(() => {
    if (text && language !== "en") {
      translateText(text, language).then(setTranslatedText)
    } else {
      setTranslatedText(text || "")
    }
  }, [text, language, translateText])

  if (text) {
    return <span>{translatedText}</span>
  }

  return <>{children}</>
}