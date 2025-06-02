import React from 'react';
import { ChefHat, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-10 border-t border-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4">
            <div className="flex items-center">
              <ChefHat size={30} className="text-cyber-primary mr-2" />
              <h3 className="text-xl font-cyber font-bold text-white">Chef Sizzle GPT</h3>
            </div>
            <p className="text-gray-400">
              Your virtual culinary genius, ready to create amazing recipes tailored to your preferences and available ingredients.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-500">Presented by</p>
              <a 
                href="https://www.aiwebtools.ai"
                className="text-cyber-primary hover:text-cyber-secondary transition-colors font-cyber font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                AiWebTools.Ai
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-cyber font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67f6f08b7e0481919148c4637c3a5e1a-chef-sizzle-gpt"
                  className="text-gray-400 hover:text-cyber-primary transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Chef Sizzle GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://mixologistgpt.lovable.app/?via=aiwebtools"
                  className="text-gray-400 hover:text-cyber-primary transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Try Mixologist GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq"
                  className="text-gray-400 hover:text-cyber-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer"
                  className="text-gray-400 hover:text-cyber-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai"
                  className="text-gray-400 hover:text-cyber-primary transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-2" />
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-cyber font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  className="text-gray-400 hover:text-cyber-primary transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers"
                  className="text-gray-400 hover:text-cyber-primary transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-cyber font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:4758008096"
                  className="text-gray-400 hover:text-cyber-primary transition-colors flex items-center"
                >
                  <Phone size={16} className="mr-2 text-cyber-primary" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-gray-400 hover:text-cyber-primary transition-colors flex items-center"
                >
                  <Mail size={16} className="mr-2 text-cyber-primary" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://www.aiwebtools.ai"
            className="neon-button-cyan flex items-center py-3 px-5 rounded-full text-sm font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AI WEB TOOLS LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
