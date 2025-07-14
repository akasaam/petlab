import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section py-12 bg-brand-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bungee text-brand-yellow mb-4">PetLabs</h3>
            <p className="text-gray-400 mb-4">
              Advanced pet health testing made simple. Providing comprehensive laboratory services for your beloved companions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">
                Contact Us
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">
                Support
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-yellow mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">Services</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">Book Test</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-brand-yellow mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Laboratory Drive</p>
              <p>Austin, TX 78701</p>
              <p>support@petlabs.com</p>
              <p>1-800-PET-LABS</p>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>
        
        {/* Additional Footer Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-brand-yellow mb-4">Legal</h4>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-brand-yellow transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-brand-yellow transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-brand-yellow transition-colors duration-300">HIPAA Compliance</a>
                <a href="#" className="hover:text-brand-yellow transition-colors duration-300">Refund Policy</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-brand-yellow mb-4">Resources</h4>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-brand-yellow transition-colors duration-300">Sample Collection Guide</a>
                <a href="#" className="hover:text-brand-yellow transition-colors duration-300">Understanding Results</a>
                <a href="#" className="hover:text-brand-yellow transition-colors duration-300">Veterinary Partners</a>
                <a href="#" className="hover:text-brand-yellow transition-colors duration-300">Health Resources</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 PetLabs, Inc. All rights reserved. | AAHA Accredited Laboratory | FDA Registered Facility</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;