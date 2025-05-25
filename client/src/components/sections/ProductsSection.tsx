import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bell } from "lucide-react";

const ProductsSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const brandiRef = useRef<HTMLDivElement>(null);
  const viraRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (brandiRef.current) observer.observe(brandiRef.current);
    if (viraRef.current) observer.observe(viraRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (brandiRef.current) observer.unobserve(brandiRef.current);
      if (viraRef.current) observer.unobserve(viraRef.current);
    };
  }, []);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A7C74] mb-4">Our Products</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#2F2F2F]">
            Software tools that help founders decide which ideas will become profitable businesses and create professional marketing materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* BRANDi Product Card */}
          <div 
            ref={brandiRef}
            className="bg-[#EDF6F9] rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 animate-slide-up"
          >
            <div className="w-full h-64 bg-[#161b29] flex flex-col items-center justify-center text-white">
              <div className="text-[#4A7C74] font-montserrat font-bold text-2xl mb-1">BRANDi™</div>
              <h3 className="text-white text-xl font-montserrat font-bold mb-4">AI-Powered Marketing Documents</h3>
              <p className="text-white text-2xl font-montserrat mb-2">Made Simple</p>
              <p className="text-sm text-gray-300 max-w-xs text-center">Create professional marketing materials in minutes, not hours</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#4A7C74]">BRANDi</h3>
                <span className="bg-[#4A7C74] text-white text-xs font-bold px-3 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-[#2F2F2F] mb-4">
                Our brand identification tool that helps founders create a cohesive brand identity that resonates with their target audience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Market Positioning</span>
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Niche</span>
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Brand Authority</span>
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Proprietary Method</span>
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Lead Generation System</span>
              </div>
              <Button className="bg-[#4A7C74] hover:bg-opacity-90 text-white font-montserrat font-semibold">
                Try BRANDi <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* ViRA Product Card (Coming Soon) */}
          <div 
            ref={viraRef}
            className="bg-[#EDF6F9] rounded-lg shadow-xl overflow-hidden relative transform transition-transform duration-300 hover:-translate-y-2 animate-slide-up"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="w-full h-64 bg-[#161b29] flex flex-col items-center justify-center text-white">
              <div className="text-[#4A7C74] font-montserrat font-bold text-2xl mb-1">ViRA™</div>
              <h3 className="text-white text-xl font-montserrat font-bold mb-4">Startup Validation + Readiness</h3>
              <p className="text-white text-2xl font-montserrat mb-2">Assistant</p>
              <p className="text-sm text-gray-300 max-w-xs text-center">Helping founders decide which ideas will become profitable businesses and which to avoid</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#4A7C74]">ViRA</h3>
                <span className="bg-[#4A7C74] text-white text-xs font-bold px-3 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-[#2F2F2F] mb-4">
                Our startup validation assistant that helps founders decide which ideas will become profitable businesses and which they shouldn't pursue.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Idea Validation</span>
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Strategic Guidance</span>
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Business Prioritization</span>
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Project Profitability</span>
                <span className="bg-[#4A7C74] bg-opacity-10 text-[#4A7C74] px-3 py-1 rounded-full text-sm">Competitive Intelligence</span>
              </div>
              <Button variant="secondary" className="bg-gray-300 text-gray-600 cursor-not-allowed font-montserrat font-semibold" disabled>
                Join Waitlist <Bell className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
