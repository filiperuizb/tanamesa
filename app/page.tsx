import { Search, Star, Clock, MapPin, Users, CheckCircle, TrendingUp, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import FeaturedRestaurants from "@/components/featured-restaurants"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-amber-100/20"></div>
          <div
            className="absolute top-0 left-0 w-full h-full animate-gradient"
            style={{
              backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.1) 2px, transparent 2px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Elementos decorativos flutuantes com mais animações */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-amber-200 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-25 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Novos elementos decorativos */}
        <div
          className="absolute top-1/3 left-1/3 w-8 h-8 bg-yellow-300 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-orange-400 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Partículas brilhantes */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-ping"></div>
        <div
          className="absolute top-3/4 left-1/4 w-1 h-1 bg-orange-500 rounded-full opacity-80 animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-amber-400 rounded-full opacity-50 animate-ping"
          style={{ animationDelay: "2.5s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="py-24 md:py-32 text-center">
            <div className="fade-in">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                <Image
                  src="/logo.png"
                  alt="TA NA MESA"
                  width={200}
                  height={80}
                  className="relative mx-auto transition-transform duration-500 hover:scale-110 hover:rotate-1"
                  priority
                />
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8 rounded-full animate-gradient"></div>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
                A plataforma mais completa para reservas de restaurantes em Maringá.
                <span className="text-orange-600 font-semibold code-bold animate-pulse">
                  {" "}
                  Reserve, pague e desfrute
                </span>{" "}
                da melhor experiência gastronômica da cidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center slide-in-right">
              <Link href="/restaurantes">
                <button className="button-primary px-10 py-4 rounded-xl text-white font-bold text-lg shadow-orange-lg code-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">Explorar Restaurantes</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </Link>
              <Link href="/como-funciona">
                <button className="bg-white/80 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-400 px-10 py-4 rounded-xl text-orange-600 font-bold text-lg transition-all duration-300 hover:bg-orange-50 hover:shadow-lg code-bold hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Como Funciona</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Restaurantes em Destaque */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-amber-100 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6 hover:scale-105 transition-transform duration-300">
              <Award className="h-5 w-5 text-orange-600 animate-pulse" />
              <span className="text-orange-600 font-semibold">Destaques</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 code-bold hover:scale-105 transition-transform duration-300">
              Restaurantes em <span className="text-gradient-orange animate-gradient">Destaque</span>
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-10 -translate-y-48 translate-x-48 animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full opacity-10 translate-y-48 -translate-x-48 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Partículas flutuantes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-40 animate-ping"></div>
        <div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-400 rounded-full opacity-50 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6 hover:scale-105 transition-transform duration-300">
              <TrendingUp className="h-5 w-5 text-orange-600 animate-bounce" />
              <span className="text-orange-600 font-semibold">Processo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 code-bold hover:scale-105 transition-transform duration-300">
              Como <span className="text-gradient-orange animate-gradient">Funciona</span>
            </h2>
            <p className="text-xl text-gray-600">Simples, rápido e totalmente seguro</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group slide-in-left">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Search className="h-12 w-12 text-white group-hover:animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange">
                  1
                </div>
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-pulse transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold group-hover:text-orange-600 transition-colors duration-300">
                Encontre um Restaurante
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                Busque por localização, tipo de cozinha ou nome e encontre o restaurante perfeito para sua ocasião em
                Maringá.
              </p>
            </div>

            <div className="text-center group fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <MapPin className="h-12 w-12 text-white group-hover:animate-pulse" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange"
                  style={{ animationDelay: "0.5s" }}
                >
                  2
                </div>
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-pulse transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold group-hover:text-orange-600 transition-colors duration-300">
                Escolha sua Mesa
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                Visualize o mapa interativo de mesas e selecione a melhor opção para você e seus acompanhantes.
              </p>
            </div>

            <div className="text-center group slide-in-right">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-orange-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <CheckCircle className="h-12 w-12 text-white group-hover:animate-pulse" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse-orange"
                  style={{ animationDelay: "1s" }}
                >
                  3
                </div>
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-pulse transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold group-hover:text-orange-600 transition-colors duration-300">
                Reserve e Pague
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                Faça sua reserva e pagamento antecipado de forma segura para garantir sua experiência gastronômica.
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-16 fade-in">
            <Link href="/restaurantes">
              <button className="button-primary px-12 py-5 rounded-2xl text-white font-bold text-xl shadow-orange-lg code-bold hover:scale-110 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Começar Agora</span>
                  <Sparkles className="h-5 w-5 group-hover:animate-spin" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Elementos decorativos animados */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-20 h-20 bg-amber-200 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 code-bold hover:scale-105 transition-transform duration-300">
                Por que escolher o <span className="text-gradient-orange animate-gradient">TA NA MESA</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300 p-4 rounded-xl hover:bg-orange-50">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                    <Clock className="h-6 w-6 text-orange-600 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold group-hover:text-orange-600 transition-colors duration-300">
                      Reserva Instantânea
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      Confirme sua mesa em segundos, sem esperas ou ligações.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300 p-4 rounded-xl hover:bg-orange-50">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                    <Star className="h-6 w-6 text-orange-600 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold group-hover:text-orange-600 transition-colors duration-300">
                      Qualidade Garantida
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      Apenas restaurantes selecionados e avaliados pelos usuários.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300 p-4 rounded-xl hover:bg-orange-50">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                    <Users className="h-6 w-6 text-orange-600 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 code-bold group-hover:text-orange-600 transition-colors duration-300">
                      Experiência Personalizada
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      Escolha sua mesa ideal e personalize sua experiência gastronômica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-orange-lg border border-orange-100 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Award className="h-10 w-10 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 code-bold group-hover:text-orange-600 transition-colors duration-300">
                      Experiência gastronômica única
                    </h3>
                    <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                      Descubra os melhores restaurantes de Maringá e reserve sua mesa com facilidade e segurança.
                    </p>
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-6 w-6 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
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
