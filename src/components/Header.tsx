import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-2xl font-bungee text-brand-yellow">PetLabs</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-white hover:text-brand-yellow transition-colors duration-300">
              Home
            </a>
            <a href="#services" className="nav-link text-white hover:text-brand-yellow transition-colors duration-300">
              Services
            </a>
            <a href="#booking" className="nav-link text-white hover:text-brand-yellow transition-colors duration-300">
              Book Test
            </a>
            <a href="#about" className="nav-link text-white hover:text-brand-yellow transition-colors duration-300">
              About
            </a>
            <a href="#pricing" className="nav-link text-white hover:text-brand-yellow transition-colors duration-300">
              Pricing
            </a>
            <a href="#contact" className="nav-link text-white hover:text-brand-yellow transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-brand-yellow transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-white hover:text-brand-yellow transition-colors duration-300">
                Home
              </a>
              <a href="#services" className="text-white hover:text-brand-yellow transition-colors duration-300">
                Services
              </a>
              <a href="#booking" className="text-white hover:text-brand-yellow transition-colors duration-300">
                Book Test
              </a>
              <a href="#about" className="text-white hover:text-brand-yellow transition-colors duration-300">
                About
              </a>
              <a href="#pricing" className="text-white hover:text-brand-yellow transition-colors duration-300">
                Pricing
              </a>
              <a href="#contact" className="text-white hover:text-brand-yellow transition-colors duration-300">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;