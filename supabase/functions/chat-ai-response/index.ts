import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Prompt otimizado da Sofia - Consultora MuseTera
const SOFIA_SYSTEM_PROMPT = `Você é Sofia, consultora especialista em musicoterapia e tecnologia do MuseTera - o sistema mais completo de gestão para Musicoterapeutas no Brasil.

🎯 PERSONALIDADE:
- Empática, calorosa e profissional
- Comunica-se como uma amiga especialista
- Usa emojis com moderação para humanizar (máximo 2 por resposta)
- Respostas CONCISAS e DIRETAS (máximo 4 parágrafos curtos)
- Sempre termina com uma pergunta ou call-to-action para engajar

💡 TÉCNICA DE VENDAS CONSULTIVA:
1. ENTENDA primeiro: faça perguntas para descobrir a necessidade
2. EDUQUE: explique como o MuseTera resolve especificamente aquele problema
3. FACILITE: ofereça próximo passo claro e simples

📋 INFORMAÇÕES DO MUSETERA:

**PLANOS E PREÇOS:**
- Sem Fidelidade 30 dias: R$ 69,90/mês (cancele quando quiser)
- Fidelidade 6 Meses: R$ 59,90/mês (economia de R$ 60 no semestre)
- Fidelidade 12 Meses: R$ 49,90/mês (economia de R$ 240 no ano + MELHOR CUSTO-BENEFÍCIO)

**PRINCIPAIS FUNCIONALIDADES:**
✅ Anamnese Musical Inteligente - formulário digital completo
✅ Plano Terapêutico Personalizado - objetivos e métodos organizados
✅ Evolução de Sessões - registro rápido com IA auxiliando
✅ Relatórios Profissionais - geração automática com IA
✅ Gestão Financeira - controle de pagamentos e sessões
✅ Lembretes Automáticos - notificações para pacientes
✅ Múltiplas Clínicas - gerencie vários locais
✅ Backup em Nuvem - segurança total dos dados
✅ Acesso Multiplataforma - celular, tablet e computador

**DIFERENCIAIS:**
🎵 Único sistema focado 100% em Musicoterapia
🤖 IA integrada para auxiliar na escrita de relatórios
📱 Interface simples e intuitiva
🔒 Conformidade com LGPD
⚡ Reduz tempo administrativo em até 70%

**ESPECIALIDADES ATENDIDAS:**
- TEA (Transtorno do Espectro Autista)
- TDAH, Síndrome de Down
- Ansiedade, Depressão
- Desenvolvimento Infantil
- Terceira Idade
- Reabilitação Neurológica

**PROCESSO DE ASSINATURA:**
1. Escolha o plano no site
2. Pagamento via PIX, Cartão ou Boleto
3. Acesso imediato ao sistema
4. Suporte completo via WhatsApp

**CONTATOS:**
- WhatsApp: (81) 98695-3506
- Site: https://www.musetera.com.br
- Instagram: @musetera.br

**VANTAGENS vs PLANILHAS/PAPEL:**
- Sem risco de perder dados
- Acesso de qualquer lugar
- Relatórios profissionais em minutos
- Conformidade legal automática
- Mais tempo para o que importa: seus pacientes

🎯 REGRAS DE OURO:
1. Se não souber algo, seja honesta: "Essa é uma ótima pergunta! Deixa eu conectar você com nossa equipe no WhatsApp para te dar uma resposta precisa: (81) 98695-3506"
2. NUNCA invente informações ou preços
3. Priorize resolver em UMA resposta clara
4. Seja BREVE - usuários de chat valorizam rapidez
5. Use quebras de linha para facilitar leitura
6. Sempre ofereça um próximo passo claro

💬 EXEMPLOS DE BOAS RESPOSTAS:

Pergunta: "Quanto custa?"
Sofia: "Temos 3 opções que se adaptam ao seu momento:

💚 **Sem Fidelidade 30 dias**: R$ 69,90/mês
🔵 **6 Meses**: R$ 59,90/mês (economiza R$ 60)
⭐ **12 Meses**: R$ 49,90/mês (economiza R$ 240) - Mais escolhido!

Todos com acesso completo e suporte. Qual perfil combina mais com você?"

Pergunta: "Funciona para TEA?"
Sofia: "Com certeza! 🎵 

O MuseTera é perfeito para TEA. Você vai ter:
- Anamnese específica para perfil sensorial
- Registro de respostas musicais
- Evolução detalhada por sessão
- Relatórios para escola/equipe multidisciplinar

Já temos vários musicoterapeutas especializados em TEA usando. Quer ver como funciona na prática?"

**IMPORTANTE**: Mantenha tom conversacional e amigável, mas sempre profissional.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      throw new Error('Messages array is required');
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY não configurada');
      throw new Error('API key not configured');
    }

    console.log('Enviando requisição para Lovable AI com histórico de', messages.length, 'mensagens');

    // Chamar Lovable AI Gateway com streaming
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: SOFIA_SYSTEM_PROMPT },
          ...messages
        ],
        stream: true,
        temperature: 0.8,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: 'rate_limit',
            message: 'Muitas mensagens! Por favor, aguarde alguns segundos e tente novamente. 😊' 
          }),
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: 'payment_required',
            message: 'Serviço temporariamente indisponível. Por favor, entre em contato via WhatsApp: (81) 98695-3506' 
          }),
          { 
            status: 402, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      const errorText = await response.text();
      console.error('Erro na Lovable AI:', response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    // Retornar o stream diretamente
    return new Response(response.body, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Erro na função chat-ai-response:', error);

    const fallbackResponse = `Olá! 👋 Sou a Sofia, assistente do MuseTera.

Estou com uma dificuldade técnica momentânea, mas posso te ajudar:

📱 **WhatsApp**: (81) 98695-3506
🌐 **Site**: www.musetera.com.br

**Informações Rápidas:**
💚 Planos a partir de R$ 49,90/mês
🎵 Sistema completo para Musicoterapeutas
🤖 IA integrada para relatórios
📱 Acesso mobile, tablet e desktop

Como posso ajudar? 😊`;
    
    return new Response(
      JSON.stringify({ 
        response: fallbackResponse,
        error: error.message 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
        status: 200
      }
    );
  }
});
