"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import PaylockLogo from "./components/paylock-logo"
import { AlertTriangle, RefreshCw, Home, Headphones } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <PaylockLogo size="md" />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong</h1>
                  <p className="text-slate-600">
                    We encountered an unexpected error. Our team has been notified and is working to fix this issue.
                  </p>
                </div>

                {process.env.NODE_ENV === "development" && (
                  <div className="bg-slate-100 p-4 rounded-lg text-left">
                    <p className="text-sm font-mono text-slate-700">{error.message}</p>
                    {error.digest && <p className="text-xs text-slate-500 mt-2">Error ID: {error.digest}</p>}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">
                      <Home className="w-4 h-4 mr-2" />
                      Go Home
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">
                      <Headphones className="w-4 h-4 mr-2" />
                      Contact Support
                    </Link>
                  </Button>
                </div>

                <p className="text-sm text-slate-500">
                  If this problem persists, please contact our support team with the error details above.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
