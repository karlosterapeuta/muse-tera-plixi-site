
import { Play, Users, TrendingUp, Calendar, MessageCircle } from 'lucide-react';

const SystemDemo = () => {
  const notifications = [
    {
      platform: 'INSTAGRAM',
      user: 'Ana começou a te seguir',
      time: 'agora mesmo',
      type: 'follow'
    },
    {
      platform: 'INSTAGRAM', 
      user: 'João gostou da sua postagem',
      time: 'agora mesmo',
      type: 'like'
    },
    {
      platform: 'INSTAGRAM',
      user: 'Lucy comentou em sua postagem 🎵',
      time: 'agora mesmo', 
      type: 'comment'
    },
    {
      platform: 'INSTAGRAM',
      user: 'Kevin começou a te seguir',
      time: 'agora mesmo',
      type: 'follow'
    },
    {
      platform: 'INSTAGRAM',
      user: 'Sophia comentou em sua postagem "🎼"',
      time: 'agora mesmo',
      type: 'comment'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold font-playfair leading-tight">
                Gerencie sua prática de <span className="gradient-text">musicoterapia</span> com facilidade
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Uma plataforma completa para acompanhar o progresso dos seus pacientes, 
                agendar sessões e organizar todo o seu trabalho terapêutico em um só lugar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Pacientes ativos</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">15k</div>
                <div className="text-sm text-gray-600">Sessões realizadas</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">98%</div>
                <div className="text-sm text-gray-600">Melhoria relatada</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => window.open('https://portal-musetera.netlify.app/', '_blank')}
              >
                <Play className="h-5 w-5" />
                Acessar sistema
              </button>
              <button 
                className="flex items-center justify-center gap-2 border-2 border-green-500 hover:border-green-600 hover:bg-green-50 text-green-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5581986953506&text=Oi%2C%20tenho%20interesse%20em%20adquirir%20o%20sistema%20para%20Musicoterapeutas.', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
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
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default SystemDemo;
