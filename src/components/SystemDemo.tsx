
import { Play, Users, TrendingUp, Calendar } from 'lucide-react';

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
              <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Play className="h-5 w-5" />
                Ver demonstração
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg">
                Começar gratuitamente
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

                    {/* Notifications area */}
                    <div className="p-4 space-y-3 max-h-[500px] overflow-hidden">
                      <h4 className="text-sm font-medium text-gray-600 mb-4">Últimas 24 Horas</h4>
                      
                      <div className="space-y-3 animate-fade-in">
                        {notifications.map((notification, index) => (
                          <div 
                            key={index}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                            style={{
                              animationDelay: `${index * 0.2}s`,
                              animationFillMode: 'both'
                            }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-xs font-medium">📱</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                    {notification.platform}
                                  </span>
                                  <span className="text-xs opacity-80">{notification.time}</span>
                                </div>
                                <p className="text-sm font-medium truncate">{notification.user}</p>
                              </div>
                            </div>
                          </div>
                        ))}
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
