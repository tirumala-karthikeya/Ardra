
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-12 bg-white/90 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-ardra-purple" />
          <span className="font-bold text-xl text-ardra-purple">Ardra</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li><a href="#technology" className="text-gray-700 hover:text-ardra-purple transition-colors">Technology</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-ardra-purple transition-colors">About Us</a></li>
            <li><a href="#vision" className="text-gray-700 hover:text-ardra-purple transition-colors">Vision</a></li>
          </ul>
          <Button className="bg-ardra-purple hover:bg-ardra-purple/90">Contact Us</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6">
          <ul className="flex flex-col gap-4">
            <li><a href="#technology" className="block py-2 text-gray-700 hover:text-ardra-purple transition-colors" onClick={() => setIsMenuOpen(false)}>Technology</a></li>
            <li><a href="#about" className="block py-2 text-gray-700 hover:text-ardra-purple transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="#vision" className="block py-2 text-gray-700 hover:text-ardra-purple transition-colors" onClick={() => setIsMenuOpen(false)}>Vision</a></li>
            <li>
              <Button className="w-full bg-ardra-purple hover:bg-ardra-purple/90" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
