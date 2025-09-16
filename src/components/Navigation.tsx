import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: any) => {
    if (item.isRoute) {
      // Para rotas, não fechar o menu aqui pois será navegação
      return;
    }
    scrollToSection(item.id);
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre Nós' },
    { id: 'products', label: 'Produtos' },
    { id: 'solutions', label: 'Soluções' },
    { id: 'partners', label: 'Parceiros' },
    { id: 'blog', label: 'Blog', isRoute: true, path: '/blog' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-display font-bold text-foreground">
              Sec<span className="text-primary">Office</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium red-line"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium red-line"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-hero"
            >
              Fale com um Especialista
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-hero mt-4"
              >
                Fale com um Especialista
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;