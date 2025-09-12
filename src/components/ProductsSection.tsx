import { Shield, Monitor, Zap, Target, ShoppingCart } from 'lucide-react';
import socMonitoring from '@/assets/soc-monitoring.jpg';
import pentestImg from '@/assets/pentest.jpg';
import incidentResponse from '@/assets/incident-response.jpg';

const ProductsSection = () => {
  const products = [
    {
      icon: Shield,
      title: 'SECaaS',
      subtitle: 'Security as a Service',
      description: 'Serviços de segurança sob demanda com preços flexíveis por hora. Escale suas necessidades de segurança sem custos fixos.',
      features: ['Modelo pay-per-use', 'Implantação instantânea', 'Consultoria especializada', 'Escalabilidade flexível'],
      image: socMonitoring,
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Monitor,
      title: 'MSSP',
      subtitle: 'Managed Security Services Provider',
      description: 'Serviços SOC gerenciados abrangentes com preços fixos e monitoramento contínuo para total tranquilidade.',
      features: ['Monitoramento SOC 24/7', 'Preços mensais fixos', 'Detecção de ameaças', 'Resposta a incidentes'],
      image: socMonitoring,
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Zap,
      title: 'SRT',
      subtitle: 'SecOffice Response Team',
      description: 'Serviços de resposta a incidentes de emergência - seu "cyber 911" para mitigação imediata de ameaças e recuperação.',
      features: ['Resposta de emergência', 'Implantação rápida', 'Remediação especializada', 'Planejamento de recuperação'],
      image: incidentResponse,
      gradient: 'from-red-500/20 to-orange-500/20',
    },
    {
      icon: Target,
      title: 'Ações Ofensivas',
      subtitle: 'Testes Abrangentes de Segurança',
      description: 'Testes de penetração, avaliação de superfície de ataque e avaliação de riscos na nuvem para identificar vulnerabilidades.',
      features: ['Testes de penetração', 'Mapeamento de superfície de ataque', 'Avaliação de riscos na nuvem', 'Análise de vulnerabilidades'],
      image: pentestImg,
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: ShoppingCart,
      title: 'Re-Sell',
      subtitle: 'Catálogo de Soluções Parceiras',
      description: 'Catálogo completo Fortinet e ofertas de parceiros estratégicos, fornecendo soluções de segurança integradas.',
      features: ['Produtos Fortinet', 'Soluções parceiras', 'Implantação integrada', 'Suporte contínuo'],
      image: socMonitoring,
      gradient: 'from-indigo-500/20 to-blue-500/20',
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Nossos Produtos</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Soluções abrangentes de cibersegurança projetadas para empresas modernas, 
            desde serviços sob demanda até operações de segurança gerenciadas.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isReverse = index % 2 === 1;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isReverse ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Product Image */}
                <div
                  className={`fade-in-up animate ${
                    isReverse ? 'lg:col-start-2' : ''
                  }`}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-hard">
                    <img
                      src={product.image}
                      alt={`${product.title} - ${product.subtitle}`}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}></div>
                    <div className="absolute top-6 left-6">
                      <div className="glass rounded-full w-12 h-12 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div
                  className={`fade-in-up animate ${
                    isReverse ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                  style={{ animationDelay: `${0.2 * index + 0.1}s` }}
                >
                  <div className="mb-4">
                    <h3 className="text-heading mb-2">{product.title}</h3>
                    <p className="text-lg text-primary font-medium">{product.subtitle}</p>
                  </div>

                  <p className="text-body mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="btn-hero">
                    Saiba Mais
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;