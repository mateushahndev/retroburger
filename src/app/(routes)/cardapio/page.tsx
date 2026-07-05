'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Grid, List } from 'lucide-react'
import { produtos } from '@/data/produtos'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { ShoppingBag, Clock, Star } from 'lucide-react'

export default function CardapioPage() {
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todos')
  const [busca, setBusca] = useState('')
  const { addItem } = useCart()

  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'hamburguer', nome: 'Hambúrgueres' },
    { id: 'batatas', nome: 'Batatas' },
    { id: 'bebidas', nome: 'Bebidas' },
    { id: 'sobremesas', nome: 'Sobremesas' }
  ]

  const produtosFiltrados = useMemo(() => {
    let filtrados = produtos

    if (categoriaFiltro !== 'todos') {
      filtrados = filtrados.filter(p => p.categoria === categoriaFiltro)
    }

    if (busca) {
      filtrados = filtrados.filter(p =>
        p.nome.toLowerCase().includes(busca.toLowerCase()) ||
        p.descricao.toLowerCase().includes(busca.toLowerCase())
      )
    }

    return filtrados
  }, [categoriaFiltro, busca])

  return (
    <main className="pt-20 min-h-screen bg-dark-400">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-mostarda-500/10 to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl sm:text-6xl mb-4">
              Nosso <span className="gradient-text">Cardápio</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Escolha seu favorito e faça seu pedido
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-8 border-b border-mostarda-500/10 sticky top-20 bg-dark-400/95 backdrop-blur-lg z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Busca */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Buscar no cardápio..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-dark-300 border border-mostarda-500/20 rounded-full text-white placeholder-white/40 focus:border-mostarda-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Categorias */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaFiltro(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                    categoriaFiltro === cat.id
                      ? 'bg-mostarda-500 text-dark-400 shadow-lg shadow-mostarda-500/30'
                      : 'bg-dark-300 text-white/60 hover:text-mostarda-500 hover:bg-mostarda-500/10'
                  }`}
                >
                  {cat.nome}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="py-12">
        <div className="container-custom">
          {produtosFiltrados.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🍔</div>
              <h3 className="font-display text-2xl mb-2">Nenhum produto encontrado</h3>
              <p className="text-white/60">Tente ajustar sua busca ou filtro</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {produtosFiltrados.map((produto, index) => (
                <motion.div
                  key={produto.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card hover glow>
                    <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                      <Image
                        src={produto.imagem}
                        alt={produto.nome}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                      />
                      {produto.promocao && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="promocao">Oferta</Badge>
                        </div>
                      )}
                      {produto.destaque && (
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="destaque">⭐ Destaque</Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display text-lg">{produto.nome}</h3>
                        <span className="font-body text-lg font-bold text-mostarda-500">
                          R$ {produto.precoPromocional || produto.preco}
                        </span>
                      </div>

                      <p className="text-white/60 text-sm mb-3 line-clamp-2">
                        {produto.descricao}
                      </p>

                      {produto.ingredientes && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {produto.ingredientes.slice(0, 3).map((ing, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-dark-300 rounded-full text-white/40">
                              {ing}
                            </span>
                          ))}
                          {produto.ingredientes.length > 3 && (
                            <span className="text-xs px-2 py-0.5 bg-dark-300 rounded-full text-white/40">
                              +{produto.ingredientes.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        {produto.tempoPreparo && (
                          <span className="flex items-center gap-1 text-xs text-white/40">
                            <Clock className="w-3 h-3" />
                            {produto.tempoPreparo}
                          </span>
                        )}
                        <Button
                          onClick={() => addItem(produto)}
                          size="sm"
                          className="flex-1 ml-4"
                        >
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Pedir
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}