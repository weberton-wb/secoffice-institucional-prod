import { Shield, Monitor, Zap, Target, ShoppingCart } from 'lucide-react';
import socMonitoring from '@/assets/soc-monitoring.jpg';
import pentestImg from '@/assets/pentest.jpg';
import incidentResponse from '@/assets/incident-response.jpg';

const ProductsSection = () => {
  const products = [
    {
      icon: Shield,
      title: 'SECaaS',
      subtitle: 'Security as a Service',
      description: 'On-demand security services with flexible, hourly-based pricing. Scale your security needs without fixed costs.',
      features: ['Pay-per-use model', 'Instant deployment', 'Expert consultation', 'Flexible scaling'],
      image: socMonitoring,
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Monitor,
      title: 'MSSP',
      subtitle: 'Managed Security Services Provider',
      description: 'Comprehensive managed SOC services with fixed pricing and continuous monitoring for complete peace of mind.',
      features: ['24/7 SOC monitoring', 'Fixed monthly pricing', 'Threat detection', 'Incident response'],
      image: socMonitoring,
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Zap,
      title: 'SRT',
      subtitle: 'SecOffice Response Team',
      description: 'Emergency incident response services - your "cyber 911" for immediate threat mitigation and recovery.',
      features: ['Emergency response', 'Rapid deployment', 'Expert remediation', 'Recovery planning'],
      image: incidentResponse,
      gradient: 'from-red-500/20 to-orange-500/20',
    },
    {
      icon: Target,
      title: 'Offensive Actions',
      subtitle: 'Comprehensive Security Testing',
      description: 'Penetration testing, attack surface assessment, and cloud risk evaluation to identify vulnerabilities.',
      features: ['Penetration testing', 'Attack surface mapping', 'Cloud risk assessment', 'Vulnerability analysis'],
      image: pentestImg,
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: ShoppingCart,
      title: 'Re-Sell',
      subtitle: 'Partner Solutions Catalog',
      description: 'Complete Fortinet catalog and strategic partner offerings, providing integrated security solutions.',
      features: ['Fortinet products', 'Partner solutions', 'Integrated deployment', 'Ongoing support'],
      image: socMonitoring,
      gradient: 'from-indigo-500/20 to-blue-500/20',
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-display mb-6">Our Products</h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed for modern businesses, 
            from on-demand services to managed security operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isReverse = index % 2 === 1;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isReverse ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Product Image */}
                <div
                  className={`fade-in-up animate ${
                    isReverse ? 'lg:col-start-2' : ''
                  }`}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-hard">
                    <img
                      src={product.image}
                      alt={`${product.title} - ${product.subtitle}`}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}></div>
                    <div className="absolute top-6 left-6">
                      <div className="glass rounded-full w-12 h-12 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div
                  className={`fade-in-up animate ${
                    isReverse ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                  style={{ animationDelay: `${0.2 * index + 0.1}s` }}
                >
                  <div className="mb-4">
                    <h3 className="text-heading mb-2">{product.title}</h3>
                    <p className="text-lg text-primary font-medium">{product.subtitle}</p>
                  </div>

                  <p className="text-body mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="btn-hero">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;