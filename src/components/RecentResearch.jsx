import { useState } from "react";
import researchData from "../data/researchData.json";

const RecentResearch = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="bg-black px-36 text-white py-12 text-center">
      <h2 className="text-4xl font-semibold mb-12 border-b-2 border-yellow-500 inline-block">
        Recent Research
      </h2>
      <div className="relative flex justify-center items-center overflow-hidden mt-8">
        <div className="flex gap-4">
          {researchData.map((item, index) => (
            <div
              key={index}
              className={`relative w-72 h-96 rounded-lg overflow-hidden transition-all duration-500 cursor-pointer flex-shrink-0 ${
                index === activeIndex
                  ? "scale-105 z-10"
                  : "scale-90 opacity-50 blur-sm"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="flex gap-2 mt-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-6 border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all">
        Learn more
      </button>
    </div>
  );
};

export default RecentResearch;
