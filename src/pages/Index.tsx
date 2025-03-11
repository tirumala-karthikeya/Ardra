
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import AboutArdra from "@/components/AboutArdra";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Technology />
      <AboutArdra />
      <Testimonials />
      <CTA />
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-ardra-purple text-white p-3 rounded-full shadow-lg hover:bg-ardra-purple/90 transition-all z-50 ${
          showScrollToTop ? 'opacity-100 scale-in' : 'opacity-0 scale-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
