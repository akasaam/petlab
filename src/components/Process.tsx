import React from 'react';
import { Package, Mail, Microscope, FileText, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Order Your Kit',
      description: 'Choose your testing package and we\'ll ship your collection kit within 24 hours.',
      image: 'https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Collect Sample',
      description: 'Follow our simple instructions to collect your pet\'s sample at home - no stress!',
      image: 'https://images.pexels.com/photos/6235045/pexels-photo-6235045.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Lab Analysis',
      description: 'Our certified lab technicians analyze your sample using advanced equipment.',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Get Results',
      description: 'Receive detailed results and personalized recommendations within 3-5 business days.',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Take Action',
      description: 'Implement our recommendations and schedule follow-up consultations as needed.',
      image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="process-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="process-title text-4xl font-bold text-brand-black mb-4 opacity-0">
            How <span className="font-bungee text-brand-yellow">PetLabs</span> Works
          </h2>
          <p className="process-subtitle text-xl text-gray-600 max-w-2xl mx-auto opacity-0">
            Getting insights into your pet's health has never been easier. Our streamlined process 
            ensures accurate results with minimal stress for you and your pet.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 left-0 h-1 bg-brand-yellow transform -translate-y-1/2 process-progress" style={{width: '0%'}}></div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="process-step text-center opacity-0">
                {/* Step Number Circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 bg-white border-4 border-brand-yellow rounded-full flex items-center justify-center text-brand-black font-bold text-lg mx-auto relative z-10">
                    {index + 1}
                  </div>
                  <div className="absolute inset-0 bg-brand-yellow rounded-full animate-pulse opacity-20"></div>
                </div>

                {/* Step Image */}
                <div className="mb-6">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-32 object-cover rounded-lg shadow-md mx-auto"
                  />
                </div>

                {/* Step Icon */}
                <div className="text-brand-yellow mb-4 flex justify-center">
                  {step.icon}
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-bold text-brand-black mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="process-benefits mt-16 bg-gray-50 rounded-2xl p-8 opacity-0">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-yellow mb-2">24hrs</div>
              <div className="text-sm text-gray-600">Kit Shipping</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-yellow mb-2">3-5 days</div>
              <div className="text-sm text-gray-600">Results Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-yellow mb-2">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;