import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="hero-title text-4xl md:text-6xl font-bold text-brand-black mb-6 opacity-0">
              Your Pet's Health Journey Starts with <span className="font-bungee text-brand-yellow">PetLabs</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-gray-600 mb-8 opacity-0 leading-relaxed">
              Get comprehensive health insights for your beloved companion with our state-of-the-art laboratory testing. 
              From genetic screening to nutritional analysis, we provide the answers you need to keep your pet healthy and happy for years to come.
            </p>
            <div className="hero-button opacity-0 flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-yellow text-brand-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                Order Your Test Kit
              </button>
              <button className="border-2 border-brand-black text-brand-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-black hover:text-white transition-all duration-300">
                View Sample Report
              </button>
            </div>
            
            {/* Key Benefits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                <span>Results in 3-5 days</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                <span>99.8% accuracy rate</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                <span>Vet-approved testing</span>
              </div>
            </div>
            </button>
          </div>

          {/* Illustration */}
          <div className="hero-illustration flex justify-center opacity-0">
            <div className="relative w-96 h-96">
              <img 
                src="https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                alt="Veterinarian examining a dog in modern laboratory"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm">
                Advanced Pet Care
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="trust-indicators mt-16 text-center opacity-0">
          <p className="text-gray-500 mb-8 text-lg">Trusted by over 50,000 pet parents across North America</p>
          <div className="flex justify-center items-center space-x-12 flex-wrap">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-brand-black">AAHA</span>
              </div>
              <span className="text-sm font-medium">AAHA Accredited</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-brand-black">FDA</span>
              </div>
              <span className="text-sm font-medium">FDA Registered</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-brand-black">ISO</span>
              </div>
              <span className="text-sm font-medium">ISO 15189 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-brand-black">24/7</span>
              </div>
              <span className="text-sm font-medium">24/7 Vet Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;