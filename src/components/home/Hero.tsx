'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-8 sm:pb-12 md:pb-0">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark-400 to-dark-300">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.svg')] opacity-5" />
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-10"
        >
          🍔
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-6xl opacity-10"
        >
          🍟
        </motion.div>
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-40 right-20 text-4xl opacity-10"
        >
          🥤
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left pt-4 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <Star className="w-5 h-5 fill-mostarda-500 text-mostarda-500" />
              <span className="text-mostarda-500 font-body font-bold text-sm sm:text-base">Melhor hambúrguer da cidade</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              Sabor que
              <span className="gradient-text block">Não Sai da Memória</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 max-w-md mx-auto lg:mx-0"
            >
              Hambúrgueres artesanais com o toque retrô que você ama. 
              Ingredientes frescos, preparo na hora e muito sabor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link href="/cardapio" className="w-full sm:w-auto">
                <Button size="lg" glow className="w-full">
                  Ver Cardápio <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/sobre" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  Nossa História
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start gap-4 sm:gap-8 text-white/60"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-mostarda-500/20 border-2 border-dark-400 flex items-center justify-center text-xs">
                      🍔
                    </div>
                  ))}
                </div>
                <span className="text-xs sm:text-sm">+500 clientes felizes</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-mostarda-500/20 to-red-500/20 rounded-full blur-3xl" />
              <div className="relative">
                <Image
                  src="/images/heroes/hero-banner.jpg"
                  alt="Hambúrguer Retro"
                  width={600}
                  height={600}
                  className="rounded-full object-cover shadow-2xl w-full h-full"
                  priority
                />
                {/* Badge flutuante - TOPO */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-mostarda-500 text-dark-400 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl font-body text-sm sm:text-base"
                  style={{ zIndex: 999 }}
                >
                  🎯 20% OFF
                </motion.div>
                {/* Badge flutuante - BAIXO */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-red-500 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl font-body text-sm sm:text-base whitespace-nowrap"
                  style={{ zIndex: 999 }}
                >
                  ⭐ 4.9/5
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}