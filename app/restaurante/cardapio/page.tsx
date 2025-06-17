"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import RestaurantSidebar from "@/components/restaurant-sidebar"
import { Pencil, Trash, Plus, GripVertical } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Mock data for menu
const initialMenu = [
  {
    id: 1,
    name: "Entradas",
    items: [
      { id: 1, name: "Bruschetta", description: "Pão italiano com tomate, alho e manjericão", price: "28,00" },
      { id: 2, name: "Carpaccio", description: "Finas fatias de carne crua com molho especial", price: "42,00" },
    ],
  },
  {
    id: 2,
    name: "Massas",
    items: [
      {
        id: 3,
        name: "Spaghetti alla Carbonara",
        description: "Massa com ovos, queijo pecorino, pimenta preta e pancetta",
        price: "58,00",
      },
      {
        id: 4,
        name: "Lasagna Bolognese",
        description: "Camadas de massa com molho bolonhesa e bechamel",
        price: "62,00",
      },
      {
        id: 5,
        name: "Ravioli de Queijo",
        description: "Massa recheada com queijos nobres ao molho pomodoro",
        price: "54,00",
      },
    ],
  },
  {
    id: 3,
    name: "Principais",
    items: [
      { id: 6, name: "Filetto al Pepe Verde", description: "Filé mignon ao molho de pimenta verde", price: "78,00" },
      { id: 7, name: "Salmone alla Griglia", description: "Salmão grelhado com legumes", price: "72,00" },
    ],
  },
]

export default function RestaurantMenuPage() {
  const [menu, setMenu] = useState(initialMenu)
  const [isAddCategoryDialogOpen, setIsAddCategoryDialogOpen] = useState(false)
  const [isAddItemDialogOpen, setIsAddItemDialogOpen] = useState(false)
  const [isEditItemDialogOpen, setIsEditItemDialogOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState<any>(null)
  const [currentItem, setCurrentItem] = useState<any>(null)
  const [newCategory, setNewCategory] = useState({ name: "" })
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "" })

  const handleAddCategory = () => {
    if (!newCategory.name) {
      alert("Por favor, informe o nome da categoria.")
      return
    }

    const newCategoryObj = {
      id: menu.length + 1,
      name: newCategory.name,
      items: [],
    }

    setMenu([...menu, newCategoryObj])
    setNewCategory({ name: "" })
    setIsAddCategoryDialogOpen(false)

    alert("Categoria adicionada com sucesso!")
  }

  const handleAddItem = () => {
    if (!currentCategory || !newItem.name || !newItem.price) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    const newItemObj = {
      id: Math.max(0, ...menu.flatMap((cat) => cat.items.map((item) => item.id))) + 1,
      name: newItem.name,
      description: newItem.description,
      price: newItem.price,
    }

    const updatedMenu = menu.map((category) =>
      category.id === currentCategory.id ? { ...category, items: [...category.items, newItemObj] } : category,
    )

    setMenu(updatedMenu)
    setNewItem({ name: "", description: "", price: "" })
    setIsAddItemDialogOpen(false)

    alert("Item adicionado com sucesso!")
  }

  const handleEditItem = () => {
    if (!currentCategory || !currentItem || !currentItem.name || !currentItem.price) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    const updatedMenu = menu.map((category) =>
      category.id === currentCategory.id
        ? {
            ...category,
            items: category.items.map((item) => (item.id === currentItem.id ? currentItem : item)),
          }
        : category,
    )

    setMenu(updatedMenu)
    setIsEditItemDialogOpen(false)

    alert("Item atualizado com sucesso!")
  }

  const handleDeleteCategory = (categoryId: number) => {
    const updatedMenu = menu.filter((category) => category.id !== categoryId)
    setMenu(updatedMenu)

    alert("Categoria removida com sucesso!")
  }

  const handleDeleteItem = (categoryId: number, itemId: number) => {
    const updatedMenu = menu.map((category) =>
      category.id === categoryId
        ? { ...category, items: category.items.filter((item) => item.id !== itemId) }
        : category,
    )

    setMenu(updatedMenu)

    alert("Item removido com sucesso!")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] h-screen">
      <RestaurantSidebar />

      <main className="p-6 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Gerenciar Cardápio</h1>
          <Dialog open={isAddCategoryDialogOpen} onOpenChange={setIsAddCategoryDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Categoria
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Nova Categoria</DialogTitle>
                <DialogDescription>Informe o nome da nova categoria do cardápio.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="categoryName">Nome da Categoria</Label>
                  <Input
                    id="categoryName"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({ name: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddCategoryDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleAddCategory}>Adicionar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-6">
          {menu.map((category) => (
            <Card key={category.id}>
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center">
                  <div className="flex items-center">
                    <GripVertical className="h-5 w-5 text-muted-foreground mr-2" />
                    <span>{category.name}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Dialog
                      open={isAddItemDialogOpen && currentCategory?.id === category.id}
                      onOpenChange={(open) => {
                        setIsAddItemDialogOpen(open)
                        if (open) setCurrentCategory(category)
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Adicionar Item
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Adicionar Novo Item</DialogTitle>
                          <DialogDescription>Adicione um novo item à categoria "{category.name}".</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="itemName">Nome do Item*</Label>
                            <Input
                              id="itemName"
                              value={newItem.name}
                              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="itemDescription">Descrição</Label>
                            <Textarea
                              id="itemDescription"
                              value={newItem.description}
                              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="itemPrice">Preço (R$)*</Label>
                            <Input
                              id="itemPrice"
                              value={newItem.price}
                              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsAddItemDialogOpen(false)}>
                            Cancelar
                          </Button>
                          <Button onClick={handleAddItem}>Adicionar</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteCategory(category.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="items">
                    <AccordionTrigger>
                      {category.items.length} {category.items.length === 1 ? "item" : "itens"}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {category.items.map((item) => (
                          <div key={item.id} className="flex justify-between items-start border-b pb-4 last:border-0">
                            <div>
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-muted-foreground text-sm">{item.description}</p>
                              <p className="font-medium mt-1">R$ {item.price}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Dialog
                                open={isEditItemDialogOpen && currentItem?.id === item.id}
                                onOpenChange={(open) => {
                                  setIsEditItemDialogOpen(open)
                                  if (open) {
                                    setCurrentCategory(category)
                                    setCurrentItem(item)
                                  }
                                }}
                              >
                                <DialogTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Editar Item</DialogTitle>
                                    <DialogDescription>Altere as informações do item.</DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                      <Label htmlFor="editItemName">Nome do Item*</Label>
                                      <Input
                                        id="editItemName"
                                        value={currentItem?.name}
                                        onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                                      />
                                    </div>
                                    <div className="grid gap-2">
                                      <Label htmlFor="editItemDescription">Descrição</Label>
                                      <Textarea
                                        id="editItemDescription"
                                        value={currentItem?.description}
                                        onChange={(e) =>
                                          setCurrentItem({ ...currentItem, description: e.target.value })
                                        }
                                      />
                                    </div>
                                    <div className="grid gap-2">
                                      <Label htmlFor="editItemPrice">Preço (R$)*</Label>
                                      <Input
                                        id="editItemPrice"
                                        value={currentItem?.price}
                                        onChange={(e) => setCurrentItem({ ...currentItem, price: e.target.value })}
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button variant="outline" onClick={() => setIsEditItemDialogOpen(false)}>
                                      Cancelar
                                    </Button>
                                    <Button onClick={handleEditItem}>Salvar</Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDeleteItem(category.id, item.id)}
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}

                        {category.items.length === 0 && (
                          <div className="text-center py-4">
                            <p className="text-muted-foreground">Nenhum item nesta categoria.</p>
                            <Button
                              variant="outline"
                              className="mt-2"
                              onClick={() => {
                                setCurrentCategory(category)
                                setIsAddItemDialogOpen(true)
                              }}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Adicionar Item
                            </Button>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}

          {menu.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Nenhuma categoria cadastrada</h3>
              <p className="text-muted-foreground mb-6">Adicione categorias para começar a montar seu cardápio.</p>
              <Button onClick={() => setIsAddCategoryDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Categoria
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
