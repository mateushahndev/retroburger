import type { Metadata } from 'next'
import { Inter, Bangers } from 'next/font/google'
import '@/styles/globals.css'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Retro Burger - Lanchonete Retrô',
  description: 'Os melhores hambúrgueres com estilo retrô. Sabor e nostalgia em cada mordida!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bangers.variable}`}>
      <body className="font-body bg-dark-400 text-white">
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}