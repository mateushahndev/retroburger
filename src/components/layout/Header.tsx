'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X, Home, Utensils, Info, Phone } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/utils/formatters'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/cardapio', label: 'Cardápio', icon: Utensils },
    { href: '/sobre', label: 'Sobre', icon: Info },
    { href: '/contato', label: 'Contato', icon: Phone },
  ]

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-dark-400/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      )}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: -10 }}
                className="text-2xl sm:text-3xl"
              >
                🍔
              </motion.div>
              <span className="font-display text-lg sm:text-2xl tracking-wider">
                <span className="text-mostarda-500">Retro</span>
                <span className="text-white">Burger</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative font-body font-medium transition-colors duration-300 text-sm',
                      isActive ? 'text-mostarda-500' : 'text-white/70 hover:text-mostarda-500'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mostarda-500"
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/carrinho" className="relative p-1.5 sm:p-2 text-white/70 hover:text-mostarda-500 transition-colors">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 text-white/70 hover:text-mostarda-500 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-dark-300 z-40 md:hidden pt-20"
      >
        <nav className="flex flex-col p-6 sm:p-8 gap-3 sm:gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300',
                  isActive ? 'bg-mostarda-500/10 text-mostarda-500' : 'text-white/70 hover:bg-dark-400 hover:text-mostarda-500'
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-body text-base sm:text-lg font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </motion.div>
    </>
  )
}