import { Monitor, ArrowLeft, Shield, Clock, AlertTriangle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const MSSP = () => {
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
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-display mb-2">MSSP</h1>
                <p className="text-lg text-primary font-medium">Managed Security Services Provider</p>
              </div>
            </div>
            
            <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
              Serviços SOC gerenciados abrangentes com preços fixos e monitoramento 
              contínuo para total tranquilidade.
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
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitoramento SOC 24/7</h3>
              <p className="text-muted-foreground text-sm">Vigilância constante da sua infraestrutura</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Preços Mensais Fixos</h3>
              <p className="text-muted-foreground text-sm">Orçamento previsível e controlado</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Detecção de Ameaças</h3>
              <p className="text-muted-foreground text-sm">Identificação proativa de riscos</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Resposta a Incidentes</h3>
              <p className="text-muted-foreground text-sm">Ação imediata em caso de ameaças</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-heading mb-6">O que é MSSP?</h2>
              <p className="text-body mb-6">
                Como Provedor de Serviços de Segurança Gerenciados (MSSP), oferecemos 
                monitoramento contínuo e gestão proativa da segurança da sua infraestrutura, 
                garantindo proteção 24/7 com uma equipe especializada.
              </p>
              
              <h3 className="text-lg font-semibold mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>SOC dedicado com monitoramento 24/7</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Detecção e resposta rápida a incidentes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Relatórios detalhados de segurança</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Compliance com normas de segurança</span>
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

export default MSSP;