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
      
      {/* Dark Overlay - Increased opacity for dark theme */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold tracking-wider animate-scale-in">
          <span className="text-white text-glow">Muse</span>
          <span className="gradient-text text-glow-purple">Tera</span>
        </h1>
        
        {/* Decorative Line with glow */}
        <div className="mt-8 mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-500/70 to-blue-500/70"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400 glow-blue"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500/70 to-purple-500/70"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-200 font-light tracking-widest animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Transformando vidas através da musicoterapia
        </p>
      </div>
    </section>
  );
};

export default Hero;
