import { Shield, Eye, Cloud, Award } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Fortinet',
      description: 'Advanced firewall, ZTNA, and SASE solutions',
      capabilities: [
        'Next-Generation Firewalls',
        'Zero Trust Network Access',
        'Secure Access Service Edge',
        'SD-WAN Security',
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
    },
    {
      name: 'CrowdStrike',
      description: 'Endpoint protection, XDR, and threat intelligence',
      capabilities: [
        'Falcon Endpoint Protection',
        'Extended Detection & Response',
        'Threat Intelligence Services',
        'Cloud Security Posture',
      ],
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    },
  ];

  const additionalPartners = [
    { name: 'AWS', specialty: 'Cloud Security Architecture', icon: Cloud },
    { name: 'Microsoft', specialty: 'Enterprise Security Solutions', icon: Shield },
    { name: 'Palo Alto Networks', specialty: 'Network Security', icon: Shield },
    { name: 'Splunk', specialty: 'Security Analytics', icon: Eye },
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Our Partners</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Strategic partnerships with global security leaders, 
            enabling us to deliver world-class cybersecurity solutions.
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
                  <h4 className="font-semibold text-lg mb-4">Key Capabilities</h4>
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
                      ? 'Certified Partner with deep expertise in enterprise network security'
                      : 'Elite Partner providing advanced endpoint protection and threat intelligence'
                    }
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Partners */}
        <div className="fade-in-up animate" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-heading text-center mb-8">Extended Partner Network</h3>
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

        {/* Partnership CTA */}
        <div className="text-center mt-16 fade-in-up animate" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-heading mb-4">Expanding Partnership Ecosystem</h3>
            <p className="text-muted-foreground mb-6">
              We continuously evaluate and partner with emerging security leaders 
              to bring you the most innovative and effective cybersecurity solutions.
            </p>
            <button className="btn-hero">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;