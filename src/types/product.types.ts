export interface Product {
  id: string
  nome: string
  descricao: string
  preco: number
  categoria: 'hamburguer' | 'batatas' | 'bebidas' | 'sobremesas'
  imagem: string
  destaque?: boolean
  promocao?: boolean
  precoPromocional?: number
  ingredientes?: string[]
  tempoPreparo?: string
}

export interface Categoria {
  id: string
  nome: string
  icone: string
}

export interface Depoimento {
  id: string
  nome: string
  foto: string
  texto: string
  rating: number
  data: string
}

export interface Promocao {
  id: string
  titulo: string
  descricao: string
  imagem: string
  desconto: number
  validade: string
}