
import React, { useEffect } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Chef Sizzle GPT - Your Virtual Culinary Genius';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Chef Sizzle GPT - The world\'s most creative AI chef, serving up crazy delicious recipes with humor, precision, and culinary genius.');
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationHeader />
      
      <main>
        <HeroSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQSection />
        <Disclaimer />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
