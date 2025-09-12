import { Clock, Shield, Search, Cog } from 'lucide-react';
import socMonitoring from '@/assets/soc-monitoring.jpg';
import cloudSecurity from '@/assets/cloud-security.jpg';
import pentestImg from '@/assets/pentest.jpg';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Clock,
      title: 'SOC 24x7',
      description: 'Continuous monitoring and incident response with our state-of-the-art Security Operations Center.',
      details: [
        'Real-time threat detection and analysis',
        'Immediate incident response and containment',
        'Continuous vulnerability assessment',
        'Detailed reporting and compliance support',
      ],
      image: socMonitoring,
      color: 'text-blue-500',
    },
    {
      icon: Shield,
      title: 'Firewall Deployment',
      description: 'Complete firewall setup, security rule configuration, and managed operations for robust network protection.',
      details: [
        'Next-generation firewall implementation',
        'Custom security policy development',
        'Ongoing rule optimization and management',
        'Performance monitoring and maintenance',
      ],
      image: cloudSecurity,
      color: 'text-green-500',
    },
    {
      icon: Search,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities in systems, networks, and applications.',
      details: [
        'Web application security testing',
        'Network infrastructure assessment',
        'Social engineering evaluation',
        'Detailed vulnerability reporting',
      ],
      image: pentestImg,
      color: 'text-red-500',
    },
    {
      icon: Cog,
      title: 'Custom Security Solutions',
      description: 'Tailored security implementations designed to meet your specific business requirements and compliance needs.',
      details: [
        'Business-specific security architecture',
        'Compliance framework implementation',
        'Integration with existing systems',
        'Scalable security infrastructure',
      ],
      image: cloudSecurity,
      color: 'text-purple-500',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Solutions</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Practical cybersecurity solutions that directly apply SecOffice products 
            to protect and enhance your digital infrastructure.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 fade-in-up animate"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Solution Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="glass rounded-full w-12 h-12 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${solution.color}`} />
                    </div>
                  </div>
                </div>

                {/* Solution Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>

                  {/* Solution Details */}
                  <div className="space-y-2">
                    {solution.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <button className="text-primary font-medium hover:text-primary-hover transition-colors duration-300 red-line">
                      Explore Solution
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Solutions CTA */}
        <div className="text-center mt-16 fade-in-up animate" style={{ animationDelay: '0.4s' }}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-heading mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Our experts can design and implement tailored security solutions 
              that perfectly align with your business requirements and risk profile.
            </p>
            <button className="btn-hero">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;