import { Music, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Produto': [
      'Recursos',
      'Preços',
      'Segurança',
      'Atualizações'
    ],
    'Suporte': [
      'Central de Ajuda',
      'Documentação',
      'Contato',
      'Status do Sistema'
    ],
    'Empresa': [
      'Sobre nós',
      'Blog',
      'Carreiras',
      'Imprensa'
    ],
    'Legal': [
      'Privacidade',
      'Termos de Uso',
      'LGPD',
      'Cookies'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Inspirational Quote Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="container-padding text-center">
          <p className="text-lg lg:text-xl font-medium text-white italic max-w-4xl mx-auto">
            "Portanto, quer comais quer bebais, ou façais qualquer outra coisa, fazei tudo para glória de Deus."
          </p>
          <span className="text-sm text-blue-100 mt-2 block">1 Coríntios 10:31</span>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/musetera-logo.jpeg" 
                alt="MuseTera Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-xl font-bold font-playfair">MuseTera</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A plataforma completa para musicoterapeutas organizarem sua prática 
              e proporcionarem o melhor cuidado aos seus pacientes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/sistema_musetera/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="font-semibold text-lg">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">portal.musetera@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">(81) 98695-3506</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">Pernambuco, Brasil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 MuseTera. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
