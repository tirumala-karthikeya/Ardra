
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('vision');
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
    <section id="vision" className="bg-ardra-purple py-20 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-reveal">
            <h2 className="text-4xl font-bold mb-6"><span>Ready to transform your customer engagement?</span></h2>
          </div>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-white/80 fade-in-up animate-delay-200">
            Experience the power of Ardra's intelligent agents and see the impact on your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 fade-in-up animate-delay-400">
            <Button size="lg" className="bg-white text-ardra-purple hover:bg-white/90 px-8 hover-lift">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8 hover-lift">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
