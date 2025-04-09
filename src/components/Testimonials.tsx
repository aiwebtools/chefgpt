
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Home Chef",
      content: "Chef Sizzle helped me create the most amazing dinner for my anniversary. The detailed instructions made me look like a professional chef! The flavor combinations were mind-blowing.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Busy Parent",
      content: "As a parent of three, I needed quick meal ideas that my kids would actually eat. Chef Sizzle delivered exactly that, with fun recipes that my whole family loves. The humor makes cooking fun again!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Food Blogger",
      content: "I've tried many AI recipe generators, but Chef Sizzle is on another level. The creativity and attention to detail in each recipe is impressive. My blog readers are loving these unique creations!",
      rating: 5
    },
    {
      name: "Emily Parker",
      role: "Culinary Student",
      content: "Chef Sizzle has become my secret weapon for culinary school. The way it explains cooking techniques and flavor pairings has enhanced my understanding of food science. Absolutely invaluable!",
      rating: 5
    },
    {
      name: "David Williams",
      role: "Restaurant Owner",
      content: "We've been using Chef Sizzle to inspire our weekly specials. The innovative combinations have brought in new customers and generated buzz around our restaurant. A game-changer for our business!",
      rating: 5
    },
    {
      name: "Sophia Martinez",
      role: "Health Enthusiast",
      content: "I needed recipes that fit my specific dietary requirements, and Chef Sizzle delivered perfect options. It understood my restrictions and still created flavorful, exciting meals I look forward to!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute -bottom-40 right-0 w-80 h-80 bg-cyber-primary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="neon-text">Chef Sizzle </span>
            <span className="neon-text-cyan">Fan Club</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. See what culinary enthusiasts are saying about their experience with Chef Sizzle GPT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="cyber-card transition-transform hover:scale-105 relative overflow-hidden group"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-purple via-cyber-primary to-cyber-secondary"></div>
              
              <div className="flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-cyber-primary fill-cyber-primary" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic mb-6 flex-grow">{`"${testimonial.content}"`}</p>
                
                <div className="mt-auto">
                  <h4 className="font-cyber font-bold text-white group-hover:text-cyber-primary transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
