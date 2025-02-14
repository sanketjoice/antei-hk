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
    <div className="flex flex-col md:flex-row items-center pt-10 pl-[140px] justify-between bg-black text-white p-10">
      {/* Left Side - Title and List */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-semibold mb-6">
          Strategic & Technological Consulting
          <span className="block w-[600px] h-0.5 bg-yellow-500 mt-2"></span>
        </h2>
        <div className="space-y-4 mt-7">
          {strategies.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 w-[595px] h-[90px] p-4 border border-[#9b9b9b] cursor-pointer transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-yellow-500 text-black"
                  : "bg-black"
              }`}
              onClick={() =>
                setSelectedIndex(index === selectedIndex ? null : index)
              }
            >
              <span className="text-[32px] font-bold mb-2">
                {selectedIndex === index ? "-" : "+"}
              </span>
              <span className="text-lg font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image with Overlay and Content */}
      <div className="relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={rightImg}
          alt="Tech Consulting"
          className="w-[600px] h-[600px] md:w-4/5 object-cover opacity-70"
        />
        {selectedIndex !== null && (
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-5 flex flex-col items-center justify-center p-6">
            {strategyDetails[selectedIndex]?.map((detail, i) => (
              <div key={i} className="text-white text-lg font-semibold mt-4">
                {detail.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
