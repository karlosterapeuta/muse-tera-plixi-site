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
    const { message, userMessage, aiResponse } = await req.json()
    
    console.log('📨 Recebida mensagem do chat')
    console.log('👤 Usuário:', userMessage?.substring(0, 100))
    console.log('🤖 Sofia:', aiResponse?.substring(0, 100))

    // Validar que temos conteúdo válido
    if (!message || !userMessage || !aiResponse || aiResponse.trim() === '') {
      console.log('⚠️ Mensagem inválida ou vazia, ignorando envio para WhatsApp')
      return new Response(
        JSON.stringify({ success: true, message: 'Mensagem ignorada (vazia)' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Enviar para WhatsApp via Twilio (se configurado)
    const twilioSid = Deno.env.get('TWILIO_ACCOUNT_SID')
    const twilioToken = Deno.env.get('TWILIO_AUTH_TOKEN')
    const twilioWhatsappFrom = Deno.env.get('TWILIO_WHATSAPP_FROM')
    const yourWhatsappNumber = Deno.env.get('YOUR_WHATSAPP_NUMBER')

    if (twilioSid && twilioToken && twilioWhatsappFrom && yourWhatsappNumber) {
      console.log('📞 Enviando para WhatsApp via Twilio...')
      
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
            Body: `🎵 Nova conversa MuseTera:\n\n👤 Usuário: ${userMessage}\n\n🤖 Sofia: ${aiResponse}\n\n⏰ ${new Date().toLocaleString('pt-BR')}`
          })
        }
      )

      if (twilioResponse.ok) {
        console.log('✅ Mensagem enviada para WhatsApp com sucesso!')
      } else {
        const errorText = await twilioResponse.text()
        console.error('❌ Erro ao enviar para WhatsApp:', errorText)
      }
    } else {
      console.log('ℹ️ Credenciais do Twilio não configuradas. Mensagem apenas logada.')
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Mensagem processada com sucesso',
        logged: true 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('❌ Erro na função:', error)
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || 'Erro desconhecido' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
