
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Phone } from 'lucide-react';
import { useChatSupport } from '@/hooks/useChatSupport';
import ReactMarkdown from 'react-markdown';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [showText, setShowText] = useState(false);
  const { messages, isLoading, sendMessage } = useChatSupport();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Mostrar texto após 3 segundos
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    await sendMessage(inputMessage);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
          {/* Texto chamativo que aparece depois de um tempo */}
          {showText && (
            <div className="chat-text-appear bg-white rounded-lg shadow-lg px-4 py-2 border border-purple-200 relative">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-800">
                  Tire suas dúvidas!
                </span>
              </div>
              {/* Seta apontando para o botão */}
              <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          )}

          {/* Botão principal com efeitos */}
          <div className="relative">
            {/* Ondas de pulso */}
            <div className="absolute inset-0 -m-2">
              <div className="chat-ripple absolute inset-0"></div>
              <div className="chat-ripple absolute inset-0"></div>
              <div className="chat-ripple absolute inset-0"></div>
            </div>

            <button
              className="chat-button w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:shadow-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-300"
              onClick={() => setIsOpen(true)}
              title="Fale com nossa IA - MuseTera"
            >
              <div className="chat-button-content">
                <MessageCircle className="h-8 w-8 text-white drop-shadow-lg" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bot className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold">IA MuseTera</h3>
                <p className="text-xs opacity-90">Assistente Inteligente</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    {message.isUser ? (
                      <User className="h-3 w-3" />
                    ) : (
                      <Bot className="h-3 w-3 text-blue-600" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    } ${message.isTyping ? 'animate-pulse' : ''}`}
                  >
                    {message.isUser ? (
                      message.text
                    ) : (
                      <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:my-2">
                        <ReactMarkdown
                          components={{
                            p: ({node, ...props}) => <p className="whitespace-pre-wrap" {...props} />,
                            a: ({node, ...props}) => <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc pl-4 my-1" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal pl-4 my-1" {...props} />,
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white flex gap-2">
            <Textarea
              placeholder="Digite sua dúvida sobre o MuseTera..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 min-h-[40px] max-h-20 resize-none"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={inputMessage.trim() === '' || isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-4 bg-white border-t">
            <p className="text-xs text-gray-500 mb-2 mt-2">Perguntas rápidas:</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-8 flex items-center gap-1"
                onClick={() => sendMessage('Quais são os planos e preços?')}
                disabled={isLoading}
              >
                <Zap className="h-3 w-3" />
                Ver Planos
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-8 flex items-center gap-1"
                onClick={() => sendMessage('Como funciona o sistema?')}
                disabled={isLoading}
              >
                <Sparkles className="h-3 w-3" />
                Como Funciona
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-8 flex items-center gap-1"
                onClick={() => sendMessage('Funciona para TEA?')}
                disabled={isLoading}
              >
                🎵
                Para TEA
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-8 flex items-center gap-1 bg-green-50 hover:bg-green-100 border-green-200"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5581986953506', '_blank')}
              >
                <Phone className="h-3 w-3" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSupport;
