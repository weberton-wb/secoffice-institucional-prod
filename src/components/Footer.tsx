import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Produtos', href: '#products' },
    { name: 'Soluções', href: '#solutions' },
    { name: 'Parceiros', href: '#partners' },
    { name: 'Contato', href: '#contact' },
  ];

  const services = [
    'SECaaS - Security as a Service',
    'MSSP - Serviços de Segurança Gerenciados',
    'SRT - Resposta de Emergência',
    'Teste de Penetração',
    'Gerenciamento de Firewall',
    'Monitoramento SOC 24/7',
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-display font-bold mb-4">
                Sec<span className="text-primary">Office</span>
              </div>
              <p className="text-accent-foreground/80 mb-6 leading-relaxed">
                Soluções líderes em cibersegurança com abordagens modernas para proteção digital. 
                Confiado por empresas em todo o Brasil para serviços abrangentes de segurança.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/secoffice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-accent-foreground/80 hover:text-primary transition-colors duration-300 red-line"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
              <div className="space-y-3">
                <Link to="/SECaaS" className="block text-accent-foreground/80 hover:text-primary transition-colors duration-300 text-sm red-line">
                  SECaaS - Security as a Service
                </Link>
                <Link to="/MSSP" className="block text-accent-foreground/80 hover:text-primary transition-colors duration-300 text-sm red-line">
                  MSSP - Serviços de Segurança Gerenciados
                </Link>
                <Link to="/SRT" className="block text-accent-foreground/80 hover:text-primary transition-colors duration-300 text-sm red-line">
                  SRT - Resposta de Emergência
                </Link>
                <Link to="/acoes-ofensivas" className="block text-accent-foreground/80 hover:text-primary transition-colors duration-300 text-sm red-line">
                  Teste de Penetração
                </Link>
                <div className="text-accent-foreground/80 text-sm">
                  Gerenciamento de Firewall
                </div>
                <div className="text-accent-foreground/80 text-sm">
                  Monitoramento SOC 24/7
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div className="text-accent-foreground/80 text-sm">
                    <div>Alameda Araguaia, 2044</div>
                    <div>Alphaville, Barueri/SP</div>
                    <div>Brasil</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm">+55 (11) 3900-1010</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm">comercial@secoffice.com.br</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-accent-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} SecOffice. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-accent-foreground/60 hover:text-primary transition-colors duration-300">
                Política de Privacidade
              </button>
              <button className="text-accent-foreground/60 hover:text-primary transition-colors duration-300">
                Termos de Serviço
              </button>
              <button className="text-accent-foreground/60 hover:text-primary transition-colors duration-300">
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;