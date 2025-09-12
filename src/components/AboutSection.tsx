import { CheckCircle, Award, Globe, Users } from 'lucide-react';
import teamTrust from '@/assets/team-trust.jpg';

const AboutSection = () => {
  const advantages = [
    {
      icon: Award,
      title: 'Dual AWS Cloud Security Competencies',
      description: 'The only company in Brazil with two AWS cloud security competencies, ensuring unmatched expertise.',
    },
    {
      icon: Globe,
      title: 'Modern Environment Focus',
      description: 'Specialized in serverless, containers, and cloud-native security solutions for contemporary businesses.',
    },
    {
      icon: Users,
      title: 'Darede Group Partnership',
      description: 'Part of the Darede Group, AWS LATAM leader, bringing regional expertise and global standards.',
    },
    {
      icon: CheckCircle,
      title: 'Global Security Partnerships',
      description: 'Strategic partnerships with industry leaders like Fortinet and CrowdStrike for comprehensive protection.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">About SecOffice</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Leading cybersecurity innovation with decades of combined expertise, 
            modern solutions, and unwavering commitment to protecting your digital assets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Company Story */}
          <div className="fade-in-up animate" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-heading mb-6">Our Evolution</h3>
            <p className="text-body mb-6">
              SecOffice emerged from the growing need for specialized cybersecurity solutions 
              in an increasingly complex digital landscape. Founded on the principles of innovation, 
              expertise, and unwavering commitment to security excellence.
            </p>
            <p className="text-body mb-8">
              Our journey began with a vision to bridge the gap between traditional security 
              approaches and modern cloud-native environments. Today, we stand as Brazil's 
              premier cybersecurity partner, trusted by organizations across industries.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Protected Clients</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">SOC Monitoring</div>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="fade-in-up animate" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-hard">
              <img
                src={teamTrust}
                alt="SecOffice expert team working in modern cybersecurity environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Expert Security Team</h4>
                <p className="text-sm opacity-90">Dedicated professionals protecting your digital assets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mt-20">
          <h3 className="text-heading text-center mb-12 fade-in-up animate">Why SecOffice</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="text-center fade-in-up animate"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{advantage.title}</h4>
                  <p className="text-muted-foreground">{advantage.description}</p>
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