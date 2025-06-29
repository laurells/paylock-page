"use client";
import { Github, Twitter, Linkedin } from "lucide-react"
import { LanguageSelector } from "./language-selector"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">Renvue</div>
            <p className="text-slate-400 mb-6 max-w-md">
              The most trusted escrow API for platforms and marketplaces. Secure
              transactions with condition-based releases.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  // href="/products/escrow-api"
                   href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  Escrow API
                </a>
              </li>
              <li>
                <a
                  // href="/products/dispute-resolution"
                  href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  Dispute Resolution
                </a>
              </li>
              <li>
                <a
                  // href="/products/condition-engine"
                  href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  Condition Engine
                </a>
              </li>
              <li>
                <a
                  // href="/products/webhooks"
                  href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  Webhooks
                </a>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  SDKs
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a 
                // href="/blog" 
                href="/coming-soon"
                className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  // href="/careers"
                  href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 Renvue. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <LanguageSelector variant="footer" />
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="/security" className="hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
