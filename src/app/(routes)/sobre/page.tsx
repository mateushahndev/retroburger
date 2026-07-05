'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Heart, Users, Award, Coffee } from 'lucide-react'

export default function SobrePage() {
  const valores = [
    {
      icone: Heart,
      titulo: 'Paixão pela Comida',
      descricao: 'Cada hambúrguer é preparado com amor e ingredientes de primeira qualidade.'
    },
    {
      icone: Users,
      titulo: 'Família e Amigos',
      descricao: 'Um ambiente acolhedor para reunir quem você ama em volta de uma boa mesa.'
    },
    {
      icone: Award,
      titulo: 'Qualidade Garantida',
      descricao: 'Selecionamos os melhores ingredientes para garantir sabor em cada mordida.'
    },
    {
      icone: Coffee,
      titulo: 'Atendimento Especial',
      descricao: 'Nossa equipe está sempre pronta para fazer você se sentir em casa.'
    }
  ]

  return (
    <main className="pt-20 min-h-screen bg-dark-400">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mostarda-500/5 via-red-500/5 to-transparent" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="destaque" className="mb-4">Nossa História</Badge>
            <h1 className="font-display text-5xl sm:text-6xl mb-6">
              Mais que uma <span className="gradient-text">lanchonete</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Desde 2024, o Retro Burger resgata o sabor autêntico dos hambúrgueres artesanais 
              com um toque nostálgico que aquece o coração.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl mb-6">
                Uma <span className="gradient-text">tradição</span> que começou com sabor
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  O Retro Burger nasceu do sonho de trazer de volta os sabores que marcaram época. 
                  Combinamos receitas clássicas com um toque moderno, criando hambúrgueres que são 
                  verdadeiras obras de arte gastronômicas.
                </p>
                <p>
                  Nossa missão é proporcionar uma experiência única, onde cada cliente se sente 
                  especial e cada refeição se torna uma memória afetiva.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="bg-dark-300 px-4 py-2 rounded-full">
                    <span className="text-mostarda-500 font-bold">4.9</span>
                    <span className="text-white/40 ml-1">⭐ Avaliação</span>
                  </div>
                  <div className="bg-dark-300 px-4 py-2 rounded-full">
                    <span className="text-mostarda-500 font-bold">500+</span>
                    <span className="text-white/40 ml-1">Clientes felizes</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-mostarda-500/20 to-red-500/20" />
                <div className="w-full h-full bg-dark-300 flex items-center justify-center text-8xl">
                  🍔
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-mostarda-500 text-dark-400 px-6 py-3 rounded-full font-display shadow-xl">
                Desde 2024
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-dark-300/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl mb-4">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              O que nos move e nos faz diferentes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icone
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover glow className="text-center p-6">
                    <div className="inline-flex p-3 bg-mostarda-500/10 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-mostarda-500" />
                    </div>
                    <h3 className="font-display text-xl mb-2">{valor.titulo}</h3>
                    <p className="text-white/60 text-sm">{valor.descricao}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Time */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl mb-4">
              Nossa <span className="gradient-text">Equipe</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Pessoas apaixonadas por fazer a diferença no seu dia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: 'Chef Ricardo', cargo: 'Master Chef', emoji: '👨‍🍳' },
              { nome: 'Ana Paula', cargo: 'Gerente', emoji: '👩‍💼' },
              { nome: 'Carlos Silva', cargo: 'Sous Chef', emoji: '👨‍🍳' },
              { nome: 'Mariana Santos', cargo: 'Atendimento', emoji: '👩‍🍳' }
            ].map((membro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="text-center p-6">
                  <div className="text-6xl mb-4">{membro.emoji}</div>
                  <h4 className="font-display text-lg">{membro.nome}</h4>
                  <p className="text-white/40 text-sm">{membro.cargo}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}