import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const PodcastSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

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

  return (
    <section id="podcast" className="py-16 bg-[#F2E5D7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div ref={contentRef} className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A7C74] mb-4">Hear Our Story</h2>
            <p className="text-lg mb-6 text-[#2F2F2F]">
              Listen to our podcast where we describe what we do at PivotReady, why we do it, and who we do it for. Learn how we're helping non-traditional founders build successful tech startups with our practical guidance and proven methodologies.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <p className="italic text-[#2F2F2F]">
                "PivotReady gave me the tools and confidence to transform my idea into a viable tech business, even though I don't have a traditional tech background."
              </p>
              <p className="font-semibold text-[#4A7C74] mt-2">— Sarah K., Founder</p>
            </div>
          </div>
          <div ref={videoRef} className="md:w-1/2 bg-[#EDF6F9] p-4 rounded-lg shadow-lg animate-slide-up">
            {!videoLoaded ? (
              <div 
                className="aspect-video relative bg-black rounded-lg overflow-hidden cursor-pointer"
                onClick={handleVideoClick}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-[#4A7C74] bg-opacity-90">
                  <Play className="h-16 w-16 mb-4 text-[#E27D60]" />
                  <p className="text-lg font-montserrat font-semibold">PivotReady Podcast Episode</p>
                  <p className="text-sm mt-2">Click to listen to our founders explain our mission</p>
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <div className="w-full h-full rounded-lg bg-black flex items-center justify-center">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://share.transistor.fm/e/9304953a/dark" 
                    title="PivotReady Podcast"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            )}
            <div className="mt-4 text-center">
              <p className="text-sm text-[#2F2F2F]">
                Listen to our full podcast on
                <a href="https://share.transistor.fm/s/9304953a" target="_blank" rel="noopener noreferrer" className="text-[#E27D60] hover:underline ml-1">Transistor.fm</a>,
                <a href="https://podcasts.apple.com/us/podcast/pivotready/id1569321265" target="_blank" rel="noopener noreferrer" className="text-[#E27D60] hover:underline ml-1">Apple Podcasts</a>, and
                <a href="https://open.spotify.com/show/3NXv5PXZRqV8x9KsNVBa5r" target="_blank" rel="noopener noreferrer" className="text-[#E27D60] hover:underline ml-1">Spotify</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
