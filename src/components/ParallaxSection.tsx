
import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ 
  children, 
  speed = 0.1,
  className = "" 
}: ParallaxSectionProps) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top } = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight && top > -sectionRef.current.offsetHeight) {
        const newOffset = (windowHeight - top) * speed;
        setOffset(newOffset);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div 
      ref={sectionRef} 
      className={`relative overflow-hidden ${className}`}
    >
      <div 
        style={{ 
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
