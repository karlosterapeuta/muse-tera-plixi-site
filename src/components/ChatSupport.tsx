
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useChatSupport } from '@/hooks/useChatSupport';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const { messages, isLoading, sendMessage } = useChatSupport();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        <Button
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg z-50 animate-pulse"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
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
                    {message.text}
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
          <div className="px-4 pb-4 bg-white">
            <div className="flex gap-2 text-xs">
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-7"
                onClick={() => sendMessage('Quais são os planos e preços?')}
                disabled={isLoading}
              >
                Ver Planos
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-7"
                onClick={() => sendMessage('Como funciona o sistema?')}
                disabled={isLoading}
              >
                Como Funciona
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-7"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5581986953506', '_blank')}
              >
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
