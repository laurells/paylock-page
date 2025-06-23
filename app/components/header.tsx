"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { ChevronDown, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RenvueLogo from "./Renvue-logo";
import Link from "next/link";
import { LanguageSelector } from "./language-selector";
import { MobileMenu } from "./mobile-menu";

const dropdownMenus = {
  Products: [
    {
      name: "Escrow API",
      href: "/products/escrow-api",
      description: "Core escrow infrastructure",
    },
    {
      name: "Dispute Resolution",
      href: "/products/dispute-resolution",
      description: "Automated dispute handling",
    },
    {
      name: "Condition Engine",
      href: "/products/condition-engine",
      description: "Custom verification logic",
    },
    {
      name: "Webhook",
      href: "/products/webhook",
      description: "Real-time notifications",
    },
  ],
  Solutions: [
    {
      name: "E-commerce",
      href: "/solutions/ecommerce",
      description: "Marketplace transactions",
    },
    {
      name: "Freelancing",
      href: "/solutions/freelance",
      description: "Project-based payments",
    },
    {
      name: "Logistics",
      href: "/solutions/logistics",
      description: "Delivery verification",
    },
    {
      name: "Real Estate",
      href: "/solutions/realestate",
      description: "Property transactions",
    },
  ],
  Developers: [
    {
      name: "Documentation",
      href: "/coming-soon",
      description: "API reference & guides",
    },
    {
      name: "SDKs",
      href: "/coming-soon",
      description: "Official libraries",
    },
    {
      name: "Quick Start",
      href: "/coming-soon",
      description: "Get started in minutes",
    },
    {
      name: "Community",
      href: "/developers/community",
      description: "Discord & GitHub",
    },
  ],
  Resources: [
    {
      name: "Blog",
      href: "/resources/blog",
      description: "Latest insights & tutorials",
    },
    {
      name: "Case Studies",
      href: "/resources/case-studies",
      description: "Customer success stories",
    },
    {
      name: "Webinars",
      href: "/resources/webinars",
      description: "Live sessions & recordings",
    },
    {
      name: "Guides",
      href: "/resources/guides",
      description: "Step-by-step tutorials",
    },
  ],
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
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

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link href="/">
              <RenvueLogo size="md" variant="gradient" animated />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.entries(dropdownMenus).map(([menuName, items], index) => (
              <motion.div
                key={menuName}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                onMouseEnter={() => setActiveDropdown(menuName)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={`/${menuName.toLowerCase()}`}
                  className="flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 group-hover:text-blue-600"
                >
                  {menuName}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === menuName && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/50 p-6 backdrop-blur-sm"
                    >
                      <div className="space-y-4">
                        {items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="block p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 group"
                          >
                            <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-slate-600 mt-1">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Link
                href="#pricing"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 hover:text-blue-600"
              >
                Pricing
              </Link>
            </motion.div>
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/auth/signin">
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200"
              >
                Sign in
              </Button>
            </Link>
            <Link href="/coming-soon">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 transition-all duration-200 hover:scale-105">
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-4 border-t border-gray-100">
                <nav className="flex flex-col space-y-4">
                  {Object.entries(dropdownMenus).map(([menuName, items], index) => (
                    <div key={menuName}>
                      <Link
                        href={`/${menuName.toLowerCase()}`}
                        className="text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2 font-medium"
                      >
                        {menuName}
                      </Link>
                      <div className="ml-4 mt-2 space-y-2">
                        {items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="block text-sm text-slate-500 hover:text-slate-700 transition-colors duration-200 py-1"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    href="#pricing"
                    className="text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2 font-medium"
                  >
                    Pricing
                  </Link>
                  <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                    <Link href="/auth/signin">
                      <Button variant="ghost" className="justify-start w-full">
                        Sign in
                      </Button>
                    </Link>
                    <Link href="/auth/signup">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
