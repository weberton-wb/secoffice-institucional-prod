import { Zap, ArrowLeft, AlertTriangle, Clock, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SRT = () => {
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
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-display mb-2">SRT</h1>
                <p className="text-lg text-primary font-medium">SecOffice Response Team</p>
              </div>
            </div>
            
            <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
              Serviços de resposta a incidentes de emergência - seu "cyber 911" para 
              mitigação imediata de ameaças e recuperação.
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
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Resposta de Emergência</h3>
              <p className="text-muted-foreground text-sm">Ação imediata em situações críticas</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Implantação Rápida</h3>
              <p className="text-muted-foreground text-sm">Mobilização em minutos, não horas</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Remediação Especializada</h3>
              <p className="text-muted-foreground text-sm">Expertise em contenção de incidentes</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Planejamento de Recuperação</h3>
              <p className="text-muted-foreground text-sm">Estratégia completa pós-incidente</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-heading mb-6">O que é SRT?</h2>
              <p className="text-body mb-6">
                O SecOffice Response Team (SRT) é nossa equipe de resposta rápida a incidentes 
                de segurança cibernética. Funciona como um "cyber 911", mobilizando 
                especialistas em minutos para conter, investigar e remediar ameaças críticas.
              </p>
              
              <h3 className="text-lg font-semibold mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Resposta em menos de 15 minutos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Contenção imediata de ameaças</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Investigação forense detalhada</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Plano de recuperação personalizado</span>
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

export default SRT;