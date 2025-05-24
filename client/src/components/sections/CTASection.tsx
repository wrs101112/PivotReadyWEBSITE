import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

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

    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ctaRef} className="py-20 bg-[#4A7C74] text-white animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Validate Before You Launch</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Stop wasting resources on untested ideas. Join PivotReady and build your tech business with confidence.
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-[#E27D60] hover:bg-opacity-90 text-white font-montserrat font-semibold px-8 py-3 h-auto text-lg"
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
