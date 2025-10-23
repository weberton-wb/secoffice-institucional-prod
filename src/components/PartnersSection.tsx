import { Shield, Eye, Cloud, Award } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Fortinet',
      description: 'Soluções avançadas de firewall, ZTNA e SASE',
      capabilities: [
        'Firewalls de Próxima Geração',
        'Acesso de Rede Zero Trust',
        'Secure Access Service Edge',
        'Segurança SD-WAN',
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
    },
    {
      name: 'CrowdStrike',
      description: 'Proteção de endpoint, XDR e inteligência de ameaças',
      capabilities: [
        'Falcon Endpoint Protection',
        'Extended Detection & Response',
        'Serviços de Inteligência de Ameaças',
        'Cloud Security Posture',
      ],
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    },
  ];

  const additionalPartners = [
    { name: 'AWS', specialty: 'Arquitetura de Segurança na Nuvem', icon: Cloud },
    { name: 'Microsoft', specialty: 'Soluções Empresariais de Segurança', icon: Shield },
    { name: 'Palo Alto Networks', specialty: 'Segurança de Rede', icon: Shield },
    { name: 'Splunk', specialty: 'Analytics de Segurança', icon: Eye },
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Nossos Parceiros</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Parcerias estratégicas com líderes globais de segurança, 
            permitindo-nos entregar soluções de cibersegurança de classe mundial.
          </p>
        </div>

        {/* Main Partners */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 fade-in-up animate"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Partner Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${partner.color} p-4 mr-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{partner.name}</h3>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg mb-4">Principais Capacidades</h4>
                  {partner.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                      <span className="text-muted-foreground">{capability}</span>
                    </div>
                  ))}
                </div>

                {/* Partnership Benefits */}
                <div className={`mt-6 p-4 rounded-lg ${partner.bgColor}`}>
                  <p className="text-sm font-medium text-center">
                    {partner.name === 'Fortinet' 
                      ? 'Parceiro Certificado com profunda expertise em segurança de rede empresarial'
                      : 'Parceiro Elite fornecendo proteção avançada de endpoint e inteligência de ameaças'
                    }
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Partners */}
        <div className="fade-in-up animate" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-heading text-center mb-8">Rede Estendida de Parceiros</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalPartners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 glass rounded-lg hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground">{partner.specialty}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;