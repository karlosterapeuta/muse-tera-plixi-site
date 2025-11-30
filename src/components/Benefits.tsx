
import { CheckCircle, Clock, TrendingUp, Users, MessageCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Economize 5+ horas por semana',
      description: 'Automatize tarefas administrativas e foque no que realmente importa: seus pacientes.',
      stat: '85%',
      statLabel: 'menos tempo em papelada'
    },
    {
      icon: TrendingUp,
      title: 'Melhore os resultados terapêuticos',
      description: 'Acompanhe o progresso de forma sistemática e tome decisões baseadas em dados.',
      stat: '92%',
      statLabel: 'dos terapeutas reportam melhores resultados'
    },
    {
      icon: Users,
      title: 'Atenda mais pacientes',
      description: 'Otimize sua agenda e processos para expandir sua prática de forma sustentável.',
      stat: '40%',
      statLabel: 'aumento na capacidade de atendimento'
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair">
            Transforme sua <span className="gradient-text">prática profissional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como o MuseTera pode revolucionar a forma como você gerencia 
            sua prática de musicoterapia e melhora os resultados dos seus pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="space-y-6">
                {/* Icon and Stat */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text">{benefit.stat}</div>
                    <div className="text-sm text-gray-500">{benefit.statLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {[
                    'Interface intuitiva',
                    'Suporte especializado',
                    'Atualizações constantes'
                  ].map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
