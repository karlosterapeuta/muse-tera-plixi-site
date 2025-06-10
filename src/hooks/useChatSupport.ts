
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

export const useChatSupport = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou o assistente inteligente do MuseTera. Como posso ajudá-lo hoje? Posso tirar dúvidas sobre nossos planos, funcionalidades e valores!",
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

    // Adicionar mensagem de "digitando..."
    const typingMessage: Message = {
      id: messages.length + 2,
      text: "Digitando...",
      isUser: false,
      timestamp: new Date(),
      isTyping: true
    };

    setMessages(prev => [...prev, typingMessage]);

    try {
      console.log('Enviando mensagem para IA:', messageText);

      // Chamar a Edge Function da IA
      const { data, error } = await supabase.functions.invoke('chat-ai-response', {
        body: { message: messageText }
      });

      if (error) {
        console.error('Erro na chamada da função:', error);
        throw error;
      }

      console.log('Resposta recebida:', data);

      // Remover mensagem de "digitando..." e adicionar resposta da IA
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.isTyping);
        return [...withoutTyping, {
          id: prev.length + 1,
          text: data.response || 'Olá! Como posso ajudá-lo com o MuseTera hoje?',
          isUser: false,
          timestamp: new Date()
        }];
      });

      // Tentar salvar no Supabase (opcional)
      try {
        await supabase.functions.invoke('send-chat-to-whatsapp', {
          body: {
            message: messageText,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            page: window.location.href
          }
        });
      } catch (whatsappError) {
        console.log('WhatsApp logging falhou, salvando localmente:', whatsappError);
        // Fallback: salvar localmente se WhatsApp falhar
        const savedMessages = JSON.parse(localStorage.getItem('chat_messages') || '[]');
        savedMessages.push({
          message: messageText,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          page: window.location.href
        });
        localStorage.setItem('chat_messages', JSON.stringify(savedMessages));
      }

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      // Remover mensagem de "digitando..." e adicionar mensagem de erro melhorada
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.isTyping);
        return [...withoutTyping, {
          id: prev.length + 1,
          text: 'Olá! Nosso assistente IA está temporariamente indisponível, mas posso ajudá-lo de outra forma!\n\n🎵 **MuseTera - Sistema para Musicoterapeutas**\n\n**Nossos planos:**\n• Sem fidelidade: R$ 69,90/mês\n• 6 meses: R$ 49,90/mês (economia de 29%)\n• 12 meses: R$ 39,90/mês (melhor custo-benefício)\n\nPara falar diretamente com nossa equipe: https://api.whatsapp.com/send?phone=5581986953506',
          isUser: false,
          timestamp: new Date()
        }];
      });

      toast({
        title: "Assistente IA temporariamente indisponível",
        description: "Você ainda pode usar o chat ou entrar em contato pelo WhatsApp para falar com nossa equipe.",
        variant: "default"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage
  };
};
