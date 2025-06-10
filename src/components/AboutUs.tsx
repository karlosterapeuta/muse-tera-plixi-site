
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
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair">
            Sobre o <span className="gradient-text">MuseTera</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nascemos da necessidade real de musicoterapeutas por uma solução 
            completa e especializada para gestão de suas práticas clínicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Nossa História */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Nossa História</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
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
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nossa Missão */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Nossa Missão</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "Capacitar musicoterapeutas com tecnologia de ponta para que possam 
              focar no que fazem de melhor: transformar vidas através da música. 
              Acreditamos que a tecnologia deve simplificar, não complicar."
            </p>
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificações e Parcerias */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Certificações e Parcerias</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="font-medium">LGPD Compliance</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow">
              <Award className="h-5 w-5 text-blue-600" />
              <span className="font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Associação Brasileira de Musicoterapia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
