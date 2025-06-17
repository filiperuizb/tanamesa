import { Search, MapPin, CheckCircle, Calendar, Clock, Users, Star, Smartphone, CreditCard, QrCode } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ComoFuncionaPage() {
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
          <div className="py-24 md:py-32 text-center">
            <div className="fade-in">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 code-bold">
                Como <span className="text-gradient-orange">Funciona</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
                Descubra como o <span className="font-semibold text-orange-600 code-bold">TA NA MESA</span> simplifica
                suas reservas e transforma sua experiência gastronômica em Maringá.
              </p>
            </div>

            <div className="slide-in-left">
              <Link href="/restaurantes">
                <button className="button-primary px-10 py-4 rounded-xl text-white font-bold text-lg shadow-orange-lg code-bold">
                  Explorar Restaurantes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Processo para Clientes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-orange-600 font-semibold">Para Clientes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 code-bold">
              Processo Simples em <span className="text-gradient-orange">3 Passos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma MVP foca nas funcionalidades essenciais para uma experiência perfeita
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
            <div className="text-center group slide-in-left">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Encontre um Restaurante</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Busque por nome e localização. Acesse informações básicas como cardápio, avaliações e horários de
                funcionamento.
              </p>
            </div>

            <div className="text-center group fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange"
                  style={{ animationDelay: "0.5s" }}
                >
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Escolha sua Mesa</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Visualize o mapa de mesas do restaurante, selecione data, horário e número de pessoas para sua reserva.
              </p>
            </div>

            <div className="text-center group slide-in-right">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange"
                  style={{ animationDelay: "1s" }}
                >
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Reserve e Pague</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Faça o pagamento da taxa de reserva e receba seu voucher digital como comprovante. Sua mesa está
                garantida!
              </p>
            </div>
          </div>

          {/* Detalhes do Processo */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h3 className="text-3xl font-bold mb-8 text-gray-900 code-bold">Funcionalidades do MVP</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Busca e Listagem</h4>
                    <p className="text-gray-600">Pesquisa por nome e localização dos restaurantes parceiros.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Perfil Básico</h4>
                    <p className="text-gray-600">
                      Informações essenciais: nome, endereço, horários, cardápio simples e avaliação geral.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Mapa de Mesas</h4>
                    <p className="text-gray-600">
                      Visualização interativa do layout do restaurante para escolher a mesa ideal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Reserva Paga</h4>
                    <p className="text-gray-600">
                      Sistema de pagamento integrado com geração de voucher digital como comprovante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-orange-lg border border-orange-100">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Interface do TA NA MESA"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 code-bold">
              Vantagens do <span className="text-gradient-orange">TA NA MESA</span>
            </h2>
            <p className="text-xl text-gray-600">Por que nossa plataforma é a melhor escolha para suas reservas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group slide-in-left">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold">Sem Filas</h3>
              <p className="text-gray-600 text-sm">Elimine esperas com reservas antecipadas garantidas</p>
            </div>

            <div className="text-center group fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold">Qualidade</h3>
              <p className="text-gray-600 text-sm">Restaurantes selecionados e avaliados pela comunidade</p>
            </div>

            <div className="text-center group fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold">Praticidade</h3>
              <p className="text-gray-600 text-sm">Acesse de qualquer dispositivo, a qualquer hora</p>
            </div>

            <div className="text-center group slide-in-right">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold">Voucher Digital</h3>
              <p className="text-gray-600 text-sm">Comprovante digital para apresentar no restaurante</p>
            </div>
          </div>
        </div>
      </section>

      {/* Área do Usuário */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-orange-lg border border-orange-100">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 code-bold">Área do Usuário</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-xl">
                      <h4 className="font-bold text-orange-800 mb-2">Histórico de Reservas</h4>
                      <p className="text-sm text-orange-600">Acompanhe todas suas reservas passadas e futuras</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <h4 className="font-bold text-blue-800 mb-2">Informações Pessoais</h4>
                      <p className="text-sm text-blue-600">Gerencie seus dados básicos: nome e e-mail</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <h3 className="text-3xl font-bold mb-8 text-gray-900 code-bold">
                Sua Conta <span className="text-gradient-orange">Personalizada</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Histórico Completo</h4>
                    <p className="text-gray-600">
                      Acesse todas suas reservas anteriores e acompanhe as próximas em um só lugar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Perfil Simples</h4>
                    <p className="text-gray-600">
                      Mantenha suas informações básicas atualizadas: nome e e-mail para contato.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <QrCode className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Vouchers Digitais</h4>
                    <p className="text-gray-600">
                      Todos seus comprovantes de reserva ficam salvos e acessíveis na sua conta.
                    </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white code-bold">Pronto para Começar?</h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Descubra os melhores restaurantes de Maringá e faça sua primeira reserva agora mesmo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/restaurantes">
                <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-lg code-bold">
                  Explorar Restaurantes
                </button>
              </Link>
              <Link href="/cadastrar">
                <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 code-bold">
                  Criar Conta Grátis
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
