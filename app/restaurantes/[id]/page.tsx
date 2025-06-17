"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, Globe, Calendar, Users } from "lucide-react"
import Image from "next/image"
import RestaurantTableMap from "@/components/restaurant-table-map"
import ReservationForm from "@/components/reservation-form"
import { getRestaurantById, getCardapioByRestaurantId, type Restaurant, type CardapioItem } from "@/lib/data"

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])

  useEffect(() => {
    const restaurantData = getRestaurantById(Number.parseInt(params.id))
    const cardapioData = getCardapioByRestaurantId(Number.parseInt(params.id))

    setRestaurant(restaurantData || null)
    setCardapio(cardapioData)
  }, [params.id])

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 code-bold">Restaurante não encontrado</h1>
          <p className="text-muted-foreground">O restaurante que você está procurando não existe.</p>
        </div>
      </div>
    )
  }

  // Agrupar cardápio por categoria
  const cardapioGrouped = cardapio.reduce(
    (acc, item) => {
      if (!acc[item.categoria]) {
        acc[item.categoria] = []
      }
      acc[item.categoria].push(item)
      return acc
    },
    {} as Record<string, CardapioItem[]>,
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src={restaurant.srcImage || restaurant.image}
          alt={restaurant.nome}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold mb-2 code-bold">{restaurant.nome}</h1>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {restaurant.priceRange}
            </Badge>
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{restaurant.rating}</span>
              <span className="ml-1">({restaurant.reviewCount} avaliações)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        <div>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold mr-4 code-bold">{restaurant.cuisine}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>{restaurant.endereco}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                <span>
                  {restaurant.horarioAbertura} - {restaurant.horarioFechamento}
                </span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3 text-primary" />
                <span>Capacidade: {restaurant.capacidadeMaxima} pessoas</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-primary" />
                <span>{restaurant.mesasDisponiveis} mesas disponíveis</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="menu">
            <TabsList className="mb-6">
              <TabsTrigger value="menu">Cardápio</TabsTrigger>
              <TabsTrigger value="tables">Mapa de Mesas</TabsTrigger>
              <TabsTrigger value="info">Informações</TabsTrigger>
            </TabsList>

            <TabsContent value="menu" className="space-y-8">
              {Object.entries(cardapioGrouped).map(([categoria, items]) => (
                <div key={categoria}>
                  <h3 className="text-xl font-semibold mb-4 text-primary code-bold">{categoria}</h3>
                  <div className="grid gap-4">
                    {items.map((item) => (
                      <Card key={item.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-medium text-lg code-bold">{item.nomeitem}</h4>
                              {item.descricao && <p className="text-muted-foreground text-sm mt-1">{item.descricao}</p>}
                            </div>
                            <div className="ml-4">
                              <span className="text-lg font-bold text-primary code-bold">
                                R$ {item.preco.toFixed(2).replace(".", ",")}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}

              {Object.keys(cardapioGrouped).length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2 code-bold">Cardápio em breve</h3>
                  <p className="text-muted-foreground">O cardápio deste restaurante será disponibilizado em breve.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="tables">
              <RestaurantTableMap restaurantId={restaurant.id} />
            </TabsContent>

            <TabsContent value="info">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="code-bold">Informações do Restaurante</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 code-bold">Horário de Funcionamento</h4>
                      <p className="text-muted-foreground">
                        Todos os dias: {restaurant.horarioAbertura} - {restaurant.horarioFechamento}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 code-bold">Capacidade</h4>
                      <p className="text-muted-foreground">Até {restaurant.capacidadeMaxima} pessoas simultaneamente</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 code-bold">Mesas Disponíveis</h4>
                      <p className="text-muted-foreground">{restaurant.mesasDisponiveis} mesas para reserva</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 code-bold">Tipo de Cozinha</h4>
                      <p className="text-muted-foreground">{restaurant.cuisine}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center code-bold">
                <Calendar className="h-5 w-5 mr-2" />
                Fazer Reserva
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ReservationForm restaurantId={restaurant.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
