import React from 'react';

const CTA = () => {
  return (
    <section id="labkit" className="cta-section py-20 bg-brand-yellow">
      <div className="container mx-auto px-4 text-center">
        <h2 className="cta-title text-4xl font-bold text-brand-black mb-6 opacity-0">
          Give Your Pet the Gift of <span className="font-bungee">Better Health</span>
        </h2>
        <p className="cta-subtitle text-xl text-gray-800 mb-8 max-w-2xl mx-auto opacity-0">
          Join over 50,000 pet parents who trust PetLabs for comprehensive health insights. 
          Order your testing kit today and take the first step toward a healthier, happier pet.
        </p>
        <div className="cta-button opacity-0 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-brand-black text-brand-yellow px-12 py-6 rounded-lg font-bold text-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Order Your Test Kit Now
          </button>
          <button className="border-3 border-brand-black text-brand-black px-12 py-6 rounded-lg font-bold text-xl hover:bg-brand-black hover:text-brand-yellow transition-all duration-300">
            Schedule Free Consultation
          </button>
        </div>
        
        {/* Additional CTA Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-brand-yellow font-bold text-lg">✓</span>
            </div>
            <p className="font-semibold text-brand-black">Free Shipping</p>
            <p className="text-sm text-gray-700">Collection kit delivered to your door</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-brand-yellow font-bold text-lg">✓</span>
            </div>
            <p className="font-semibold text-brand-black">Expert Analysis</p>
            <p className="text-sm text-gray-700">Reviewed by veterinary specialists</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-brand-yellow font-bold text-lg">✓</span>
            </div>
            <p className="font-semibold text-brand-black">Fast Results</p>
            <p className="text-sm text-gray-700">Results in 3-5 business days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;