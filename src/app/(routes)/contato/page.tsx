'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export default function ContatoPage() {
  const infoContato = [
    {
      icone: MapPin,
      titulo: 'Endereço',
      info: 'Av. Principal, 123 - Centro',
      detalhe: 'São Paulo - SP, 01234-567'
    },
    {
      icone: Phone,
      titulo: 'Telefone',
      info: '(11) 99999-9999',
      detalhe: 'WhatsApp: (11) 98888-8888'
    },
    {
      icone: Mail,
      titulo: 'E-mail',
      info: 'contato@retroburger.com',
      detalhe: 'Respostas em até 24h'
    },
    {
      icone: Clock,
      titulo: 'Horários',
      info: 'Seg-Sex: 11h - 23h',
      detalhe: 'Sáb: 11h - 00h | Dom: 11h - 22h'
    }
  ]

  const redesSociais = [
    { nome: 'Instagram', icone: Instagram, cor: 'hover:text-pink-500' },
    { nome: 'Facebook', icone: Facebook, cor: 'hover:text-blue-500' },
    { nome: 'Twitter', icone: Twitter, cor: 'hover:text-blue-400' },
    { nome: 'YouTube', icone: Youtube, cor: 'hover:text-red-500' }
  ]

  return (
    <main className="pt-20 min-h-screen bg-dark-400">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-mostarda-500/10 to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Badge variant="destaque" className="mb-4">📬 Fale Conosco</Badge>
            <h1 className="font-display text-5xl sm:text-6xl mb-4">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-white/60">
              Estamos aqui para ouvir você! Tire dúvidas, faça sugestões ou faça seu pedido
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Contato */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoContato.map((item, index) => {
              const Icon = item.icone
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover glow className="p-6 text-center">
                    <div className="inline-flex p-3 bg-mostarda-500/10 rounded-full mb-4">
                      <Icon className="w-6 h-6 text-mostarda-500" />
                    </div>
                    <h3 className="font-display text-lg mb-1">{item.titulo}</h3>
                    <p className="text-mostarda-500 font-medium">{item.info}</p>
                    <p className="text-white/40 text-sm mt-1">{item.detalhe}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mapa e Formulário */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="font-display text-2xl mb-4">📍 Nossa Localização</h3>
                <div className="aspect-video rounded-xl overflow-hidden bg-dark-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-white/60">Mapa interativo em breve</p>
                    <p className="text-white/40 text-sm mt-2">Av. Principal, 123 - Centro, São Paulo</p>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Abrir no Google Maps
                </Button>
              </Card>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="font-display text-2xl mb-4">📝 Envie uma Mensagem</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-4 py-2 bg-dark-300 border border-mostarda-500/20 rounded-xl text-white placeholder-white/40 focus:border-mostarda-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2 bg-dark-300 border border-mostarda-500/20 rounded-xl text-white placeholder-white/40 focus:border-mostarda-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Como podemos ajudar?"
                      className="w-full px-4 py-2 bg-dark-300 border border-mostarda-500/20 rounded-xl text-white placeholder-white/40 focus:border-mostarda-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full" glow>
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-12 bg-dark-300/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-display text-3xl mb-6">
              Siga-nos nas <span className="gradient-text">Redes Sociais</span>
            </h3>
            <p className="text-white/60 mb-8">
              Acompanhe nossas novidades e promoções especiais
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {redesSociais.map((rede, index) => {
                const Icon = rede.icone
                return (
                  <motion.a
                    key={index}
                    href="#"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`p-4 bg-dark-300 rounded-full text-white/60 transition-all duration-300 ${rede.cor}`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}