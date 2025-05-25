
import { Button } from '@/components/ui/button';
import { Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                🎵 Sistema completo para musicoterapeutas
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-playfair leading-tight">
                Gerencie sua prática de{' '}
                <span className="gradient-text">musicoterapia</span> com facilidade
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                O MuseTera é a plataforma completa que você precisa para organizar pacientes, 
                agendar sessões, criar planos de tratamento e acompanhar o progresso terapêutico.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Gestão de pacientes',
                'Agendamento inteligente',
                'Planos de tratamento',
                'Relatórios detalhados'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                Assinar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Ver demonstração
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Usado por 500+ musicoterapeutas</span>
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative animate-scale-in flex justify-center lg:justify-end">
            {/* Phone frame */}
            <div className="relative">
              {/* Phone body */}
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-800 rounded-[2.5rem] relative overflow-hidden">
                  {/* Screen content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Header */}
                    <div className="bg-white px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800">MuseTera</h3>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Main content area */}
                    <div className="p-6 space-y-6">
                      {/* Dashboard cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white">
                          <div className="text-2xl font-bold">24</div>
                          <div className="text-xs opacity-90">Pacientes</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl text-white">
                          <div className="text-2xl font-bold">12</div>
                          <div className="text-xs opacity-90">Hoje</div>
                        </div>
                      </div>

                      {/* Progress indicators */}
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-600">Progresso Geral</span>
                          <span className="text-sm font-bold text-green-600">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg text-sm font-medium">
                          Nova Sessão
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-700 p-3 rounded-lg text-sm font-medium">
                          Relatórios
                        </button>
                      </div>

                      {/* Activity feed */}
                      <div className="space-y-2">
                        <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-blue-500">
                          <div className="text-xs text-gray-500">10:30</div>
                          <div className="text-sm font-medium text-gray-800">Sessão concluída</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-green-500">
                          <div className="text-xs text-gray-500">14:00</div>
                          <div className="text-sm font-medium text-gray-800">Progresso atualizado</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-float">
              <span className="text-2xl">🎵</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-xl">📊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
