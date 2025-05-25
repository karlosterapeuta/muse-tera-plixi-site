
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      icon: TrendingUp,
      title: 'Clínica Harmonia',
      subtitle: '150% de aumento na eficiência',
      description: 'A Clínica Harmonia conseguiu triplicar o número de pacientes atendidos após implementar o MuseTera, otimizando todos os processos administrativos.',
      metrics: [
        { label: 'Pacientes', value: '500+', growth: '+200%' },
        { label: 'Eficiência', value: '150%', growth: '+150%' },
        { label: 'Satisfação', value: '98%', growth: '+25%' }
      ],
      quote: '"O MuseTera revolucionou nossa prática. Conseguimos focar 100% nos pacientes."',
      author: 'Dra. Mariana Costa',
      role: 'Diretora Clínica'
    },
    {
      icon: Users,
      title: 'Centro Terapêutico Musical',
      subtitle: 'Expansão para 3 unidades',
      description: 'Com o MuseTera, o Centro conseguiu padronizar processos e expandir para 3 unidades, mantendo a qualidade do atendimento em todas.',
      metrics: [
        { label: 'Unidades', value: '3', growth: '+200%' },
        { label: 'Terapeutas', value: '25', growth: '+400%' },
        { label: 'Receita', value: '300%', growth: '+300%' }
      ],
      quote: '"A escalabilidade que o MuseTera oferece é incomparável no mercado."',
      author: 'Prof. Ricardo Silva',
      role: 'CEO'
    },
    {
      icon: Clock,
      title: 'Musicoterapeuta Independente',
      subtitle: '8 horas semanais economizadas',
      description: 'Como profissional autônoma, conseguiu reduzir drasticamente o tempo gasto em administração e aumentar o foco nos tratamentos.',
      metrics: [
        { label: 'Tempo economizado', value: '8h', growth: '+80%' },
        { label: 'Pacientes', value: '120', growth: '+60%' },
        { label: 'Renda', value: '85%', growth: '+85%' }
      ],
      quote: '"Agora posso me dedicar ao que realmente amo: ajudar meus pacientes."',
      author: 'Ana Paula Santos',
      role: 'Musicoterapeuta'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair">
            Histórias de <span className="gradient-text">sucesso</span> de clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como musicoterapeutas e clínicas de todo o Brasil estão 
            transformando suas práticas e alcançando resultados extraordinários.
          </p>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <story.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{story.title}</h3>
                    <p className="text-lg gradient-text font-semibold">{story.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {story.description}
                </p>

                {/* Quote */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 italic text-lg mb-4">{story.quote}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{story.author}</div>
                      <div className="text-sm text-gray-600">{story.role}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
                    Resultados Alcançados
                  </h4>
                  <div className="space-y-6">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                          <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Crescimento</div>
                          <div className="text-lg font-semibold text-green-600">{metric.growth}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold font-playfair mb-4">
            Pronto para ser nossa próxima história de sucesso?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já transformaram suas práticas 
            e alcançaram resultados extraordinários com o MuseTera.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Comece sua transformação agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
