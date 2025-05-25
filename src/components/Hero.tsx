
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

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
                onClick={() => window.open('https://portal-musetera.netlify.app/login', '_blank')}
              >
                Acessar Sistema
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-500 hover:border-green-600 hover:bg-green-50 text-green-600 px-8 py-4 text-lg"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5581986953506&text=Oi%2C%20tenho%20interesse%20em%20adquirir%20o%20sistema%20para%20Musicoterapeutas.', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
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

          {/* Image/Illustration */}
          <div className="relative animate-scale-in">
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              {/* Mockup of the app interface */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">Dashboard</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Dashboard stats */}
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

                {/* Progress indicator */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Progresso Geral</span>
                    <span className="text-sm font-bold text-green-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
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
      </div>
    </section>
  );
};

export default Hero;
