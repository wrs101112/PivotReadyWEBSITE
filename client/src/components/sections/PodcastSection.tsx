import { useEffect, useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

// Import MP4 files
import firstClipPath from "@assets/first_riverside_lessons_from the dotcom boom_roy_gatling's studio.mp4";
import secondClipPath from "@assets/second_riverside_validating_business ideas_ a systematic approach_roy_gatling's studio.mp4";
import thirdClipPath from "@assets/third_riverside_invest_in market, not just product_roy_gatling's studio.mp4";

const clipTitles = [
  "Lessons from the Dotcom Boom",
  "Validating Business Ideas: A Systematic Approach",
  "Invest in Market, Not Just Product"
];

const PodcastSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentClip, setCurrentClip] = useState(0);

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

    if (contentRef.current) observer.observe(contentRef.current);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const handleVideoClick = () => {
    setVideoLoaded(true);
  };

  const handleNextClip = () => {
    if (currentClip < 2) {
      setCurrentClip(prev => prev + 1);
      if (videoElementRef.current) {
        videoElementRef.current.load();
        videoElementRef.current.play();
      }
    }
  };

  const handlePrevClip = () => {
    if (currentClip > 0) {
      setCurrentClip(prev => prev - 1);
      if (videoElementRef.current) {
        videoElementRef.current.load();
        videoElementRef.current.play();
      }
    }
  };

  const getClipSource = () => {
    switch (currentClip) {
      case 0:
        return firstClipPath;
      case 1:
        return secondClipPath;
      case 2:
        return thirdClipPath;
      default:
        return firstClipPath;
    }
  };

  return (
    <section id="podcast" className="py-16 bg-[#F2E5D7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div ref={contentRef} className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A7C74] mb-4">Hear Our Story</h2>
            <p className="text-lg mb-6 text-[#2F2F2F]">
              Listen to our podcast where we describe what we do at PivotReady, why we do it, and who we do it for. Learn how we're helping non-traditional founders build successful tech startups with our practical guidance and proven methodologies.
            </p>
          </div>
          <div ref={videoRef} className="md:w-1/2">
            <div className="w-full max-w-[270px] mx-auto bg-[#4A7C74] rounded-lg overflow-hidden aspect-[9/16] flex flex-col">
              {!videoLoaded ? (
                <div 
                  className="flex-1 flex flex-col items-center justify-center text-white cursor-pointer"
                  onClick={handleVideoClick}
                >
                  <Play className="h-16 w-16 mb-4 text-[#E27D60]" />
                  <p className="text-lg font-montserrat font-semibold">PivotReady Podcast Clips</p>
                  <p className="text-sm mt-2">Click to watch our series</p>
                </div>
              ) : (
                <>
                  <div className="flex-grow flex flex-col">
                    <div className="flex-1 pt-2 px-2 pb-10">
                      <div className="w-full h-full bg-black rounded-lg overflow-hidden">
                        <video 
                          ref={videoElementRef}
                          className="w-full h-full object-contain"
                          controls
                          autoPlay
                          onEnded={() => currentClip < 2 && handleNextClip()}
                        >
                          <source src={getClipSource()} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className="h-10 mt-auto px-4 flex items-center justify-between">
                      <button 
                        onClick={handlePrevClip} 
                        disabled={currentClip === 0}
                        className={`p-1 rounded-full ${currentClip === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3a6259] text-white'}`}
                      >
                        <ChevronLeft size={20} className="text-white" />
                      </button>
                      <p className="text-sm font-medium text-white">
                        {currentClip + 1}/3
                      </p>
                      <button 
                        onClick={handleNextClip} 
                        disabled={currentClip === 2}
                        className={`p-1 rounded-full ${currentClip === 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3a6259] text-white'}`}
                      >
                        <ChevronRight size={20} className="text-white" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;