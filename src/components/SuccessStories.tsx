import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const SuccessStories = () => {
  const [api, setApi] = useState<any>();

  const stories = [
    {
      id: 1,
      category: 'Clínica de imóveis',
      name: 'Dr. Carroll Santos',
      profession: 'Musicoterapeuta',
      memberSince: 'Membro desde Janeiro de 2019',
      followers: '512',
      growth: '+63K',
      color: 'bg-gradient-to-br from-gray-800 to-gray-900',
      textColor: 'text-white',
      avatar: '👨‍⚕️'
    },
    {
      id: 2,
      category: 'Retalho',
      name: 'Dra. Topman Silva',
      profession: 'Especialista em Autismo',
      memberSince: 'Membro desde Nov 2018',
      followers: '755',
      growth: '+213',
      color: 'bg-gradient-to-br from-blue-500 to-purple-600',
      textColor: 'text-white',
      avatar: '👩‍⚕️'
    },
    {
      id: 3,
      category: 'Influencer',
      name: 'Nicolette Mason',
      profession: 'Terapeuta Musical',
      memberSince: 'Membro desde Janeiro de 2021',
      followers: '191',
      growth: '+7K',
      color: 'bg-gradient-to-br from-gray-700 to-black',
      textColor: 'text-white',
      avatar: '🎵'
    },
    {
      id: 4,
      category: 'Corretor',
      name: 'Chad Morrison',
      profession: 'Musicoterapeuta Infantil',
      memberSince: 'Membro desde Dezembro de 2022',
      followers: '289',
      growth: '+15K',
      color: 'bg-gradient-to-br from-orange-400 to-red-500',
      textColor: 'text-white',
      avatar: '🎼'
    },
    {
      id: 5,
      category: 'Empresário',
      name: 'Grant Cardone',
      profession: 'Diretor Clínico',
      memberSince: 'Membro desde Março de 2020',
      followers: '1.2K',
      growth: '+85K',
      color: 'bg-gradient-to-br from-pink-400 to-pink-600',
      textColor: 'text-white',
      avatar: '🏥'
    },
    {
      id: 6,
      category: 'Comércio eletrônico',
      name: 'AWAY Store',
      profession: 'Rede de Clínicas',
      memberSince: 'Membro desde Maio 2019',
      followers: '634',
      growth: '+42K',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      textColor: 'text-black',
      avatar: '🏪'
    }
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair">
            <span className="gradient-text">Histórias de sucesso</span> de clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossos clientes transformaram suas práticas de musicoterapia 
            e alcançaram resultados extraordinários
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {stories.map((story) => (
                <CarouselItem key={story.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className={`${story.color} ${story.textColor} rounded-2xl p-6 h-64 flex flex-col justify-between transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                    <div>
                      <div className="text-sm opacity-80 mb-2">{story.category}</div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-3xl">{story.avatar}</div>
                        <div>
                          <h3 className="text-xl font-bold">{story.name}</h3>
                          <p className="text-sm opacity-90">{story.profession}</p>
                        </div>
                      </div>
                      <div className="text-sm opacity-80 mb-4">{story.memberSince}</div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="text-center">
                        <div className="text-sm opacity-80">Pacientes</div>
                        <div className="text-2xl font-bold">{story.followers}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm opacity-80">Crescimento</div>
                        <div className="text-2xl font-bold text-green-300">{story.growth}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Junte-se a centenas de profissionais que já transformaram suas práticas
          </p>
          <button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://portal-musetera.netlify.app/login', '_blank')}
          >
            Começar agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
