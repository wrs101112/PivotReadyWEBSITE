import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
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
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#F2E5D7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div ref={textRef} className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A7C74] mb-4">
              Empower Your Tech Journey
            </h1>
            <p className="text-lg md:text-xl mb-6 text-[#2F2F2F]">
              Strategic tools, advising, and lean MVPs for non-traditional founders building sustainable tech businesses.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToSection("products")}
                className="bg-[#E27D60] hover:bg-opacity-90 text-white font-montserrat font-semibold px-6 py-3 h-auto"
              >
                Let's Build It Smarter
              </Button>
              <Button
                onClick={() => scrollToSection("about")} 
                variant="outline"
                className="bg-[#EDF6F9] text-[#2F2F2F] border-2 border-[#4A7C74] font-montserrat font-semibold px-6 py-3 h-auto hover:bg-[#4A7C74] hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div ref={imageRef} className="md:w-1/2 animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900" 
              alt="Experienced business professional" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
