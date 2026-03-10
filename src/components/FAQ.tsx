import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    { category: 'Geral', question: 'O MuseTera é específico para musicoterapeutas?', answer: 'Sim! O MuseTera foi desenvolvido exclusivamente para musicoterapeutas por uma equipe que inclui profissionais da área. Todas as funcionalidades são pensadas para as necessidades específicas da musicoterapia, incluindo planos de tratamento musicais, escalas específicas e relatórios adaptados para a prática clínica em musicoterapia.' },
    { category: 'Segurança', question: 'Meus dados e dos pacientes estão seguros?', answer: 'Absolutamente! Utilizamos criptografia de ponta (AES-256), servidores seguros no Brasil, backup automático diário e somos 100% compatíveis com a LGPD. Todos os dados são armazenados em conformidade com as normas do Conselho Federal de Medicina e regulamentações de proteção de dados de saúde. Realizamos auditorias de segurança trimestrais.' },
    { category: 'Funcionalidades', question: 'Posso usar em consultório e atendimento domiciliar?', answer: 'Sim! O MuseTera funciona perfeitamente em qualquer lugar com internet. Você pode acessar via computador, tablet ou smartphone, fazer anotações durante as sessões, acessar históricos dos pacientes e até trabalhar offline (sincroniza quando voltar a conexão). Ideal para atendimentos domiciliares, hospitalares ou no consultório.' },
    { category: 'Preços', question: 'Posso cancelar a qualquer momento?', answer: 'Sim, você pode solicitar o cancelamento a qualquer momento.\n\nA lei garante 7 dias para arrependimento e reembolso integral em compras online.\n\nApós esse prazo, não existe obrigação de reembolso em nenhum plano.\n\nEm planos com fidelidade, o cliente recebe desconto por permanência mínima e, por isso, não há devolução de valores se cancelar antes do prazo.' },
    { category: 'Suporte', question: 'Que tipo de suporte vocês oferecem?', answer: 'Oferecemos suporte completo em português: chat online durante horário comercial, email com resposta em até 2 horas, base de conhecimento completa, vídeos tutoriais e webinars mensais de treinamento. Usuários dos planos semestrais e anuais têm suporte prioritário e treinamento personalizado.' },
    { category: 'Integração', question: 'Posso integrar com outros sistemas?', answer: 'Sim! O MuseTera se integra com WhatsApp para envio de lembretes, Google Calendar para sincronização de agenda, sistemas de prontuário eletrônico via API, e exporta dados para Excel/PDF. Também temos integração com principais métodos de pagamento e sistemas de telemedicina.' },
    { category: 'Funcionalidades', question: 'Como funciona o agendamento automatizado?', answer: 'O sistema permite agendamento online pelos pacientes (opcional), envia lembretes automáticos por WhatsApp e email, gerencia lista de espera automaticamente, e permite reagendamentos fáceis. Você define suas regras de negócio e o sistema cuida do resto, reduzindo faltas em até 60%.' },
    { category: 'Relatórios', question: 'Posso personalizar os relatórios?', answer: 'Sim! Oferecemos modelos prontos para musicoterapia e também permite total personalização. Você pode criar relatórios com sua logo, incluir gráficos de evolução, escalas específicas da musicoterapia, fotos e áudios das sessões. Ideal para apresentar resultados para famílias, escolas e equipes multidisciplinares.' }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      {/* Background depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
      </div>
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 shadow-lg shadow-primary/15">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-foreground">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre o MuseTera. 
            Não encontrou sua resposta? Entre em contato conosco!
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <span 
              key={category}
              className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass-card overflow-hidden border-gray-200 hover:border-gray-300 transition-all">
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded border border-blue-100">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="text-blue-600">
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-muted-foreground leading-relaxed pt-4 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
