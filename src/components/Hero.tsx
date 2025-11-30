const Hero = () => {
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
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold tracking-wider animate-scale-in">
          <span className="text-white">Muse</span>
          <span className="gradient-text">Tera</span>
        </h1>
        
        {/* Decorative Line */}
        <div className="mt-8 mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/50 to-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/70"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/50 to-white/50"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-white/95 font-light tracking-widest animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Transformando vidas através da musicoterapia
        </p>
      </div>
    </section>
  );
};

export default Hero;
