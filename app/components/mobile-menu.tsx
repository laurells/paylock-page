"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { X, ChevronRight, Home, Package, Wrench, BookOpen, DollarSign } from "lucide-react"
import Link from "next/link"
import RenvueLogo from "./Renvue-logo"

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
}

const menuItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
    submenu: [
      { name: "Escrow API", href: "/products/escrow-api" },
      { name: "Dispute Resolution", href: "/products/dispute-resolution" },
      { name: "Condition Engine", href: "/products/condition-engine" },
      { name: "Webhooks", href: "/products/webhooks" },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    icon: Wrench,
    submenu: [
      { name: "E-commerce", href: "/solutions/ecommerce" },
      { name: "Freelancing", href: "/solutions/freelancing" },
    ],
  },
  {
    title: "Developers",
    href: "/developers",
    icon: BookOpen,
    submenu: [
      { name: "Documentation", href: "/developers/documentation" },
      { name: "SDKs", href: "/developers/sdks" },
      { name: "Quick Start", href: "/developers/quickstart" },
      { name: "Community", href: "/developers/community" },
    ],
  },
  {
    title: "Pricing",
    href: "#pricing",
    icon: DollarSign,
  },
]

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      setExpandedItem(null)
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  const submenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onToggle}
          />

          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <RenvueLogo size="sm" variant="gradient" />
                <Button onClick={onToggle} variant="ghost" size="sm">
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto py-6">
                <div className="space-y-2 px-6">
                  {menuItems.map((item, index) => (
                    <motion.div key={item.title} variants={itemVariants} initial="closed" animate="open" custom={index}>
                      <div>
                        {item.submenu ? (
                          <button
                            onClick={() => setExpandedItem(expandedItem === item.title ? null : item.title)}
                            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <item.icon className="w-5 h-5 text-slate-600" />
                              <span className="font-medium text-slate-900">{item.title}</span>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 text-slate-400 transition-transform ${
                                expandedItem === item.title ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={onToggle}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <item.icon className="w-5 h-5 text-slate-600" />
                            <span className="font-medium text-slate-900">{item.title}</span>
                          </Link>
                        )}

                        {/* Submenu */}
                        {item.submenu && (
                          <AnimatePresence>
                            {expandedItem === item.title && (
                              <motion.div
                                variants={submenuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="overflow-hidden"
                              >
                                <div className="ml-8 mt-2 space-y-1">
                                  {item.submenu.map((subitem) => (
                                    <Link
                                      key={subitem.name}
                                      href={subitem.href}
                                      onClick={onToggle}
                                      className="block p-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors"
                                    >
                                      {subitem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                initial="closed"
                animate="open"
                custom={menuItems.length}
                className="p-6 border-t border-slate-200 space-y-3"
              >
                <Link href="/auth/signin" onClick={onToggle}>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup" onClick={onToggle}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
