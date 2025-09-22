import { ShoppingCart, ArrowLeft, Package, Users, Settings, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ReSell = () => {
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
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-display mb-2">Re-Sell</h1>
                <p className="text-lg text-primary font-medium">Catálogo de Soluções Parceiras</p>
              </div>
            </div>
            
            <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
              Catálogo completo Fortinet e ofertas de parceiros estratégicos, 
              fornecendo soluções de segurança integradas.
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
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Produtos Fortinet</h3>
              <p className="text-muted-foreground text-sm">Portfolio completo de soluções Fortinet</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Soluções Parceiras</h3>
              <p className="text-muted-foreground text-sm">Tecnologias de parceiros estratégicos</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Implantação Integrada</h3>
              <p className="text-muted-foreground text-sm">Implementação completa e integrada</p>
            </div>
            
            <div className="text-center">
              <div className="glass rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Suporte Contínuo</h3>
              <p className="text-muted-foreground text-sm">Suporte especializado pós-venda</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-heading mb-6">O que é Re-Sell?</h2>
              <p className="text-body mb-6">
                Nossa divisão Re-Sell oferece um catálogo abrangente de soluções de 
                cibersegurança dos nossos parceiros estratégicos, com destaque para o 
                portfolio completo Fortinet e outras tecnologias líderes de mercado.
              </p>
              
              <h3 className="text-lg font-semibold mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Acesso a tecnologias líderes de mercado</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Preços competitivos através de parcerias</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Suporte técnico especializado</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                  <span>Integração com nossos serviços gerenciados</span>
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

export default ReSell;