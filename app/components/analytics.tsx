"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// Google Analytics configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    // Load Google Analytics script
    const script1 = document.createElement("script")
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script1.async = true
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  useEffect(() => {
    if (!window.gtag) return

    const url = pathname + searchParams.toString()
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

// Event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }
}

export const trackConversion = (conversionId: string, value?: number, currency = "USD") => {
  trackEvent("conversion", {
    send_to: conversionId,
    value: value,
    currency: currency,
  })
}

export const trackSignup = (method = "email") => {
  trackEvent("sign_up", {
    method: method,
  })
}

export const trackWaitlistJoin = (position: number) => {
  trackEvent("waitlist_join", {
    position: position,
    event_category: "engagement",
    event_label: "waitlist",
  })
}

export const trackPageView = (pageName: string) => {
  trackEvent("page_view", {
    page_title: pageName,
    page_location: window.location.href,
  })
}

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    click_location: location,
  })
}

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent("form_submit", {
    form_name: formName,
    success: success,
  })
}

// Marketing automation hooks
export function useMarketingTracking() {
  const trackCTAClick = (ctaName: string, location: string) => {
    trackButtonClick(ctaName, location)
  }

  const trackFeatureInteraction = (featureName: string, action: string) => {
    trackEvent("feature_interaction", {
      feature_name: featureName,
      action: action,
    })
  }

  const trackPricingView = (plan: string) => {
    trackEvent("pricing_view", {
      plan_name: plan,
    })
  }

  const trackDocumentationView = (section: string) => {
    trackEvent("documentation_view", {
      section: section,
    })
  }

  return {
    trackCTAClick,
    trackFeatureInteraction,
    trackPricingView,
    trackDocumentationView,
  }
}
