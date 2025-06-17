"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RestaurantSidebar from "@/components/restaurant-sidebar"
import { Pencil, Trash, Plus, Users } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for tables
const initialTables = [
  { id: 1, number: 1, seats: 2, status: "available" },
  { id: 2, number: 2, seats: 2, status: "available" },
  { id: 3, number: 3, seats: 4, status: "available" },
  { id: 4, number: 4, seats: 4, status: "available" },
  { id: 5, number: 5, seats: 6, status: "available" },
  { id: 6, number: 6, seats: 6, status: "available" },
  { id: 7, number: 7, seats: 8, status: "available" },
]

export default function RestaurantTablesPage() {
  const [tables, setTables] = useState(initialTables)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentTable, setCurrentTable] = useState<any>(null)
  const [newTable, setNewTable] = useState({
    number: "",
    seats: "2",
  })

  const handleAddTable = () => {
    if (!newTable.number) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    const tableNumber = Number.parseInt(newTable.number)

    // Check if table number already exists
    if (tables.some((table) => table.number === tableNumber)) {
      alert("Número de mesa já existe")
      return
    }

    const newTableObj = {
      id: tables.length + 1,
      number: tableNumber,
      seats: Number.parseInt(newTable.seats),
      status: "available",
    }

    setTables([...tables, newTableObj])
    setNewTable({ number: "", seats: "2" })
    setIsAddDialogOpen(false)

    alert("Mesa adicionada com sucesso!")
  }

  const handleEditTable = () => {
    if (!currentTable) return

    const updatedTables = tables.map((table) => (table.id === currentTable.id ? currentTable : table))

    setTables(updatedTables)
    setIsEditDialogOpen(false)

    alert("Mesa atualizada com sucesso!")
  }

  const handleDeleteTable = (tableId: number) => {
    const updatedTables = tables.filter((table) => table.id !== tableId)
    setTables(updatedTables)

    alert("Mesa removida com sucesso.")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] h-screen">
      <RestaurantSidebar />

      <main className="p-6 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Gerenciar Mesas</h1>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Mesa
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Nova Mesa</DialogTitle>
                <DialogDescription>Preencha as informações da nova mesa.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="tableNumber">Número da Mesa</Label>
                  <Input
                    id="tableNumber"
                    type="number"
                    value={newTable.number}
                    onChange={(e) => setNewTable({ ...newTable, number: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tableSeats">Número de Lugares</Label>
                  <Select value={newTable.seats} onValueChange={(value) => setNewTable({ ...newTable, seats: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 lugares</SelectItem>
                      <SelectItem value="4">4 lugares</SelectItem>
                      <SelectItem value="6">6 lugares</SelectItem>
                      <SelectItem value="8">8 lugares</SelectItem>
                      <SelectItem value="10">10 lugares</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleAddTable}>Adicionar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="list" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="list">Lista de Mesas</TabsTrigger>
            <TabsTrigger value="layout">Layout do Restaurante</TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tables.map((table) => (
                <Card key={table.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex justify-between items-center">
                      <span>Mesa {table.number}</span>
                      <div className="flex space-x-2">
                        <Dialog
                          open={isEditDialogOpen && currentTable?.id === table.id}
                          onOpenChange={(open) => {
                            setIsEditDialogOpen(open)
                            if (open) setCurrentTable(table)
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Editar Mesa</DialogTitle>
                              <DialogDescription>Altere as informações da mesa.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="editTableNumber">Número da Mesa</Label>
                                <Input
                                  id="editTableNumber"
                                  type="number"
                                  value={currentTable?.number}
                                  onChange={(e) =>
                                    setCurrentTable({ ...currentTable, number: Number.parseInt(e.target.value) })
                                  }
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="editTableSeats">Número de Lugares</Label>
                                <Select
                                  value={currentTable?.seats.toString()}
                                  onValueChange={(value) =>
                                    setCurrentTable({ ...currentTable, seats: Number.parseInt(value) })
                                  }
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="2">2 lugares</SelectItem>
                                    <SelectItem value="4">4 lugares</SelectItem>
                                    <SelectItem value="6">6 lugares</SelectItem>
                                    <SelectItem value="8">8 lugares</SelectItem>
                                    <SelectItem value="10">10 lugares</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                                Cancelar
                              </Button>
                              <Button onClick={handleEditTable}>Salvar</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteTable(table.id)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{table.seats} lugares</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {tables.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">Nenhuma mesa cadastrada</h3>
                <p className="text-muted-foreground mb-6">Adicione mesas para começar a gerenciar seu restaurante.</p>
                <Button onClick={() => setIsAddDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Mesa
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="layout">
            <Card>
              <CardHeader>
                <CardTitle>Layout do Restaurante</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-muted h-[500px] rounded-lg overflow-hidden">
                  {/* Restaurant layout would go here - simplified for MVP */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-primary/20 flex items-center justify-center text-sm">
                    Entrada
                  </div>

                  {tables.map((table) => {
                    // Random position for demo purposes
                    const x = ((table.id * 50) % 400) + 50
                    const y = Math.floor(table.id / 3) * 80 + 50

                    return (
                      <div
                        key={table.id}
                        className={cn(
                          "absolute flex items-center justify-center rounded-md border-2 cursor-pointer transition-all border-border bg-background",
                          table.seats <= 2
                            ? "w-16 h-16 rounded-full"
                            : table.seats <= 4
                              ? "w-20 h-20"
                              : table.seats <= 6
                                ? "w-24 h-20"
                                : "w-32 h-20",
                        )}
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                        }}
                      >
                        <div className="text-center">
                          <div className="font-medium">Mesa {table.number}</div>
                          <div className="text-xs text-muted-foreground">{table.seats} lugares</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-4 text-center text-muted-foreground">
                  <p>O editor de layout completo estará disponível em breve.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
