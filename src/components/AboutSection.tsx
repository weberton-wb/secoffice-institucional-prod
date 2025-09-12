import { CheckCircle, Award, Globe, Users } from 'lucide-react';
import teamTrust from '@/assets/team-trust.jpg';

const AboutSection = () => {
  const advantages = [
    {
      icon: Award,
      title: 'Dupla Competência AWS Cloud Security',
      description: 'A única empresa no Brasil com duas competências de segurança na nuvem AWS, garantindo expertise incomparável.',
    },
    {
      icon: Globe,
      title: 'Foco em Ambientes Modernos',
      description: 'Especializada em soluções de segurança serverless, containers e cloud-native para empresas contemporâneas.',
    },
    {
      icon: Users,
      title: 'Parceria Grupo Darede',
      description: 'Parte do Grupo Darede, líder AWS LATAM, trazendo expertise regional e padrões globais.',
    },
    {
      icon: CheckCircle,
      title: 'Parcerias Globais de Segurança',
      description: 'Parcerias estratégicas com líderes da indústria como Fortinet e CrowdStrike para proteção abrangente.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Sobre a SecOffice</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Liderando a inovação em cibersegurança com décadas de expertise combinada, 
            soluções modernas e compromisso inabalável em proteger seus ativos digitais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Company Story */}
          <div className="fade-in-up animate" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-heading mb-6">Nossa Evolução</h3>
            <p className="text-body mb-6">
              A SecOffice surgiu da crescente necessidade de soluções de cibersegurança especializadas 
              em um cenário digital cada vez mais complexo. Fundada nos princípios de inovação, 
              expertise e compromisso inabalável com a excelência em segurança.
            </p>
            <p className="text-body mb-8">
              Nossa jornada começou com a visão de preencher a lacuna entre abordagens tradicionais 
              de segurança e ambientes modernos cloud-native. Hoje, somos o principal parceiro de 
              cibersegurança do Brasil, confiado por organizações de diversos setores.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Clientes Protegidos</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoramento SOC</div>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="fade-in-up animate" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-hard">
              <img
                src={teamTrust}
                alt="SecOffice expert team working in modern cybersecurity environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Equipe Especialista em Segurança</h4>
                <p className="text-sm opacity-90">Profissionais dedicados protegendo seus ativos digitais</p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mt-20">
          <h3 className="text-heading text-center mb-12 fade-in-up animate">Por que SecOffice</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="text-center fade-in-up animate"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{advantage.title}</h4>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;