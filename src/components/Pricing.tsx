import React, { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Basic Health',
      description: 'Essential health screening for your pet',
      monthlyPrice: 89,
      yearlyPrice: 890,
      popular: false,
      features: [
        'Complete Blood Count (CBC)',
        'Basic Chemistry Panel',
        'Digital Health Report',
        'Email Support',
        'Single Pet Testing'
      ],
      image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      name: 'Complete Wellness',
      description: 'Comprehensive health analysis and monitoring',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      popular: true,
      features: [
        'Everything in Basic Health',
        'Genetic Testing',
        'Allergy Panel',
        'Nutritional Analysis',
        'Quarterly Health Tracking',
        'Phone Support',
        'Veterinary Consultation'
      ],
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      name: 'Premium Care',
      description: 'Advanced testing with ongoing health management',
      monthlyPrice: 249,
      yearlyPrice: 2490,
      popular: false,
      features: [
        'Everything in Complete Wellness',
        'Advanced Genetic Screening',
        'Microbiome Analysis',
        'Toxin Screening',
        'Monthly Health Reports',
        'Priority Support',
        'Multiple Pet Discount',
        'Emergency Consultation'
      ],
      image: 'https://images.pexels.com/photos/6235657/pexels-photo-6235657.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  return (
    <section id="pricing" className="pricing-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="pricing-title text-4xl font-bold text-brand-black mb-4 opacity-0">
            Choose Your <span className="font-bungee text-brand-yellow">Pet's Health</span> Plan
          </h2>
          <p className="pricing-subtitle text-xl text-gray-600 max-w-2xl mx-auto mb-8 opacity-0">
            Transparent pricing with no hidden fees. All plans include free shipping and our satisfaction guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="pricing-toggle flex items-center justify-center space-x-4 opacity-0">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-brand-black font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-brand-yellow' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                billingCycle === 'yearly' ? 'transform translate-x-7' : 'transform translate-x-1'
              }`}></div>
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-brand-black font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-brand-yellow text-brand-black px-2 py-1 rounded-full text-xs font-semibold">
                Save 10%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 opacity-0 ${
                plan.popular ? 'ring-4 ring-brand-yellow transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-brand-yellow text-brand-black text-center py-2 font-semibold text-sm">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              <div className="relative">
                <img 
                  src={plan.image} 
                  alt={plan.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-brand-black">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12)}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'month'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-gray-500 mt-1">
                      Billed annually (${plan.yearlyPrice})
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-brand-yellow mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-brand-yellow text-brand-black hover:bg-yellow-400' 
                    : 'bg-brand-black text-brand-yellow hover:bg-gray-800'
                }`}>
                  {plan.popular && <Zap className="w-4 h-4 inline mr-2" />}
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-guarantee text-center mt-12 opacity-0">
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-brand-black mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600">
              Not satisfied with your results? We'll refund your money, no questions asked. 
              Your pet's health and your peace of mind are our top priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;