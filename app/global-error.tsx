"use client"

import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { AlertTriangle, RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Critical Error</h1>
                <p className="text-slate-600">
                  A critical error occurred that prevented the application from loading properly.
                </p>
              </div>

              <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Application
              </Button>

              <p className="text-sm text-slate-500">
                If this problem persists, please contact support at support@paylock.com
              </p>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
}
