import React from 'react'
import { cn } from '@/utils/formatters'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'destaque' | 'promocao' | 'novo' | 'default'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    destaque: 'bg-red-500 text-white animate-pulse-slow',
    promocao: 'bg-mostarda-500 text-dark-400 animate-bounce-gentle',
    novo: 'bg-green-500 text-white',
    default: 'bg-dark-100 text-white'
  }

  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-bold font-body',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}