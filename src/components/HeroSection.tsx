
import React from 'react';
import { ChefHat, Utensils, Clock, BookOpen, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      
      {/* Divine floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-50 delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-30 delay-500"></div>
        <div className="absolute top-1/6 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-35 delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/6 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse opacity-25 delay-2000"></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-orange-400 rounded-full animate-bounce opacity-45 delay-750"></div>
      </div>
      
      {/* Enhanced radial gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-cyber-primary/15 via-transparent to-transparent z-0 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent z-0 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="mb-6 inline-block">
              <div className="relative">
                <ChefHat size={50} className="text-cyber-primary animate-float mx-auto lg:mx-0 drop-shadow-[0_0_20px_rgba(255,82,119,0.8)]" />
                <div className="absolute -inset-3 rounded-full bg-cyber-primary opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -inset-6 rounded-full bg-purple-500 opacity-10 blur-3xl animate-pulse delay-500"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cyber font-bold mb-8 tracking-tight leading-tight">
              <span className="neon-text block mb-4">Chef Sizzle GPT</span>
              <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-3xl md:text-4xl lg:text-5xl"> Your Virtual Culinary Genius</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              The world's most creative AI chef, serving up crazy delicious recipes with 
              humor, precision, and a dash of culinary genius. No restrictions, no holds barred—just pure flavor mastery.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
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
            <div className="mb-10 flex justify-center lg:mb-0">
              <div className="relative">
                <img 
                  src={`${import.meta.env.BASE_URL}chef-sizzle-image.jpg`} 
                  alt="Chef Sizzle AI-Generated Character" 
                  className="rounded-2xl border-2 border-cyber-primary shadow-2xl shadow-cyber-primary/40 max-w-full h-auto transform hover:scale-105 transition-all duration-500"
                  style={{ maxHeight: '500px' }}
                  loading="eager"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.currentTarget.src = 'https://ideogram.ai/assets/image/lossless/response/EJG2KZflRQmNkDe9MdHA0g';
                  }}
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-cyber-primary/20 to-purple-500/20 rounded-3xl blur-2xl animate-pulse"></div>
              </div>
            </div>
            
            <div className="cyber-card-glow relative overflow-hidden rounded-2xl border-cyber-primary mt-12 transform rotate-2 animate-float">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyber-purple via-cyber-primary to-cyber-secondary opacity-80"></div>
              
              <div className="p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <ChefHat className="text-cyber-primary mr-3 drop-shadow-[0_0_10px_rgba(255,82,119,0.8)]" size={28} />
                    <div className="absolute -inset-1 rounded-full bg-cyber-primary opacity-20 blur-md animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-cyber font-bold neon-text">Chef Sizzle Says:</h3>
                </div>
                
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                  "I'm Chef Sizzle..... your go-to virtual flavor master. I'm your personal chef at your service! What can I cook up to blow your tastebuds? 🍲 I'm here to whip up epic recipes, give you cooking tips, or just chat about all things delicious. Welcome to the kitchen of AiWebTools.Ai......What's cookin', good lookin'? 🍽️😎"
                </p>
                
                {/* YouTube Embedded Video - Enhanced */}
                <div className="my-8 relative overflow-hidden rounded-2xl border-2 border-cyber-primary shadow-2xl shadow-cyber-primary/50">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyber-primary/30 to-purple-500/30 rounded-3xl blur-xl animate-pulse"></div>
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <iframe 
                      src="https://www.youtube.com/embed/vJz1HOGtV0I?autoplay=1&mute=0&controls=1&vq=hd1080" 
                      title="Chef Sizzle GPT Presentation"
                      className="w-full h-full rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Clock className="text-cyber-secondary mb-3 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" size={24} />
                    <p className="text-sm text-gray-300 font-medium">Instant Recipe Ideas</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Utensils className="text-cyber-primary mb-3 drop-shadow-[0_0_10px_rgba(255,82,119,0.8)]" size={24} />
                    <p className="text-sm text-gray-300 font-medium">Detailed Instructions</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-sm border border-amber-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <BookOpen className="text-cyber-secondary mb-3 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" size={24} />
                    <p className="text-sm text-gray-300 font-medium">Culinary Knowledge</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border border-pink-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Sparkles className="text-cyber-primary mb-3 drop-shadow-[0_0_10px_rgba(255,82,119,0.8)]" size={24} />
                    <p className="text-sm text-gray-300 font-medium">Creative Genius</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyber-secondary opacity-15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyber-primary opacity-15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 opacity-10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
