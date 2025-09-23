import { Shield, Target, Eye, Heart, Users, Zap, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import teamTrust from '@/assets/team-trust.jpg';
import aboutHeroBg from '@/assets/about-hero-bg.png';
import { Button } from '@/components/ui/button';
const About = () => {
  const values = [{
    icon: Shield,
    title: 'Transparência e Ética',
    description: 'Atuamos com integridade, clareza e responsabilidade em todos os nossos processos. Entendemos que proteger dados e negócios exige não apenas tecnologia avançada, mas também caráter sólido e princípios éticos inabaláveis. Nossa transparência se reflete na comunicação clara sobre riscos, soluções e resultados.'
  }, {
    icon: Heart,
    title: 'Obsessão pelo Cliente',
    description: 'Não medimos esforços para antecipar e superar necessidades, entregando mais que soluções técnicas: proporcionamos tranquilidade e confiança para inovar. Cada cliente é único, e nossa abordagem personalizada garante que suas necessidades específicas sejam atendidas com excelência.'
  }, {
    icon: Target,
    title: 'Excelência Técnica',
    description: 'Buscamos continuamente o mais alto nível de especialização e práticas modernas em segurança cibernética. Para nós, excelência não é uma meta distante — é o padrão diário que aplicamos em cada projeto, certificação e implementação. Investimos constantemente em capacitação e tecnologia de ponta.'
  }, {
    icon: Eye,
    title: 'Responsabilidade Digital',
    description: 'Protegemos negócios sabendo que por trás deles existem vidas, histórias e comunidades que dependem da tecnologia. Nossa responsabilidade vai além da proteção técnica: assumimos o compromisso de preservar a confiança digital que sustenta relacionamentos, inovações e o progresso da sociedade.'
  }, {
    icon: Zap,
    title: 'Proatividade',
    description: 'Atuamos de forma preventiva, antecipando riscos e propondo soluções antes que problemas aconteçam. Nossa filosofia é estar sempre um passo à frente das ameaças, utilizando inteligência de mercado, análise preditiva e monitoramento contínuo para proteger nossos clientes.'
  }, {
    icon: Users,
    title: 'Colaboração',
    description: 'Trabalhamos lado a lado com clientes e parceiros, construindo um ecossistema de confiança coletiva. Acreditamos que a segurança verdadeira surge da união de esforços, conhecimentos e experiências. Nossa rede de parceiros estratégicos amplia nossas capacidades e oferece soluções completas.'
  }, {
    icon: Lightbulb,
    title: 'Inovação Contínua',
    description: 'Evoluímos junto com as transformações tecnológicas, aplicando inovação para transformar segurança em habilitador da inovação dos nossos clientes. Mantemos-nos na vanguarda das tendências tecnológicas, sempre explorando novas ferramentas e metodologias para oferecer soluções diferenciadas.'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-32 text-white relative overflow-hidden" style={{
        backgroundImage: `url(${aboutHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                Quem Somos
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                A SecOffice nasceu para romper com a segurança presa ao passado. Nossa inspiração é simples e ambiciosa: 
                permitir que a inovação aconteça com confiança, protegendo negócios e as pessoas por trás deles.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Inspiration - Detailed */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Mission */}
              <div className="text-center">
                <div className="glass rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
                  <Target className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Possibilitar que empresas inovem com segurança, transformando riscos em confiança 
                  e confiança em impacto para a sociedade.
                </p>
                <p className="text-muted-foreground">
                  Acreditamos que a verdadeira segurança não limita, mas sim liberta o potencial inovador das organizações. 
                  Trabalhamos para que cada empresa possa explorar novas fronteiras tecnológicas com a certeza de que 
                  seus ativos digitais, dados e operações estão protegidos por soluções de classe mundial.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center">
                <div className="glass rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
                  <Eye className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Nossa Visão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Ser a protagonista em segurança cibernética no Brasil, referência em nuvem e tecnologias avançadas, 
                  parte do ecossistema Darede — o maior parceiro AWS do país.
                </p>
                <p className="text-muted-foreground">
                  Projetamos um futuro onde seremos reconhecidos como a principal autoridade em segurança cibernética, 
                  liderando a transformação digital segura no Brasil. Nossa parceria estratégica com a Darede nos 
                  posiciona de forma única para oferecer soluções integradas que combinam expertise em cloud e segurança.
                </p>
              </div>

              {/* Inspiration */}
              <div className="text-center">
                <div className="glass rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
                  <Lightbulb className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Nossa Inspiração</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Inovamos para que você inove com segurança. Porque proteger negócios é proteger pessoas — 
                  seus dados, seus sonhos, seu futuro.
                </p>
                <p className="text-muted-foreground">
                  Cada linha de código, cada política de segurança, cada monitoramento 24/7 que implementamos 
                  tem um propósito maior: permitir que pessoas e organizações realizem seus sonhos sem medo. 
                  Transformamos complexidade em simplicidade, incerteza em confiança, e riscos em oportunidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey - Expanded */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Story */}
              <div>
                <h2 className="text-4xl font-bold mb-8">Nossa Jornada</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Em um mundo que se reinventa através de cloud computing, containers, serverless e inteligência artificial, 
                    entendemos que proteger não é apenas reagir — é inovar junto com a transformação, 
                    mantendo os fundamentos que realmente importam.
                  </p>
                  <p>
                    Nossa trajetória começou com a visão de que a segurança cibernética deveria ser um catalisador 
                    da inovação, não um obstáculo. Ao longo dos anos, construímos uma reputação sólida baseada 
                    em resultados concretos e relacionamentos duradouros.
                  </p>
                  <p>
                    Antecipamos riscos, automatizamos respostas e traduzimos complexidade em decisões claras, 
                    para que ideias virem produtos, e produtos gerem resultados. Quando um negócio está seguro, 
                    pessoas estão seguras — e é isso que nos motiva todos os dias.
                  </p>
                </div>

                {/* Extended Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="text-center p-6 glass rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
                  </div>
                  <div className="text-center p-6 glass rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">SOC Monitoramento</div>
                  </div>
                  <div className="text-center p-6 glass rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime Garantido</div>
                  </div>
                  <div className="text-center p-6 glass rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Anos Experiência</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center p-6 glass rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Certificações</div>
                  </div>
                  <div className="text-center p-6 glass rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                    <div className="text-sm text-muted-foreground">Eventos Analisados</div>
                  </div>
                  <div className="text-center p-6 glass rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfação Cliente</div>
                  </div>
                </div>
              </div>

              {/* Team Image */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-hard">
                  <img src={teamTrust} alt="SecOffice expert team working in modern cybersecurity environment" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Equipe Especialista</h3>
                    <p className="text-lg opacity-90 max-w-md">
                      Profissionais certificados e dedicados, trabalhando incansavelmente 
                      para proteger seus ativos digitais mais importantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Complete */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Nossos Valores</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Os princípios que norteiam cada decisão, cada projeto e cada relacionamento que construímos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
              {values.map((value, index) => {
              const Icon = value.icon;
              return <div key={index} className="glass p-8 rounded-xl hover:shadow-hard transition-all duration-300 mx-0">
                    <div className="flex items-center mb-6">
                      <div className="glass rounded-full w-16 h-16 flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center glass p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Pronto para Conhecer Nossas Soluções?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubra como podemos proteger e potencializar o crescimento do seu negócio com nossas soluções de segurança cibernética.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="px-8">
                  Entre em Contato
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/'} className="px-8">
                  Voltar ao Início
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;