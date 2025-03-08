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

  // Mobile layout completely restructured
  if (isMobile) {
    return (
      <div
        className="relative overflow-hidden text-white h-screen flex flex-col justify-between"
        style={{
          background:
            "linear-gradient(to right, rgb(2, 1, 4) 0%, rgb(39, 11, 96) 40%, rgb(72, 25, 154) 60%, rgb(81, 34, 162) 78%, rgb(43, 9, 105) 98%, rgb(41, 10, 100) 100%)",
        }}
      >
        {/* Enhanced Mobile Gradients */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Largest outer circle */}
          <div className="w-[400px] h-[400px] bg-purple-600/30 blur-[120px] absolute rounded-full"></div>

          {/* Medium bright circle */}
          <div className="w-[300px] h-[300px] bg-purple-500/50 blur-[100px] absolute rounded-full"></div>

          {/* Inner bright circle */}
          <div className="w-[200px] h-[200px] bg-purple-400/60 blur-[80px] absolute rounded-full"></div>

          {/* Core brightest circle */}
          <div className="w-[120px] h-[120px] bg-fuchsia-300/70 blur-[60px] absolute rounded-full"></div>

          {/* Accent circle (slight offset) */}
          <div className="w-[100px] h-[100px] bg-violet-300/80 blur-[50px] absolute rounded-full translate-x-8 translate-y-6"></div>
        </div>

        {/* Logo/Header Area */}
        <div className="relative pt-8 px-6">
          {/* Your logo or header elements can go here */}
        </div>

        {/* Giant Handshake Image - Takes up most of the screen */}
        <div
          className="relative flex justify-center items-center"
          style={{ height: "50vh" }}
        >
          <img
            src={handShake}
            alt="Partnership Handshake"
            style={{
              width: "600px",
              height: "600px",
              objectFit: "contain",
              maxWidth: "none",
              transform: "scale(1.8)",
              zIndex: 10,
            }}
          />
        </div>

        {/* Text Content at Bottom */}
        <div className="relative text-center px-6 pb-12 z-10">
          <h1 className="text-4xl font-bold leading-tight tracking-wide mb-4">
            ANTEI Partner <br /> Program
          </h1>

          <p className="text-lg text-gray-300">
            Join us to become a driving force for meaningful change. Contribute
            to creating tangible value and shaping a highly efficient innovative
            future.
          </p>
        </div>
      </div>
    );
  }

  // Desktop layout remains unchanged
  return (
    <div
      className="relative overflow-hidden justify-center text-center min-h-screen text-white flex flex-col items-center py-22 px-4 sm:px-6 md:px-10 lg:px-[5vw] xl:px-[8vw] 2xl:px-[10vw] lg:py-30 "
      style={{
        background: "rgb(2, 1, 4)",
      }}
    >
      {/* Circular Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, rgb(120, 60, 220) 0%, rgb(81, 34, 162) 30%, rgb(39, 11, 96) 60%, rgb(2, 1, 4) 100%)",
        }}
      ></div>
      {/* Partners Content */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-12 w-full">
        {/* Content */}
        <div>
          <h1 className="text-5xl md:text-7xl text-left font-bold leading-tight tracking-wide">
            ANTEI Partner <br /> Program
          </h1>

          <p className="text-[26px] mt-30 text-left text-gray-300 max-w-xl">
            Join us to become a driving force for meaningful change. Contribute
            to creating tangible value and shaping a highly efficient innovative
            future.
          </p>
        </div>

        {/* Desktop: Handshake Image with Enhanced Gradients */}
        <div className="relative flex justify-center items-center">
          <div className="w-full flex justify-center">
            {/* Largest outer circle */}
            <div className="w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-purple-600/30 blur-[120px] md:blur-[200px] absolute rounded-full"></div>

            {/* Medium bright circle */}
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-500/50 blur-[100px] md:blur-[150px] absolute rounded-full"></div>

            {/* Inner bright circle */}
            <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-purple-400/60 blur-[80px] md:blur-[120px] absolute rounded-full"></div>

            {/* Core brightest circle */}
            <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] bg-fuchsia-300/70 blur-[60px] md:blur-[80px] absolute rounded-full"></div>

            {/* Accent circle (slight offset) */}
            <div className="w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-violet-300/80 blur-[50px] md:blur-[70px] absolute rounded-full translate-x-16 translate-y-12"></div>

            <img
              src={handShake}
              alt="Partnership Handshake"
              className="relative z-10 ml w-[1000px] mt-[-100px] max-w-none h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersSectionHero;
