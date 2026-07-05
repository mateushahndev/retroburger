import { Product } from '@/types/product.types'

export const produtos: Product[] = [
  {
    id: '1',
    nome: 'Retro Burger',
    descricao: 'Hambúrguer artesanal com queijo cheddar, bacon crocante e molho especial da casa.',
    preco: 32.90,
    categoria: 'hamburguer',
    imagem: '/images/produtos/burger-classic.jpg',
    destaque: true,
    ingredientes: ['Pão brioche', '180g carne', 'Queijo cheddar', 'Bacon', 'Alface', 'Tomate', 'Molho especial'],
    tempoPreparo: '15min'
  },
  {
    id: '2',
    nome: 'Double Bacon',
    descricao: 'Duas carnes suculentas com queijo, bacon em dobro e molho barbecue.',
    preco: 39.90,
    categoria: 'hamburguer',
    imagem: '/images/produtos/burger-bacon.jpg',
    destaque: true,
    ingredientes: ['Pão australiano', '2x 150g carne', 'Queijo prato', 'Bacon em dobro', 'Cebola caramelizada', 'Molho barbecue'],
    tempoPreparo: '18min'
  },
  {
    id: '3',
    nome: 'Cheddar Supreme',
    descricao: 'Hambúrguer com generosa porção de cheddar cremoso e cebola crispy.',
    preco: 34.90,
    categoria: 'hamburguer',
    imagem: '/images/produtos/burger-cheddar.jpg',
    destaque: true,
    ingredientes: ['Pão de fermentação', '180g carne', 'Cheddar premium', 'Cebola crispy', 'Molho da casa'],
    tempoPreparo: '15min'
  },
  {
    id: '4',
    nome: 'Veggie Deluxe',
    descricao: 'Hambúrguer vegetariano com mix de legumes grelhados e molho de iogurte.',
    preco: 28.90,
    categoria: 'hamburguer',
    imagem: '/images/produtos/burger-vegan.jpg',
    ingredientes: ['Pão integral', 'Hambúrguer de legumes', 'Mix de folhas', 'Tomate seco', 'Molho de iogurte'],
    tempoPreparo: '12min'
  },
  {
    id: '5',
    nome: 'Chicken Crispy',
    descricao: 'Filé de frango empanado com molho honey mustard e alface crocante.',
    preco: 29.90,
    categoria: 'hamburguer',
    imagem: '/images/produtos/burger-chicken.jpg',
    ingredientes: ['Pão com gergelim', 'Filé de frango empanado', 'Alface', 'Molho honey mustard'],
    tempoPreparo: '12min'
  },
  {
    id: '6',
    nome: 'Egg Burger',
    descricao: 'Hambúrguer com ovo frito, queijo derretido e molho de pimenta.',
    preco: 31.90,
    categoria: 'hamburguer',
    imagem: '/images/produtos/burger-egg.jpg',
    ingredientes: ['Pão brioche', '180g carne', 'Ovo frito', 'Queijo prato', 'Molho de pimenta', 'Rúcula'],
    tempoPreparo: '15min'
  },
  {
    id: '7',
    nome: 'Batata Frita Especial',
    descricao: 'Batatas rústicas com queijo cheddar, bacon e cebolinha.',
    preco: 18.90,
    categoria: 'batatas',
    imagem: '/images/produtos/fries-cheddar.jpg',
    destaque: true,
    tempoPreparo: '10min'
  },
  {
    id: '8',
    nome: 'Batata Frita com Bacon',
    descricao: 'Batatas crocantes com cubos de bacon e molho especial.',
    preco: 16.90,
    categoria: 'batatas',
    imagem: '/images/produtos/fries-bacon.jpg',
    tempoPreparo: '10min'
  },
  {
    id: '9',
    nome: 'Batata Doce Frita',
    descricao: 'Batata doce em palitos com alho e alecrim.',
    preco: 15.90,
    categoria: 'batatas',
    imagem: '/images/produtos/fries-sweet.jpg',
    tempoPreparo: '10min'
  },
  {
    id: '10',
    nome: 'Batata Tradicional',
    descricao: 'Clássica batata frita crocante com sal.',
    preco: 13.90,
    categoria: 'batatas',
    imagem: '/images/produtos/fries-regular.jpg',
    tempoPreparo: '8min'
  },
  {
    id: '11',
    nome: 'Milkshake Retro',
    descricao: 'Milkshake cremoso com calda de chocolate e chantilly.',
    preco: 16.90,
    categoria: 'bebidas',
    imagem: '/images/produtos/drink-milkshake.jpg',
    destaque: true,
    tempoPreparo: '5min'
  },
  {
    id: '12',
    nome: 'Coca-Cola',
    descricao: 'Coca-Cola gelada para acompanhar seu lanche.',
    preco: 7.90,
    categoria: 'bebidas',
    imagem: '/images/produtos/drink-coke.jpg',
    tempoPreparo: '2min'
  },
  {
    id: '13',
    nome: 'Suco Natural',
    descricao: 'Suco de frutas naturais da estação.',
    preco: 9.90,
    categoria: 'bebidas',
    imagem: '/images/produtos/drink-juice.jpg',
    tempoPreparo: '5min'
  },
  {
    id: '14',
    nome: 'Brownie com Sorvete',
    descricao: 'Brownie de chocolate com sorvete de creme e calda.',
    preco: 19.90,
    categoria: 'sobremesas',
    imagem: '/images/produtos/dessert-brownie.jpg',
    destaque: true,
    tempoPreparo: '7min'
  },
  {
    id: '15',
    nome: 'Torta de Maçã',
    descricao: 'Torta de maçã caseira com canela e sorvete.',
    preco: 17.90,
    categoria: 'sobremesas',
    imagem: '/images/produtos/dessert-pie.jpg',
    tempoPreparo: '5min'
  }
]