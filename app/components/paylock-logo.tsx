"use client"

import { motion } from "framer-motion"

interface PaylockLogoProps {
  size?: "sm" | "md" | "lg"
  variant?: "light" | "dark" | "gradient"
  animated?: boolean
}

export default function PaylockLogo({ size = "md", variant = "light", animated = false }: PaylockLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  }

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  }

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  }

  const getLogoColors = () => {
    switch (variant) {
      case "dark":
        return {
          primary: "#1E293B",
          secondary: "#475569",
          accent: "#3B82F6",
        }
      case "gradient":
        return {
          primary: "url(#paylock-gradient)",
          secondary: "url(#paylock-gradient-2)",
          accent: "#3B82F6",
        }
      default:
        return {
          primary: "#3B82F6",
          secondary: "#1E40AF",
          accent: "#F59E0B",
        }
    }
  }

  const colors = getLogoColors()

  return (
    <div className="flex items-center space-x-3">
      <motion.div
        className={`${sizeClasses[size]} relative`}
        variants={animated ? logoVariants : undefined}
        initial={animated ? "initial" : undefined}
        animate={animated ? "animate" : undefined}
        whileHover={animated ? "hover" : undefined}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="paylock-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="paylock-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Shield */}
          <path
            d="M50 10 L75 25 L75 50 Q75 70 50 85 Q25 70 25 50 L25 25 Z"
            fill={colors.primary}
            stroke="none"
            filter={variant === "gradient" ? "url(#glow)" : undefined}
          />

          {/* Inner Lock Body */}
          <rect x="35" y="45" width="30" height="25" rx="3" fill={colors.secondary} />

          {/* Lock Shackle */}
          <path
            d="M42 45 L42 38 Q42 32 50 32 Q58 32 58 38 L58 45"
            fill="none"
            stroke={colors.accent}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Keyhole */}
          <circle cx="50" cy="55" r="3" fill={variant === "light" ? "white" : colors.accent} />
          <rect x="49" y="58" width="2" height="6" fill={variant === "light" ? "white" : colors.accent} />

          {/* Security Dots */}
          <circle cx="40" cy="30" r="1.5" fill={colors.accent} opacity="0.6" />
          <circle cx="60" cy="30" r="1.5" fill={colors.accent} opacity="0.6" />
          <circle cx="35" cy="40" r="1.5" fill={colors.accent} opacity="0.6" />
          <circle cx="65" cy="40" r="1.5" fill={colors.accent} opacity="0.6" />
        </svg>
      </motion.div>

      <motion.div
        variants={animated ? textVariants : undefined}
        initial={animated ? "initial" : undefined}
        animate={animated ? "animate" : undefined}
        className={`${textSizeClasses[size]} font-bold ${
          variant === "dark"
            ? "text-slate-900"
            : variant === "gradient"
              ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              : "text-slate-900"
        }`}
      >
        paylock
      </motion.div>
    </div>
  )
}
