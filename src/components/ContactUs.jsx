import React from "react";
import envelopeImage from "../assets/bg-landing-imgs/Images No BG/contacts.png";

const ContactUs = () => {
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

      {/* Contact Section Content */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-semibold leading-tight tracking-wide">
            Get in touch
          </h1>

          <p className="text-lg md:text-[26px] mt-6 md:mt-30 text-gray-300 max-w-xl mx-auto md:mx-0">
            We appreciate your interest in ANTEI. <br />
            Please select from the options below.
          </p>
        </div>

        {/* Right: Envelope Image */}
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
              src={envelopeImage}
              alt="Envelope Icon"
              style={{
                width: "80vw", // Adjust width dynamically for responsiveness
                height: "auto", // Maintain aspect ratio
                objectFit: "contain",
                maxWidth: "400px", // Prevent excessive scaling
                transform: "scale(1.8)", // Enlarge image
                zIndex: 10,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
