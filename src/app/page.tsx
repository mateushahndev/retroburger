import React from 'react'
import Hero from '@/components/home/Hero'
import Destaques from '@/components/home/Destaques'
import Depoimentos from '@/components/home/Depoimentos'
import Promocoes from '@/components/home/Promocoes'

export default function Home() {
  return (
    <>
      <Hero />
      <Destaques />
      <Promocoes />
      <Depoimentos />
    </>
  )
}