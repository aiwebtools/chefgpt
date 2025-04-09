
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, MessageSquare, HelpCircle, FileText, Grid } from 'lucide-react';
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

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    {
      name: 'Chef Sizzle GPT',
      href: 'https://chatgpt.com/g/g-67f6f08b7e0481919148c4637c3a5e1a-chef-sizzle-gpt',
      icon: <MessageSquare size={20} />,
      className: 'neon-button'
    },
    {
      name: 'Try Mixologist GPT',
      href: 'https://mixologistgpt.lovable.app/?via=aiwebtools',
      icon: <Grid size={20} />,
      className: 'neon-button-cyan'
    },
    {
      name: 'FAQ',
      href: '#faq',
      icon: <HelpCircle size={20} />
    },
    {
      name: 'Disclaimer',
      href: '#disclaimer',
      icon: <FileText size={20} />
    },
    {
      name: 'More AI Tools',
      href: 'https://www.aiwebtools.ai',
      icon: <Grid size={20} />
    }
  ];

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
          {navigationItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={item.className || "text-white hover:text-cyber-secondary transition-colors"}
              target={item.href.startsWith('http') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              onClick={item.href.startsWith('#') ? closeMenu : undefined}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyber-primary focus:outline-none p-2 rounded-full border-2 border-cyber-primary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Improved for better navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-black bg-opacity-95 backdrop-blur-md z-50 flex flex-col">
          <div className="container mx-auto px-6 py-8 flex flex-col space-y-6 h-full overflow-y-auto">
            {navigationItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-4 py-4 px-4 rounded-lg transition-all duration-200 active:scale-95 ${
                  item.className ? 
                    item.name === 'Chef Sizzle GPT' ? 'bg-transparent text-cyber-primary border-2 border-cyber-primary' : 
                    'bg-transparent text-cyber-secondary border-2 border-cyber-secondary' : 
                    'text-white hover:bg-cyber-muted'
                }`}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                onClick={closeMenu}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-lg font-medium">{item.name}</span>
              </a>
            ))}
            
            <div className="mt-auto py-4 border-t border-gray-800">
              <p className="text-gray-400 text-center text-sm">
                &copy; {new Date().getFullYear()} AiWebTools.Ai
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationHeader;
