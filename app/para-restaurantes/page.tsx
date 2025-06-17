import { CheckCircle, TrendingUp, Users, Calendar, BarChart3, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ParaRestaurantesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-amber-100/20"></div>
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.1) 2px, transparent 2px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-amber-200 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="py-24 md:py-32">
            {/* Remova o grid e centralize todo o conteúdo */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="fade-in">
                <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 code-bold">
                  Transforme seu <span className="text-gradient-orange">Restaurante</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                  Elimine filas, otimize reservas e aumente sua receita com nossa plataforma de gestão inteligente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/restaurante/entrar">
                    <button className="button-primary px-8 py-4 rounded-xl text-white font-bold text-lg shadow-orange-lg code-bold">
                      Começar Agora
                    </button>
                  </Link>
                  <Link href="#como-funciona">
                    <button className="bg-white/80 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-400 px-8 py-4 rounded-xl text-orange-600 font-bold text-lg transition-all duration-300 hover:bg-orange-50 hover:shadow-lg code-bold">
                      Ver Demonstração
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              <span className="text-orange-600 font-semibold">Benefícios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 code-bold">
              Por que escolher o <span className="text-gradient-orange">TA NA MESA</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma foi desenvolvida especificamente para o MVP, focando nas funcionalidades essenciais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group slide-in-left">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Gestão de Reservas</h3>
              <p className="text-gray-600 leading-relaxed">
                Controle total sobre suas reservas com painel em tempo real. Visualize e gerencie todas as reservas de
                forma simples e eficiente.
              </p>
            </div>

            <div className="text-center group fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Controle de Mesas</h3>
              <p className="text-gray-600 leading-relaxed">
                Gerencie a disponibilidade de suas mesas de forma manual e intuitiva. Otimize a ocupação e reduza
                esperas.
              </p>
            </div>

            <div className="text-center group slide-in-right">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Reservas Garantidas</h3>
              <p className="text-gray-600 leading-relaxed">
                Sistema de reserva paga que elimina "no-shows" e garante a presença dos clientes, aumentando sua
                receita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona para Restaurantes */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Zap className="h-5 w-5 text-orange-600" />
              <span className="text-orange-600 font-semibold">Processo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 code-bold">
              Como Funciona para <span className="text-gradient-orange">Restaurantes</span>
            </h2>
            <p className="text-xl text-gray-600">Simples, rápido e eficiente</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group slide-in-left">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Cadastre seu Restaurante</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Registre as informações básicas: nome, endereço, horários e cardápio simples. Configure suas mesas e
                disponibilidade.
              </p>
            </div>

            <div className="text-center group fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-12 w-12 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange"
                  style={{ animationDelay: "0.5s" }}
                >
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Receba Reservas</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Clientes encontram seu restaurante na plataforma e fazem reservas pagas. Você recebe notificações em
                tempo real.
              </p>
            </div>

            <div className="text-center group slide-in-right">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-12 w-12 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange"
                  style={{ animationDelay: "1s" }}
                >
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Gerencie pelo Painel</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Use nosso painel web/tablet para gerenciar reservas, controlar mesas e acompanhar o desempenho do seu
                restaurante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades do MVP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 code-bold">
              Funcionalidades do <span className="text-gradient-orange">MVP</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos as funcionalidades essenciais para validar nossa proposta de valor
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold">Painel de Reservas</h3>
                    <p className="text-gray-600">
                      Visualização e gerenciamento em tempo real das reservas recebidas com controle manual da
                      disponibilidade de mesas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold">Gerenciador de Conteúdo</h3>
                    <p className="text-gray-600">
                      Cadastro e edição de informações básicas como nome, endereço, horários e cardápio simples.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold">Sistema de Reserva Paga</h3>
                    <p className="text-gray-600">
                      Integração com gateway de pagamento para garantir reservas e eliminar "no-shows".
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold">Mapa de Mesas</h3>
                    <p className="text-gray-600">
                      Visualização interativa do layout do restaurante para otimizar a gestão de mesas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-orange-lg border border-orange-100">
                  {/* Apenas o wrapper da imagem com tamanho controlado */}
                  <div className="w-30 mx-auto"> {/* Wrapper com largura fixa de 12rem (192px) */}
                    <Image
                      src="/logo.png"
                      alt="Dashboard do Restaurante"
                      width={120}
                      height={60}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white code-bold">
              Pronto para Transformar seu Restaurante?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Junte-se aos restaurantes que já estão otimizando suas operações e aumentando a receita com o TA NA MESA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/restaurante/entrar">
                <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-lg code-bold">
                  Entrar
                </button>
              </Link>
              {/* <Link href="/contato">
                <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 code-bold">
                  Falar com Especialista
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
