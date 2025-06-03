
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
    // Set page title with AI tools keywords
    document.title = 'AI WEB TOOLS - #1 AI Tools Platform | AIWEBTOOLS.AI | Chef Sizzle GPT';
    
    // Update meta description with target keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI WEB TOOLS - The #1 platform for AI tools including Chef Sizzle GPT, the world\'s most creative AI chef. Discover powerful AI tools for cooking, recipes, and more at AIWEBTOOLS.AI');
    }

    // Add keywords meta tag dynamically
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'AI tools, AI web tools, AIWEBTOOLS.AI, Chef Sizzle GPT, AI chef, AI recipe generator, artificial intelligence tools, AI cooking assistant, best AI tools, AI platform');
    
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
      <h1>AI WEB TOOLS - Premier AI Tools Platform</h1>
      <h2>AIWEBTOOLS.AI - Your Source for Advanced AI Solutions</h2>
      <h3>Chef Sizzle GPT - Revolutionary AI Chef Technology</h3>
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
