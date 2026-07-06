'use client'

import React, { useEffect, useState } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/utils/formatters'

interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
  ...props
}: ScrollRevealProps) {
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(true)

  useEffect(() => {
    // Verifica se tem o parâmetro ?noanim na URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      setIsAnimationsEnabled(!params.has('noanim'))
    }
  }, [])

  // Se animações estiverem desativadas, renderiza sem animação
  if (!isAnimationsEnabled) {
    return <div className={cn(className)}>{children}</div>
  }

  const directions = {
    up: { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={directions[direction]}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}