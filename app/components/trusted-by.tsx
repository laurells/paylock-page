"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function TrustedBy() {
  const [isDark, setIsDark] = useState(false)

  // Toggle for demo purposes - in real app this would come from theme context
  useEffect(() => {
    const interval = setInterval(() => {
      setIsDark((prev) => !prev)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={`py-24 transition-colors duration-1000 ${isDark ? "bg-slate-900" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className={`text-lg font-medium transition-colors duration-1000 ${isDark ? "text-slate-300" : "text-slate-600"} mb-4`}
          >
            Trusted by innovative companies worldwide
          </p>
          {/* <button
            onClick={() => setIsDark(!isDark)}
            className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
          >
            Toggle {isDark ? "Light" : "Dark"} Mode
          </button> */}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Enhanced company logos with better dark mode support */}
          {[
            { name: "Shopify", color: isDark ? "#95BF47" : "#95BF47" },
            { name: "Airbnb", color: isDark ? "#FF7B7B" : "#FF5A5F" },
            { name: "Amazon", color: isDark ? "#FFB84D" : "#FF9900" },
            { name: "Google", color: isDark ? "#5BA3F5" : "#4285F4" },
            { name: "Microsoft", color: isDark ? "#F56C42" : "#F25022" },
            { name: "Meta", color: isDark ? "#4A9EFF" : "#1877F2" },
            { name: "Uber", color: isDark ? "#E5E7EB" : "#1F2937" },
            { name: "Netflix", color: isDark ? "#FF6B6B" : "#E50914" },
          ].map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <div
                className={`text-2xl font-bold transition-colors duration-1000 ${isDark ? "text-white" : "text-slate-600"}`}
              >
                {company.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
