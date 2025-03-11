
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Settings, Cpu, History, Puzzle, Lock, UserCheck, BarChart, Sliders, Code } from "lucide-react";
import { useEffect, useState } from "react";

const Technology = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('technology');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const technologies = [
    {
      icon: <Cpu />,
      title: "LLM Backbone",
      description: "Choose a powerful model (OpenAI GPT, Claude, or fine-tuned LLaMA/Mistral)"
    },
    {
      icon: <Settings />,
      title: "Fine-Tuning & RAG",
      description: "Customization for industry-specific knowledge"
    },
    {
      icon: <History />,
      title: "Multi-Turn Memory",
      description: "Remember user context and past interactions"
    },
    {
      icon: <Puzzle />,
      title: "Tool Use & API Integrations",
      description: "Ability to use external tools (database lookups, booking APIs, etc.)"
    },
    {
      icon: <Brain />,
      title: "Multi-Modal Support",
      description: "(If needed) Text, voice, images, or even documents"
    },
    {
      icon: <Lock />,
      title: "End-to-End Encryption",
      description: "Secure conversations & transactions"
    },
    {
      icon: <UserCheck />,
      title: "Authentication & Authorization",
      description: "OAuth, JWT, role-based access"
    },
    {
      icon: <Shield />,
      title: "Data Compliance",
      description: "GDPR, HIPAA (if applicable)"
    },
    {
      icon: <BarChart />,
      title: "Monitoring & Logging",
      description: "ELK Stack, Grafana for real-time alerts"
    },
    {
      icon: <Sliders />,
      title: "Customizable AI Personality",
      description: "Tone, behavior, and branding alignment"
    },
    {
      icon: <Code />,
      title: "No-Code AI Training",
      description: "A way for businesses to tweak responses without engineering effort"
    }
  ];

  return (
    <section id="technology" className="py-20 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-reveal">
            <h2 className="text-ardra-purple mb-4"><span>Our Technology</span></h2>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up animate-delay-200">
            Cutting-edge AI technology designed to transform customer engagement and drive business growth.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'stagger-animation' : 'opacity-0'}`}>
          {technologies.map((tech, index) => (
            <TechCard 
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ 
  icon, 
  title, 
  description,
  delay
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay: number
}) => {
  return (
    <Card className="tech-card overflow-hidden h-full" style={{animationDelay: `${delay + 0.3}s`}}>
      <CardContent className="p-6">
        <div className="bg-ardra-soft-purple h-12 w-12 rounded-lg flex items-center justify-center mb-4 text-ardra-purple">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-ardra-dark-purple">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Technology;
