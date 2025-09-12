import { MapPin, Phone, Mail, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Alameda Araguaia, 2044', 'Alphaville, Barueri/SP', 'Brasil'],
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['+55 (11) 3900-1010'],
      color: 'text-green-500',
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['comercial@secoffice.com.br'],
      color: 'text-red-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: ['linkedin.com/company/secoffice'],
      color: 'text-blue-600',
    },
  ];

  const subjects = [
    'Consulta Geral',
    'SECaaS - Security as a Service',
    'MSSP - Serviços de Segurança Gerenciados',
    'SRT - Resposta de Emergência',
    'Teste de Penetração',
    'Soluções Parceiras',
    'Solução de Segurança Personalizada',
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Entre em Contato</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Pronto para fortalecer sua postura de cibersegurança? 
            Entre em contato com nossos especialistas para uma consultoria personalizada de segurança.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 fade-in-up animate" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-heading mb-6">Entre em Contato</h3>
              
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start mb-6 last:mb-0">
                    <div className={`w-10 h-10 rounded-full bg-gradient-subtle flex items-center justify-center mr-4 flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Nossa Localização</h4>
              <div className="h-48 bg-gradient-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Alphaville, Barueri/SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in-up animate" style={{ animationDelay: '0.4s' }}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-heading mb-6">Envie-nos uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Endereço de E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Número de Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="+55 (11) 9999-9999"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Conte-nos sobre suas necessidades de segurança e como podemos ajudar..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn-hero group"
                  >
                    Enviar Mensagem
                    <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center mt-16 fade-in-up animate" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-heading mb-4">Precisa de Assistência Imediata?</h3>
            <p className="text-muted-foreground mb-6">
              Para incidentes de segurança urgentes ou necessidades de consultoria imediata, 
              entre em contato diretamente com nossa equipe de resposta de emergência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Linha de Emergência
              </button>
              <button className="btn-ghost">
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;