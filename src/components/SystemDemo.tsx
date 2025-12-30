import { Play, Users, TrendingUp, Calendar, MessageCircle, Rocket } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SystemDemo = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const patientsCount = useCountUp({ end: 500, suffix: '+', startOnView: isVisible });
  const sessionsCount = useCountUp({ end: 15, suffix: 'k', startOnView: isVisible });
  const improvementCount = useCountUp({ end: 98, suffix: '%', startOnView: isVisible });

  const stats = [
    { countUp: patientsCount, label: 'Pacientes ativos', icon: Users, color: 'text-blue-400' },
    { countUp: sessionsCount, label: 'Sessões realizadas', icon: Calendar, color: 'text-purple-400' },
    { countUp: improvementCount, label: 'Melhoria relatada', icon: TrendingUp, color: 'text-green-400' }
  ];

  const handleAccessSystem = () => {
    window.open('https://portal-musetera.netlify.app/login', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=5581986953506&text=Oi%2C%20tenho%20interesse%20em%20adquirir%20o%20sistema%20para%20Musicoterapeutas.', '_blank');
  };

  return (
    <section 
      className="section-padding bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container-padding relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-primary font-medium">Sistema ao vivo</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold font-playfair leading-tight text-foreground">
                Gerencie sua prática de <span className="gradient-text">musicoterapia</span> com facilidade
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Uma plataforma completa para acompanhar o progresso dos seus pacientes, 
                agendar sessões e organizar todo o seu trabalho terapêutico em um só lugar.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-5 glass-card-hover group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <div 
                    className="text-3xl font-bold text-foreground"
                    ref={stat.countUp.ref as React.RefObject<HTMLDivElement>}
                  >
                    {stat.countUp.formattedCount}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAccessSystem}
                className="group flex items-center justify-center gap-3 btn-premium px-8 py-4 rounded-xl font-semibold"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Acessar sistema
                <Rocket className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
              <button 
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 border-2 border-green-500/50 hover:border-green-400 hover:bg-green-500/10 text-green-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
            </div>
          </div>

          {/* Right side - Browser mockup */}
          <div className={`relative flex justify-center lg:justify-end transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Browser Frame */}
            <div className="relative w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-gray-900">
                {/* Browser bar */}
                <div className="bg-gray-800/80 px-4 py-3 flex items-center gap-3 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
                  </div>
                  <div className="flex-1 bg-gray-900/60 rounded-lg px-4 py-1.5 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="text-xs text-gray-400 font-mono">portal-musetera.netlify.app</span>
                  </div>
                </div>

                {/* Screen content */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 min-h-[400px]">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Dashboard</h3>
                      <p className="text-xs text-gray-500">Bem-vindo de volta!</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400">Online</span>
                    </div>
                  </div>

                  {/* Dashboard cards */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
                      <div className="text-3xl font-bold">24</div>
                      <div className="text-xs opacity-80">Pacientes</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
                      <div className="text-3xl font-bold">12</div>
                      <div className="text-xs opacity-80">Sessões Hoje</div>
                    </div>
                  </div>

                  {/* Progress card */}
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-300">Progresso Geral</span>
                      <span className="text-sm font-bold text-green-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-500 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: isVisible ? '85%' : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button className="bg-gradient-to-r from-primary to-purple-600 text-white p-3 rounded-lg text-sm font-medium shadow-lg hover:shadow-primary/25 transition-shadow">
                      Nova Sessão
                    </button>
                    <button className="bg-white/5 border border-white/10 text-gray-300 p-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                      Relatórios
                    </button>
                  </div>

                  {/* Activity */}
                  <div className="space-y-2">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3 border-l-4 border-l-blue-500">
                      <div className="text-xs text-gray-500">10:30</div>
                      <div className="text-sm font-medium text-gray-200">Sessão concluída</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl opacity-80 animate-float shadow-xl shadow-pink-500/30 rotate-12" />
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl opacity-70 animate-float shadow-xl shadow-primary/30 -rotate-12" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-4 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl opacity-80 animate-float shadow-lg shadow-green-500/30" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default SystemDemo;
