import { FileCheck, Target, CheckCircle, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const SPS = () => {
  const benefits = [
    'Escopo claramente definido desde o início',
    'Preço fixo acordado previamente',
    'Prazo de entrega garantido',
    'Metodologia estruturada e documentada',
    'Entregas técnicas objetivas e mensuráveis',
    'Conformidade com padrões internacionais'
  ];

  const solutions = [
    { name: 'Pentest', description: 'Testes de penetração completos' },
    { name: 'Risk Assessment', description: 'Avaliação de riscos detalhada' },
    { name: 'ISO 27001', description: 'Adequação à norma ISO 27001' },
    { name: 'SOC 2', description: 'Preparação para certificação SOC 2' },
    { name: 'LGPD', description: 'Adequação à Lei Geral de Proteção de Dados' },
    { name: 'Security Architecture', description: 'Arquitetura de segurança corporativa' }
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
              <BreadcrumbPage>SPS</BreadcrumbPage>
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
                <FileCheck className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h1 className="text-display mb-2">SPS</h1>
                <p className="text-xl text-primary font-medium">SecOffice ProService</p>
              </div>
            </div>
            
            <p className="text-subheading text-muted-foreground mb-8 fade-in-up animate" style={{animationDelay: '0.1s'}}>
              Projetos fechados com escopo definido e preço fixo. Entregas previsíveis, 
              voltadas a resultados técnicos objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: 'Escopo Fixo', desc: 'Definição clara de entregas' },
              { icon: CheckCircle, title: 'Preço Acordado', desc: 'Investimento previsível' },
              { icon: Award, title: 'Qualidade', desc: 'Padrões internacionais' },
              { icon: Users, title: 'Especialistas', desc: 'Time experiente e certificado' }
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
              <h2 className="text-heading mb-6">O que é SPS?</h2>
              <p className="text-body mb-4">
                O SPS (SecOffice ProService) é o modelo ideal para empresas que buscam projetos 
                de segurança com escopo bem definido, prazo determinado e preço fixo. Cada projeto 
                é estruturado com objetivos claros e entregas técnicas mensuráveis.
              </p>
              <p className="text-body">
                Desde testes de penetração e avaliações de risco até adequações a normas como 
                ISO 27001, SOC 2 e LGPD, garantimos resultados previsíveis com a qualidade e 
                profundidade técnica que sua organização precisa.
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
              <h3 className="text-2xl font-semibold mb-6">Projetos Oferecidos</h3>
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

export default SPS;
