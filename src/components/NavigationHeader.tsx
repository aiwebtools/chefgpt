
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, MessageSquare, HelpCircle, FileText, Grid } from 'lucide-react';
import Logo3D from './Logo3D';

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  }, [closeMenu]);

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
      href: 'https://aiwebtools.lovable.app/?via=aiwebtools',
      icon: <Grid size={20} />
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-black/80 backdrop-blur-md shadow-lg shadow-black/20' : 'py-3 sm:py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="https://chatgpt.com/g/g-67f6f08b7e0481919148c4637c3a5e1a-chef-sizzle-gpt"
          className="flex items-center transition-transform hover:scale-105 active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo3D />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-3 lg:space-x-4 items-center">
          {navigationItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`whitespace-nowrap text-sm lg:text-base ${item.className || "text-white hover:text-cyber-secondary transition-colors"}`}
              target={item.href.startsWith('http') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              onClick={(e) => handleAnchorClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyber-primary focus:outline-none p-2 rounded-full border-2 border-cyber-primary active:scale-90 transition-transform touch-manipulation"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay with smooth transition */}
      <div 
        className={`md:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-md z-40 flex flex-col transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ willChange: 'opacity' }}
      >
        {/* Close button at top right */}
        <div className="flex justify-end p-4 pt-5">
          <button
            onClick={closeMenu}
            className="text-cyber-primary p-2 rounded-full border-2 border-cyber-primary active:scale-90 transition-transform touch-manipulation"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 container mx-auto px-6 pb-8 flex flex-col space-y-4 overflow-y-auto overscroll-contain -webkit-overflow-scrolling-touch">
          {navigationItems.map((item, index) => (
            <a 
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-4 py-4 px-5 rounded-xl transition-all duration-200 active:scale-[0.97] touch-manipulation ${
                item.className ? 
                  item.name === 'Chef Sizzle GPT' ? 'bg-cyber-primary/10 text-cyber-primary border-2 border-cyber-primary' : 
                  'bg-cyber-secondary/10 text-cyber-secondary border-2 border-cyber-secondary' : 
                  'text-white hover:bg-white/5 active:bg-white/10 border border-white/10'
              }`}
              style={{ 
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMenuOpen ? 1 : 0,
                transition: `all 0.3s ease ${index * 0.05}s`
              }}
              target={item.href.startsWith('http') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              onClick={(e) => handleAnchorClick(e, item.href)}
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              <span className="text-lg font-medium">{item.name}</span>
            </a>
          ))}
          
          <div className="mt-auto pt-6 border-t border-white/10">
            <p className="text-gray-400 text-center text-sm">
              &copy; {new Date().getFullYear()} AiWebTools.Ai
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
