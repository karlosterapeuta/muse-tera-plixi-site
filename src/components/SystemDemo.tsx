import { useState, useEffect } from 'react';
import { Users, TrendingUp, Calendar, MessageCircle, Rocket } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const screenshots = [
  { src: '/lovable-uploads/app-dashboard.png', label: 'Dashboard' },
  { src: '/lovable-uploads/app-assinatura.png', label: 'Assinatura Digital' },
  { src: '/lovable-uploads/app-anamnese.png', label: 'Anamnese' },
  { src: '/lovable-uploads/app-evolucao.png', label: 'Evolução' }
];

const SystemDemo = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const patientsCount = useCountUp({ end: 500, suffix: '+', startOnView: isVisible });
  const sessionsCount = useCountUp({ end: 15, suffix: 'k', startOnView: isVisible });
  const improvementCount = useCountUp({ end: 98, suffix: '%', startOnView: isVisible });

  const stats = [
    { countUp: patientsCount, label: 'Pacientes ativos', icon: Users, color: 'text-blue-400' },
    { countUp: sessionsCount, label: 'Sessões realizadas', icon: Calendar, color: 'text-purple-400' },
    { countUp: improvementCount, label: 'Melhoria relatada', icon: TrendingUp, color: 'text-green-400' }
  ];

  // Auto-rotate slides
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

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
        <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
                Acessar sistema
                <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-all" />
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

          {/* Right side - Phone mockup */}
          <div className={`relative flex justify-center items-center w-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div 
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Glow effect behind phone */}
              <div className="phone-glow" />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl opacity-80 animate-float shadow-xl shadow-pink-500/30 rotate-12 z-0" />
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl opacity-70 animate-float shadow-xl shadow-primary/30 -rotate-12 z-0" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 -right-6 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl opacity-80 animate-float shadow-lg shadow-green-500/30 z-0" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-1/4 -left-6 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-70 animate-float shadow-lg shadow-cyan-500/30 z-0" style={{ animationDelay: '1.5s' }} />
              
              {/* Phone Frame */}
              <div className="phone-mockup relative z-10" style={{ perspective: '1000px' }}>
                {/* Dynamic Island / Notch */}
                <div className="phone-notch" />
                
                {/* Screen */}
                <div className="phone-screen">
                  {/* Screenshots */}
                  {screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot.src}
                      alt={screenshot.label}
                      className={`phone-screen-image absolute inset-0 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Glass reflection overlay */}
                  <div className="phone-reflection" />
                </div>
              </div>
              
              {/* Navigation indicators */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`phone-indicator ${index === currentSlide ? 'active' : ''}`}
                    aria-label={`Ver ${screenshot.label}`}
                  />
                ))}
              </div>
              
              {/* Current screen label */}
              <div className="flex justify-center mt-4">
                <span className="phone-label text-white/90">
                  {screenshots[currentSlide].label}
                </span>
              </div>
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
