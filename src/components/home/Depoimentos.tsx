'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Star } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export default function Depoimentos() {
  const depoimentos = [
    {
      id: '1',
      nome: 'Ana Silva',
      foto: '/images/depoimentos/depoimento-1.jpg',
      texto: 'O melhor hambúrguer que já comi! A carne é suculenta, o pão fresquinho e o molho especial é divino. Ambiente super agradável também!',
      rating: 5,
      data: 'há 2 dias'
    },
    {
      id: '2',
      nome: 'Carlos Santos',
      foto: '/images/depoimentos/depoimento-2.jpg',
      texto: 'Adorei a experiência retrô! A decoração é incrível e a comida é de primeira. O milkshake é imperdível, volto sempre!',
      rating: 5,
      data: 'há 1 semana'
    },
    {
      id: '3',
      nome: 'Mariana Costa',
      foto: '/images/depoimentos/depoimento-3.jpg',
      texto: 'Comida deliciosa e atendimento excelente! O hambúrguer vegano é surpreendente e as batatas são crocantes na medida certa.',
      rating: 5,
      data: 'há 3 dias'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-dark-300 to-dark-400">
      <div className="container-custom">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl mb-4">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Histórias reais de quem já experimentou nossa experiência
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map((depoimento, index) => (
            <ScrollReveal key={depoimento.id} direction="up" delay={index * 0.1}>
              <Card>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-mostarda-500/20 flex items-center justify-center text-2xl">
                      {depoimento.nome.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-body font-semibold">{depoimento.nome}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < depoimento.rating
                                ? 'fill-mostarda-500 text-mostarda-500'
                                : 'text-white/20'
                            }`}
                          />
                        ))}
                        <span className="text-white/40 text-xs ml-2">{depoimento.data}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed">
                    "{depoimento.texto}"
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}