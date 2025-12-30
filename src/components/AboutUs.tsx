
import { Award, Users, Clock, Shield, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  const stats = [
    { number: '5+', label: 'Anos de experiência', icon: Clock },
    { number: '500+', label: 'Musicoterapeutas ativos', icon: Users },
    { number: '15k+', label: 'Sessões realizadas', icon: Heart },
    { number: '99.9%', label: 'Uptime garantido', icon: Shield }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Cuidado Centrado no Paciente',
      description: 'Acreditamos que cada paciente é único e merece um cuidado personalizado e humanizado.'
    },
    {
      icon: Shield,
      title: 'Segurança e Privacidade',
      description: 'Seus dados e dos pacientes são protegidos com os mais altos padrões de segurança.'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Desenvolvemos ferramentas que realmente fazem diferença na prática clínica.'
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-background via-secondary to-background">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-foreground">
            Sobre o <span className="gradient-text">MuseTera</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nascemos da necessidade real de musicoterapeutas por uma solução 
            completa e especializada para gestão de suas práticas clínicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Nossa História */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Nossa História</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O MuseTera foi criado em 2019 por uma equipe multidisciplinar de 
                musicoterapeutas, desenvolvedores e especialistas em saúde digital, 
                que identificaram a falta de ferramentas específicas para a área.
              </p>
              <p>
                Após anos de pesquisa e desenvolvimento em parceria com profissionais 
                da musicoterapia, lançamos uma plataforma que realmente entende as 
                necessidades específicas desta especialidade terapêutica.
              </p>
              <p>
                Hoje, somos a referência nacional em sistemas de gestão para 
                musicoterapeutas, com presença em todos os estados brasileiros.
              </p>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card text-center p-6 hover:glow-blue transition-all duration-300 hover:-translate-y-1">
                <CardContent className="space-y-3 p-0">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center glow-purple">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nossa Missão */}
        <div className="glass-card p-8 lg:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
          <div className="relative text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Nossa Missão</h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "Capacitar musicoterapeutas com tecnologia de ponta para que possam 
              focar no que fazem de melhor: transformar vidas através da música. 
              Acreditamos que a tecnologia deve simplificar, não complicar."
            </p>
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card text-center p-6 hover:glow-purple transition-all duration-300 hover:-translate-y-2">
                <CardContent className="space-y-4 p-0">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center glow-blue">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificações e Parcerias */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Certificações e Parcerias</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2 glass-card px-4 py-2 hover:glow-green transition-all">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="font-medium text-foreground">LGPD Compliance</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-4 py-2 hover:glow-blue transition-all">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="font-medium text-foreground">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-4 py-2 hover:glow-purple transition-all">
              <Users className="h-5 w-5 text-purple-400" />
              <span className="font-medium text-foreground">Associação Brasileira de Musicoterapia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
