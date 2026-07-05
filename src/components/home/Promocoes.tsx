'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Clock, Percent, ArrowRight, Tag, Calendar } from 'lucide-react'

export default function Promocoes() {
  const promocoes = [
    {
      id: '1',
      titulo: 'Combo Família',
      descricao: '2 hambúrgueres artesanais + 2 batatas fritas + 2 bebidas',
      precoOriginal: 'R$ 89,90',
      precoPromocional: 'R$ 67,90',
      desconto: 25,
      validade: 'Válido fins de semana',
      cor: 'from-red-500/20 to-mostarda-500/20',
      corBadge: 'bg-red-500',
    },
    {
      id: '2',
      titulo: 'Dia do Burger',
      descricao: 'Todos os hambúrgueres do cardápio com desconto especial',
      precoOriginal: 'Até R$ 39,90',
      precoPromocional: 'A partir de R$ 31,90',
      desconto: 20,
      validade: 'Toda quarta-feira',
      cor: 'from-mostarda-500/20 to-amber-500/20',
      corBadge: 'bg-mostarda-500',
    },
    {
      id: '3',
      titulo: 'Happy Hour',
      descricao: 'Batatas fritas, milkshakes e bebidas com preço reduzido',
      precoOriginal: 'Até R$ 18,90',
      precoPromocional: 'A partir de R$ 15,90',
      desconto: 15,
      validade: 'Dias úteis das 17h às 19h',
      cor: 'from-amber-500/20 to-orange-500/20',
      corBadge: 'bg-orange-500',
    }
  ]

  return (
    <section className="py-20 bg-dark-400">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-mostarda-500/10 px-4 py-2 rounded-full mb-4">
            <Tag className="w-4 h-4 text-mostarda-500" />
            <span className="text-mostarda-500 font-body font-bold text-sm uppercase tracking-wider">Ofertas Especiais</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl mb-4">
            Promoções <span className="gradient-text">Imperdíveis</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Aproveite nossas ofertas exclusivas e saboreie o melhor custo-benefício da cidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promocoes.map((promocao, index) => (
            <motion.div
              key={promocao.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover glow className="overflow-hidden group">
                {/* Card com gradiente de fundo */}
                <div className={`relative bg-gradient-to-br ${promocao.cor} p-6`}>
                  {/* Badge de desconto */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold font-body text-white ${promocao.corBadge}`}>
                        {promocao.desconto}% OFF
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{promocao.validade}</span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="mt-4">
                    <h3 className="font-display text-2xl mb-2 text-white">
                      {promocao.titulo}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {promocao.descricao}
                    </p>
                  </div>

                  {/* Preços */}
                  <div className="mt-4 flex items-end gap-3">
                    <span className="text-white/40 text-sm line-through">
                      {promocao.precoOriginal}
                    </span>
                    <span className="text-2xl font-bold text-mostarda-500">
                      {promocao.precoPromocional}
                    </span>
                  </div>

                  {/* Botão */}
                  <Button 
                    className="w-full mt-4 group-hover:scale-[1.02] transition-transform"
                    glow
                  >
                    <span>Aproveitar Oferta</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm">
            *Promoções válidas enquanto durarem os estoques. Consulte condições.
          </p>
        </motion.div>
      </div>
    </section>
  )
}