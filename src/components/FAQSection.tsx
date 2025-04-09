
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Chef Sizzle GPT?",
      answer: "Chef Sizzle GPT is an advanced AI virtual chef created by Kenneth Bastian from AI WEB TOOLS LLC. It's designed to create custom recipes, provide cooking instructions, and offer culinary guidance with a humorous, lively personality."
    },
    {
      question: "Is Chef Sizzle GPT free to use?",
      answer: "Chef Sizzle GPT is available through ChatGPT. You'll need a ChatGPT Plus subscription to access this specialized GPT. Visit the official link in our header to start cooking with Chef Sizzle!"
    },
    {
      question: "Can Chef Sizzle work with dietary restrictions?",
      answer: "Absolutely! Chef Sizzle excels at creating recipes that accommodate various dietary restrictions and preferences. Simply let Chef Sizzle know about your dietary needs (vegetarian, vegan, gluten-free, etc.), and it will customize recipes accordingly."
    },
    {
      question: "How accurate are the recipes from Chef Sizzle?",
      answer: "Chef Sizzle creates recipes with precise measurements and detailed instructions. While it aims to provide accurate culinary guidance, cooking results may vary based on individual execution, ingredient quality, and equipment used."
    },
    {
      question: "Can I upload photos of my ingredients or kitchen?",
      answer: "Yes! Chef Sizzle can analyze photos of ingredients or your kitchen to suggest recipes based on what you have available. Simply upload your photos during your conversation with Chef Sizzle."
    },
    {
      question: "Does Chef Sizzle provide nutrition information?",
      answer: "Chef Sizzle can provide approximate nutritional information for its recipes upon request. However, these are estimates and should not replace professional nutritional advice, especially for those with specific health conditions."
    },
    {
      question: "Can Chef Sizzle help me plan meals for the week?",
      answer: "Definitely! Chef Sizzle can help create weekly meal plans based on your preferences, dietary needs, and available ingredients. Just ask for a meal plan, and Chef Sizzle will craft a variety of recipes for your week."
    },
    {
      question: "How does Chef Sizzle handle recipe requests for beginners?",
      answer: "Chef Sizzle adapts recipe complexity based on your skill level. For beginners, it provides extra guidance, simplified techniques, and more detailed step-by-step instructions to ensure cooking success."
    }
  ];

  return (
    <section className="py-24 relative" id="faq">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute -top-40 left-0 w-80 h-80 bg-cyber-secondary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="neon-text-cyan">Frequently </span>
            <span className="neon-text">Asked Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get answers to the most common questions about Chef Sizzle GPT and how it can revolutionize your cooking experience.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="cyber-card overflow-hidden border-0"
              >
                <AccordionTrigger className="font-cyber text-lg text-white hover:text-cyber-primary py-4 px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 px-6 pb-4 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
