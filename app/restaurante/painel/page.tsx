"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Users, Check, X } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import RestaurantSidebar from "@/components/restaurant-sidebar"
import { Badge } from "@/components/ui/badge"
import { getReservas, type Reserva } from "@/lib/data"

export default function RestaurantDashboardPage() {
  const [reservas, setReservas] = useState<Reserva[]>([])

  useEffect(() => {
    const reservasData = getReservas()
    setReservas(reservasData)
  }, [])

  const today = format(new Date(), "yyyy-MM-dd")

  const todayReservations = reservas.filter((reserva) => reserva.date === today && reserva.status === "confirmed")

  const upcomingReservations = reservas.filter((reserva) => reserva.date > today && reserva.status === "confirmed")

  const handleConfirmArrival = (reservationId: number) => {
    alert("Chegada confirmada com sucesso!")
  }

  const handleCancelReservation = (reservationId: number) => {
    alert("Reserva cancelada com sucesso!")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] h-screen">
      <RestaurantSidebar />

      <main className="p-6 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Painel do Restaurante</h1>
          <Button>Configurações</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Reservas Hoje</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{todayReservations.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Reservas Futuras</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{upcomingReservations.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Reservas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{reservas.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="today" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="today">Hoje ({todayReservations.length})</TabsTrigger>
            <TabsTrigger value="upcoming">Próximas ({upcomingReservations.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="today">
            <div className="grid gap-6">
              {todayReservations.map((reserva) => (
                <Card key={reserva.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{reserva.customerName}</CardTitle>
                      <Badge>Mesa {reserva.mesaId}</Badge>
                    </div>
                    <CardDescription>{reserva.customerPhone}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{reserva.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{reserva.guests} pessoas</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                      onClick={() => handleConfirmArrival(reserva.id)}
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Confirmar Chegada
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex items-center"
                      onClick={() => handleCancelReservation(reserva.id)}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancelar
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              {todayReservations.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">Nenhuma reserva para hoje</h3>
                  <p className="text-muted-foreground">Não há reservas agendadas para hoje.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid gap-6">
              {upcomingReservations.map((reserva) => (
                <Card key={reserva.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{reserva.customerName}</CardTitle>
                      <Badge>Mesa {reserva.mesaId}</Badge>
                    </div>
                    <CardDescription>{reserva.customerPhone}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{format(new Date(reserva.date), "PPP", { locale: ptBR })}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{reserva.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{reserva.guests} pessoas</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex items-center"
                      onClick={() => handleCancelReservation(reserva.id)}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancelar
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              {upcomingReservations.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">Nenhuma reserva futura</h3>
                  <p className="text-muted-foreground">Não há reservas agendadas para os próximos dias.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
