
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GEMINI_API_KEY = Deno.env.get('GOOGLE_GEMINI_API_KEY');

const MUSETERA_CONTEXT = `
Você é um assistente especializado do MuseTera, um sistema completo para musicoterapeutas. Responda sempre em português de forma amigável e profissional.

INFORMAÇÕES SOBRE OS PLANOS:

1. PLANO SEM FIDELIDADE - R$ 69,90/mês
   - Até 30 pacientes
   - Agendamento básico
   - Relatórios simples
   - Suporte por email
   - 5GB de armazenamento
   - Cancele quando quiser

2. PLANO 6 MESES - R$ 49,90/mês (MAIS POPULAR - 29% de economia)
   - Pacientes ilimitados
   - Agendamento avançado
   - Relatórios detalhados
   - Planos de tratamento
   - Suporte prioritário
   - 50GB de armazenamento
   - Integração com WhatsApp
   - Backup automático

3. PLANO 12 MESES - R$ 39,90/mês (Melhor custo-benefício)
   - Múltiplos terapeutas
   - Gestão de equipe
   - Dashboard executivo
   - API personalizada
   - Suporte dedicado
   - Armazenamento ilimitado
   - Treinamento personalizado
   - Compliance LGPD

FUNCIONALIDADES PRINCIPAIS:
- Gestão completa de pacientes
- Agendamento inteligente
- Planos de tratamento personalizados
- Relatórios de evolução
- Prontuários eletrônicos
- Integração WhatsApp
- Backup automático
- Segurança LGPD

LINKS IMPORTANTES:
- Sistema: https://portal-musetera.netlify.app/
- WhatsApp: https://api.whatsapp.com/send?phone=5581986953506
- Plano 6 meses: https://www.asaas.com/c/6vaoui3drgmdpcex
- Plano 12 meses: https://www.asaas.com/c/gtcimltw64g0odx1

INSTRUÇÕES:
- Sempre seja prestativo e detalhado
- Destaque as vantagens do MuseTera
- Compare os planos quando perguntado
- Incentive a assinatura dos planos mais longos pela economia
- Para dúvidas específicas, direcione ao WhatsApp
- Mantenha tom profissional mas amigável
- Responda apenas sobre MuseTera e musicoterapia
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!GEMINI_API_KEY) {
      throw new Error('Google Gemini API key not configured');
    }

    console.log('Sending message to Gemini:', message);

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${MUSETERA_CONTEXT}\n\nPergunta do cliente: ${message}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.8,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Gemini response:', data);

    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      'Desculpe, não consegui processar sua pergunta. Entre em contato pelo WhatsApp para falar diretamente com nossa equipe.';

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in chat-ai-response function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Erro interno. Tente novamente em alguns instantes.',
        response: 'Desculpe, estou com dificuldades técnicas no momento. Entre em contato pelo WhatsApp para falar diretamente com nossa equipe: https://api.whatsapp.com/send?phone=5581986953506'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
