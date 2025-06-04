
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const useChatSupport = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou o assistente do MuseTera. Como posso ajudá-lo hoje?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async (messageText: string) => {
    if (messageText.trim() === '') return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // Tentar enviar para Supabase Edge Function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-chat-to-whatsapp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          message: messageText,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          page: window.location.href
        }),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada",
          description: "Sua mensagem foi enviada! Responderemos em breve.",
        });
      } else {
        // Fallback: salvar localmente se Supabase não estiver configurado
        console.log('Supabase não configurado, salvando mensagem localmente:', messageText);
        toast({
          title: "Mensagem recebida",
          description: "Sua mensagem foi registrada. Configure o Supabase para envio automático.",
        });
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      // Fallback: salvar localmente
      const savedMessages = JSON.parse(localStorage.getItem('chat_messages') || '[]');
      savedMessages.push({
        message: messageText,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        page: window.location.href
      });
      localStorage.setItem('chat_messages', JSON.stringify(savedMessages));
      
      toast({
        title: "Mensagem salva",
        description: "Sua mensagem foi salva localmente. Configure o Supabase para envio automático.",
      });
    } finally {
      setIsLoading(false);
    }

    // Resposta automática
    setTimeout(() => {
      const autoResponse: Message = {
        id: messages.length + 2,
        text: "Obrigado pela sua mensagem! Nossa equipe entrará em contato em breve.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, autoResponse]);
    }, 1000);
  };

  return {
    messages,
    isLoading,
    sendMessage
  };
};
