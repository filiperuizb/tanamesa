"use client"

import type React from "react"

import { useState, createContext, useContext, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User, LogOut, Settings } from "lucide-react"
import { usePathname } from "next/navigation"

// Context para gerenciar estado de login
interface AuthContextType {
  isLoggedIn: boolean
  userType: "client" | "restaurant" | null
  userName: string
  login: (type: "client" | "restaurant", name: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<"client" | "restaurant" | null>(null)
  const [userName, setUserName] = useState("")

  const login = (type: "client" | "restaurant", name: string) => {
    setIsLoggedIn(true)
    setUserType(type)
    setUserName(name)
    localStorage.setItem("auth", JSON.stringify({ isLoggedIn: true, userType: type, userName: name }))
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserType(null)
    setUserName("")
    localStorage.removeItem("auth")
  }

  useEffect(() => {
    const stored = localStorage.getItem("auth")
    if (stored) {
      const auth = JSON.parse(stored)
      setIsLoggedIn(auth.isLoggedIn)
      setUserType(auth.userType)
      setUserName(auth.userName)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, userName, login, logout }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}

export default function Header() {
  const { isLoggedIn, userType, userName, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { href: "/restaurantes", label: "Restaurantes" },
    { href: "/como-funciona", label: "Como Funciona" },
    { href: "/para-restaurantes", label: "Para Restaurantes" },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-custom border-b border-orange-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl blur-sm opacity-20"></div>
              <Image
                src="/logo.png"
                alt="TA NA MESA"
                width={60}
                height={60}
                className="relative z-10 w-15 h-15 rounded-xl transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 code-bold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors relative ${
                  isActive(link.href) ? "text-orange-600 active" : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <button className="flex items-center space-x-3 p-3 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                      {userType === "restaurant" ? (
                        <Settings className="h-5 w-5 text-white" />
                      ) : (
                        <User className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-semibold text-gray-800 block">{userName}</span>
                      <span className="text-xs text-gray-500">
                        {userType === "restaurant" ? "Restaurante" : "Cliente"}
                      </span>
                    </div>
                  </button>

                  {/* Dropdown */}
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-orange-lg border border-orange-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-3">
                      {userType === "client" ? (
                        <>
                          <Link
                            href="/minhas-reservas"
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 rounded-xl transition-colors"
                          >
                            Minhas Reservas
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            href="/restaurante/painel"
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 rounded-xl transition-colors"
                          >
                            Painel do Restaurante
                          </Link>
                          <Link
                            href="/restaurante/reservas"
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 rounded-xl transition-colors"
                          >
                            Gerenciar Reservas
                          </Link>
                        </>
                      )}
                      <hr className="my-2 border-orange-100" />
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center space-x-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sair</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/entrar">
                  <button className="px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors rounded-xl hover:bg-orange-50">
                    Entrar
                  </button>
                </Link>
                <Link href="/restaurante/entrar">
                  <button className="px-6 py-2.5 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors rounded-xl border border-orange-200 hover:bg-orange-50">
                    Restaurante
                  </button>
                </Link>
                <Link href="/cadastrar">
                  <button className="button-primary px-8 py-2.5 rounded-xl text-white font-semibold text-sm shadow-lg">
                    Cadastrar
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-orange-50 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-orange-100 py-4 fade-in code-bold">
            <nav className="space-y-2 code-bold">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    isActive(link.href)
                      ? "text-orange-600 bg-orange-50 code-bold"
                      : "text-gray-600 hover:text-orange-600 hover:bg-orange-50 code-bold"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Auth */}
            <div className="mt-4 pt-4 border-t border-orange-100">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 px-4 py-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                      {userType === "restaurant" ? (
                        <Settings className="h-5 w-5 text-white" />
                      ) : (
                        <User className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-800 block">{userName}</span>
                      <span className="text-xs text-gray-500">
                        {userType === "restaurant" ? "Restaurante" : "Cliente"}
                      </span>
                    </div>
                  </div>
                  {userType === "client" ? (
                    <>
                      <Link
                        href="/perfil"
                        className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
                      >
                        Meu Perfil
                      </Link>
                      <Link
                        href="/minhas-reservas"
                        className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
                      >
                        Minhas Reservas
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/restaurante/painel"
                        className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
                      >
                        Painel do Restaurante
                      </Link>
                    </>
                  )}
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link href="/entrar">
                    <button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors">
                      Entrar como Cliente
                    </button>
                  </Link>
                  <Link href="/restaurante/entrar">
                    <button className="w-full text-left px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-xl transition-colors">
                      Entrar como Restaurante
                    </button>
                  </Link>
                  <Link href="/cadastrar">
                    <button className="w-full button-primary py-3 rounded-xl text-white font-semibold text-sm">
                      Cadastrar
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
