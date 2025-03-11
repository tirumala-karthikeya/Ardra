
import { useEffect, useRef, useState } from "react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedImage = ({ src, alt, className = "" }: AnimatedImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`overflow-hidden ${className}`}>
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
          isVisible ? "scale-100" : "scale-110"
        }`}
      />
    </div>
  );
};

export default AnimatedImage;
