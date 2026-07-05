import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-300 border-t border-mostarda-500/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍔</span>
              <span className="font-display text-2xl">
                <span className="text-mostarda-500">Retro</span>
                <span className="text-white">Burger</span>
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Sabor e nostalgia em cada mordida. Os melhores hambúrgueres da cidade com estilo retrô.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/40 hover:text-mostarda-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-mostarda-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-mostarda-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-mostarda-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display text-lg mb-4 text-mostarda-500">Navegação</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/60 hover:text-mostarda-500 transition-colors">Home</Link></li>
              <li><Link href="/cardapio" className="text-white/60 hover:text-mostarda-500 transition-colors">Cardápio</Link></li>
              <li><Link href="/sobre" className="text-white/60 hover:text-mostarda-500 transition-colors">Sobre</Link></li>
              <li><Link href="/contato" className="text-white/60 hover:text-mostarda-500 transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-display text-lg mb-4 text-mostarda-500">Horários</h4>
            <ul className="space-y-2 text-white/60">
              <li>Segunda - Sexta: 11h - 23h</li>
              <li>Sábado: 11h - 00h</li>
              <li>Domingo: 11h - 22h</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-lg mb-4 text-mostarda-500">Contato</h4>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-mostarda-500" />
                Av. Principal, 123 - Centro
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-mostarda-500" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mostarda-500" />
                contato@retroburger.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-mostarda-500/10 text-center text-white/40 text-sm">
          <p>© 2026 Retro Burger. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}