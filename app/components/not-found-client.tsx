"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"
import PaylockLogo from "./paylock-logo"
import {
  Home,
  Search,
  ArrowLeft,
  FileText,
  Users,
  Shield,
  Headphones,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function NotFoundClient() {
  const [searchQuery, setSearchQuery] = useState("")

  const popularPages = [
    { name: "Products", href: "/products", icon: Shield },
    { name: "Solutions", href: "/solutions", icon: Users },
    { name: "Documentation", href: "/developers/documentation", icon: FileText },
    { name: "Contact Support", href: "/contact", icon: Headphones },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `/?search=${encodeURIComponent(searchQuery)}`
  }

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
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>
            <p className="text-lg text-slate-600 mb-8">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <form onSubmit={handleSearch} className="flex gap-4 max-w-md mx-auto mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search for pages, features, or help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" variant="outline">
                Search
              </Button>
            </form>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Popular Pages</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {popularPages.map((page) => {
                const Icon = page.icon
                return (
                  <Card key={page.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <Link
                        href={page.href}
                        className="flex items-center gap-3 text-left hover:text-blue-600 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">{page.name}</span>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 text-sm">
              Still can't find what you're looking for?{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact our support team
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
