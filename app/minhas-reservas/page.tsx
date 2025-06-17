"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getReservas, getRestaurantById, type Reserva } from "@/lib/data"

export default function MyReservationsPage() {
  const [reservas, setReservas] = useState<Reserva[]>([])

  useEffect(() => {
    const reservasData = getReservas()
    setReservas(reservasData)
  }, [])

  const upcomingReservations = reservas.filter((reserva) => {
    const reservaDate = new Date(`${reserva.date}T${reserva.time}`)
    return reservaDate > new Date() && reserva.status === "confirmed"
  })

  const pastReservations = reservas.filter((reserva) => {
    const reservaDate = new Date(`${reserva.date}T${reserva.time}`)
    return reservaDate <= new Date() || reserva.status === "completed"
  })

  const getRestaurantName = (restaurantId: number) => {
    const restaurant = getRestaurantById(restaurantId)
    return restaurant?.nome || "Restaurante não encontrado"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Minhas Reservas</h1>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Próximas ({upcomingReservations.length})</TabsTrigger>
          <TabsTrigger value="past">Anteriores ({pastReservations.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {upcomingReservations.length > 0 ? (
            <div className="grid gap-6">
              {upcomingReservations.map((reserva) => (
                <Card key={reserva.id}>
                  <CardHeader>
                    <CardTitle>{getRestaurantName(reserva.restauranteid)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{format(new Date(reserva.date), "PPP", { locale: ptBR })}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{reserva.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{reserva.guests} pessoas</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Mesa {reserva.mesaId}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/restaurantes/${reserva.restauranteid}`}>Ver Restaurante</Link>
                    </Button>
                    <Button variant="destructive">Cancelar Reserva</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Nenhuma reserva futura</h3>
              <p className="text-muted-foreground mb-6">Você não tem reservas agendadas.</p>
              <Button asChild>
                <Link href="/restaurantes">Encontrar Restaurantes</Link>
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past">
          {pastReservations.length > 0 ? (
            <div className="grid gap-6">
              {pastReservations.map((reserva) => (
                <Card key={reserva.id}>
                  <CardHeader>
                    <CardTitle>{getRestaurantName(reserva.restauranteid)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{format(new Date(reserva.date), "PPP", { locale: ptBR })}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{reserva.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{reserva.guests} pessoas</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Mesa {reserva.mesaId}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/restaurantes/${reserva.restauranteid}`}>Ver Restaurante</Link>
                    </Button>
                    <Button>Reservar Novamente</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Nenhuma reserva anterior</h3>
              <p className="text-muted-foreground mb-6">Você ainda não fez nenhuma reserva.</p>
              <Button asChild>
                <Link href="/restaurantes">Encontrar Restaurantes</Link>
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
