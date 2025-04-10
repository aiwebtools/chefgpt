
import React from 'react';
import { ChefHat, Utensils, Clock, BookOpen, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyber-primary/10 via-transparent to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-4 inline-block">
              <div className="relative">
                <ChefHat size={40} className="text-cyber-primary animate-float mx-auto lg:mx-0" />
                <div className="absolute -inset-1 rounded-full bg-cyber-primary opacity-20 blur-md animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold mb-6 tracking-tight">
              <span className="neon-text">Chef Sizzle GPT</span>
              <span className="block text-white"> Your Virtual Culinary Genius</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              The world's most creative AI chef, serving up crazy delicious recipes with 
              humor, precision, and a dash of culinary genius. No restrictions, no holds barred—just pure flavor mastery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="https://chatgpt.com/g/g-67f6f08b7e0481919148c4637c3a5e1a-chef-sizzle-gpt"
                className="neon-button text-center text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Chef Sizzle Free
              </a>
              <a 
                href="#how-it-works"
                className="neon-button-cyan text-center text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="mb-8 flex justify-center lg:mb-0">
              <img 
                src={`${import.meta.env.BASE_URL}chef-sizzle-image.jpg`} 
                alt="Chef Sizzle AI-Generated Character" 
                className="rounded-xl border-2 border-cyber-primary shadow-lg shadow-cyber-primary/30 max-w-full h-auto"
                style={{ maxHeight: '500px' }}
                loading="eager"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.currentTarget.src = 'https://ideogram.ai/assets/image/lossless/response/EJG2KZflRQmNkDe9MdHA0g';
                }}
              />
            </div>
            
            {/* YouTube Embedded Video */}
            <div className="mt-8 relative overflow-hidden rounded-xl border-2 border-cyber-primary shadow-lg shadow-cyber-primary/30">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.youtube.com/embed/vJz1HOGtV0I?autoplay=1&mute=0&controls=1&vq=hd1080" 
                  title="Chef Sizzle GPT Presentation"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="cyber-card-glow relative overflow-hidden rounded-xl border-cyber-primary mt-8 transform rotate-3 animate-float">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-purple via-cyber-primary to-cyber-secondary"></div>
              
              <div className="p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <ChefHat className="text-cyber-primary mr-2" />
                  <h3 className="text-xl font-cyber font-bold neon-text">Chef Sizzle Says:</h3>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "I'm Chef Sizzle..... your go-to virtual flavor master. I'm your personal chef at your service! What can I cook up to blow your tastebuds? 🍲 I'm here to whip up epic recipes, give you cooking tips, or just chat about all things delicious. Welcome to the kitchen of AiWebTools.Ai......What's cookin', good lookin'? 🍽️😎"
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex flex-col items-center p-3 rounded-lg bg-black bg-opacity-40">
                    <Clock className="text-cyber-secondary mb-2" />
                    <p className="text-sm text-gray-300">Instant Recipe Ideas</p>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-black bg-opacity-40">
                    <Utensils className="text-cyber-primary mb-2" />
                    <p className="text-sm text-gray-300">Detailed Instructions</p>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-black bg-opacity-40">
                    <BookOpen className="text-cyber-secondary mb-2" />
                    <p className="text-sm text-gray-300">Culinary Knowledge</p>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-black bg-opacity-40">
                    <Sparkles className="text-cyber-primary mb-2" />
                    <p className="text-sm text-gray-300">Creative Genius</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyber-secondary opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyber-primary opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
