
import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingElements from "./FloatingElements";
import ParallaxSection from "./ParallaxSection";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="hero-gradient pt-32 pb-20 px-6 md:px-12 overflow-hidden relative">
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            <div className="text-reveal overflow-hidden">
              <h1 className="text-ardra-dark-purple">
                <span className="block" style={{animationDelay: '0.1s'}}>Intelligent Agents</span>
                <span className="block text-ardra-purple" style={{animationDelay: '0.3s'}}>That Think, Learn,</span>
                <span className="block text-ardra-purple" style={{animationDelay: '0.5s'}}>and Drive Growth</span>
              </h1>
            </div>
            <p className="text-lg text-gray-700 max-w-lg fade-in-up animate-delay-600">
              Advanced AI solutions designed to elevate customer engagement with cutting-edge conversational technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 fade-in-up animate-delay-700">
              <Button className="bg-ardra-purple hover:bg-ardra-purple/90 px-6 py-6 hover-lift">
                Request Demo
              </Button>
              <Button variant="outline" className="border-ardra-purple text-ardra-purple hover:bg-ardra-purple/10 px-6 py-6 hover-lift">
                Learn More
              </Button>
            </div>
          </div>
          
          <ParallaxSection speed={0.05} className="lg:h-[450px] flex justify-center">
            <div className={`relative h-full w-full flex items-center justify-center ${isLoaded ? 'fade-in animate-delay-300' : 'opacity-0'}`}>
              <div className="absolute w-72 h-72 rounded-full bg-ardra-light-purple/20 pulse"></div>
              <div className="relative z-10 grid grid-cols-1 gap-4 stagger-animation">
                <IconCard 
                  icon={<Brain className="h-8 w-8 text-ardra-purple" />}
                  title="Core AI & NLP" 
                  description="Advanced natural language processing for human-like conversations"
                  delay={0.1}
                />
                <IconCard 
                  icon={<ShieldCheck className="h-8 w-8 text-ardra-purple" />}
                  title="Security & Compliance" 
                  description="End-to-end encryption with GDPR and HIPAA compliance"
                  delay={0.3}
                />
                <IconCard 
                  icon={<MessageSquare className="h-8 w-8 text-ardra-purple" />}
                  title="Customization" 
                  description="Tailor AI personality and knowledge to your brand"
                  delay={0.5}
                />
              </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

const IconCard = ({ 
  icon, 
  title, 
  description,
  delay = 0
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay?: number
}) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 tech-card transform transition-all duration-700" 
      style={{animationDelay: `${delay}s`}}
    >
      <div className="mt-1 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-ardra-dark-purple">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Hero;
