"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, CalendarDays, Settings, FileText, Users, LogOut } from "lucide-react"

export default function RestaurantSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    {
      name: "Painel",
      href: "/restaurante/painel",
      icon: <LayoutDashboard className="h-5 w-5 mr-3" />,
    },
    {
      name: "Reservas",
      href: "/restaurante/reservas",
      icon: <CalendarDays className="h-5 w-5 mr-3" />,
    },
    {
      name: "Mesas",
      href: "/restaurante/mesas",
      icon: <Users className="h-5 w-5 mr-3" />,
    },
    {
      name: "Cardápio",
      href: "/restaurante/cardapio",
      icon: <FileText className="h-5 w-5 mr-3" />,
    },
    {
      name: "Configurações",
      href: "/restaurante/configuracoes",
      icon: <Settings className="h-5 w-5 mr-3" />,
    },
  ]

  return (
    <div className="border-r h-screen p-4 flex flex-col">
      <div className="text-xl font-bold mb-8 px-4 pt-4">TA NA MESA</div>

      <nav className="space-y-2 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-3 rounded-md hover:bg-muted transition-colors",
              isActive(item.href) ? "bg-muted font-medium" : "text-muted-foreground",
            )}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-4">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="h-5 w-5 mr-3" />
          Sair
        </Button>
      </div>
    </div>
  )
}
