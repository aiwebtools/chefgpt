
import React, { useEffect, useRef } from 'react';
import { ChefHat } from 'lucide-react';

const Logo3D = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logoElement = logoRef.current;
    if (!logoElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = logoElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) / 20;
      const moveY = (e.clientY - centerY) / 20;
      
      logoElement.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={logoRef}
      className="relative inline-block transition-transform duration-200 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute -z-10 animate-pulse-neon" style={{ transform: 'translateZ(-10px)' }}>
          <ChefHat size={80} className="text-cyber-primary opacity-70" />
        </div>
        <ChefHat size={70} className="text-cyber-primary" style={{ transform: 'translateZ(20px)' }} />
      </div>
      <div className="mt-2 text-center font-cyber font-bold" style={{ transform: 'translateZ(30px)' }}>
        <h2 className="text-xl neon-text">Chef Sizzle GPT</h2>
        <p className="text-xs text-gray-400">Presented by AiWebTools.Ai</p>
      </div>
    </div>
  );
};

export default Logo3D;
