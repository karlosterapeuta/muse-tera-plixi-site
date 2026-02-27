import { useState } from 'react';
import { Calendar, Users, FileText, BarChart3, Heart, Shield, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Features = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'gestao', name: 'Gestão' },
    { id: 'produtividade', name: 'Produtividade' },
    { id: 'seguranca', name: 'Segurança' }
  ];

  const features = [
    { icon: Users, title: 'Gestão de Pacientes', description: 'Organize todos os dados dos seus pacientes em um só lugar, com histórico completo e informações importantes.', gradient: 'from-blue-500 to-blue-600', category: 'gestao', featured: true, badge: null },
    { icon: Calendar, title: 'Agendamento Inteligente', description: 'Sistema de agendamento automático com lembretes por email e WhatsApp para pacientes.', gradient: 'from-purple-500 to-purple-600', category: 'produtividade', featured: false, badge: 'Popular' },
    { icon: FileText, title: 'Planos de Tratamento', description: 'Crie e personalize planos terapêuticos individualizados com objetivos e atividades específicas.', gradient: 'from-green-500 to-green-600', category: 'gestao', featured: false, badge: null },
    { icon: BarChart3, title: 'Relatórios e Análises', description: 'Acompanhe o progresso dos pacientes com gráficos detalhados e relatórios profissionais.', gradient: 'from-orange-500 to-orange-600', category: 'produtividade', featured: false, badge: null },
    { icon: Heart, title: 'Avaliação Terapêutica', description: 'Ferramentas especializadas para avaliar o progresso emocional e cognitivo dos pacientes.', gradient: 'from-pink-500 to-pink-600', category: 'gestao', featured: false, badge: null },
    { icon: Shield, title: 'Segurança e Privacidade', description: 'Seus dados e dos pacientes protegidos com criptografia de ponta e conformidade com LGPD.', gradient: 'from-indigo-500 to-indigo-600', category: 'seguranca', featured: false, badge: 'LGPD' }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory);

  return (
    <section 
      id="recursos" 
      className="section-padding bg-background relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-padding relative">
        {/* Header */}
        <div className={`text-center space-y-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Recursos Poderosos</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-playfair text-foreground">
            Tudo que você precisa para sua <span className="gradient-text">prática</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MuseTera oferece todas as ferramentas necessárias para uma gestão completa 
            e eficiente da sua prática em musicoterapia.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/20'
                  : 'bg-gray-100 text-muted-foreground hover:bg-gray-200 hover:text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`glass-card-premium hover-glow-enhanced group relative overflow-hidden ${
                feature.featured ? 'md:col-span-2 lg:col-span-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Badge */}
              {feature.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg">
                    {feature.badge}
                  </span>
                </div>
              )}

              <CardContent className={`p-8 ${feature.featured ? 'lg:p-10' : ''}`}>
                <div className={`space-y-5 ${feature.featured ? 'lg:flex lg:items-start lg:gap-8 lg:space-y-0' : ''}`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className={`font-semibold text-foreground group-hover:text-primary transition-colors ${
                      feature.featured ? 'text-2xl' : 'text-xl'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${
                      feature.featured ? 'text-base' : 'text-sm'
                    }`}>
                      {feature.description}
                    </p>
                    {feature.featured && (
                      <div className="pt-4 flex flex-wrap gap-3">
                        <span className="px-3 py-1 text-xs bg-gray-100 rounded-full text-muted-foreground border border-gray-200">
                          Histórico completo
                        </span>
                        <span className="px-3 py-1 text-xs bg-gray-100 rounded-full text-muted-foreground border border-gray-200">
                          Anexos ilimitados
                        </span>
                        <span className="px-3 py-1 text-xs bg-gray-100 rounded-full text-muted-foreground border border-gray-200">
                          Busca avançada
                        </span>
                      </div>
                    )}
                  </div>
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
