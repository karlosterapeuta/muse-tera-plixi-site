
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'R$ 49',
      period: '/mês',
      description: 'Perfeito para musicoterapeutas iniciantes',
      features: [
        'Até 30 pacientes',
        'Agendamento básico',
        'Relatórios simples',
        'Suporte por email',
        '5GB de armazenamento'
      ],
      cta: 'Começar teste grátis',
      popular: false
    },
    {
      name: 'Professional',
      price: 'R$ 99',
      period: '/mês',
      description: 'Para profissionais estabelecidos',
      features: [
        'Pacientes ilimitados',
        'Agendamento avançado',
        'Relatórios detalhados',
        'Planos de tratamento',
        'Suporte prioritário',
        '50GB de armazenamento',
        'Integração com WhatsApp',
        'Backup automático'
      ],
      cta: 'Começar teste grátis',
      popular: true
    },
    {
      name: 'Clinic',
      price: 'R$ 199',
      period: '/mês',
      description: 'Para clínicas e equipes',
      features: [
        'Múltiplos terapeutas',
        'Gestão de equipe',
        'Dashboard executivo',
        'API personalizada',
        'Suporte dedicado',
        'Armazenamento ilimitado',
        'Treinamento personalizado',
        'Compliance LGPD'
      ],
      cta: 'Falar com vendas',
      popular: false
    }
  ];

  return (
    <section id="precos" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair">
            Planos que <span className="gradient-text">crescem</span> com você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua prática. Todos incluem 14 dias de teste grátis, 
            sem compromisso e cancelamento a qualquer momento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 shadow-2xl scale-105' 
                  : 'shadow-lg hover:shadow-xl'
              } transition-all duration-300 hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <div className="pt-4">
                  <span className="text-4xl lg:text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                      : 'border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 bg-white'
                  } transition-all duration-300`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold font-playfair mb-8">Perguntas Frequentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Posso cancelar a qualquer momento?',
                answer: 'Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento.'
              },
              {
                question: 'Os dados são seguros?',
                answer: 'Absolutamente. Utilizamos criptografia de ponta e somos 100% compatíveis com a LGPD.'
              },
              {
                question: 'Há suporte em português?',
                answer: 'Sim! Nosso suporte é 100% em português e especializado em musicoterapia.'
              },
              {
                question: 'Posso migrar de plano?',
                answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.'
              }
            ].map((faq, index) => (
              <div key={index} className="text-left">
                <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
