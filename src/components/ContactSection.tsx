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
      title: 'Address',
      details: ['Alameda Araguaia, 2044', 'Alphaville, Barueri/SP', 'Brazil'],
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+55 (11) 3900-1010'],
      color: 'text-green-500',
    },
    {
      icon: Mail,
      title: 'Email',
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
    'General Inquiry',
    'SECaaS - Security as a Service',
    'MSSP - Managed Security Services',
    'SRT - Emergency Response',
    'Penetration Testing',
    'Partner Solutions',
    'Custom Security Solution',
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Contact Us</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Ready to strengthen your cybersecurity posture? 
            Get in touch with our experts for a personalized security consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 fade-in-up animate" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-heading mb-6">Get in Touch</h3>
              
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
              <h4 className="font-semibold mb-4">Our Location</h4>
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
              <h3 className="text-heading mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
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
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
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
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your security needs and how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn-hero group"
                  >
                    Send Message
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
            <h3 className="text-heading mb-4">Need Immediate Assistance?</h3>
            <p className="text-muted-foreground mb-6">
              For urgent security incidents or immediate consultation needs, 
              contact our emergency response team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Emergency Hotline
              </button>
              <button className="btn-ghost">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;