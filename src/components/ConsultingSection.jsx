import React, { useState } from "react";
import rightImg from "../assets/circle-3041437_1280-Aq2oBnZnxBsxKjyO.png";

export default function ConsultingSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const strategies = [
    "Data Driven Organization Transformation",
    "Product Strategy",
    "Novel Technology Development",
    "IT Strategies Development",
    "Integrated Planning Solutions",
    "Marketing Strategies & Customer Experience",
  ];

  const strategyDetails = {
    0: [
      { text: "Strategy & Implementation" },
      { text: "Customized automation solutions" },
      { text: "ML/AI Development" },
    ],
    1: [
      { text: "Market Research" },
      { text: "Growth Planning" },
      { text: "Product Launch Strategy" },
    ],
    // Add details for other strategies here
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-black text-white p-4 sm:p-6 md:p-8 lg:p-10 md:pl-8 lg:pl-[140px]">
      {/* Left Side - Title and List */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
          Strategic & Technological Consulting
          <span className="block w-full sm:w-3/4 md:w-[600px] h-0.5 bg-yellow-500 mt-2"></span>
        </h2>
        <div className="space-y-2 sm:space-y-3 md:space-y-4 mt-4 md:mt-7">
          {strategies.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 sm:gap-4 md:gap-6 w-full md:w-[95%] lg:w-[595px] h-auto min-h-[60px] sm:min-h-[70px] md:min-h-[90px] p-3 sm:p-4 border border-[#9b9b9b] cursor-pointer transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-yellow-500 text-black"
                  : "bg-black"
              }`}
              onClick={() =>
                setSelectedIndex(index === selectedIndex ? null : index)
              }
            >
              <span className="text-xl sm:text-2xl md:text-[32px] font-bold">
                {selectedIndex === index ? "-" : "+"}
              </span>
              <span className="text-base sm:text-lg font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image with Overlay and Content */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src={rightImg}
          alt="Tech Consulting"
          className="w-full max-w-[400px] sm:max-w-[500px] md:w-4/5 md:max-w-[600px] h-auto aspect-square object-cover opacity-70"
        />
        {selectedIndex !== null && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex flex-col items-center justify-center p-4 sm:p-6">
            {strategyDetails[selectedIndex]?.map((detail, i) => (
              <div
                key={i}
                className="text-white text-base sm:text-lg font-semibold mt-3 sm:mt-4 p-2 text-center"
              >
                {detail.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
