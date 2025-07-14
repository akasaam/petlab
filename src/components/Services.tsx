import React from 'react';
import { Microscope, Heart, Shield, Clock, Award, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Microscope className="w-12 h-12" />,
      title: 'Complete Blood Panel',
      description: 'Comprehensive blood analysis including CBC, chemistry panel, and organ function tests.',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      price: 'From $89'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Genetic Testing',
      description: 'DNA analysis to identify breed composition and genetic health predispositions.',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      price: 'From $149'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Allergy Testing',
      description: 'Identify environmental and food allergens affecting your pet\'s health.',
      image: 'https://images.pexels.com/photos/6235657/pexels-photo-6235657.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      price: 'From $129'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Wellness Monitoring',
      description: 'Regular health tracking with quarterly testing packages for ongoing care.',
      image: 'https://images.pexels.com/photos/6235657/pexels-photo-6235657.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      price: 'From $199'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Senior Pet Care',
      description: 'Specialized testing for aging pets including kidney, liver, and joint health.',
      image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      price: 'From $179'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Multi-Pet Packages',
      description: 'Discounted testing packages for households with multiple pets.',
      image: 'https://images.pexels.com/photos/4498300/pexels-photo-4498300.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      price: 'From $249'
    }
  ];

  return (
    <section id="services" className="services-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="services-title text-4xl font-bold text-brand-black mb-4 opacity-0">
            Comprehensive <span className="font-bungee text-brand-yellow">Laboratory</span> Testing
          </h2>
          <p className="services-subtitle text-xl text-gray-600 max-w-3xl mx-auto opacity-0">
            From routine wellness screenings to advanced genetic analysis, our AAHA-accredited laboratory 
            provides the most comprehensive pet health testing available. Each test is performed by certified 
            veterinary technicians using cutting-edge equipment for maximum accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 opacity-0 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-brand-yellow mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <button className="w-full bg-brand-black text-brand-yellow py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="services-cta bg-brand-yellow text-brand-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 opacity-0">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;