
import React from 'react';
import { Camera, BookOpen, Utensils, Youtube, Sparkles, Lightbulb } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="text-cyber-secondary h-8 w-8" />,
      title: "Photo Recognition",
      description: "Upload photos of your kitchen ingredients and let Chef Sizzle work with what you have available."
    },
    {
      icon: <BookOpen className="text-cyber-primary h-8 w-8" />,
      title: "Detailed Recipes",
      description: "Get 5 unique recipe ideas with vivid taste descriptions and extremely detailed step-by-step instructions."
    },
    {
      icon: <Utensils className="text-cyber-secondary h-8 w-8" />,
      title: "Culinary Innovation",
      description: "Experience original recipe inventions that don't exist elsewhere, clearly labeled and explained with flair."
    },
    {
      icon: <Youtube className="text-cyber-primary h-8 w-8" />,
      title: "Video Tutorials",
      description: "Get YouTube cooking tutorial video recommendations that complement your recipe when applicable."
    },
    {
      icon: <Sparkles className="text-cyber-secondary h-8 w-8" />,
      title: "Personalized Experience",
      description: "Chef Sizzle adapts to your taste preferences, dietary restrictions, and available ingredients."
    },
    {
      icon: <Lightbulb className="text-cyber-primary h-8 w-8" />,
      title: "Culinary Creativity",
      description: "Unlock Michelin-star level recipes with perfect flavor combinations and ingredient measurements."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyber-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyber-secondary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="neon-text">Cutting-Edge </span>
            <span className="neon-text-cyan">Features</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover what makes Chef Sizzle GPT the most advanced AI chef in the digital kitchen. Packed with features that bring your culinary dreams to reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-card transition-transform hover:scale-105 group"
            >
              <div className="p-2 mb-4 inline-block bg-black bg-opacity-50 rounded-lg">
                {feature.icon}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-secondary opacity-0 group-hover:opacity-20 transition-opacity rounded-lg"></div>
              </div>
              <h3 className="text-xl font-cyber font-bold mb-3 text-white group-hover:text-cyber-primary transition-colors">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
