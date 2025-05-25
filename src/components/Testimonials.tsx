
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dra. Ana Paula Silva',
      role: 'Musicoterapeuta, 8 anos de experiência',
      content: 'O MuseTera revolucionou minha prática. Consigo acompanhar o progresso dos meus pacientes de forma muito mais eficiente e os relatórios me ajudam a ajustar os tratamentos constantemente.',
      rating: 5,
      avatar: 'AS'
    },
    {
      name: 'Prof. Carlos Mendes',
      role: 'Diretor de Clínica de Musicoterapia',
      content: 'Implementamos o MuseTera em nossa clínica e a diferença foi imediata. A organização dos dados e a facilidade de agendamento aumentaram nossa eficiência em 40%.',
      rating: 5,
      avatar: 'CM'
    },
    {
      name: 'Mariana Santos',
      role: 'Musicoterapeuta Pediátrica',
      content: 'Como trabalho com crianças, preciso de ferramentas que sejam práticas e eficientes. O MuseTera me permite focar totalmente nas sessões, sabendo que toda a parte administrativa está organizada.',
      rating: 5,
      avatar: 'MS'
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair">
            O que dizem nossos <span className="gradient-text">profissionais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Musicoterapeutas de todo o Brasil já estão transformando suas práticas 
            com o MuseTera. Veja alguns depoimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Musicoterapeutas</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15k+</div>
              <div className="text-blue-100">Sessões realizadas</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfação dos usuários</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
