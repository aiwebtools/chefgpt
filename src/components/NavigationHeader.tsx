
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo3D from './Logo3D';

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-black bg-opacity-80 backdrop-blur-md' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="https://chatgpt.com/g/g-67f6f08b7e0481919148c4637c3a5e1a-chef-sizzle-gpt"
          className="flex items-center transition-transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo3D />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center">
          <a 
            href="https://chatgpt.com/g/g-67f6f08b7e0481919148c4637c3a5e1a-chef-sizzle-gpt"
            className="neon-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chef Sizzle GPT
          </a>
          <a 
            href="https://mixologistgpt.lovable.app/?via=aiwebtools"
            className="neon-button-cyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Mixologist GPT
          </a>
          <a href="#faq" className="text-white hover:text-cyber-secondary transition-colors">
            FAQ
          </a>
          <a href="#disclaimer" className="text-white hover:text-cyber-secondary transition-colors">
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai"
            className="text-white hover:text-cyber-secondary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-67f6f08b7e0481919148c4637c3a5e1a-chef-sizzle-gpt"
              className="neon-button text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Chef Sizzle GPT
            </a>
            <a 
              href="https://mixologistgpt.lovable.app/?via=aiwebtools"
              className="neon-button-cyan text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Try Mixologist GPT
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-secondary transition-colors p-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-secondary transition-colors p-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai"
              className="text-white hover:text-cyber-secondary transition-colors p-2 text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              More AI Tools
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationHeader;
