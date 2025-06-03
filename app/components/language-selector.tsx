"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { ChevronDown, Globe } from "lucide-react"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
]

interface LanguageSelectorProps {
  variant?: "header" | "footer" | "modal"
  currentLanguage?: string
  onLanguageChange?: (language: string) => void
}

export function LanguageSelector({
  variant = "header",
  currentLanguage = "en",
  onLanguageChange,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === currentLanguage) || languages[0],
  )

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
    onLanguageChange?.(language.code)

    // Store preference
    localStorage.setItem("preferred-language", language.code)

    // In a real app, this would trigger a language change
    console.log(`Language changed to: ${language.name}`)
  }

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  }

  if (variant === "footer") {
    return (
      <div className="relative">
        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white gap-2">
          <Globe className="w-4 h-4" />
          {selectedLanguage.nativeName}
          <ChevronDown className="w-4 h-4" />
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full left-0 mb-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50"
            >
              <div className="max-h-64 overflow-y-auto">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className="w-full px-4 py-2 text-left hover:bg-slate-50 flex items-center gap-3 transition-colors"
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div>
                      <div className="font-medium text-slate-900">{language.nativeName}</div>
                      <div className="text-sm text-slate-500">{language.name}</div>
                    </div>
                    {selectedLanguage.code === language.code && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="relative">
      <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="gap-2 text-slate-600 hover:text-slate-900">
        <span className="text-lg">{selectedLanguage.flag}</span>
        {variant === "header" ? selectedLanguage.code.toUpperCase() : selectedLanguage.nativeName}
        <ChevronDown className="w-4 h-4" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50"
          >
            <div className="max-h-64 overflow-y-auto">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className="w-full px-4 py-2 text-left hover:bg-slate-50 flex items-center gap-3 transition-colors"
                >
                  <span className="text-lg">{language.flag}</span>
                  <div>
                    <div className="font-medium text-slate-900">{language.nativeName}</div>
                    <div className="text-sm text-slate-500">{language.name}</div>
                  </div>
                  {selectedLanguage.code === language.code && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
