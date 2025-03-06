import React, { useEffect, useState } from "react";
import aiImg from "../assets/bg-landing-imgs/Images No BG/AI.png";
import bioMedicineImg from "../assets/bg-landing-imgs/Images No BG/BioMedicine.png";
import agricultureImg from "../assets/bg-landing-imgs/Images No BG/Agro.png";
import digitalTransformationImg from "../assets/bg-landing-imgs/Images No BG/DigitalTransformation.png";
import miningImg from "../assets/bg-landing-imgs/Images No BG/mining.png";
import educationImg from "../assets/bg-landing-imgs/Images No BG/Education.png";
import foodTechImg from "../assets/bg-landing-imgs/Images No BG/FoodTech.png";
import strategyImg from "../assets/bg-landing-imgs/Images No BG/Strategy.png";
import tradeImg from "../assets/bg-landing-imgs/Images No BG/Trade.png";
import { motion } from "framer-motion";

const industries = [
  {
    name: "AI & ML",
    img: aiImg,
    description:
      "Developing tailor-made local, cloud and hybrid based solutions.",
  },
  {
    name: "BioMedicine",
    img: bioMedicineImg,
    description:
      "Advancing healthcare through innovative research and transformative treatments.",
  },
  {
    name: "Agriculture",
    img: agricultureImg,
    description:
      "Fostering sustainable farming with technology and satellite imagery to boost yields and protect the environment.",
  },
  {
    name: "Digital Transformation",
    img: digitalTransformationImg,
    description:
      "Transforming industries with digital technologies to enhance efficiency, minimize costs and unlock new opportunities.",
  },
  {
    name: "Mining",
    img: miningImg,
    description:
      "Optimizing mining and purification processes with advanced techniques to enhance efficiency and reduce environmental impact.",
  },
  {
    name: "Education",
    img: educationImg,
    description:
      "Shaping future generations with innovative, technology-driven learning for optimized efficiency and effective knowledge transfer.",
  },
  {
    name: "Food Tech",
    img: foodTechImg,
    description:
      "Innovating food production, processing, and distribution with technology to tackle global nutrition challenges and improve food safety.",
  },
  {
    name: "Strategy",
    img: strategyImg,
    description:
      "Developing strategic plans to achieve long-term goals and guide organizations through complex business landscapes.",
  },
  {
    name: "Trade",
    img: tradeImg,
    description:
      "Facilitating the exchange of goods and services across borders, driving economic growth and fostering international relationships.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-rotate industries
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden text-white min-h-screen flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-10 lg:px-32"
      style={{
        background:
          "linear-gradient(to right, rgb(2, 1, 4) 0%, rgb(39, 11, 96) 40%, rgb(72, 25, 154) 60%, rgb(81, 34, 162) 78%, rgb(43, 9, 105) 98%, rgb(41, 10, 100) 100%)",
      }}
    >
      {/* Radial Light Effect */}
      <div className="absolute right-0 md:right-10 top-1/4 md:top-1/3 w-60 h-60 md:w-96 lg:w-[500px] md:h-96 lg:h-[500px] bg-purple-500 opacity-40 blur-[100px] md:blur-[150px] rounded-full"></div>

      {/* Hero Content */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full py-8 md:py-0">
        {/* Left Content */}
        <div className="text-center md:text-left z-10 order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-wide">
            Your vision... <br className="hidden md:block" /> Realized.
          </h1>

          {/* Industry Selector - Mobile Dropdown */}
          <div className="md:hidden mt-6 relative">
            <select
              className="bg-purple-900 text-white px-4 py-2 rounded-lg w-full text-lg font-semibold"
              value={currentIndex}
              onChange={(e) => setCurrentIndex(parseInt(e.target.value))}
            >
              {industries.map((industry, index) => (
                <option key={industry.name} value={index}>
                  {industry.name}
                </option>
              ))}
            </select>
          </div>

          {/* Industry Slider - Desktop Only */}
          <div className="hidden md:block w-full overflow-hidden mt-4">
            <div
              className="flex transition-transform duration-2000 ease-in-out items-start justify-start"
              style={{ transform: `translateX(-${currentIndex * 150}px)` }}
            >
              {industries.map((industry, index) => (
                <div
                  key={industry.name}
                  className={`text-lg md:text-xl lg:text-2xl font-semibold uppercase whitespace-nowrap px-2 md:px-4 py-1 md:py-2 cursor-pointer transition-all ${
                    index === currentIndex
                      ? "text-[#FF9E00] opacity-100 scale-110"
                      : "text-gray-400 opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {industry.name}
                </div>
              ))}
            </div>
          </div>

          {/* Industry Description */}
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-gray-300 max-w-full sm:max-w-md mx-auto md:mx-0"
          >
            {industries[currentIndex].description}
          </motion.p>
        </div>

        {/* Right: Hero Image */}
        <div className="relative flex justify-center items-center w-full md:w-auto h-56 sm:h-64 md:h-auto order-1 md:order-2">
          {industries.map((industry, index) => (
            <img
              key={industry.name}
              src={industry.img}
              alt={industry.name}
              className={`absolute max-h-48 sm:max-h-60 md:max-h-80 lg:max-h-96 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 scale-105" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
