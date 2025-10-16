import { Shield, Clock, Zap, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const SECaaS = () => {
  const benefits = [
    'Modelo pay-per-use flexível e transparente',
    'Implantação rápida sem burocracia',
    'Consultoria especializada sob demanda',
    'Escalabilidade conforme necessidade',
    'Sem custos fixos ou compromissos de longo prazo',
    'Acesso a expertise de alto nível'
  ];

  const solutions = [
    { name: 'SOC Monitoring', description: 'Monitoramento contínuo de ameaças' },
    { name: 'Cloud Security', description: 'Segurança em ambientes cloud' },
    { name: 'Incident Response', description: 'Resposta rápida a incidentes' },
    { name: 'Security Assessment', description: 'Avaliações de segurança pontuais' }
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
                <Link to="/#products">Produtos</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>SECaaS</BreadcrumbPage>
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
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h1 className="text-display mb-2">SECaaS</h1>
                <p className="text-xl text-primary font-medium">Security as a Service</p>
              </div>
            </div>
            
            <p className="text-subheading text-muted-foreground mb-8 fade-in-up animate" style={{animationDelay: '0.1s'}}>
              Serviços sob demanda baseados em horas. Flexível, pontual ou recorrente.
              Ideal para monitoramento, implantação e auditoria sob medida.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: DollarSign, title: 'Pay-per-use', desc: 'Pague apenas pelo que usar' },
              { icon: Zap, title: 'Rápido', desc: 'Implantação instantânea' },
              { icon: Users, title: 'Especializado', desc: 'Time de experts dedicado' },
              { icon: Clock, title: 'Flexível', desc: 'Ajuste quando precisar' }
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
              <h2 className="text-heading mb-6">O que é SECaaS?</h2>
              <p className="text-body mb-4">
                O SECaaS (Security as a Service) é uma solução inovadora que permite às empresas 
                acessar serviços de cibersegurança de alta qualidade sem a necessidade de 
                investimentos fixos em infraestrutura ou equipe especializada.
              </p>
              <p className="text-body">
                Com o modelo pay-per-use, você contrata apenas as horas necessárias para projetos 
                específicos, auditorias, implementações ou suporte pontual, garantindo máxima 
                flexibilidade e controle de custos.
              </p>
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

            {/* Related Solutions */}
            <div className="mb-12 fade-in-up animate">
              <h3 className="text-2xl font-semibold mb-6">Soluções Relacionadas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="p-6 bg-surface/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold mb-2">{solution.name}</h4>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center fade-in-up animate">
              <Link to="/#contact" className="btn-hero inline-flex items-center">
                Fale com um Especialista
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SECaaS;
