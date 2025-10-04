
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
    // Set page title with Chef Sizzle GPT as primary focus
    document.title = 'Chef Sizzle GPT - AI Culinary Genius | Instant Creative Recipes | AIWEBTOOLS.AI';
    
    // Update meta description with tool-focused content
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Chef Sizzle GPT: The world\'s most creative AI chef delivering instant, crazy delicious recipes. Get personalized cooking guidance, ingredient substitutions, and culinary inspiration powered by advanced AI technology from AIWEBTOOLS.AI');
    }

    // Add keywords meta tag dynamically
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'Chef Sizzle GPT, AI chef, AI recipe generator, AI cooking assistant, instant recipes, culinary AI, cooking chatbot, recipe creator, AI tools, AIWEBTOOLS.AI, artificial intelligence cooking, personalized recipes');
    
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

    // Add h1 tags for better SEO structure (hidden but readable by search engines)
    const seoHeadings = document.createElement('div');
    seoHeadings.style.position = 'absolute';
    seoHeadings.style.left = '-9999px';
    seoHeadings.style.width = '1px';
    seoHeadings.style.height = '1px';
    seoHeadings.innerHTML = `
      <h1>Chef Sizzle GPT - AI Culinary Genius for Instant Creative Recipes</h1>
      <h2>Revolutionary AI Chef Technology by AIWEBTOOLS.AI</h2>
      <h3>Personalized Cooking Guidance and Recipe Generation</h3>
    `;
    document.body.appendChild(seoHeadings);
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
