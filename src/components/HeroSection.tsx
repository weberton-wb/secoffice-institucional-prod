import { ArrowRight, Shield, Cloud, Users, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      {/* Animated Hexagon Pattern */}
      <div className="absolute inset-0 hexagon-grid opacity-30"></div>
      
      {/* Floating Hexagons */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-primary hexagon-float opacity-40"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-primary hexagon-float opacity-30" style={{
      animationDelay: '5s'
    }}></div>
      <div className="absolute bottom-40 left-20 w-10 h-10 border-2 border-primary hexagon-float opacity-20" style={{
      animationDelay: '10s'
    }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-hero text-white mb-8 fade-in-up animate">
            Proteja seu negócio com{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              segurança moderna e inovadora
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-subheading text-gray-300 mb-12 max-w-3xl mx-auto fade-in-up animate" style={{
          animationDelay: '0.2s'
        }}>
            A SecOffice oferece soluções de cibersegurança de ponta com expertise incomparável em segurança na nuvem, 
            serviços gerenciados e resposta a incidentes para ambientes digitais modernos.
          </p>

          {/* Key Differentiators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 fade-in-up animate" style={{
          animationDelay: '0.4s'
        }}>
            <div className="glass rounded-lg p-4 text-center px-[16px]">
              <Cloud className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-white">Especialista AWS Cloud</p>
            </div>
            <div className="glass rounded-lg p-4 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-white">Parceiro Fortinet</p>
            </div>
            <div className="glass rounded-lg p-4 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-white">CrowdStrike</p>
            </div>
            <div className="glass rounded-lg p-4 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-white">SOC Gerenciado</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up animate" style={{
          animationDelay: '0.6s'
        }}>
            
            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;