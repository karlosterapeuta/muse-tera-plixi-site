import { Check, Star, Shield, Copy, CreditCard, Smartphone, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { QRCodeSVG } from 'qrcode.react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { generatePixPayload } from '@/utils/pixGenerator';

const Pricing = () => {
  const [pixModalOpen, setPixModalOpen] = useState(false);
  const [pix6MesesModalOpen, setPix6MesesModalOpen] = useState(false);
  const [pix12MesesModalOpen, setPix12MesesModalOpen] = useState(false);
  const [showPixQRCode, setShowPixQRCode] = useState<'6meses' | '12meses' | null>(null);
  const [paymentSuccessPlan, setPaymentSuccessPlan] = useState<'semFidelidade' | '6meses' | '12meses' | null>(null);
  const { toast } = useToast();

  const pixKey = 'pixmusetera@gmail.com';
  const planValue = 'R$ 69,90';
  const planValue6Meses = 'R$ 299,00';
  const planValue12Meses = 'R$ 478,80';

  // Gerar payloads PIX com valores corretos
  const pixPayloadSemFidelidade = generatePixPayload({
    pixKey,
    beneficiaryName: 'MUSETERA',
    city: 'RECIFE',
    amount: 69.90
  });

  const pixPayload6Meses = generatePixPayload({
    pixKey,
    beneficiaryName: 'MUSETERA',
    city: 'RECIFE',
    amount: 299.00
  });

  const pixPayload12Meses = generatePixPayload({
    pixKey,
    beneficiaryName: 'MUSETERA',
    city: 'RECIFE',
    amount: 478.80
  });

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast({
      title: "Chave PIX copiada!",
      description: "Cole no seu app de pagamento",
    });
  };

  const handleSendReceipt = () => {
    const message = `Olá! Acabei de fazer o pagamento do plano Sem Fidelidade (${planValue}) via PIX. Segue o comprovante.`;
    window.open(`https://api.whatsapp.com/send?phone=5581986953506&text=${encodeURIComponent(message)}`, '_blank');
    setPaymentSuccessPlan('semFidelidade');
  };

  const handleSendReceipt6Meses = () => {
    const message = `Olá! Acabei de fazer o pagamento do plano FIDELIDADE 6 Meses (${planValue6Meses}) via PIX. Segue o comprovante.`;
    window.open(`https://api.whatsapp.com/send?phone=5581986953506&text=${encodeURIComponent(message)}`, '_blank');
    setPaymentSuccessPlan('6meses');
  };

  const handleSendReceipt12Meses = () => {
    const message = `Olá! Acabei de fazer o pagamento do plano FIDELIDADE 12 Meses (${planValue12Meses}) via PIX. Segue o comprovante.`;
    window.open(`https://api.whatsapp.com/send?phone=5581986953506&text=${encodeURIComponent(message)}`, '_blank');
    setPaymentSuccessPlan('12meses');
  };

  const handleCloseSuccessModal = () => {
    setPaymentSuccessPlan(null);
    setPixModalOpen(false);
    setPix6MesesModalOpen(false);
    setPix12MesesModalOpen(false);
    setShowPixQRCode(null);
  };

  const plans = [
    {
      name: 'Sem Fidelidade 30 dias',
      price: 'R$ 69,90',
      period: '/mês',
      description: 'Flexibilidade máxima para seu negócio',
      features: [
        'Pacientes ilimitados',
        'Agendamento avançado',
        'Relatórios detalhados',
        'Planos de tratamento',
        'Suporte prioritário',
        '50GB de armazenamento'
      ],
      cta: 'Assinar Plano',
      popular: false,
      refundGuarantee: true
    },
    {
      name: 'FIDELIDADE 6 Meses',
      price: 'R$ 49,90',
      period: '/mês',
      description: 'Economia de 29% com compromisso semestral',
      features: [
        'Pacientes ilimitados',
        'Agendamento avançado',
        'Relatórios detalhados',
        'Planos de tratamento',
        'Suporte prioritário',
        '50GB de armazenamento'
      ],
      cta: 'Assinar Plano',
      popular: true,
      refundGuarantee: true
    },
    {
      name: 'FIDELIDADE 12 Meses',
      price: 'R$ 39,90',
      period: '/mês',
      description: 'Melhor custo-benefício com plano anual',
      features: [
        'Pacientes ilimitados',
        'Agendamento avançado',
        'Relatórios detalhados',
        'Planos de tratamento',
        'Suporte prioritário',
        '50GB de armazenamento'
      ],
      cta: 'Assinar Plano',
      popular: false,
      refundGuarantee: true
    }
  ];

  return (
    <section id="precos" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair">
            Planos que <span className="gradient-text">crescem</span> com você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua prática. Todos os planos incluem 
            suporte completo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 shadow-2xl scale-105' 
                  : 'shadow-lg hover:shadow-xl'
              } transition-all duration-300 hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <div className="pt-4">
                  <span className="text-4xl lg:text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {plan.refundGuarantee && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-green-700">
                      7 dias de garantia de reembolso
                    </span>
                  </div>
                )}

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                      : 'border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 bg-white'
                  } transition-all duration-300`}
                  onClick={() => {
                    if (plan.name === 'Sem Fidelidade 30 dias') {
                      setPixModalOpen(true);
                    } else if (plan.name === 'FIDELIDADE 6 Meses') {
                      setPix6MesesModalOpen(true);
                      setShowPixQRCode(null);
                    } else if (plan.name === 'FIDELIDADE 12 Meses') {
                      setPix12MesesModalOpen(true);
                      setShowPixQRCode(null);
                    }
                  }}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={pixModalOpen} onOpenChange={setPixModalOpen}>
          <DialogContent className="max-w-[95vw] sm:max-w-md mx-4">
            {paymentSuccessPlan === 'semFidelidade' ? (
              <>
                <DialogHeader>
                  <DialogTitle className="sr-only">Pagamento Confirmado</DialogTitle>
                </DialogHeader>
                
                <div className="flex flex-col items-center space-y-6 py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Pagamento efetuado com sucesso!
                    </h3>
                    <p className="text-gray-600">
                      Seu comprovante foi enviado. Aguarde a confirmação do nosso time para ativar seu acesso.
                    </p>
                  </div>

                  <Button
                    onClick={handleCloseSuccessModal}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Fechar
                  </Button>
                </div>
              </>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-center">Pagamento via PIX</DialogTitle>
                  <DialogDescription className="text-center text-base sm:text-lg font-semibold gradient-text">
                    Sem Fidelidade - {planValue}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="flex flex-col items-center space-y-4 py-4">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <QRCodeSVG 
                      value={pixPayloadSemFidelidade}
                      size={160}
                      level="H"
                      includeMargin={true}
                    />
                  </div>

                  <div className="w-full space-y-2">
                    <p className="text-sm font-medium text-gray-700">Chave PIX (E-mail):</p>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="flex-1 text-xs sm:text-sm break-all">{pixKey}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCopyPixKey}
                        className="h-8 w-8 flex-shrink-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs sm:text-sm text-blue-800 text-center">
                      ℹ️ Após realizar o pagamento, envie o comprovante pelo WhatsApp para ativar seu acesso
                    </p>
                  </div>

                  <Button
                    onClick={handleSendReceipt}
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base"
                  >
                    Enviar Comprovante via WhatsApp
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={pix6MesesModalOpen} onOpenChange={(open) => {
          setPix6MesesModalOpen(open);
          if (!open) {
            setShowPixQRCode(null);
            setPaymentSuccessPlan(null);
          }
        }}>
          <DialogContent className="max-w-[95vw] sm:max-w-lg mx-4">
            {paymentSuccessPlan === '6meses' ? (
              <>
                <DialogHeader>
                  <DialogTitle className="sr-only">Pagamento Confirmado</DialogTitle>
                </DialogHeader>
                
                <div className="flex flex-col items-center space-y-6 py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Pagamento efetuado com sucesso!
                    </h3>
                    <p className="text-gray-600">
                      Seu comprovante foi enviado. Aguarde a confirmação do nosso time para ativar seu acesso.
                    </p>
                  </div>

                  <Button
                    onClick={handleCloseSuccessModal}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Fechar
                  </Button>
                </div>
              </>
            ) : showPixQRCode === '6meses' ? (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-center">Pagamento via PIX</DialogTitle>
                  <DialogDescription className="text-center text-base sm:text-lg font-semibold gradient-text">
                    FIDELIDADE 6 Meses - {planValue6Meses}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="flex flex-col items-center space-y-4 py-4">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <QRCodeSVG 
                      value={pixPayload6Meses}
                      size={160}
                      level="H"
                      includeMargin={true}
                    />
                  </div>

                  <div className="w-full space-y-2">
                    <p className="text-sm font-medium text-gray-700">Chave PIX (E-mail):</p>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="flex-1 text-xs sm:text-sm break-all">{pixKey}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCopyPixKey}
                        className="h-8 w-8 flex-shrink-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs sm:text-sm text-blue-800 text-center">
                      ℹ️ Após realizar o pagamento, envie o comprovante pelo WhatsApp para ativar seu acesso
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <Button
                      variant="outline"
                      onClick={() => setShowPixQRCode(null)}
                      className="flex-1"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Voltar
                    </Button>
                    <Button
                      onClick={handleSendReceipt6Meses}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    >
                      Enviar Comprovante
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-center">Escolha a forma de pagamento</DialogTitle>
                  <DialogDescription className="text-center text-base sm:text-lg font-semibold gradient-text">
                    FIDELIDADE 6 Meses
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => window.open('https://www.asaas.com/c/6vaoui3drgmdpcex', '_blank')}>
                    <CardHeader className="text-center space-y-4 pb-8">
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <CreditCard className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardContent className="space-y-2 p-0">
                        <h3 className="text-xl font-bold">Cartão</h3>
                        <p className="text-sm text-muted-foreground">6x de R$ 49,90</p>
                        <p className="text-xs text-muted-foreground">(parcelado)</p>
                        <Button className="w-full mt-4">
                          Pagar com Cartão
                        </Button>
                      </CardContent>
                    </CardHeader>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowPixQRCode('6meses')}>
                    <CardHeader className="text-center space-y-4 pb-8">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Smartphone className="h-8 w-8 text-green-600" />
                      </div>
                      <CardContent className="space-y-2 p-0">
                        <h3 className="text-xl font-bold">PIX</h3>
                        <p className="text-sm text-muted-foreground">{planValue6Meses}</p>
                        <p className="text-xs text-muted-foreground">(à vista)</p>
                        <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                          Pagar com PIX
                        </Button>
                      </CardContent>
                    </CardHeader>
                  </Card>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={pix12MesesModalOpen} onOpenChange={(open) => {
          setPix12MesesModalOpen(open);
          if (!open) {
            setShowPixQRCode(null);
            setPaymentSuccessPlan(null);
          }
        }}>
          <DialogContent className="max-w-[95vw] sm:max-w-lg mx-4">
            {paymentSuccessPlan === '12meses' ? (
              <>
                <DialogHeader>
                  <DialogTitle className="sr-only">Pagamento Confirmado</DialogTitle>
                </DialogHeader>
                
                <div className="flex flex-col items-center space-y-6 py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Pagamento efetuado com sucesso!
                    </h3>
                    <p className="text-gray-600">
                      Seu comprovante foi enviado. Aguarde a confirmação do nosso time para ativar seu acesso.
                    </p>
                  </div>

                  <Button
                    onClick={handleCloseSuccessModal}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Fechar
                  </Button>
                </div>
              </>
            ) : showPixQRCode === '12meses' ? (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-center">Pagamento via PIX</DialogTitle>
                  <DialogDescription className="text-center text-base sm:text-lg font-semibold gradient-text">
                    FIDELIDADE 12 Meses - {planValue12Meses}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="flex flex-col items-center space-y-4 py-4">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <QRCodeSVG 
                      value={pixPayload12Meses}
                      size={160}
                      level="H"
                      includeMargin={true}
                    />
                  </div>

                  <div className="w-full space-y-2">
                    <p className="text-sm font-medium text-gray-700">Chave PIX (E-mail):</p>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="flex-1 text-xs sm:text-sm break-all">{pixKey}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCopyPixKey}
                        className="h-8 w-8 flex-shrink-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs sm:text-sm text-blue-800 text-center">
                      ℹ️ Após realizar o pagamento, envie o comprovante pelo WhatsApp para ativar seu acesso
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <Button
                      variant="outline"
                      onClick={() => setShowPixQRCode(null)}
                      className="flex-1"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Voltar
                    </Button>
                    <Button
                      onClick={handleSendReceipt12Meses}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    >
                      Enviar Comprovante
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-center">Escolha a forma de pagamento</DialogTitle>
                  <DialogDescription className="text-center text-base sm:text-lg font-semibold gradient-text">
                    FIDELIDADE 12 Meses
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => window.open('https://www.asaas.com/c/gtcimltw64g0odx1', '_blank')}>
                    <CardHeader className="text-center space-y-4 pb-8">
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <CreditCard className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardContent className="space-y-2 p-0">
                        <h3 className="text-xl font-bold">Cartão</h3>
                        <p className="text-sm text-muted-foreground">12x de R$ 39,90</p>
                        <p className="text-xs text-muted-foreground">(parcelado)</p>
                        <Button className="w-full mt-4">
                          Pagar com Cartão
                        </Button>
                      </CardContent>
                    </CardHeader>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowPixQRCode('12meses')}>
                    <CardHeader className="text-center space-y-4 pb-8">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Smartphone className="h-8 w-8 text-green-600" />
                      </div>
                      <CardContent className="space-y-2 p-0">
                        <h3 className="text-xl font-bold">PIX</h3>
                        <p className="text-sm text-muted-foreground">{planValue12Meses}</p>
                        <p className="text-xs text-muted-foreground">(à vista)</p>
                        <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                          Pagar com PIX
                        </Button>
                      </CardContent>
                    </CardHeader>
                  </Card>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Pricing;
