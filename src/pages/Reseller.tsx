import { ShoppingCart, Shield, Award, Headphones, Users, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Reseller = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleProductsClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const benefits = [
    'Parceria técnica com fabricantes líderes de mercado',
    'Consultoria especializada na escolha de soluções',
    'Implantação completa e integração com ambiente existente',
    'Suporte técnico contínuo pós-venda',
    'Treinamento e capacitação de equipes',
    'Condições comerciais competitivas'
  ];

  const partners = [
    { 
      name: 'Fortinet', 
      description: 'Firewalls, SD-WAN, Zero Trust, e soluções de segurança de rede completas',
      category: 'Network Security'
    },
    { 
      name: 'CrowdStrike', 
      description: 'Proteção de endpoints, EDR/XDR, threat intelligence e resposta a incidentes',
      category: 'Endpoint Security'
    },
    { 
      name: 'AWS Security', 
      description: 'Soluções de segurança cloud, compliance, WAF, Shield e GuardDuty',
      category: 'Cloud Security'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 pt-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <button onClick={handleProductsClick} className="hover:text-primary transition-colors">
                  Produtos
                </button>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Reseller</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6 fade-in-up animate">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mr-6">
                <ShoppingCart className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h1 className="text-display mb-2">Reseller</h1>
                <p className="text-xl text-primary font-medium">Revenda Estratégica</p>
              </div>
            </div>
            
            <p className="text-subheading text-muted-foreground mb-8 fade-in-up animate" style={{animationDelay: '0.1s'}}>
              Revenda de soluções Fortinet, CrowdStrike e AWS. Inclui implantação, 
              integração e suporte com parceria técnica e acompanhamento pós-venda.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: 'Soluções Líderes', desc: 'Fabricantes reconhecidos' },
              { icon: Award, title: 'Certificação', desc: 'Parceiros oficiais' },
              { icon: Headphones, title: 'Suporte', desc: 'Acompanhamento contínuo' },
              { icon: Users, title: 'Consultoria', desc: 'Expertise técnica' }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center fade-in-up animate p-6 bg-card rounded-xl border border-border/50"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 fade-in-up animate">
              <h2 className="text-heading mb-6">Revenda Estratégica</h2>
              <p className="text-body mb-4">
                Como parceiros oficiais dos principais fabricantes de soluções de cibersegurança, 
                oferecemos não apenas a revenda de tecnologias de ponta, mas uma consultoria 
                completa para escolha, implantação e operação das soluções mais adequadas ao 
                seu negócio.
              </p>
              <p className="text-body">
                Nossa equipe técnica certificada garante que a integração com seu ambiente seja 
                perfeita, com configuração otimizada, treinamento de equipes e suporte contínuo 
                para maximizar o retorno do investimento.
              </p>
            </div>

            {/* Partners */}
            <div className="mb-12 fade-in-up animate">
              <h3 className="text-2xl font-semibold mb-6">Parceiros Estratégicos</h3>
              <div className="space-y-4">
                {partners.map((partner, index) => (
                  <div key={index} className="p-6 bg-surface/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-semibold">{partner.name}</h4>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {partner.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12 fade-in-up animate">
              <h3 className="text-2xl font-semibold mb-6">Principais Benefícios</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-body">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center fade-in-up animate">
              <button onClick={handleContactClick} className="btn-hero inline-flex items-center">
                Fale com um Especialista
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reseller;
