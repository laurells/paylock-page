import type React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSEOMetadata, generateStructuredData } from "./components/seo";
import { Suspense } from "react";
import { Providers } from './providers'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSEOMetadata({
  title: "Paylock - Secure Escrow Services for Digital Transactions",
  description:
    "Protect your digital transactions with Paylock's secure escrow services. Trusted by thousands of businesses worldwide for safe, reliable payment processing with advanced fraud protection.",
  keywords: [
    "escrow services",
    "secure payments",
    "digital transactions",
    "payment protection",
    "online escrow",
    "secure transactions",
    "fraud protection",
    "payment gateway",
    "transaction security",
    "digital escrow",
    "safe payments",
    "payment processing",
  ],
  url: "https://paylock.com",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3B82F6" },
    { media: "(prefers-color-scheme: dark)", color: "#1E40AF" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {generateStructuredData({
          type: "Organization",
          name: "Paylock",
          description:
            "Leading provider of secure escrow services for digital transactions, protecting businesses and individuals worldwide.",
          url: "https://paylock.com",
          logo: "https://paylock.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-800-PAYLOCK",
            contactType: "Customer Service",
            availableLanguage: ["English"],
            areaServed: "Worldwide",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Financial District",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            postalCode: "94105",
            addressCountry: "US",
          },
          foundingDate: "2020",
          employees: "51-200",
          industry: "Financial Technology",
        })}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Paylock" />
        <meta name="application-name" content="Paylock" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Providers>
          {children}
          <Script src="/embed.js" />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
