import React from "react";
import handShake from "../assets/bg-landing-imgs/Images No BG/clients.png";

const ClientsHeroSection = () => {
  return (
    <div
      className="relative overflow-hidden text-white h-screen pl-[150px] flex items-center"
      style={{
        background:
          "linear-gradient(to right, rgb(2, 1, 4) 0%, rgb(39, 11, 96) 40%, rgb(72, 25, 154) 60%, rgb(81, 34, 162) 78%, rgb(43, 9, 105) 98%, rgb(41, 10, 100) 100%)",
      }}
    >
      {/* Radial Light Effect Behind Image */}
      <div
        className="absolute right-32 top-1/3 w-[500px] h-[500px] 
                    bg-purple-500 opacity-40 blur-[150px] rounded-full"
      ></div>

      {/* Partners Content */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-12 w-full">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wide">
            ANTEI Clients <br /> Program
          </h1>

          <p className="text-[26px] mt-30 text-gray-300 max-w-xl">
            Unlock the full potential of your business. Contribute to creating
            tangible value and shaping a highly efficient innovative future.
          </p>
        </div>

        {/* Right: Handshake Image */}
        <div className="relative flex justify-center items-center">
          <div className="w-full flex justify-center">
            <div className="w-[400px] h-[400px] bg-purple-500/20 blur-[150px] absolute rounded-full"></div>
            <img
              src={handShake}
              alt="Partnership Handshake"
              className="relative z-10 ml-[-100px] w-[700px] max-w-none h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsHeroSection;
