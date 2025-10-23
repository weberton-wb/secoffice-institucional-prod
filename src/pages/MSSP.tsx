import { Monitor, Shield, AlertTriangle, Clock, Users, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const MSSP = () => {
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
    'Monitoramento 24x7x365 ininterrupto',
    'Detecção e resposta a incidentes em tempo real',
    'Inteligência de ameaças atualizada',
    'Correlação avançada de eventos de segurança',
    'Relatórios executivos e técnicos detalhados',
    'Gestão contínua de vulnerabilidades'
  ];

  const solutions = [
    { name: 'SOC Operation', description: 'Centro de operações de segurança 24/7' },
    { name: 'Threat Intelligence', description: 'Inteligência contra ameaças avançadas' },
    { name: 'SIEM Management', description: 'Gerenciamento de eventos de segurança' },
    { name: 'Compliance Monitoring', description: 'Monitoramento de conformidade contínuo' }
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
              <BreadcrumbPage>MSSP</BreadcrumbPage>
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
                <Monitor className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h1 className="text-display mb-2">MSSP</h1>
                <p className="text-xl text-primary font-medium">Managed Security Services Provider</p>
              </div>
            </div>
            
            <p className="text-subheading text-muted-foreground mb-8 fade-in-up animate" style={{animationDelay: '0.1s'}}>
              Monitoramento e resposta 24x7. Inteligência de ameaças, correlação de eventos, 
              relatórios e gestão contínua operada pelo SOC SecOffice.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: '24x7x365', desc: 'Monitoramento contínuo' },
              { icon: Shield, title: 'Proteção', desc: 'Defesa ativa contra ameaças' },
              { icon: AlertTriangle, title: 'Detecção', desc: 'Identificação em tempo real' },
              { icon: Users, title: 'SOC Team', desc: 'Analistas especializados' }
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
              <h2 className="text-heading mb-6">O que é MSSP?</h2>
              <p className="text-body mb-4">
                O MSSP (Managed Security Services Provider) é um serviço completo de segurança gerenciada 
                que oferece monitoramento contínuo 24x7, detecção e resposta a incidentes de segurança 
                operado por nosso SOC (Security Operations Center).
              </p>
              <p className="text-body">
                Com uma equipe dedicada de analistas de segurança, tecnologias de ponta e processos 
                maduros, garantimos proteção constante para sua infraestrutura, aplicações e dados 
                contra ameaças cibernéticas avançadas.
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

export default MSSP;
