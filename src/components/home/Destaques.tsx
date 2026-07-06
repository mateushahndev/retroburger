'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { produtos } from '@/data/produtos'
import { ShoppingBag, Clock } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export default function Destaques() {
  const destaques = produtos.filter(p => p.destaque).slice(0, 3)
  const { addItem } = useCart()

  return (
    <section className="py-20 bg-gradient-to-b from-dark-400 to-dark-300">
      <div className="container-custom">
        <ScrollReveal direction="up" className="text-center mb-12">
          <Badge variant="destaque" className="mb-4">🔥 Mais Pedidos</Badge>
          <h2 className="font-display text-4xl sm:text-5xl mb-4">
            Nossos <span className="gradient-text">Destaques</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Os favoritos da casa que você precisa experimentar
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destaques.map((produto, index) => (
            <Card key={produto.id} delay={index * 0.1} hover glow>
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
                {produto.promocao && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="promocao">
                      {Math.round(((produto.preco - (produto.precoPromocional || produto.preco)) / produto.preco) * 100)}% OFF
                    </Badge>
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <Badge variant="destaque">⭐ Destaque</Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl">{produto.nome}</h3>
                  <span className="font-body text-xl font-bold text-mostarda-500">
                    R$ {produto.precoPromocional || produto.preco}
                  </span>
                </div>

                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {produto.descricao}
                </p>

                <div className="flex items-center gap-4 text-sm text-white/40 mb-4">
                  {produto.tempoPreparo && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {produto.tempoPreparo}
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => addItem(produto)}
                  className="w-full"
                  size="sm"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.2} className="text-center mt-12">
          <Link href="/cardapio">
            <Button variant="outline" size="lg">
              Ver Cardápio Completo
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}