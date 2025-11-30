import { Check, Star, Shield, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { QRCodeSVG } from 'qrcode.react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Pricing = () => {
  const [pixModalOpen, setPixModalOpen] = useState(false);
  const { toast } = useToast();

  const pixKey = 'pixmusetera@gmail.com';
  const planValue = 'R$ 69,90';

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
            suporte completo e cancelamento a qualquer momento.
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
                      window.open('https://www.asaas.com/c/6vaoui3drgmdpcex', '_blank');
                    } else if (plan.name === 'FIDELIDADE 12 Meses') {
                      window.open('https://www.asaas.com/c/gtcimltw64g0odx1', '_blank');
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
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Pagamento via PIX</DialogTitle>
              <DialogDescription className="text-center text-lg font-semibold gradient-text">
                Sem Fidelidade - {planValue}
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex flex-col items-center space-y-6 py-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <QRCodeSVG 
                  value={pixKey}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>

              <div className="w-full space-y-2">
                <p className="text-sm font-medium text-gray-700">Chave PIX (E-mail):</p>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="flex-1 text-sm font-mono">{pixKey}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopyPixKey}
                    className="h-8 w-8"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 text-center">
                  ℹ️ Após realizar o pagamento, envie o comprovante pelo WhatsApp para ativar seu acesso
                </p>
              </div>

              <Button
                onClick={handleSendReceipt}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Enviar Comprovante via WhatsApp
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Pricing;
