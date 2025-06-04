
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

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
      const { data, error } = await supabase.functions.invoke('send-chat-to-whatsapp', {
        body: {
          message: messageText,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          page: window.location.href
        }
      });

      if (error) {
        console.log('Edge Function não encontrada, salvando mensagem localmente:', messageText);
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
          description: "Sua mensagem foi registrada. Para configurar o envio automático para WhatsApp, siga as instruções no arquivo supabaseSetup.md",
        });
      } else {
        toast({
          title: "Mensagem enviada",
          description: "Sua mensagem foi enviada! Responderemos em breve.",
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
        description: "Sua mensagem foi salva localmente. Para configurar o envio automático para WhatsApp, siga as instruções no arquivo supabaseSetup.md",
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
