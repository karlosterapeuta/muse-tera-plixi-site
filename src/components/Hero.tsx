import { ChevronDown, Sparkles, Star } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

const Hero = () => {
  const { text } = useTypewriter({
    words: ['gestão de pacientes', 'agendamento inteligente', 'relatórios profissionais', 'evolução terapêutica'],
    typeSpeed: 80,
    deleteSpeed: 40,
    delayBetweenWords: 2500
  });

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-0 md:pb-0">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/music-therapy-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Floating Particles - subtle over video */}
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
          <span className="text-xs sm:text-sm text-white/90">Sistema #1 para Musicoterapeutas no Brasil</span>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 hidden sm:block" />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-playfair font-bold tracking-tighter mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-white">Muse</span>
          <span className="gradient-text-animated">Tera</span>
        </h1>
        
        {/* Subtitle with Typewriter */}
        <p className="text-base sm:text-xl md:text-2xl text-white/80 mb-3 sm:mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Transforme sua prática de musicoterapia com
        </p>
        
        <div className="h-8 sm:h-10 md:h-12 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="text-lg sm:text-2xl md:text-3xl font-semibold gradient-text">
            {text}
          </span>
          <span className="typewriter-cursor" />
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {/* Avatar Stack */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="avatar-stack">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white border-2 border-white/30"
                >
                  {['MT', 'JS', 'AP', 'RC', 'LM'][i - 1]}
                </div>
              ))}
            </div>
            <span className="text-white/70 text-xs sm:text-sm">+500 profissionais</span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/70 text-xs sm:text-sm">4.9/5 avaliação</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 scroll-indicator animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest mb-2">Descubra mais</span>
        <div className="scroll-indicator-arrow" />
      </div>
    </section>
  );
};

export default Hero;
