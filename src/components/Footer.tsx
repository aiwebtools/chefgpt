
import React from 'react';
import { ChefHat, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-10 border-t border-gray-800 overflow-hidden">
      {/* Divine Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent animate-pulse"></div>
      
      {/* Moving particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-15"></div>
        <div className="absolute top-1/6 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-25"></div>
      </div>
      
      {/* Background grid with glow */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6 p-6 rounded-2xl bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-sm border border-purple-500/20 shadow-2xl">
            <div className="flex items-center">
              <div className="relative">
                <ChefHat size={30} className="text-cyber-primary mr-2 drop-shadow-[0_0_10px_rgba(255,82,119,0.8)]" />
                <div className="absolute -inset-2 bg-cyber-primary/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <h3 className="text-xl font-cyber font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Chef Sizzle GPT</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your virtual culinary genius, ready to create amazing recipes tailored to your preferences and available ingredients.
            </p>
            <div className="pt-6 space-y-2">
              <p className="text-sm text-gray-400">Presented by</p>
              <a 
                href="https://www.aiwebtools.ai"
                className="text-cyber-primary hover:text-cyber-secondary transition-all duration-300 font-cyber font-bold text-lg drop-shadow-[0_0_6px_rgba(255,82,119,0.6)] hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                AiWebTools.Ai
              </a>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/10 to-blue-900/10 backdrop-blur-sm border border-cyan-500/20 shadow-2xl">
            <h3 className="text-lg font-cyber font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67f6f08b7e0481919148c4637c3a5e1a-chef-sizzle-gpt"
                  className="text-gray-300 hover:text-cyber-primary transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-cyber-primary/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-3 group-hover:translate-x-1 transition-transform" />
                  Chef Sizzle GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://mixologistgpt.lovable.app/?via=aiwebtools"
                  className="text-gray-300 hover:text-cyber-primary transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-cyber-primary/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-3 group-hover:translate-x-1 transition-transform" />
                  Try Mixologist GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq"
                  className="text-gray-300 hover:text-cyber-primary transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-cyber-primary/10"
                >
                  <ArrowRight size={14} className="mr-3 group-hover:translate-x-1 transition-transform" />
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer"
                  className="text-gray-300 hover:text-cyber-primary transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-cyber-primary/10"
                >
                  <ArrowRight size={14} className="mr-3 group-hover:translate-x-1 transition-transform" />
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai"
                  className="text-gray-300 hover:text-cyber-primary transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-cyber-primary/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-3 group-hover:translate-x-1 transition-transform" />
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/10 to-purple-900/10 backdrop-blur-sm border border-pink-500/20 shadow-2xl">
            <h3 className="text-lg font-cyber font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(255,82,119,0.5)]">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  className="text-gray-300 hover:text-cyber-primary transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-cyber-primary/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-3 group-hover:translate-x-1 transition-transform" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers"
                  className="text-gray-300 hover:text-cyber-primary transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-cyber-primary/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-3 group-hover:translate-x-1 transition-transform" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-900/10 to-orange-900/10 backdrop-blur-sm border border-amber-500/20 shadow-2xl">
            <h3 className="text-lg font-cyber font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:4758008096"
                  className="text-gray-300 hover:text-cyber-secondary transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-cyber-secondary/10"
                >
                  <Phone size={16} className="mr-3 text-cyber-primary drop-shadow-[0_0_6px_rgba(255,82,119,0.6)]" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-gray-300 hover:text-cyber-secondary transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-cyber-secondary/10"
                >
                  <Mail size={16} className="mr-3 text-cyber-primary drop-shadow-[0_0_6px_rgba(255,82,119,0.6)]" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer Section */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-pink-900/20 backdrop-blur-lg border border-white/10 shadow-2xl">
          <p className="text-gray-300 text-center text-sm leading-relaxed">
            <strong className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">Disclaimer:</strong> This website is for informational, educational, and research purposes only. 
            The content provided should not be considered as professional advice.
          </p>
        </div>
        
        {/* More AI Tools Button - Enhanced */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl animate-pulse opacity-30"></div>
            <a 
              href="https://www.aiwebtools.ai"
              className="relative neon-button-cyan flex items-center py-4 px-6 rounded-full text-sm font-bold backdrop-blur-sm shadow-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-10 mt-12 text-center">
          <p className="text-gray-400 text-sm drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
            &copy; {new Date().getFullYear()} AI WEB TOOLS LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
