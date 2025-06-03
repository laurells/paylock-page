"use client"

import { useEffect } from "react"
import { useLanguage } from "./language-provider"

// Google Translate Widget Integration
export function GoogleTranslateWidget() {
  const { language } = useLanguage()

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement("script")
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    document.head.appendChild(script)

    // Initialize Google Translate
    ;(window as any).googleTranslateElementInit = () => {
      ;new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "en,es,fr,de,it,pt,ja,ko,zh,ar,ru,hi,nl,sv,da,no,fi,pl,tr,he,th,vi,id,ms,tl,uk,cs,sk,hu,ro,bg,hr,sl,et,lv,lt,mt",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element",
      )
    }

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src*="translate.google.com"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  // Trigger translation when language changes
  useEffect(() => {
    if (language !== "en") {
      // Small delay to ensure Google Translate is loaded
      const timer = setTimeout(() => {
        const translateCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement
        if (translateCombo) {
          translateCombo.value = language
          translateCombo.dispatchEvent(new Event("change"))
        }
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      // Reset to original language
      const translateCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement
      if (translateCombo) {
        translateCombo.value = "en"
        translateCombo.dispatchEvent(new Event("change"))
      }
    }
  }, [language])

  return (
    <>
      <div id="google_translate_element" className="hidden" />
      <style jsx global>{`
        /* Hide Google Translate banner */
        .goog-te-banner-frame {
          display: none !important;
        }
        
        /* Hide Google Translate top bar */
        .goog-te-ftab {
          display: none !important;
        }
        
        /* Adjust body top margin when Google Translate is active */
        body {
          top: 0 !important;
        }
        
        /* Style the translate dropdown if needed */
        .goog-te-combo {
          display: none !important;
        }
        
        /* Prevent layout shift during translation */
        .goog-te-spinner-pos {
          display: none !important;
        }
      `}</style>
    </>
  )
}

// Browser Native Translation
export function BrowserTranslate() {
  const { language } = useLanguage()

  useEffect(() => {
    // Set document language for browser translation
    document.documentElement.lang = language

    // Add translate attribute to enable browser translation
    document.documentElement.setAttribute("translate", "yes")

    // Set content language meta tag
    let metaContentLanguage = document.querySelector('meta[http-equiv="content-language"]')
    if (!metaContentLanguage) {
      metaContentLanguage = document.createElement("meta")
      metaContentLanguage.setAttribute("http-equiv", "content-language")
      document.head.appendChild(metaContentLanguage)
    }
    metaContentLanguage.setAttribute("content", language)

    // Trigger browser's built-in translation suggestion
    if (language !== "en" && "chrome" in window) {
      // For Chrome, we can suggest translation
      const event = new CustomEvent("languagechange", {
        detail: { language },
      })
      window.dispatchEvent(event)
    }

    // For other browsers, set lang attribute on body as well
    document.body.lang = language
  }, [language])

  return null
}

