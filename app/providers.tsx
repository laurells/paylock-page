"use client"

import { ReactNode, useEffect, useState } from "react"
import { LanguageProvider } from "./components/language-provider"
import { GoogleAnalytics } from "./components/analytics"
import { CookieConsent } from "./components/cookie-consent"
import { PWAInstall } from "./components/pwa-install"
import { AccessibilityMenu } from "./components/accessibility-menu"
import { GoogleTranslateWidget, BrowserTranslate } from "./components/auto-translate"
import { TranslationStatus } from "./components/ai-translate"
import { SnackbarProvider } from "./components/ui/snackbar-provider"

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <LanguageProvider>
      {mounted && (
        <SnackbarProvider>
          {children}
          <GoogleAnalytics />
          <CookieConsent />
          <PWAInstall />
          <AccessibilityMenu />
          <GoogleTranslateWidget />
          <BrowserTranslate />
          <TranslationStatus />
        </SnackbarProvider>
      )}
    </LanguageProvider>
  )
}