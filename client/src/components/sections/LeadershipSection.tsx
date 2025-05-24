import { useEffect, useRef } from "react";
import ctoActionFigures from "../../assets/images/cto-action-figures.webp";

const LeadershipSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="team" className="py-16 bg-[#F2E5D7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A7C74] mb-4">Meet Our Team</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#2F2F2F]">
            Product and Technology professionals with 40 years of combined experience who will be YOUR CTO.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div ref={imageRef} className="md:w-1/2 animate-slide-up">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <img 
                src={ctoActionFigures} 
                alt="PivotReady CTO Team - Action Figures" 
                className="w-full rounded-lg"
              />

            </div>
          </div>
          
          <div ref={contentRef} className="md:w-1/2 animate-slide-up" style={{ transitionDelay: "150ms" }}>
            <div className="bg-white p-6 rounded-lg shadow-xl h-full">
              <h3 className="text-2xl font-bold text-[#4A7C74] mb-4">Why Work With Us?</h3>
              <p className="text-[#2F2F2F] mb-4">
                We're advisors - experienced Product and Technology professionals who can serve as YOUR CTO. We understand the unique challenges non-traditional founders face when bringing technical solutions to market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#E27D60] mt-1"></div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-[#4A7C74]">Technical Experience</h4>
                    <p className="text-[#2F2F2F]">Decades of experience building software products and leading engineering teams.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#E27D60] mt-1"></div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-[#4A7C74]">Business Acumen</h4>
                    <p className="text-[#2F2F2F]">We focus on creating sustainable businesses, not just cool technology.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#E27D60] mt-1"></div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-[#4A7C74]">Practical Approach</h4>
                    <p className="text-[#2F2F2F]">Our tools and methodologies are built for real-world challenges, not theoretical ideals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;