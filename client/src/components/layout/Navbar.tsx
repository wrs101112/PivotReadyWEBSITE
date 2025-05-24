import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/icons/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    closeMenu();
    
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white bg-opacity-95 shadow-sm"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Logo />
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => handleNavLinkClick("about")} 
                className="text-[#2F2F2F] hover:text-[#4A7C74] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => handleNavLinkClick("products")} 
                className="text-[#2F2F2F] hover:text-[#4A7C74] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => handleNavLinkClick("contact")} 
                className="bg-[#4A7C74] text-white hover:bg-opacity-90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-[#2F2F2F] hover:text-[#4A7C74] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white pt-2 pb-3 shadow-lg transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <button 
          onClick={() => handleNavLinkClick("about")} 
          className="block px-3 py-2 rounded-md text-base font-medium text-[#2F2F2F] hover:text-[#4A7C74] hover:bg-[#EDF6F9] transition-colors w-full text-left"
        >
          About
        </button>
        <button 
          onClick={() => handleNavLinkClick("products")} 
          className="block px-3 py-2 rounded-md text-base font-medium text-[#2F2F2F] hover:text-[#4A7C74] hover:bg-[#EDF6F9] transition-colors w-full text-left"
        >
          Products
        </button>
        <button 
          onClick={() => handleNavLinkClick("contact")} 
          className="block px-3 py-2 rounded-md text-base font-medium text-[#4A7C74] hover:bg-[#4A7C74] hover:text-white hover:bg-opacity-90 transition-colors w-full text-left"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
