"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Clock, Users, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { getRestaurantById, getMesasByRestaurantId, saveReserva, type Restaurant } from "@/lib/data"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Mock time slots
const timeSlots = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
]

interface ReservationFormProps {
  restaurantId: number
}

export default function ReservationForm({ restaurantId }: ReservationFormProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeSlot, setTimeSlot] = useState<string | undefined>()
  const [guests, setGuests] = useState<string>("2")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [availableCapacity, setAvailableCapacity] = useState(0)

  useEffect(() => {
    const restaurantData = getRestaurantById(restaurantId)
    const mesas = getMesasByRestaurantId(restaurantId)

    setRestaurant(restaurantData || null)

    // Calcular capacidade disponível baseada nas mesas disponíveis
    const totalCapacity = mesas
      .filter((mesa) => mesa.status === "available")
      .reduce((sum, mesa) => sum + mesa.capacidade, 0)

    setAvailableCapacity(Math.min(totalCapacity, restaurantData?.capacidadeMaxima || 0))
  }, [restaurantId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !timeSlot || !guests || !name || !email || !phone) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    const guestCount = Number.parseInt(guests)
    if (guestCount > availableCapacity) {
      alert(`Este restaurante comporta no máximo ${availableCapacity} pessoas.`)
      return
    }

    if (!restaurant) {
      alert("Dados do restaurante não encontrados.")
      return
    }

    // Verificar se o horário está dentro do funcionamento
    const [selectedHour] = timeSlot.split(":").map(Number)
    const [openHour] = restaurant.horarioAbertura.split(":").map(Number)
    const [closeHour] = restaurant.horarioFechamento.split(":").map(Number)

    if (selectedHour < openHour || selectedHour >= closeHour) {
      alert(`O restaurante funciona das ${restaurant.horarioAbertura} às ${restaurant.horarioFechamento}.`)
      return
    }

    setIsLoading(true)

    try {
      // Simular salvamento da reserva
      const reserva = saveReserva({
        restauranteid: restaurantId,
        mesaId: 1, // Seria selecionada no mapa de mesas
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        date: format(date, "yyyy-MM-dd"),
        time: timeSlot,
        guests: guestCount,
        status: "confirmed",
      })

      alert("Reserva realizada com sucesso!")

      // Limpar formulário
      setName("")
      setEmail("")
      setPhone("")
      setGuests("2")
      setTimeSlot(undefined)
    } catch (error) {
      alert("Erro ao fazer reserva")
    } finally {
      setIsLoading(false)
    }
  }

  const maxGuests = Math.min(availableCapacity, 12) // Limite máximo de 12 pessoas por reserva

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {restaurant && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Capacidade:</strong> Até {availableCapacity} pessoas disponíveis
            <br />
            <strong>Horário:</strong> {restaurant.horarioAbertura} - {restaurant.horarioFechamento}
          </AlertDescription>
        </Alert>
      )}

      <div>
        <label className="text-sm font-medium mb-1 block">Data</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              locale={ptBR}
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Horário</label>
        <Select onValueChange={setTimeSlot}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione um horário">
              {timeSlot ? (
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {timeSlot}
                </div>
              ) : (
                "Selecione um horário"
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((time) => {
              // Filtrar horários baseado no horário de funcionamento
              if (restaurant) {
                const [hour] = time.split(":").map(Number)
                const [openHour] = restaurant.horarioAbertura.split(":").map(Number)
                const [closeHour] = restaurant.horarioFechamento.split(":").map(Number)

                if (hour < openHour || hour >= closeHour) {
                  return null
                }
              }

              return (
                <SelectItem key={time} value={time}>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {time}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Número de pessoas</label>
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger className="w-full">
            <SelectValue>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                {guests} {Number.parseInt(guests) === 1 ? "pessoa" : "pessoas"}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: maxGuests }, (_, i) => i + 1).map((num) => (
              <SelectItem key={num} value={num.toString()}>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  {num} {num === 1 ? "pessoa" : "pessoas"}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-medium mb-4">Informações de contato</h4>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Nome completo</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome completo" />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">E-mail</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Telefone</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(00) 00000-0000" />
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Taxa de reserva</span>
          <span>R$ 10,00</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
          <span>Por pessoa</span>
          <span>R$ {(10 * Number.parseInt(guests || "1")).toFixed(2).replace(".", ",")}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>R$ {(10 * Number.parseInt(guests || "1")).toFixed(2).replace(".", ",")}</span>
        </div>

        <Button className="w-full mt-4 code-bold" type="submit" disabled={isLoading}>
          {isLoading ? "Processando..." : "Confirmar e Pagar"}
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-2">
          O valor será descontado do total da sua conta no restaurante.
        </p>
      </div>
    </form>
  )
}
