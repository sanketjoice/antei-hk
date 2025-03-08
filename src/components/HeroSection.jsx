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

  // Auto-rotate industries
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
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

      {/* Hero Content */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full py-8 md:py-0 h-full">
        {/* Left Content */}
        <div className="text-left md:text-left z-10 order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-wide">
            Your vision... <br className="hi md:block" /> Realized.
          </h1>

          {/* Industry Slider - For both Mobile and Desktop */}
          <div className="w-full overflow-hidden mt-4">
            <div
              className="flex transition-transform duration-2000 ease-in-out items-start"
              style={{
                transform: `translateX(calc(50% - ${currentIndex * 120}px))`,
              }}
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
          {/* Circular Glow Effect positioned exactly behind the image */}
          <div
            className="absolute"
            style={{
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(180, 120, 255, 0.8) 0%, rgba(130, 70, 230, 0.5) 50%, rgba(81, 34, 162, 0.2) 80%, transparent 100%)",
              filter: "blur(40px)",
              zIndex: "1",
            }}
          ></div>

          {industries.map((industry, index) => (
            <img
              key={industry.name}
              src={industry.img}
              alt={industry.name}
              className={`absolute max-h-48 sm:max-h-60 md:max-h-80 lg:max-h-96 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 scale-105" : "opacity-0"
              }`}
              style={{ zIndex: "2" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
