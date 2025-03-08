import React, { useEffect, useState } from "react";
import handShake from "../assets/bg-landing-imgs/Images No BG/clients.png";

const ClientsHeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden justify-center text-center min-h-screen text-white flex flex-col items-center py-22 px-4 sm:px-6 md:px-10 lg:px-[5vw] xl:px-[8vw] 2xl:px-[10vw] lg:py-52 "
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

      <section
        className={`relative ${
          isMobile
            ? "flex flex-col justify-center px-6"
            : "grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-12"
        } w-full`}
      >
        {isMobile && (
          <div className="flex justify-center mb-20 relative">
            {/* Mobile version gradients */}
            <div className="w-[400px] h-[400px] bg-purple-600/30 blur-[120px] absolute rounded-full"></div>
            <div className="w-[300px] h-[300px] bg-purple-500/50 blur-[100px] absolute rounded-full"></div>
            <div className="w-[200px] h-[200px] bg-purple-400/60 blur-[80px] absolute rounded-full"></div>
            <div className="w-[120px] h-[120px] bg-fuchsia-300/70 blur-[60px] absolute rounded-full"></div>
            <div className="w-[100px] h-[100px] bg-violet-300/80 blur-[50px] absolute rounded-full translate-x-8 translate-y-6"></div>

            <img
              src={handShake}
              alt="Client Program Handshake"
              style={{
                width: "600px",
                height: "600px",
                objectFit: "contain",
                maxWidth: "400px",
                transform: "scale(1.8)",
                zIndex: 10,
              }}
            />
          </div>
        )}

        <div className={`${isMobile ? "text-left" : ""}`}>
          <h1
            className={`${
              isMobile ? "text-4xl" : "text-5xl md:text-7xl"
            } font-bold leading-tight text-left tracking-wide`}
          >
            ANTEI Clients <br /> Program
          </h1>

          <p
            className={`${
              isMobile ? "text-lg mt-4" : "text-[26px] mt-30"
            } text-gray-300 ${
              isMobile ? "mx-auto text-left" : "max-w-xl text-left"
            }`}
          >
            Unlock the full potential of your business. Contribute to creating
            tangible value and shaping a highly efficient innovative future.
          </p>
        </div>

        {!isMobile && (
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
                alt="Client Program Handshake"
                className="relative z-10 w-[700px] max-w-none h-auto object-contain"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ClientsHeroSection;
