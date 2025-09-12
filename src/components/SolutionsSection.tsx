import { Clock, Shield, Search, Cog } from 'lucide-react';
import socMonitoring from '@/assets/soc-monitoring.jpg';
import cloudSecurity from '@/assets/cloud-security.jpg';
import pentestImg from '@/assets/pentest.jpg';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Clock,
      title: 'SOC 24x7',
      description: 'Monitoramento contínuo e resposta a incidentes com nosso Centro de Operações de Segurança de última geração.',
      details: [
        'Detecção e análise de ameaças em tempo real',
        'Resposta imediata a incidentes e contenção',
        'Avaliação contínua de vulnerabilidades',
        'Relatórios detalhados e suporte à conformidade',
      ],
      image: socMonitoring,
      color: 'text-blue-500',
    },
    {
      icon: Shield,
      title: 'Implantação de Firewall',
      description: 'Configuração completa de firewall, configuração de regras de segurança e operações gerenciadas para proteção robusta da rede.',
      details: [
        'Implementação de firewall de próxima geração',
        'Desenvolvimento de políticas de segurança personalizadas',
        'Otimização e gerenciamento contínuo de regras',
        'Monitoramento de desempenho e manutenção',
      ],
      image: cloudSecurity,
      color: 'text-green-500',
    },
    {
      icon: Search,
      title: 'Teste de Penetração',
      description: 'Avaliações abrangentes de segurança para identificar vulnerabilidades em sistemas, redes e aplicações.',
      details: [
        'Testes de segurança de aplicações web',
        'Avaliação de infraestrutura de rede',
        'Avaliação de engenharia social',
        'Relatórios detalhados de vulnerabilidades',
      ],
      image: pentestImg,
      color: 'text-red-500',
    },
    {
      icon: Cog,
      title: 'Soluções de Segurança Personalizadas',
      description: 'Implementações de segurança sob medida projetadas para atender aos seus requisitos específicos de negócios e conformidade.',
      details: [
        'Arquitetura de segurança específica do negócio',
        'Implementação de estrutura de conformidade',
        'Integração com sistemas existentes',
        'Infraestrutura de segurança escalável',
      ],
      image: cloudSecurity,
      color: 'text-purple-500',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Soluções</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Soluções práticas de cibersegurança que aplicam diretamente os produtos da SecOffice 
            para proteger e aprimorar sua infraestrutura digital.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 fade-in-up animate"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Solution Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="glass rounded-full w-12 h-12 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${solution.color}`} />
                    </div>
                  </div>
                </div>

                {/* Solution Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>

                  {/* Solution Details */}
                  <div className="space-y-2">
                    {solution.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <button className="text-primary font-medium hover:text-primary-hover transition-colors duration-300 red-line">
                      Explorar Solução
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Solutions CTA */}
        <div className="text-center mt-16 fade-in-up animate" style={{ animationDelay: '0.4s' }}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-heading mb-4">Precisa de uma Solução Personalizada?</h3>
            <p className="text-muted-foreground mb-6">
              Nossos especialistas podem projetar e implementar soluções de segurança sob medida 
              que se alinham perfeitamente aos seus requisitos de negócios e perfil de risco.
            </p>
            <button className="btn-hero">
              Agendar Consultoria
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;