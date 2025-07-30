import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5581986953506"; // WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre o MuseTera.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-32 right-6 z-50">
      {/* Botão principal */}
      <Button
        onClick={handleWhatsAppClick}
        className="relative h-20 w-20 rounded-full bg-transparent hover:bg-transparent shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group border-0 p-0 animate-bounce"
        size="icon"
        title="💬 Fale conosco no WhatsApp"
      >
        {/* Ícone do WhatsApp */}
        <img 
          src="/lovable-uploads/b120cbdf-87e8-4764-95d5-9ce1d865b19b.png" 
          alt="WhatsApp" 
          className="w-full h-full group-hover:scale-110 transition-transform duration-200 rounded-full"
        />
        
        {/* Badge de notificação */}
        <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white animate-bounce">
          <div className="h-full w-full bg-red-400 rounded-full animate-pulse"></div>
        </div>
      </Button>
      
      {/* Texto flutuante */}
      <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-sm font-medium text-gray-800 whitespace-nowrap">Converse conosco!</span>
      </div>
    </div>
  );
};

export default WhatsAppFloat;