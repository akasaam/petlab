import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="about-title text-4xl font-bold mb-6 opacity-0">
              The Science Behind <span className="font-bungee text-brand-yellow">PetLabs</span>
            </h2>
            <p className="about-text text-lg text-gray-300 mb-6 opacity-0">
              Founded in 2018 by a team of veterinarians and laboratory scientists, PetLabs was born from a simple mission: 
              make advanced pet health testing accessible to every pet parent. Our AAHA-accredited laboratory combines 
              cutting-edge technology with compassionate veterinary expertise.
            </p>
            <p className="about-text text-lg text-gray-300 mb-8 opacity-0">
              Led by Dr. Maria Rodriguez, DVM, PhD, our team includes board-certified veterinary pathologists, 
              licensed laboratory technicians, and pet nutrition specialists. Every test result is reviewed by 
              our veterinary team to ensure accuracy and provide personalized health recommendations.
            </p>
            
            {/* Team Credentials */}
            <div className="about-text mb-8 opacity-0">
              <h3 className="text-xl font-semibold text-brand-yellow mb-4">Our Credentials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                  <span>AAHA Laboratory Accreditation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                  <span>FDA Registered Facility</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                  <span>ISO 15189 Certified</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                  <span>CLIA Laboratory License</span>
                </div>
              </div>
            </div>
            
            <div className="about-stats grid grid-cols-2 gap-6 opacity-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-yellow mb-2">200K+</div>
                <div className="text-sm text-gray-400">Tests Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-yellow mb-2">15+</div>
                <div className="text-sm text-gray-400">Veterinary Specialists</div>
              </div>
            </div>
          </div>

          {/* Team Photo */}
          <div className="about-illustration flex justify-center opacity-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6235045/pexels-photo-6235045.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                alt="PetLabs veterinary team in laboratory"
                className="w-full max-w-md h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 bg-brand-yellow text-brand-black px-4 py-2 rounded-lg">
                <p className="font-semibold text-sm">Dr. Maria Rodriguez, DVM, PhD</p>
                <p className="text-xs">Chief Veterinary Officer</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-brand-yellow/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              "Every pet deserves the best possible care. By making advanced laboratory testing accessible 
              and affordable, we empower pet parents to make informed decisions about their companion's health. 
              Our commitment extends beyond testing – we're here to support you throughout your pet's entire health journey."
            </p>
            <div className="mt-6">
              <p className="text-brand-yellow font-semibold">- Dr. Maria Rodriguez, Founder & Chief Veterinary Officer</p>
            </div>
          </div>
        </div>
        
        {/* Awards and Recognition */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-black font-bold text-sm">2024</span>
              </div>
              <p className="text-sm text-gray-300">Best Pet Health Innovation</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-black font-bold text-sm">2023</span>
              </div>
              <p className="text-sm text-gray-300">Veterinary Excellence Award</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-black font-bold text-sm">2022</span>
              </div>
              <p className="text-sm text-gray-300">Customer Choice Award</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-black font-bold text-sm">2021</span>
              </div>
              <p className="text-sm text-gray-300">Laboratory Accreditation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;