import { Play, Users, TrendingUp, Calendar, MessageCircle } from 'lucide-react';

const SystemDemo = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold font-playfair leading-tight text-foreground">
                Gerencie sua prática de <span className="gradient-text">musicoterapia</span> com facilidade
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Uma plataforma completa para acompanhar o progresso dos seus pacientes, 
                agendar sessões e organizar todo o seu trabalho terapêutico em um só lugar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 glass-card hover:glow-blue transition-all">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes ativos</div>
              </div>
              <div className="text-center p-4 glass-card hover:glow-purple transition-all">
                <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">15k</div>
                <div className="text-sm text-muted-foreground">Sessões realizadas</div>
              </div>
              <div className="text-center p-4 glass-card hover:glow-green transition-all">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Melhoria relatada</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg glow-blue"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://portal-musetera.netlify.app/login';
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Play className="h-5 w-5" />
                Acessar sistema
              </button>
              <button 
                className="flex items-center justify-center gap-2 border-2 border-green-500/50 hover:border-green-400 hover:bg-green-500/10 text-green-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
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
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl glow-purple">
                <div className="w-full h-full bg-gray-800 rounded-[2.5rem] relative overflow-hidden border border-white/10">
                  {/* Screen content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950">
                    {/* Header */}
                    <div className="bg-gray-900/80 backdrop-blur px-6 py-4 border-b border-white/10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">MuseTera</h3>
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
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-xl text-white shadow-lg">
                          <div className="text-2xl font-bold">24</div>
                          <div className="text-xs opacity-90">Pacientes</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-xl text-white shadow-lg">
                          <div className="text-2xl font-bold">12</div>
                          <div className="text-xs opacity-90">Hoje</div>
                        </div>
                      </div>

                      {/* Progress indicators */}
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-300">Progresso Geral</span>
                          <span className="text-sm font-bold text-green-400">85%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg text-sm font-medium shadow-lg">
                          Nova Sessão
                        </button>
                        <button className="bg-white/5 border border-white/10 text-gray-300 p-3 rounded-lg text-sm font-medium">
                          Relatórios
                        </button>
                      </div>

                      {/* Activity feed */}
                      <div className="space-y-2">
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-3 border-l-4 border-l-blue-500">
                          <div className="text-xs text-gray-500">10:30</div>
                          <div className="text-sm font-medium text-gray-200">Sessão concluída</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-3 border-l-4 border-l-green-500">
                          <div className="text-xs text-gray-500">14:00</div>
                          <div className="text-sm font-medium text-gray-200">Progresso atualizado</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>
                </div>
              </div>
            </div>

            {/* Floating elements with glow */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-80 animate-float glow-purple"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 animate-float glow-blue" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-70 animate-float glow-green" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default SystemDemo;
