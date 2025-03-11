
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ardra's AI solution has completely transformed our customer service operations, reducing response time by 60% while increasing customer satisfaction scores.",
    author: "Sarah Chen",
    title: "CTO, FinTech Solutions"
  },
  {
    quote: "The customization capabilities of Ardra's platform allowed us to create an AI assistant that truly represents our brand voice and handles complex insurance queries with ease.",
    author: "Michael Rodriguez",
    title: "Head of Digital, Assure Insurance"
  },
  {
    quote: "Implementing Ardra's technology resulted in a 40% reduction in call center volume while maintaining our high standards for customer care.",
    author: "Priya Sharma",
    title: "VP of Customer Success, TelcoConnect"
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
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
    <section id="testimonials" className="py-20 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-reveal">
            <h2 className="text-ardra-purple mb-4"><span>What Our Clients Say</span></h2>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto fade-in-up animate-delay-200">
            See how Ardra's intelligent agents are helping businesses transform their customer engagement.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'stagger-animation' : 'opacity-0'}`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  quote, 
  author, 
  title 
}: { 
  quote: string, 
  author: string, 
  title: string 
}) => {
  return (
    <Card className="h-full hover-lift transition-all duration-500">
      <CardContent className="p-8 flex flex-col h-full">
        <Quote className="text-ardra-purple h-10 w-10 mb-4 opacity-40" />
        <p className="text-gray-700 flex-grow mb-6 italic">"{quote}"</p>
        <div>
          <p className="font-semibold text-ardra-dark-purple">{author}</p>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
