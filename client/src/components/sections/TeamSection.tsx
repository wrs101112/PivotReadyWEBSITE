import { useEffect, useRef, useState } from "react";

const personas = [
  {
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Non-Technical Founders",
    description: "Domain experts from fields like medicine, construction, or law who have innovative ideas but need technical guidance to bring them to market."
  },
  {
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Career Pivoters",
    description: "Experienced professionals who've been displaced mid-career or are seeking a meaningful change by building a tech business leveraging their expertise."
  },
  {
    image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Early-Stage Startups",
    description: "Founders juggling multiple responsibilities who need guidance to focus their resources and validate their ideas before making significant investments."
  }
];

const TeamSection = () => {
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
    <section className="py-16 bg-[#EDF6F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A7C74] mb-4">Who We Help</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#2F2F2F]">
            PivotReady was built for non-traditional founders who are ready to bring their tech visions to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-md animate-slide-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={persona.image} 
                alt={persona.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-[#4A7C74] mb-2">{persona.title}</h3>
              <p className="text-[#2F2F2F]">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
