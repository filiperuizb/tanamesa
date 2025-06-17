import { Search, Star, Clock, MapPin, Users, CheckCircle, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import FeaturedRestaurants from "@/components/featured-restaurants"

export default function Home() {
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
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-25 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="py-24 md:py-32 text-center">
            <div className="fade-in">
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient-orange text-shadow-lg code-bold">
                TA NA MESA
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
                A plataforma mais completa para reservas de restaurantes em Maringá.
                <span className="text-orange-600 font-semibold code-bold"> Reserve, pague e desfrute</span> da melhor
                experiência gastronômica da cidade.
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-12 slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-orange-lg border border-orange-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                      <input
                        type="text"
                        placeholder="Buscar restaurantes em Maringá..."
                        className="w-full pl-12 pr-4 py-4 bg-transparent border-0 focus:outline-none text-lg placeholder-gray-500"
                      />
                    </div>
                    <button className="button-primary px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center space-x-2">
                      <Search className="h-5 w-5" />
                      <span>Buscar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center slide-in-right">
              <Link href="/restaurantes">
                <button className="button-primary px-10 py-4 rounded-xl text-white font-bold text-lg shadow-orange-lg code-bold">
                  Explorar Restaurantes
                </button>
              </Link>
              <Link href="/como-funciona">
                <button className="bg-white/80 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-400 px-10 py-4 rounded-xl text-orange-600 font-bold text-lg transition-all duration-300 hover:bg-orange-50 hover:shadow-lg code-bold">
                  Como Funciona
                </button>
              </Link>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="stat-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Restaurantes</div>
              </div>
              <div className="stat-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Reservas</div>
              </div>
              <div className="stat-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.9</div>
                <div className="text-gray-600 font-medium">Avaliação</div>
              </div>
              <div className="stat-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Restaurantes em Destaque */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Award className="h-5 w-5 text-orange-600" />
              <span className="text-orange-600 font-semibold">Destaques</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 code-bold">
              Restaurantes em <span className="text-gradient-orange">Destaque</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra os melhores sabores de Maringá com reservas garantidas e experiências inesquecíveis
            </p>
          </div>
          <FeaturedRestaurants />
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-10 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full opacity-10 translate-y-48 -translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              <span className="text-orange-600 font-semibold">Processo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 code-bold">
              Como <span className="text-gradient-orange">Funciona</span>
            </h2>
            <p className="text-xl text-gray-600">Simples, rápido e totalmente seguro</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group slide-in-left">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Encontre um Restaurante</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Busque por localização, tipo de cozinha ou nome e encontre o restaurante perfeito para sua ocasião em
                Maringá.
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Escolha sua Mesa</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Visualize o mapa interativo de mesas e selecione a melhor opção para você e seus acompanhantes.
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Reserve e Pague</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Faça sua reserva e pagamento antecipado de forma segura para garantir sua experiência gastronômica.
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-16 fade-in">
            <Link href="/restaurantes">
              <button className="button-primary px-12 py-5 rounded-2xl text-white font-bold text-xl shadow-orange-lg">
                Começar Agora
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Por que escolher o <span className="text-gradient-orange">TA NA MESA</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Reserva Instantânea</h3>
                    <p className="text-gray-600">Confirme sua mesa em segundos, sem esperas ou ligações.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Qualidade Garantida</h3>
                    <p className="text-gray-600">Apenas restaurantes selecionados e avaliados pelos usuários.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Experiência Personalizada</h3>
                    <p className="text-gray-600">Escolha sua mesa ideal e personalize sua experiência gastronômica.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-orange-lg border border-orange-100">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold">Experiência gastronômica única</h3>
                    <p className="text-gray-600 mb-6">
                      Descubra os melhores restaurantes de Maringá e reserve sua mesa com facilidade e segurança.
                    </p>
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
