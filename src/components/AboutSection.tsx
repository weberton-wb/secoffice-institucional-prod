import { Shield, Target, Eye, Heart, Users, Zap, Lightbulb } from 'lucide-react';
import teamTrust from '@/assets/team-trust.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Transparência e Ética',
      description: 'Atuamos com integridade, clareza e responsabilidade, porque proteger dados e negócios exige não apenas tecnologia, mas também caráter.',
    },
    {
      icon: Heart,
      title: 'Obsessão pelo Cliente',
      description: 'Não medimos esforços para antecipar e superar necessidades, entregando mais que soluções: tranquilidade e confiança para inovar.',
    },
    {
      icon: Target,
      title: 'Excelência Técnica',
      description: 'Buscamos continuamente o mais alto nível de especialização e práticas modernas. Para nós, excelência não é meta — é padrão.',
    },
    {
      icon: Zap,
      title: 'Proatividade',
      description: 'Atuamos de forma preventiva, antecipando riscos e propondo soluções antes que problemas aconteçam.',
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhamos lado a lado com clientes e parceiros, construindo um ecossistema de confiança coletiva.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação Contínua',
      description: 'Evoluímos junto com as transformações tecnológicas, aplicando inovação para transformar segurança em habilitador da inovação.',
    },
    {
      icon: Eye,
      title: 'Responsabilidade Digital',
      description: 'Protegemos negócios sabendo que por trás deles existem vidas, histórias e comunidades que dependem da tecnologia.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Quem Somos</h2>
          <p className="text-subheading text-muted-foreground max-w-4xl mx-auto">
            A SecOffice nasceu para romper com a segurança presa ao passado. Nossa inspiração é simples e ambiciosa: 
            permitir que a inovação aconteça com confiança, protegendo negócios e as pessoas por trás deles.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Mission */}
          <div className="text-center fade-in-up animate" style={{ animationDelay: '0.1s' }}>
            <div className="glass rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground">
              Possibilitar que empresas inovem com segurança, transformando riscos em confiança 
              e confiança em impacto para a sociedade.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center fade-in-up animate" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground">
              Ser a protagonista em segurança cibernética no Brasil, referência em nuvem e tecnologias avançadas, 
              parte do ecossistema Darede — o maior parceiro AWS do país.
            </p>
          </div>

          {/* Inspiration */}
          <div className="text-center fade-in-up animate" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nossa Inspiração</h3>
            <p className="text-muted-foreground">
              Inovamos para que você inove com segurança. Porque proteger negócios é proteger pessoas — 
              seus dados, seus sonhos, seu futuro.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Story */}
          <div className="fade-in-up animate" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-heading mb-6">Nossa Jornada</h3>
            <p className="text-body mb-6">
              Em um mundo que se reinventa em cloud, containers, serverless e inteligência artificial, 
              entendemos que proteger não é só reagir — é inovar junto com a transformação, 
              mantendo os fundamentos que realmente importam.
            </p>
            <p className="text-body mb-8">
              Antecipamos riscos, automatizamos respostas e traduzimos complexidade em decisões claras, 
              para que ideias virem produtos, e produtos, resultados. Quando um negócio está seguro, 
              pessoas estão seguras.
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
          <div className="fade-in-up animate" style={{ animationDelay: '0.5s' }}>
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

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-heading text-center mb-12 fade-in-up animate">Nossos Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {values.slice(0, 4).map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center fade-in-up animate"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Second row of values */}
          <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
            {values.slice(4).map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index + 4}
                  className="text-center fade-in-up animate"
                  style={{ animationDelay: `${0.1 * (index + 4)}s` }}
                >
                  <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
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