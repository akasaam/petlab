import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🏥',
      title: 'AAHA-Accredited Lab',
      description: 'Our laboratory meets the highest standards set by the American Animal Hospital Association, ensuring reliable and accurate results every time.',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      icon: '👩‍⚕️',
      title: 'Expert Veterinary Team',
      description: 'Board-certified veterinarians and licensed technicians review every test result and provide personalized health recommendations.',
      image: 'https://images.pexels.com/photos/6235045/pexels-photo-6235045.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      icon: '📱',
      title: 'Digital Health Portal',
      description: 'Access your pet\'s complete health history, test results, and personalized recommendations through our secure online portal.',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  return (
    <section id="services" className="features-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-brand-black mb-4 opacity-0">
            Why 50,000+ Pet Parents Choose <span className="font-bungee text-brand-yellow">PetLabs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0">
            We're not just a laboratory – we're your partner in pet health. Our commitment to accuracy, 
            convenience, and exceptional customer service sets us apart in veterinary diagnostics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 opacity-0 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-4xl mb-2">{feature.icon}</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;