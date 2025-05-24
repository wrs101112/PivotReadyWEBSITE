import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TeamSection from "@/components/sections/TeamSection";
import PodcastSection from "@/components/sections/PodcastSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Add intersection observer for animations
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

    document.querySelectorAll(".animate-fade-in, .animate-slide-up").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-fade-in, .animate-slide-up").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <TeamSection />
        <PodcastSection />
        <LeadershipSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
