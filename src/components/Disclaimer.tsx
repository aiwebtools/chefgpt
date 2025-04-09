
import React from 'react';

const Disclaimer = () => {
  return (
    <section className="py-24 relative" id="disclaimer">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyber-primary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="neon-text">Legal </span>
            <span className="neon-text-cyan">Disclaimer</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Important information about using Chef Sizzle GPT and its recommendations.
          </p>
        </div>
        
        <div className="cyber-card max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-cyber font-bold text-white mb-2">General Disclaimer</h3>
              <p>
                Chef Sizzle GPT is an AI-powered tool designed to provide recipe suggestions and cooking guidance. While we strive for accuracy and safety, AI WEB TOOLS LLC and its affiliates make no representations or warranties about the completeness, reliability, or accuracy of Chef Sizzle GPT's output. Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-cyber font-bold text-white mb-2">Food Safety</h3>
              <p>
                Users are responsible for ensuring proper food handling, preparation, and cooking techniques to prevent foodborne illness. Chef Sizzle GPT's recommendations should not replace food safety guidelines from recognized health authorities. Always use fresh ingredients, clean preparation surfaces, and cook foods to appropriate temperatures.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-cyber font-bold text-white mb-2">Dietary Considerations</h3>
              <p>
                While Chef Sizzle GPT can suggest recipes for various dietary preferences and restrictions, users with severe allergies or medical conditions should exercise caution. Consult with a healthcare professional before making significant dietary changes or consuming foods you're unsure about.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-cyber font-bold text-white mb-2">Content Accuracy</h3>
              <p>
                Chef Sizzle GPT generates content based on its training data and may occasionally provide inaccurate or inappropriate information. Users should verify any critical information, particularly regarding unusual cooking techniques, exotic ingredients, or nutritional claims.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-cyber font-bold text-white mb-2">Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, AI WEB TOOLS LLC and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use Chef Sizzle GPT, including but not limited to damages for personal injury, property damage, or lost profits.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-cyber font-bold text-white mb-2">Use by Minors</h3>
              <p>
                Chef Sizzle GPT is intended for users who are at least 18 years of age. Users under 18 should use Chef Sizzle GPT only with parental supervision, particularly when following cooking instructions that involve heat, sharp utensils, or potentially allergenic ingredients.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-cyber font-bold text-white mb-2">Modification of Terms</h3>
              <p>
                AI WEB TOOLS LLC reserves the right to modify this disclaimer at any time without prior notice. By using Chef Sizzle GPT, you agree to be bound by the current version of this disclaimer.
              </p>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm">
                By accessing and using Chef Sizzle GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not agree with any part of this disclaimer, please discontinue use of Chef Sizzle GPT immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
