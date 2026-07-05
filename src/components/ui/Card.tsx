'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/formatters'

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  delay?: number
}

export function Card({ 
  children, 
  className, 
  hover = true, 
  glow = false, 
  delay = 0,
  ...props 
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'card-retro',
        hover && 'hover:scale-[1.02] transition-transform duration-300',
        glow && 'hover:shadow-2xl hover:shadow-mostarda-500/20',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}