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
      text: "Olá! 👋 Sou a Sofia, consultora do MuseTera. Como posso te ajudar hoje?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    // Adicionar mensagem do usuário
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Adicionar mensagem "digitando..." da IA
    const typingMessageId = Date.now() + 1;
    const typingMessage: Message = {
      id: typingMessageId,
      text: 'Sofia está pensando...',
      isUser: false,
      timestamp: new Date(),
      isTyping: true,
    };

    setMessages(prev => [...prev, typingMessage]);

    try {
      // Preparar histórico de conversa para a IA (somente texto, sem mensagens de "digitando")
      const conversationHistory = messages
        .filter(msg => !msg.isTyping)
        .map(msg => ({
          role: msg.isUser ? 'user' : 'assistant',
          content: msg.text
        }));

      // Adicionar mensagem atual do usuário
      conversationHistory.push({
        role: 'user',
        content: messageText
      });

      const CHAT_URL = `https://jztbkimlcrfndooyhohg.supabase.co/functions/v1/chat-ai-response`;

      const response = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6dGJraW1sY3JmbmRvb3lob2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMDIzODQsImV4cCI6MjA1MjY3ODM4NH0.Q6nTndaG8t4rOp-Gp0Fo8JTGPfVKLeKJ25ml_5HpVxs`,
        },
        body: JSON.stringify({ messages: conversationHistory }),
      });

      if (response.status === 429) {
        throw new Error('Muitas mensagens! Aguarde alguns segundos.');
      }
      if (response.status === 402) {
        throw new Error('Serviço temporariamente indisponível. Entre em contato via WhatsApp.');
      }

      if (!response.ok || !response.body) {
        throw new Error('Falha ao iniciar streaming');
      }

      // Remover mensagem "digitando..."
      setMessages(prev => prev.filter(msg => msg.id !== typingMessageId));

      // Criar mensagem da IA que será atualizada
      const aiMessageId = Date.now() + 2;
      let aiResponseText = '';

      setMessages(prev => [...prev, {
        id: aiMessageId,
        text: '',
        isUser: false,
        timestamp: new Date(),
      }]);

      // Processar streaming
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              aiResponseText += content;
              setMessages(prev => prev.map(msg => 
                msg.id === aiMessageId 
                  ? { ...msg, text: aiResponseText }
                  : msg
              ));
            }
          } catch {
            buffer = line + '\n' + buffer;
            break;
          }
        }
      }

      // Processar restos no buffer
      if (buffer.trim()) {
        for (let raw of buffer.split('\n')) {
          if (!raw || raw.startsWith(':') || !raw.startsWith('data: ')) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === '[DONE]') continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              aiResponseText += content;
              setMessages(prev => prev.map(msg => 
                msg.id === aiMessageId 
                  ? { ...msg, text: aiResponseText }
                  : msg
              ));
            }
          } catch {}
        }
      }

      // IMPORTANTE: Enviar para WhatsApp SOMENTE após streaming completo
      if (aiResponseText.trim()) {
        try {
          const whatsappMessage = `Conversa MuseTera:\nUsuário: ${messageText}\nSofia: ${aiResponseText}`;
          supabase.functions.invoke('send-chat-to-whatsapp', {
            body: { 
              message: whatsappMessage,
              userMessage: messageText,
              aiResponse: aiResponseText
            }
          }).catch(() => {
            // Fallback: salvar localmente se WhatsApp falhar
            const chatLog = {
              timestamp: new Date().toISOString(),
              userMessage: messageText,
              aiResponse: aiResponseText
            };
            const existingLogs = localStorage.getItem('musetera_chat_logs');
            const logs = existingLogs ? JSON.parse(existingLogs) : [];
            logs.push(chatLog);
            localStorage.setItem('musetera_chat_logs', JSON.stringify(logs));
          });
        } catch (whatsappError) {
          console.log('Erro ao enviar para WhatsApp:', whatsappError);
        }
      }

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      setMessages(prev => prev.filter(msg => msg.id !== typingMessageId));

      const errorMessage: Message = {
        id: Date.now() + 2,
        text: error instanceof Error ? error.message : 'Desculpe, tive um problema. Tente novamente ou entre em contato pelo WhatsApp: (81) 98695-3506 😊',
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);

      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
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
