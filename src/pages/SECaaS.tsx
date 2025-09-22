import { Shield, ArrowLeft, Clock, Zap, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SECaaS = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-accent/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Home
            </Link>
            
            <div className="flex items-center justify-center mb-6">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-display mb-2">SECaaS</h1>
                <p className="text-lg text-primary font-medium">Security as a Service</p>
              </div>
            </div>
            
            <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
              Serviços de segurança sob demanda com preços flexíveis por hora. 
              Escale suas necessidades de segurança sem custos fixos.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Modelo Pay-per-use</h3>
              <p className="text-muted-foreground text-sm">Pague apenas pelas horas que utilizar nossos serviços</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Implantação Instantânea</h3>
              <p className="text-muted-foreground text-sm">Implementação rápida sem burocracia</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultoria Especializada</h3>
              <p className="text-muted-foreground text-sm">Especialistas dedicados para seu projeto</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Escalabilidade Flexível</h3>
              <p className="text-muted-foreground text-sm">Ajuste conforme suas necessidades</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-heading mb-6">O que é SECaaS?</h2>
              <p className="text-body mb-6">
                O SECaaS (Security as a Service) é uma solução inovadora que permite às empresas 
                acessar serviços de cibersegurança de alta qualidade sem a necessidade de 
                investimentos fixos em infraestrutura ou equipe especializada.
              </p>
              
              <h3 className="text-lg font-semibold mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Redução significativa de custos operacionais</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Acesso a expertise de alta qualidade</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Flexibilidade para ajustar conforme demanda</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Implementação rápida e sem complicações</span>
                </li>
              </ul>
              
              <div className="text-center">
                <button className="btn-hero">
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SECaaS;