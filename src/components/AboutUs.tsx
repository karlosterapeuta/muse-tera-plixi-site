import { Award, Users, Clock, Shield, Heart, Target, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutUs = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const yearsCount = useCountUp({ end: 5, suffix: '+', startOnView: isVisible });
  const usersCount = useCountUp({ end: 500, suffix: '+', startOnView: isVisible });
  const sessionsCount = useCountUp({ end: 15, suffix: 'k+', startOnView: isVisible });
  const uptimeCount = useCountUp({ end: 99.9, decimals: 1, suffix: '%', startOnView: isVisible });

  const stats = [
    { countUp: yearsCount, label: 'Anos de experiência', icon: Clock, color: 'from-blue-500 to-blue-600' },
    { countUp: usersCount, label: 'Musicoterapeutas ativos', icon: Users, color: 'from-purple-500 to-purple-600' },
    { countUp: sessionsCount, label: 'Sessões realizadas', icon: Heart, color: 'from-pink-500 to-pink-600' },
    { countUp: uptimeCount, label: 'Uptime garantido', icon: Shield, color: 'from-green-500 to-green-600' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Cuidado Centrado no Paciente',
      description: 'Acreditamos que cada paciente é único e merece um cuidado personalizado e humanizado.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Segurança e Privacidade',
      description: 'Seus dados e dos pacientes são protegidos com os mais altos padrões de segurança.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Desenvolvemos ferramentas que realmente fazem diferença na prática clínica.',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const certifications = [
    { icon: Shield, label: 'LGPD Compliance', color: 'text-green-400' },
    { icon: Award, label: 'ISO 27001', color: 'text-blue-400' },
    { icon: Users, label: 'Associação Brasileira de Musicoterapia', color: 'text-purple-400' }
  ];

  return (
    <section 
      id="sobre" 
      className="section-padding bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-padding relative">
        {/* Trust Badges */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 glass-card px-4 py-2 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <cert.icon className={`h-4 w-4 ${cert.color}`} />
              <span className="text-sm font-medium text-foreground">{cert.label}</span>
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className={`text-center space-y-4 mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <span className="text-sm text-primary font-medium">Quem Somos</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-playfair text-foreground">
            Sobre o <span className="gradient-text">MuseTera</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nascemos da necessidade real de musicoterapeutas por uma solução 
            completa e especializada para gestão de suas práticas clínicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Nossa História - Timeline Style */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
              Nossa História
            </h3>
            <div className="space-y-6 pl-6 border-l-2 border-white/10">
              <div className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                <div className="space-y-2">
                  <span className="text-sm text-primary font-semibold">2019</span>
                  <p className="text-muted-foreground">
                    O MuseTera foi criado por uma equipe multidisciplinar de 
                    musicoterapeutas, desenvolvedores e especialistas em saúde digital.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
                <div className="space-y-2">
                  <span className="text-sm text-purple-400 font-semibold">2021</span>
                  <p className="text-muted-foreground">
                    Após anos de pesquisa em parceria com profissionais 
                    da musicoterapia, lançamos a plataforma completa.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                <div className="space-y-2">
                  <span className="text-sm text-green-400 font-semibold">Hoje</span>
                  <p className="text-muted-foreground">
                    Somos a referência nacional em sistemas de gestão para 
                    musicoterapeutas, com presença em todos os estados brasileiros.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas com Count-up */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="glass-card-hover text-center p-6 group"
              >
                <CardContent className="space-y-3 p-0">
                  <div className={`mx-auto w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div 
                    className="text-4xl font-bold gradient-text"
                    ref={stat.countUp.ref as React.RefObject<HTMLDivElement>}
                  >
                    {stat.countUp.formattedCount}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nossa Missão */}
        <div className={`glass-card p-8 lg:p-12 mb-20 relative overflow-hidden transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Nossa Missão</span>
            </div>
            <p className="text-xl lg:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed font-light italic">
              "Capacitar musicoterapeutas com tecnologia de ponta para que possam 
              focar no que fazem de melhor: <span className="gradient-text font-medium">transformar vidas através da música</span>. 
              Acreditamos que a tecnologia deve simplificar, não complicar."
            </p>
          </div>
        </div>

        {/* Nossos Valores */}
        <div className={`space-y-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Nossos Valores</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-card-hover text-center p-8 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-5 p-0">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
