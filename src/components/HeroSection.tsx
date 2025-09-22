import { ArrowRight, Shield, Cloud, Users, Zap } from 'lucide-react';
import heroBackground from '@/assets/hero-background.png';
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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed'
  }}>
      {/* Animated Hexagon Pattern */}
      <div className="absolute inset-0 hexagon-grid opacity-20"></div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-24 md:pt-28">
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
        
      </div>
    </section>;
};
export default HeroSection;