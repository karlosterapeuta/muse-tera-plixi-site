import { ChevronDown, Play, Sparkles, Star } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

const Hero = () => {
  const { text } = useTypewriter({
    words: ['gestão de pacientes', 'agendamento inteligente', 'relatórios profissionais', 'evolução terapêutica'],
    typeSpeed: 80,
    deleteSpeed: 40,
    delayBetweenWords: 2500
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/music-therapy-video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Animated background blobs - More vibrant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-[500px] h-[500px] bg-blue-500/40 top-1/4 left-1/4" />
        <div className="blob blob-delay-2 w-[600px] h-[600px] bg-purple-500/35 bottom-1/4 right-1/4" />
        <div className="blob blob-delay-4 w-[400px] h-[400px] bg-cyan-500/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="blob blob-delay-6 w-[350px] h-[350px] bg-emerald-500/20 bottom-1/3 left-1/3" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 badge-glow mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-white/90">Sistema #1 para Musicoterapeutas no Brasil</span>
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </div>

        {/* Main Title - Heroic */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold tracking-tighter mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-white text-glow">Muse</span>
          <span className="gradient-text-animated text-glow-purple">Tera</span>
        </h1>
        
        {/* Subtitle with Typewriter */}
        <p className="text-xl md:text-2xl text-white/80 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Transforme sua prática de musicoterapia com
        </p>
        
        <div className="h-10 md:h-12 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="text-2xl md:text-3xl font-semibold gradient-text">
            {text}
          </span>
          <span className="typewriter-cursor" />
        </div>
        
        {/* CTAs - Enhanced */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://app.musetera.com.br/login" 
            className="btn-premium cta-pulse group"
          >
            <span className="flex items-center gap-2">
              Começar Gratuitamente
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          
          <button className="btn-outline-glow flex items-center justify-center gap-2 text-white">
            <Play className="w-5 h-5" />
            Ver Demonstração
          </button>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {/* Avatar Stack */}
          <div className="flex items-center gap-3">
            <div className="avatar-stack">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white border-2 border-background"
                >
                  {['MT', 'JS', 'AP', 'RC', 'LM'][i - 1]}
                </div>
              ))}
            </div>
            <span className="text-white/70 text-sm">+500 profissionais</span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/70 text-sm">4.9/5 avaliação</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Descubra mais</span>
        <div className="scroll-indicator-arrow" />
      </div>
    </section>
  );
};

export default Hero;
