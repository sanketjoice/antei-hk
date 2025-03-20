import { useState, useEffect, useRef } from "react";
import axon from "../assets/Axon_White_Logo.png";
import revel from "../assets/revel.png";
import vulnify from "../assets/vulnify_white_logo.png";

const PartnerLogoCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  // Selected partners from the provided code
  const partners = [
    {
      id: 1,
      name: "Axon",
      logo: axon,
      description: "An AI powered omnichannel marketing agency.",
    },
    {
      id: 2,
      name: "Revel",
      logo: revel,
      description:
        "Cyberport is a creative digital community that nurtures start-ups and promotes innovation.",
    },
    {
      id: 3,
      name: "Vulnify",
      logo: vulnify,
      description:
        "Hong Kong Science and Technology Parks Corporation (HKSTP) supports technology companies in Hong Kong.",
    },
    {
      id: 4,
      name: "Cortex",
      logo: "/api/placeholder/150/80",
      description:
        "The Hong Kong University of Science and Technology (HKUST) is a public research university.",
    },
    {
      id: 5,
      name: "Project Glow",
      logo: "/api/placeholder/150/80",
      description:
        "Amazon Web Services (AWS) provides on-demand cloud computing platforms.",
    },
    {
      id: 6,
      name: "RevonX",
      logo: "/api/placeholder/150/80",
      description:
        "ITMO University is a leading Russian university in IT and computer science.",
    },
  ];

  // Duplicate partners array to ensure continuous flow
  const allPartners = [...partners, ...partners];

  // Smooth continuous animation using requestAnimationFrame
  const animate = () => {
    if (carouselRef.current && !isPaused) {
      // Get the carousel's current position
      const currentPosition = parseFloat(
        carouselRef.current.style.transform
          ?.replace("translateX(", "")
          .replace("px)", "") || "0"
      );

      // Move carousel by 1px each frame for smooth movement
      const newPosition = currentPosition - 1;

      // Check if we need to reset
      const firstItemWidth = carouselRef.current.children[0].offsetWidth + 48; // Width + margin

      if (Math.abs(newPosition) >= firstItemWidth) {
        // Move first item to the end and reset position
        const firstItem = carouselRef.current.children[0];
        carouselRef.current.appendChild(firstItem);
        carouselRef.current.style.transform = `translateX(0px)`;
      } else {
        // Continue animation
        carouselRef.current.style.transform = `translateX(${newPosition}px)`;
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  // Set up and clean up animation
  useEffect(() => {
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animate);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
  };

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 md:px-10 lg:px-[5vw] xl:px-[8vw] 2xl:px-[10vw]">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 border-b-2 text-white border-yellow-500 inline-block">
          AI Development Hub Members
        </h2>
        <p className="text-lg mb-12">
          The AI Development Hub brings together innovative professionals and
          organizations committed to advancing AI technologies.
        </p>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredLogo(null);
          }}
        >
          <div
            ref={carouselRef}
            className="flex items-center space-x-12"
            style={{ transform: "translateX(0px)" }}
          >
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="relative flex-shrink-0 w-48 h-24 flex items-center justify-center rounded-lg"
                onMouseEnter={() => setHoveredLogo(`${partner.id}-${index}`)}
                onMouseLeave={() => setHoveredLogo(null)}
                onClick={() => handlePartnerClick(partner)}
              >
                {/* Logo */}
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full p-2"
                />

                {/* Purple overlay card with "View profile" text */}
                <div
                  className={`absolute inset-0 bg-purple-900 flex items-center justify-center transition-opacity duration-300 rounded-lg ${
                    hoveredLogo === `${partner.id}-${index}`
                      ? "opacity-80"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="text-white font-medium">View profile</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-opacit-10 p-4">
          <div className="bg-black rounded-lg p-8 w-full max-w-md mx-auto relative">
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute text-purple-500 top-4 right-4 hover:cursor-pointer font-bold text-4xl"
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedPartner.logo}
                alt={selectedPartner.name}
                className="w-48 h-32 object-contain mb-6"
              />
              <p className="text-center text-white text-base">
                {selectedPartner.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerLogoCarousel;
