"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, Users, CheckCircle, Info } from "lucide-react"
import { format } from "date-fns"
import { getMesasByRestaurantId, getRestaurantById, type Mesa, type Restaurant } from "@/lib/data"

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

interface RestaurantTableMapProps {
  restaurantId: number
}

export default function RestaurantTableMap({ restaurantId }: RestaurantTableMapProps) {
  const [date, setDate] = useState<Date>(new Date())
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [selectedTable, setSelectedTable] = useState<number | null>(null)
  const [mesas, setMesas] = useState<Mesa[]>([])
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    const mesasData = getMesasByRestaurantId(restaurantId)
    const restaurantData = getRestaurantById(restaurantId)
    setMesas(mesasData)
    setRestaurant(restaurantData || null)
  }, [restaurantId])

  const selectedMesa = mesas.find((mesa) => mesa.id === selectedTable)

  const getTableSize = (capacidade: number) => {
    if (capacidade <= 2) return { width: 70, height: 70, rounded: true }
    if (capacidade <= 4) return { width: 90, height: 90, rounded: false }
    if (capacidade <= 6) return { width: 110, height: 90, rounded: false }
    return { width: 130, height: 90, rounded: false }
  }

  const getTableClass = (mesa: Mesa, isSelected: boolean) => {
    if (isSelected) return "mesa-selected"
    if (mesa.status === "occupied") return "mesa-occupied"
    if (mesa.status === "reserved") return "mesa-reserved"
    return "mesa-available"
  }

  return (
    <div className="space-y-8">
      {/* Controles de Data e Hora */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-orange-500" />
            <span>Data da Reserva</span>
          </label>
          <input
            type="date"
            value={format(date, "yyyy-MM-dd")}
            onChange={(e) => setDate(new Date(e.target.value))}
            min={format(new Date(), "yyyy-MM-dd")}
            className="w-full input-focus px-4 py-3 border border-gray-200 rounded-xl bg-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
            <Clock className="h-4 w-4 text-orange-500" />
            <span>Horário</span>
          </label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full input-focus px-4 py-3 border border-gray-200 rounded-xl bg-white"
          >
            <option value="">Selecione um horário</option>
            {timeSlots.map((time) => {
              if (restaurant) {
                const [hour] = time.split(":").map(Number)
                const [openHour] = restaurant.horarioAbertura.split(":").map(Number)
                const [closeHour] = restaurant.horarioFechamento.split(":").map(Number)
                if (hour < openHour || hour >= closeHour) return null
              }
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      {/* Estatísticas das Mesas */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {mesas.filter((m) => m.status === "available").length}
            </div>
            <div className="text-sm text-green-700 font-medium">Disponíveis</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border border-orange-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {mesas.filter((m) => m.status === "reserved").length}
            </div>
            <div className="text-sm text-orange-700 font-medium">Reservadas</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-rose-50 p-4 rounded-xl border border-red-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">
              {mesas.filter((m) => m.status === "occupied").length}
            </div>
            <div className="text-sm text-red-700 font-medium">Ocupadas</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-4 rounded-xl border border-blue-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{mesas.length}</div>
            <div className="text-sm text-blue-700 font-medium">Total</div>
          </div>
        </div>
      </div>

      {/* Mesa Selecionada */}
      {selectedMesa && (
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="h-6 w-6 text-orange-600" />
            <h3 className="text-lg font-bold text-orange-800 code-bold">Mesa Selecionada</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-orange-700 font-medium">Mesa:</span>
              <div className="text-lg font-bold text-orange-800">{selectedMesa.identificador}</div>
            </div>
            <div>
              <span className="text-sm text-orange-700 font-medium">Capacidade:</span>
              <div className="text-lg font-bold text-orange-800">{selectedMesa.capacidade} pessoas</div>
            </div>
          </div>
        </div>
      )}

      {/* Mapa de Mesas */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4">
          <h3 className="text-xl font-bold text-white text-center code-bold">Layout do Restaurante</h3>
          <p className="text-orange-100 text-center text-sm mt-1">Clique em uma mesa disponível para selecioná-la</p>
        </div>

        <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 h-[500px] overflow-hidden">
          {/* Entrada */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm rounded-b-xl shadow-lg">
            ENTRADA PRINCIPAL
          </div>

          {/* Bar/Balcão */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
            BAR & BALCÃO
          </div>

          {/* Área VIP */}
          <div className="absolute top-6 right-6 w-32 h-20 bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 rounded-xl flex items-center justify-center">
            <span className="text-purple-700 font-semibold text-xs">ÁREA VIP</span>
          </div>

          {/* Mesas */}
          {mesas.map((mesa) => {
            const { width, height, rounded } = getTableSize(mesa.capacidade)
            const isSelected = selectedTable === mesa.id

            return (
              <div
                key={mesa.id}
                className={`absolute flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                  rounded ? "rounded-full" : "rounded-xl"
                } ${getTableClass(mesa, isSelected)} ${
                  mesa.status === "available" ? "hover:scale-110" : "cursor-not-allowed"
                }`}
                style={{
                  left: `${mesa.posicao.x}px`,
                  top: `${mesa.posicao.y + 40}px`,
                  width: `${width}px`,
                  height: `${height}px`,
                }}
                onClick={() => {
                  if (mesa.status === "available") {
                    setSelectedTable(mesa.id === selectedTable ? null : mesa.id)
                  }
                }}
              >
                <div className="text-center">
                  <div className="font-bold text-sm mb-1">{mesa.identificador}</div>
                  <div className="flex items-center justify-center text-xs opacity-75">
                    <Users className="h-3 w-3 mr-1" />
                    {mesa.capacidade}
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse-orange">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            )
          })}

          {/* Plantas decorativas */}
          <div className="absolute top-20 left-6 w-8 h-8 bg-green-200 rounded-full opacity-60"></div>
          <div className="absolute top-32 left-8 w-6 h-6 bg-green-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-32 right-8 w-8 h-8 bg-green-200 rounded-full opacity-60"></div>
        </div>

        {/* Legenda */}
        <div className="bg-gray-50 p-6 border-t">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded mesa-available"></div>
                <span className="text-sm font-medium text-gray-700">Disponível</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded mesa-selected"></div>
                <span className="text-sm font-medium text-gray-700">Selecionada</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded mesa-reserved"></div>
                <span className="text-sm font-medium text-gray-700">Reservada</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded mesa-occupied"></div>
                <span className="text-sm font-medium text-gray-700">Ocupada</span>
              </div>
            </div>

            <button
              disabled={!selectedTable || !timeSlot}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 code-bold ${
                selectedTable && timeSlot ? "button-primary text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continuar Reserva
            </button>
          </div>
        </div>
      </div>

      {/* Informações Adicionais */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Informações Importantes</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Reservas podem ser feitas com até 30 dias de antecedência</li>
              <li>• Mesas ficam reservadas por 15 minutos após o horário marcado</li>
              <li>• Cancelamentos gratuitos até 2 horas antes do horário</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
