import { Target, ArrowLeft, Search, Shield, AlertTriangle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AcoesOfensivas = () => {
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
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-display mb-2">Ações Ofensivas</h1>
                <p className="text-lg text-primary font-medium">Testes Abrangentes de Segurança</p>
              </div>
            </div>
            
            <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
              Testes de penetração, avaliação de superfície de ataque e avaliação de riscos 
              na nuvem para identificar vulnerabilidades antes dos atacantes.
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
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Testes de Penetração</h3>
              <p className="text-muted-foreground text-sm">Simulação de ataques reais controlados</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mapeamento de Superfície</h3>
              <p className="text-muted-foreground text-sm">Identificação completa de pontos de entrada</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Avaliação de Riscos na Nuvem</h3>
              <p className="text-muted-foreground text-sm">Análise específica para ambientes cloud</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Análise de Vulnerabilidades</h3>
              <p className="text-muted-foreground text-sm">Relatórios detalhados com priorização</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-heading mb-6">O que são Ações Ofensivas?</h2>
              <p className="text-body mb-6">
                Nossas Ações Ofensivas simulam ataques reais para identificar vulnerabilidades 
                em sua infraestrutura antes que sejam exploradas por atacantes maliciosos. 
                Utilizamos as mesmas técnicas que hackers, mas de forma controlada e ética.
              </p>
              
              <h3 className="text-lg font-semibold mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Identificação proativa de vulnerabilidades</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Simulação de cenários de ataque reais</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Relatórios executivos e técnicos detalhados</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Recomendações de remediação priorizadas</span>
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

export default AcoesOfensivas;