'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/formatters'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  glow?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  glow = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-body font-bold transition-all duration-300 rounded-full'
  
  const variants = {
    primary: 'bg-mostarda-500 text-dark-400 hover:bg-mostarda-600 hover:scale-105 shadow-lg shadow-mostarda-500/30',
    secondary: 'bg-red-500 text-white hover:bg-red-600 hover:scale-105 shadow-lg shadow-red-500/30',
    outline: 'border-2 border-mostarda-500 text-mostarda-500 hover:bg-mostarda-500 hover:text-dark-400 hover:scale-105',
    ghost: 'text-mostarda-500 hover:bg-mostarda-500/10 hover:scale-105'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        glow && 'glow-effect',
        loading && 'opacity-70 cursor-not-allowed',
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Carregando...
        </span>
      ) : (
        children
      )}
    </motion.button>
  )
}