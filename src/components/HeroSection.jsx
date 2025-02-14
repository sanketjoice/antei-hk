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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden mt-[-0px] text-white h-screen pl-[150px] flex items-center"
      style={{
        background:
          "linear-gradient(to right, rgb(2, 1, 4) 0%, rgb(39, 11, 96) 40%, rgb(72, 25, 154) 60%, rgb(81, 34, 162) 78%, rgb(43, 9, 105) 98%, rgb(41, 10, 100) 100%)",
      }}
    >
      {/* Radial Light Effect Behind Hero Image */}
      <div
        className="absolute right-32 top-1/3 w-[500px] h-[500px] 
                      bg-purple-500 opacity-40 blur-[150px] rounded-full"
      ></div>

      {/* Hero Content */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-12 w-full">
        {/* Left Content */}
        <div>
          {/* "Your Vision... Realized." Section */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wide">
            Your vision... <br /> Realized.
          </h1>

          {/* Industry Slider (Now Below Heading) */}
          <div className="w-full overflow-hidden mt-4">
            <div
              className="flex transition-transform duration-2000 ease-in-out items-start"
              style={{
                transform: `translateX(-${currentIndex * 150}px)`, // Moves slider dynamically
              }}
            >
              {industries.map((industry, index) => (
                <div
                  key={industry.name}
                  className={`text-2xl font-semibold uppercase whitespace-nowrap px-4 py-2 transition-all cursor-pointer ${
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

          {/* Industry Description (Now Below the Slider) */}
          <motion.p
            key={currentIndex} // Ensures animation runs on change
            initial={{ opacity: 0, y: 10 }} // Starts slightly lower and transparent
            animate={{ opacity: 1, y: 0 }} // Fades in and moves up smoothly
            exit={{ opacity: 0, y: -10 }} // Fades out while moving up slightly
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth timing
            className="text-[26px] mt-6 text-gray-300 max-w-md"
          >
            {industries[currentIndex].description}
          </motion.p>
        </div>

        {/* Right: Hero Image */}
        <div className="relative w-120 flex justify-center items-center">
          {industries.map((industry, index) => (
            <img
              key={industry.name}
              src={industry.img}
              alt={industry.name}
              className={`absolute transition-opacity duration-1000 ${
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
