
import { Calendar, Users, FileText, BarChart3, Heart, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Gestão de Pacientes',
      description: 'Organize todos os dados dos seus pacientes em um só lugar, com histórico completo e informações importantes.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'Agendamento Inteligente',
      description: 'Sistema de agendamento automático com lembretes por email e WhatsApp para pacientes.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Planos de Tratamento',
      description: 'Crie e personalize planos terapêuticos individualizados com objetivos e atividades específicas.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Relatórios e Análises',
      description: 'Acompanhe o progresso dos pacientes com gráficos detalhados e relatórios profissionais.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Avaliação Terapêutica',
      description: 'Ferramentas especializadas para avaliar o progresso emocional e cognitivo dos pacientes.',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Segurança e Privacidade',
      description: 'Seus dados e dos pacientes protegidos com criptografia de ponta e conformidade com LGPD.',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="recursos" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair">
            Tudo que você precisa para sua <span className="gradient-text">prática</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MuseTera oferece todas as ferramentas necessárias para uma gestão completa 
            e eficiente da sua prática em musicoterapia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
