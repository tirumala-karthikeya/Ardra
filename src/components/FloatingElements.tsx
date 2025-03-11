
import { useEffect, useState } from "react";

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements = ({ className = "" }: FloatingElementsProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {isLoaded && (
        <>
          <div className="absolute top-[10%] right-[15%] w-20 h-20 rounded-full bg-ardra-light-purple/10 floating-slow"></div>
          <div className="absolute top-[30%] left-[10%] w-32 h-32 rounded-full bg-ardra-soft-blue/20 floating"></div>
          <div className="absolute bottom-[20%] right-[25%] w-16 h-16 rounded-full bg-ardra-soft-purple/20 floating-reverse"></div>
          <div className="absolute top-[60%] left-[20%] w-24 h-24 rounded-full bg-ardra-light-purple/15 floating-slow-reverse"></div>
          
          <div className="absolute top-[15%] left-[30%] w-4 h-4 rounded-full bg-ardra-purple/30 pulse"></div>
          <div className="absolute bottom-[30%] left-[15%] w-6 h-6 rounded-full bg-ardra-purple/20 pulse-delay"></div>
          <div className="absolute top-[40%] right-[10%] w-5 h-5 rounded-full bg-ardra-purple/25 pulse-delay-2"></div>
        </>
      )}
    </div>
  );
};

export default FloatingElements;
