
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Music } from 'lucide-react';
import { processLogoImage } from '@/utils/processLogo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string>('');

  useEffect(() => {
    const loadLogo = async () => {
      try {
        const processedLogoUrl = await processLogoImage();
        setLogoUrl(processedLogoUrl);
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original image
        setLogoUrl('/lovable-uploads/e5c74d3f-6536-4807-a17c-69707a8d36e8.png');
      }
    };
    loadLogo();
  }, []);

  const navItems = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Preços', href: '#precos' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/8dd8c680-bdcd-488a-837d-634c9bbe6a5d.png" 
              alt="MuseTera Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold font-playfair gradient-text">
              MuseTera
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => window.open('https://portal-musetera.netlify.app/login', '_blank')}
            >
              Entrar
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://portal-musetera.netlify.app/login';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              🚀 Acessar Sistema
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button 
                variant="ghost" 
                className="justify-start text-gray-600 hover:text-blue-600"
                onClick={() => {
                  window.open('https://portal-musetera.netlify.app/login', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Entrar
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white justify-start font-semibold"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://portal-musetera.netlify.app/login';
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  setIsMenuOpen(false);
                }}
              >
                🚀 Acessar Sistema
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
