import { useEffect, useRef } from "react";
import { Rocket, Target, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Accelerate Your Journey",
    description: "Our tools and frameworks help you move faster and with more confidence in your technical decisions."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Validate Before Launch",
    description: "Test your ideas with lean MVPs and evidence-based strategies to save time and resources."
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Pivot with Purpose",
    description: "Learn when and how to pivot strategically to align your product with market needs."
  }
];

const AboutSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="about" className="py-16 bg-[#EDF6F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A7C74] mb-4">You're One Pivot Away from Profit</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#2F2F2F]">
            PivotReady empowers non-traditional founders to build confidence and sustainable businesses through strategic tools, advising, and lean MVPs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-[#E27D60] mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#4A7C74] mb-2">{benefit.title}</h3>
              <p className="text-[#2F2F2F]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
