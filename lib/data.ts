// Criar arquivo para gerenciar dados com localStorage

export interface Restaurant {
  id: number
  nome: string
  endereco: string
  horarioAbertura: string
  horarioFechamento: string
  emailAcesso: string
  cuisine: string
  rating: number
  reviewCount: number
  priceRange: string
  image: string
  srcImage?: string // Campo para link de imagem externa
  capacidadeMaxima: number
  mesasDisponiveis: number
}

export interface Mesa {
  id: number
  identificador: string
  capacidade: number
  restauranteid: number
  posicao: { x: number; y: number }
  status: "available" | "occupied" | "reserved"
}

export interface CardapioItem {
  id: number
  nomeitem: string
  preco: number
  restauranteid: number
  categoria: string
  descricao?: string
}

export interface Reserva {
  id: number
  restauranteid: number
  mesaId: number
  customerName: string
  customerEmail: string
  customerPhone: string
  date: string
  time: string
  guests: number
  status: "confirmed" | "completed" | "cancelled"
  createdAt: string
}

// Dados dos 3 restaurantes principais de Maringá
const initialRestaurants: Restaurant[] = [
  {
    id: 1,
    nome: "Armazém Restaurante",
    endereco: "Av. Joaquim Duarte Moleirinho, 1801, Maringá, PR",
    horarioAbertura: "11:00",
    horarioFechamento: "22:00",
    emailAcesso: "armazem@tanamesa.com",
    cuisine: "Brasileira",
    rating: 4.8,
    reviewCount: 245,
    priceRange: "$$",
    image: "https://i.imgur.com/qV7QXFb.png",
    srcImage: "https://i.imgur.com/qV7QXFb.png",
    capacidadeMaxima: 120,
    mesasDisponiveis: 20,
  },
  {
    id: 2,
    nome: "Black Bull Steakhouse",
    endereco: "Av. Cerro Azul, 1033 - Zona 02, Maringá - PR, 87010-000",
    horarioAbertura: "11:00",
    horarioFechamento: "22:00",
    emailAcesso: "blackbull@tanamesa.com",
    cuisine: "Steakhouse",
    rating: 4.8,
    reviewCount: 278,
    priceRange: "$$$",
    image: "https://i.imgur.com/qXuRnGs.jpeg",
    srcImage: "https://i.imgur.com/qXuRnGs.jpeg",
    capacidadeMaxima: 90,
    mesasDisponiveis: 16,
  },
  {
    id: 3,
    nome: "Baco Espaço Gastronômico",
    endereco: "Av. São Paulo, 1880, Maringá, PR",
    horarioAbertura: "12:00",
    horarioFechamento: "23:00",
    emailAcesso: "baco@tanamesa.com",
    cuisine: "Contemporânea",
    rating: 4.9,
    reviewCount: 312,
    priceRange: "$$$",
    image: "https://i.imgur.com/bSLgMVy.jpeg",
    srcImage: "https://i.imgur.com/bSLgMVy.jpeg",
    capacidadeMaxima: 60,
    mesasDisponiveis: 12,
  },
]

// Dados das mesas para os 3 restaurantes
const initialMesas: Mesa[] = [
  // Armazém Restaurante (id: 1)
  { id: 1, identificador: "Mesa 1", capacidade: 2, restauranteid: 1, posicao: { x: 70, y: 110 }, status: "available" },
  { id: 2, identificador: "Mesa 2", capacidade: 4, restauranteid: 1, posicao: { x: 190, y: 110 }, status: "available" },
  { id: 3, identificador: "Mesa 3", capacidade: 6, restauranteid: 1, posicao: { x: 310, y: 110 }, status: "available" },
  { id: 4, identificador: "Mesa 4", capacidade: 2, restauranteid: 1, posicao: { x: 430, y: 110 }, status: "available" },
  { id: 5, identificador: "Mesa 5", capacidade: 4, restauranteid: 1, posicao: { x: 130, y: 210 }, status: "available" },
  { id: 6, identificador: "Mesa 6", capacidade: 8, restauranteid: 1, posicao: { x: 250, y: 210 }, status: "available" },
  { id: 7, identificador: "Mesa 7", capacidade: 6, restauranteid: 1, posicao: { x: 370, y: 210 }, status: "available" },
  { id: 8, identificador: "Mesa 8", capacidade: 4, restauranteid: 1, posicao: { x: 190, y: 310 }, status: "available" },

  // Black Bull Steakhouse (id: 2)
  { id: 9, identificador: "Mesa 1", capacidade: 2, restauranteid: 2, posicao: { x: 70, y: 110 }, status: "available" },
  { id: 10, identificador: "Mesa 2", capacidade: 4, restauranteid: 2, posicao: { x: 190, y: 110 }, status: "available" },
  { id: 11, identificador: "Mesa 3", capacidade: 6, restauranteid: 2, posicao: { x: 310, y: 110 }, status: "available" },
  { id: 12, identificador: "Mesa 4", capacidade: 8, restauranteid: 2, posicao: { x: 430, y: 110 }, status: "available" },
  { id: 13, identificador: "Mesa 5", capacidade: 4, restauranteid: 2, posicao: { x: 130, y: 210 }, status: "available" },
  { id: 14, identificador: "Mesa 6", capacidade: 6, restauranteid: 2, posicao: { x: 370, y: 210 }, status: "available" },

  // Baco Espaço Gastronômico (id: 3)
  { id: 15, identificador: "Mesa 1", capacidade: 2, restauranteid: 3, posicao: { x: 70, y: 110 }, status: "available" },
  { id: 16, identificador: "Mesa 2", capacidade: 4, restauranteid: 3, posicao: { x: 190, y: 110 }, status: "available" },
  { id: 17, identificador: "Mesa 3", capacidade: 6, restauranteid: 3, posicao: { x: 310, y: 110 }, status: "available" },
  { id: 18, identificador: "Mesa 4", capacidade: 4, restauranteid: 3, posicao: { x: 130, y: 210 }, status: "available" },
  { id: 19, identificador: "Mesa 5", capacidade: 2, restauranteid: 3, posicao: { x: 250, y: 210 }, status: "available" },
  { id: 20, identificador: "Mesa 6", capacidade: 6, restauranteid: 3, posicao: { x: 370, y: 210 }, status: "available" },
]

// Dados do cardápio para os 3 restaurantes
const initialCardapio: CardapioItem[] = [
  // Armazém Restaurante
  {
    id: 1,
    nomeitem: "Feijoada Completa",
    preco: 49.9,
    restauranteid: 1,
    categoria: "Pratos Principais",
    descricao: "Feijoada tradicional com acompanhamentos",
  },
  {
    id: 2,
    nomeitem: "Picanha Grelhada",
    preco: 65.9,
    restauranteid: 1,
    categoria: "Pratos Principais",
    descricao: "Picanha grelhada com farofa e vinagrete",
  },
  {
    id: 3,
    nomeitem: "Pudim de Leite",
    preco: 19.9,
    restauranteid: 1,
    categoria: "Sobremesas",
    descricao: "Pudim caseiro com calda de caramelo",
  },
  {
    id: 4,
    nomeitem: "Caipirinha",
    preco: 15.9,
    restauranteid: 1,
    categoria: "Bebidas",
    descricao: "Caipirinha tradicional de cachaça",
  },

  // Black Bull Steakhouse
  {
    id: 5,
    nomeitem: "Tomahawk Steak",
    preco: 89.9,
    restauranteid: 2,
    categoria: "Pratos Principais",
    descricao: "Corte especial de 500g grelhado na brasa",
  },
  {
    id: 6,
    nomeitem: "Ancho Steak",
    preco: 72.9,
    restauranteid: 2,
    categoria: "Pratos Principais",
    descricao: "Ancho premium de 400g ao ponto",
  },
  {
    id: 7,
    nomeitem: "Brownie com Sorvete",
    preco: 24.9,
    restauranteid: 2,
    categoria: "Sobremesas",
    descricao: "Brownie quente com sorvete de chocolate",
  },
  {
    id: 8,
    nomeitem: "Whisky Premium",
    preco: 45.9,
    restauranteid: 2,
    categoria: "Bebidas",
    descricao: "Dose de whisky premium nacional",
  },

  // Baco Espaço Gastronômico
  {
    id: 9,
    nomeitem: "Risotto de Camarão",
    preco: 68.9,
    restauranteid: 3,
    categoria: "Pratos Principais",
    descricao: "Risotto cremoso com camarões frescos",
  },
  {
    id: 10,
    nomeitem: "Carpaccio de Salmão",
    preco: 45.9,
    restauranteid: 3,
    categoria: "Entradas",
    descricao: "Salmão em fatias finas com alcaparras",
  },
  {
    id: 11,
    nomeitem: "Petit Gateau",
    preco: 28.9,
    restauranteid: 3,
    categoria: "Sobremesas",
    descricao: "Bolinho quente com sorvete de baunilha",
  },
  {
    id: 12,
    nomeitem: "Vinho Tinto",
    preco: 35.9,
    restauranteid: 3,
    categoria: "Bebidas",
    descricao: "Taça de vinho tinto selecionado",
  },
]

// Funções para gerenciar localStorage
export const getRestaurants = (): Restaurant[] => {
  if (typeof window === "undefined") return initialRestaurants

  const stored = localStorage.getItem("ta-na-mesa-restaurants")
  if (stored) {
    return JSON.parse(stored)
  }

  localStorage.setItem("ta-na-mesa-restaurants", JSON.stringify(initialRestaurants))
  return initialRestaurants
}

export const getMesas = (): Mesa[] => {
  if (typeof window === "undefined") return initialMesas

  const stored = localStorage.getItem("ta-na-mesa-mesas")
  if (stored) {
    return JSON.parse(stored)
  }

  localStorage.setItem("ta-na-mesa-mesas", JSON.stringify(initialMesas))
  return initialMesas
}

export const getCardapio = (): CardapioItem[] => {
  if (typeof window === "undefined") return initialCardapio

  const stored = localStorage.getItem("ta-na-mesa-cardapio")
  if (stored) {
    return JSON.parse(stored)
  }

  localStorage.setItem("ta-na-mesa-cardapio", JSON.stringify(initialCardapio))
  return initialCardapio
}

export const getReservas = (): Reserva[] => {
  if (typeof window === "undefined") return []

  const stored = localStorage.getItem("ta-na-mesa-reservas")
  return stored ? JSON.parse(stored) : []
}

export const saveReserva = (reserva: Omit<Reserva, "id" | "createdAt">): Reserva => {
  const reservas = getReservas()
  const newReserva: Reserva = {
    ...reserva,
    id: reservas.length + 1,
    createdAt: new Date().toISOString(),
  }

  const updatedReservas = [...reservas, newReserva]
  localStorage.setItem("ta-na-mesa-reservas", JSON.stringify(updatedReservas))

  return newReserva
}

export const updateMesaStatus = (mesaId: number, status: Mesa["status"]) => {
  const mesas = getMesas()
  const updatedMesas = mesas.map((mesa) => (mesa.id === mesaId ? { ...mesa, status } : mesa))

  localStorage.setItem("ta-na-mesa-mesas", JSON.stringify(updatedMesas))
}

export const getRestaurantById = (id: number): Restaurant | undefined => {
  const restaurants = getRestaurants()
  return restaurants.find((r) => r.id === id)
}

export const getMesasByRestaurantId = (restaurantId: number): Mesa[] => {
  const mesas = getMesas()
  return mesas.filter((mesa) => mesa.restauranteid === restaurantId)
}

export const getCardapioByRestaurantId = (restaurantId: number): CardapioItem[] => {
  const cardapio = getCardapio()
  return cardapio.filter((item) => item.restauranteid === restaurantId)
}
