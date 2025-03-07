import React, { useEffect, useState } from "react";
import handShake from "../assets/bg-landing-imgs/Images No BG/Partners_Handshake.png";

const PartnersSectionHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile and update state
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div
      className={`relative overflow-hidden text-white ${
        isMobile ? "h-screen" : "h-screen pl-[150px]"
      } flex items-center`}
      style={{
        background:
          "linear-gradient(to right, rgb(2, 1, 4) 0%, rgb(39, 11, 96) 40%, rgb(72, 25, 154) 60%, rgb(81, 34, 162) 78%, rgb(43, 9, 105) 98%, rgb(41, 10, 100) 100%)",
      }}
    >
      {/* Radial Light Effect Behind Image */}
      <div
        className={`absolute ${isMobile ? "inset-0" : "right-32 top-1/3"} 
                  ${isMobile ? "w-full h-full" : "w-[500px] h-[500px]"}
                  bg-purple-500 opacity-40 blur-[150px] rounded-full`}
      ></div>

      {/* Partners Content */}
      <section
        className={`relative ${
          isMobile
            ? "flex flex-col justify-center px-6"
            : "grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-12"
        } w-full`}
      >
        {/* Mobile Image (Only for mobile) */}
        {isMobile && (
          <div className="flex justify-center mb-8">
            <img
              src={handShake}
              alt="Partnership Handshake"
              className="w-64 h-64 object-contain z-10"
            />
          </div>
        )}

        {/* Content */}
        <div className={`${isMobile ? "text-center" : ""}`}>
          <h1
            className={`${
              isMobile ? "text-4xl" : "text-5xl md:text-7xl"
            } font-bold leading-tight tracking-wide`}
          >
            ANTEI Partner <br /> Program
          </h1>

          <p
            className={`${
              isMobile ? "text-lg mt-4" : "text-[26px] mt-30"
            } text-gray-300 ${isMobile ? "mx-auto" : "max-w-xl"}`}
          >
            Join us to become a driving force for meaningful change. Contribute
            to creating tangible value and shaping a highly efficient innovative
            future.
          </p>
        </div>

        {/* Desktop: Handshake Image (Hidden on mobile) */}
        {!isMobile && (
          <div className="relative flex justify-center items-center">
            <div className="w-full flex justify-center">
              <div className="w-[400px] h-[400px] bg-purple-500/20 blur-[150px] absolute rounded-full"></div>
              <img
                src={handShake}
                alt="Partnership Handshake"
                className="relative z-10 ml-[-100px] w-[1000px] max-w-none h-auto object-contain"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PartnersSectionHero;
