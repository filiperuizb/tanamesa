"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Users, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getRestaurants, type Restaurant } from "@/lib/data"

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [cuisineFilter, setCuisineFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")

  useEffect(() => {
    const data = getRestaurants()
    setRestaurants(data)
    setFilteredRestaurants(data)
  }, [])

  useEffect(() => {
    let filtered = restaurants

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(
        (restaurant) =>
          restaurant.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filtro por tipo de cozinha
    if (cuisineFilter !== "all") {
      filtered = filtered.filter((restaurant) => restaurant.cuisine === cuisineFilter)
    }

    // Filtro por faixa de preço
    if (priceFilter !== "all") {
      filtered = filtered.filter((restaurant) => restaurant.priceRange === priceFilter)
    }

    // Filtro por avaliação
    if (ratingFilter !== "all") {
      const minRating = Number.parseFloat(ratingFilter)
      filtered = filtered.filter((restaurant) => restaurant.rating >= minRating)
    }

    setFilteredRestaurants(filtered)
  }, [restaurants, searchTerm, cuisineFilter, priceFilter, ratingFilter])

  const uniqueCuisines = Array.from(new Set(restaurants.map((r) => r.cuisine)))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 code-bold">Restaurantes em Maringá</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <div className="space-y-6">
          <div className="bg-card rounded-lg border p-4">
            <h3 className="font-semibold mb-4 code-bold">Filtrar Restaurantes</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Nome, endereço ou tipo de cozinha..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Tipo de Cozinha</label>
                <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    {uniqueCuisines.map((cuisine) => (
                      <SelectItem key={cuisine} value={cuisine}>
                        {cuisine}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Faixa de Preço</label>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Qualquer preço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Qualquer preço</SelectItem>
                    <SelectItem value="$">$ (Econômico)</SelectItem>
                    <SelectItem value="$$">$$ (Moderado)</SelectItem>
                    <SelectItem value="$$$">$$$ (Premium)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Avaliação Mínima</label>
                <Select value={ratingFilter} onValueChange={setRatingFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Qualquer avaliação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Qualquer avaliação</SelectItem>
                    <SelectItem value="3">3+ estrelas</SelectItem>
                    <SelectItem value="4">4+ estrelas</SelectItem>
                    <SelectItem value="4.5">4.5+ estrelas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full"
                onClick={() => {
                  setSearchTerm("")
                  setCuisineFilter("all")
                  setPriceFilter("all")
                  setRatingFilter("all")
                }}
                variant="outline"
              >
                Limpar Filtros
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Mostrando {filteredRestaurants.length} de {restaurants.length} restaurantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <Link href={`/restaurantes/${restaurant.id}`} key={restaurant.id}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative h-48 w-full">
                    <Image
                      src={restaurant.srcImage || restaurant.image}
                      alt={restaurant.nome}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-black">
                        {restaurant.priceRange}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold line-clamp-1 code-bold">{restaurant.nome}</h3>
                    </div>
                    <p className="text-primary font-medium mb-2">{restaurant.cuisine}</p>
                    <div className="flex items-center text-muted-foreground text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span className="line-clamp-1">{restaurant.endereco}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mb-2">
                      <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span>
                        {restaurant.horarioAbertura} - {restaurant.horarioFechamento}
                      </span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Users className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span>Até {restaurant.capacidadeMaxima} pessoas</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="font-medium">{restaurant.rating}</span>
                      <span className="text-muted-foreground text-sm ml-1">({restaurant.reviewCount})</span>
                    </div>
                    <span className="text-sm text-primary font-medium">Reservar agora</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {filteredRestaurants.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Nenhum restaurante encontrado</h3>
              <p className="text-muted-foreground mb-6">Tente ajustar os filtros para encontrar mais opções.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setCuisineFilter("all")
                  setPriceFilter("all")
                  setRatingFilter("all")
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
