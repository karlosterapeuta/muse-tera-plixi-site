
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Award, Users, Clock } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  const trustBadges = [
    { icon: Shield, text: 'LGPD Compliant', color: 'text-green-600' },
    { icon: Award, text: 'ISO 27001', color: 'text-blue-600' },
    { icon: Users, text: '500+ Profissionais', color: 'text-purple-600' },
    { icon: Clock, text: 'Suporte 24/7', color: 'text-orange-600' }
  ];

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                🏆 #1 Sistema para Musicoterapeutas no Brasil
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

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-2 p-3 bg-white rounded-lg shadow-sm border">
                  <badge.icon className={`h-6 w-6 ${badge.color}`} />
                  <span className="text-xs font-medium text-gray-700">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Gestão completa de pacientes',
                'Agendamento inteligente automatizado',
                'Planos de tratamento personalizados',
                'Relatórios profissionais detalhados'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
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
                  <span className="relative z-10">🚀 Começar Agora GRÁTIS</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                  Teste 30 dias
                </div>
              </div>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-500 hover:border-green-600 hover:bg-green-50 text-green-600 px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5581986953506&text=Oi%2C%20gostaria%20de%20agendar%20uma%20demonstração%20do%20sistema%20MuseTera.', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Agendar Demo
              </Button>
            </div>

            {/* Enhanced Social proof */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">500+ musicoterapeutas confiam</span>
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <span className="font-medium">4.9/5 (127 avaliações)</span>
              </div>
            </div>
          </div>

          {/* Enhanced Image/Illustration */}
          <div className="relative animate-scale-in">
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              {/* Mockup of the app interface */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">Dashboard MuseTera</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">Online</span>
                  </div>
                </div>
                
                {/* Dashboard stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white">
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-xs opacity-90">Pacientes Ativos</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-white">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs opacity-90">Sessões Hoje</div>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Progresso Geral</span>
                    <span className="text-sm font-bold text-green-600">92% ↗️</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>

                {/* Recent activity */}
                <div className="text-xs text-gray-500 bg-blue-50 p-2 rounded">
                  💡 Última sessão: Ana Silva - Excelente progresso
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-2xl">🎵</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xl">📊</span>
              </div>
              <div className="absolute top-1/2 -left-6 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-sm">🎼</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
