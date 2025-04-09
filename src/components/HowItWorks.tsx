
import React from 'react';
import { MessageSquare, ChefHat, Utensils, Coffee, Search, Image } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="text-cyber-primary h-8 w-8" />,
      title: "Chat with Chef Sizzle",
      description: "Start a conversation with Chef Sizzle. Tell him what you're craving or what ingredients you have available."
    },
    {
      icon: <Search className="text-cyber-secondary h-8 w-8" />,
      title: "Share Your Preferences",
      description: "Chef Sizzle will ask about your taste preferences, dietary restrictions, and cuisine interests."
    },
    {
      icon: <Image className="text-cyber-primary h-8 w-8" />,
      title: "Upload Photos (Optional)",
      description: "Share photos of ingredients or your kitchen, and Chef Sizzle will work with what you have."
    },
    {
      icon: <ChefHat className="text-cyber-secondary h-8 w-8" />,
      title: "Receive Custom Recipes",
      description: "Get 5 unique, detailed recipe suggestions tailored to your preferences and available ingredients."
    },
    {
      icon: <Utensils className="text-cyber-primary h-8 w-8" />,
      title: "Follow Detailed Instructions",
      description: "Each recipe comes with step-by-step instructions and helpful cooking tips."
    },
    {
      icon: <Coffee className="text-cyber-secondary h-8 w-8" />,
      title: "Enjoy Your Creation",
      description: "Cook, enjoy, and share feedback with Chef Sizzle for even better future recommendations."
    }
  ];

  return (
    <section className="py-24 relative" id="how-it-works">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="neon-text-cyan">How </span>
            <span className="neon-text">It Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Chef Sizzle makes creating amazing recipes simple and fun. Follow these steps to unleash your inner culinary artist.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-cyber-primary transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Step number with glowing effect */}
                  <div className="relative hidden md:flex items-center justify-center w-16 h-16 bg-cyber-muted rounded-full border-2 border-cyber-primary z-10 mx-auto mb-4 md:mb-0">
                    <span className="font-cyber font-bold text-xl text-white">{index + 1}</span>
                    <div className="absolute inset-0 rounded-full animate-pulse-neon"></div>
                  </div>
                  
                  <div className={`cyber-card flex-1 transition-transform hover:scale-105 md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="flex items-center mb-4 gap-3 justify-center md:justify-start">
                      <span className="md:hidden flex items-center justify-center w-8 h-8 bg-cyber-muted rounded-full border border-cyber-primary text-sm font-bold">{index + 1}</span>
                      <div>{step.icon}</div>
                      <h3 className="text-xl font-cyber font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
