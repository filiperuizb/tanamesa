"use client"

import { Star, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getRestaurants, type Restaurant } from "@/lib/data"

export default function FeaturedRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    setRestaurants(getRestaurants().slice(0, 3))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {restaurants.map((restaurant, index) => (
        <div
          key={restaurant.id}
          className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={restaurant.image || "/placeholder.svg"}
              alt={restaurant.nome}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Badge de preço */}
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                {restaurant.priceRange}
              </div>
            </div>

            {/* Rating */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-800">{restaurant.rating}</span>
              <span className="text-xs text-gray-600">({restaurant.reviewCount})</span>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 code-bold">{restaurant.nome}</h3>
              <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                {restaurant.cuisine}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0" />
                <span className="line-clamp-1">{restaurant.endereco}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0" />
                <span>
                  {restaurant.horarioAbertura} - {restaurant.horarioFechamento}
                </span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Users className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0" />
                <span>Até {restaurant.capacidadeMaxima} pessoas</span>
              </div>
            </div>

            <Link href={`/restaurantes/${restaurant.id}`}>
              <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group code-bold">
                <span>Reservar Mesa</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
