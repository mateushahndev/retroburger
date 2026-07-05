'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Product } from '@/types/product.types'

interface CartItem extends Product {
  quantidade: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantidade: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

// Exportando o contexto para ser usado no hook
export const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) {
      setItems(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (product: Product) => {
    setItems(current => {
      const exists = current.find(item => item.id === product.id)
      if (exists) {
        return current.map(item =>
          item.id === product.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      }
      return [...current, { ...product, quantidade: 1 }]
    })
  }

  const removeItem = (productId: string) => {
    setItems(current => current.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantidade: number) => {
    if (quantidade <= 0) {
      removeItem(productId)
      return
    }
    setItems(current =>
      current.map(item =>
        item.id === productId ? { ...item, quantidade } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantidade, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + (item.precoPromocional || item.preco) * item.quantidade,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}