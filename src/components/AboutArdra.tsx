
import { Card, CardContent } from "@/components/ui/card";
import { History, Lightbulb, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

const AboutArdra = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
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

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-ardra-soft-purple/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-reveal">
            <h2 className="text-ardra-purple mb-4"><span>Meet Ardra</span></h2>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up animate-delay-200">
            Redefining conversational AI with solutions designed for enterprise impact.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${isVisible ? 'stagger-animation' : 'opacity-0'}`}>
          <AboutCard 
            icon={<History />}
            title="Our Story" 
            content="As a highly professional young team of innovative tech startup, we are redefining conversational AI with cutting-edge solutions designed to elevate customer engagement. While we are a young company, our technology is built on forward-thinking expertise, positioning us to serve enterprises across banking, telecom, and insurance sectors. We are committed to delivering enterprise-grade AI solutions that drive efficiency, enhance customer interactions, and create measurable business impact."
          />
          
          <AboutCard 
            icon={<Lightbulb />}
            title="Our Vision" 
            content="We offer a cost-effective solution without compromising on quality, coupled with a highly personalized approach tailored to your unique business needs. Our agile structure enables us to provide competitive pricing while ensuring dedicated attention and customized support, delivering maximum value and responsiveness."
          />
          
          <AboutCard 
            icon={<Cpu />}
            title="Our Technology" 
            content="Our solution provides end-to-end issue resolution, seamlessly integrating with hotel systems to resolve problems efficiently while proactively engaging customers by ensuring a frictionless and personalized experience."
          />
        </div>
      </div>
    </section>
  );
};

const AboutCard = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover-lift">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="bg-ardra-purple h-12 w-12 rounded-full flex items-center justify-center mb-4 text-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-ardra-dark-purple">{title}</h3>
        <p className="text-gray-700 flex-grow">{content}</p>
      </CardContent>
    </Card>
  );
};

export default AboutArdra;
