
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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
    
    console.log('Recebida mensagem do chat:', message)

    // Inicializar cliente Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Salvar mensagem no banco de dados
    const { data, error } = await supabase
      .from('chat_messages')
      .insert([
        { 
          message, 
          timestamp, 
          user_agent: userAgent, 
          page_url: page 
        }
      ])

    if (error) {
      console.error('Erro ao salvar no banco:', error)
      throw error
    }

    console.log('Mensagem salva no banco:', data)

    // Enviar para WhatsApp via Twilio (se configurado)
    const twilioSid = Deno.env.get('TWILIO_ACCOUNT_SID')
    const twilioToken = Deno.env.get('TWILIO_AUTH_TOKEN')
    const twilioWhatsappFrom = Deno.env.get('TWILIO_WHATSAPP_FROM')
    const yourWhatsappNumber = Deno.env.get('YOUR_WHATSAPP_NUMBER')

    if (twilioSid && twilioToken && twilioWhatsappFrom && yourWhatsappNumber) {
      console.log('Enviando para WhatsApp via Twilio...')
      
      const twilioResponse = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${btoa(twilioSid + ':' + twilioToken)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            From: `whatsapp:${twilioWhatsappFrom}`,
            To: `whatsapp:${yourWhatsappNumber}`,
            Body: `Nova mensagem do chat MuseTera:\n\n${message}\n\nEnviada em: ${timestamp}\nPágina: ${page}`
          })
        }
      )

      if (twilioResponse.ok) {
        console.log('Mensagem enviada para WhatsApp com sucesso!')
      } else {
        const error = await twilioResponse.text()
        console.error('Erro ao enviar para WhatsApp:', error)
      }
    } else {
      console.log('Credenciais do Twilio não configuradas, mensagem apenas salva no banco')
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Mensagem processada com sucesso' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Erro na função:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
