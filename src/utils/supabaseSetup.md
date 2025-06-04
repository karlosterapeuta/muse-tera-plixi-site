
# Configuração do Supabase para Chat WhatsApp

## Passo 1: Conectar Supabase
1. Clique no botão verde "Supabase" no canto superior direito
2. Conecte seu projeto ao Supabase

## Passo 2: Criar tabela de mensagens
Execute este SQL no Supabase:

```sql
-- Criar tabela para armazenar mensagens do chat
CREATE TABLE chat_messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  message text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  user_agent text,
  page_url text,
  sent_to_whatsapp boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção
CREATE POLICY "Allow insert chat messages" ON chat_messages
  FOR INSERT WITH CHECK (true);
```

## Passo 3: Configurar API do WhatsApp
Você precisará de uma conta em um destes serviços:
- Twilio (recomendado)
- WhatsApp Business API
- Zapier (mais simples)

## Passo 4: Criar Edge Function
No Supabase, crie uma Edge Function chamada `send-chat-to-whatsapp`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, timestamp, userAgent, page } = await req.json()
    
    // Salvar no banco
    const { data, error } = await supabase
      .from('chat_messages')
      .insert([
        { message, timestamp, user_agent: userAgent, page_url: page }
      ])

    if (error) throw error

    // Enviar para WhatsApp via Twilio (configure suas credenciais nos Secrets)
    const twilioResponse = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${Deno.env.get('TWILIO_ACCOUNT_SID')}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(Deno.env.get('TWILIO_ACCOUNT_SID') + ':' + Deno.env.get('TWILIO_AUTH_TOKEN'))}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: `whatsapp:${Deno.env.get('TWILIO_WHATSAPP_FROM')}`,
        To: `whatsapp:${Deno.env.get('YOUR_WHATSAPP_NUMBER')}`,
        Body: `Nova mensagem do chat MuseTera:\n\n${message}\n\nEnviada em: ${timestamp}\nPágina: ${page}`
      })
    })

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
```

## Passo 5: Configurar Secrets no Supabase
Adicione estes secrets no Supabase:
- TWILIO_ACCOUNT_SID
- TWILIO_AUTH_TOKEN  
- TWILIO_WHATSAPP_FROM
- YOUR_WHATSAPP_NUMBER

## Alternativa Simples: Zapier
Se preferir uma solução mais simples, use Zapier:
1. Crie um Zap com trigger "Webhook"
2. Configure action "Send WhatsApp Message"
3. Use a URL de webhook do Zapier no código
