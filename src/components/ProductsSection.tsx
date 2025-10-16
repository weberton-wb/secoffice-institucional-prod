import { Shield, Monitor, FileCheck, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const products = [
    {
      icon: Shield,
      title: 'SECaaS',
      subtitle: 'Security as a Service',
      description: 'Segurança sob demanda, flexível e baseada em horas. Ideal para empresas que precisam de suporte sob medida.',
      link: '/secaas',
    },
    {
      icon: Monitor,
      title: 'MSSP',
      subtitle: 'Managed Security Services Provider',
      description: 'Segurança gerenciada 24x7 com monitoramento e resposta a incidentes em tempo real.',
      link: '/mssp',
    },
    {
      icon: FileCheck,
      title: 'SPS',
      subtitle: 'SecOffice ProService',
      description: 'Projetos de segurança com escopo e preço fixo, garantindo entregas pontuais e previsíveis.',
      link: '/sps',
    },
    {
      icon: ShoppingCart,
      title: 'Reseller',
      subtitle: 'Revenda Estratégica',
      description: 'Revenda e implantação de soluções Fortinet, CrowdStrike e AWS com consultoria técnica completa.',
      link: '/reseller',
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Nossos Produtos</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Soluções abrangentes de cibersegurança projetadas para empresas modernas
          </p>
        </div>

        {/* Products Grid - Apple Style Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <Link
                key={index}
                to={product.link}
                className="group"
              >
                <div 
                  className="relative h-full bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow fade-in-up animate"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;