import { useState } from "react";
import researchData from "../data/researchData.json";
import { Link } from "react-router-dom";
import img1 from "../assets/technology-6701504_1280-ALpoJvpDWDTM4J11.png";
import img2 from "../assets/binary-code-7190628_1280-mxB7rQB0VyHV6LGG.png";
import img3 from "../assets/artificial-intelligence-3382507_1280-AQEpJ1EG5rcZqo4K.png";
import img4 from "../assets/frequency-Yg29lBRPvpcM4g30.png";
import img5 from "../assets/circle-3041437_1280-Aq2oBnZnxBsxKjyO.png";

const images = [img1, img2, img3, img4, img5];

const RecentResearch = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const getPosition = (index) => {
    const distance = index - activeIndex;
    if (distance === 0) return 0; // Active card
    if (distance === -1 || distance === 4) return -1; // Left card
    if (distance === 1 || distance === -4) return 1; // Right card
    if (distance === -2 || distance === 3) return -2; // Far left card
    if (distance === 2 || distance === -3) return 2; // Far right card
    return 0;
  };

  const goToPrevious = () => {
    setActiveIndex(
      (activeIndex - 1 + researchData.length) % researchData.length
    );
  };

  const goToNext = () => {
    setActiveIndex((activeIndex + 1) % researchData.length);
  };

  return (
    <div className="bg-black px-4 sm:px-12 md:px-36 text-white py-8 md:py-12 lg:px-[5vw] xl:px-[8vw] 2xl:px-[10vw]">
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-12 border-b-2 border-yellow-500 inline-block">
        Recent Research
      </h2>

      <div className="relative flex justify-center items-center overflow-hidden mt-4 md:mt-8 h-64 md:h-96">
        {/* Left Arrow - Positioned on left side of image */}
        <button
          className="absolute left-0 md:left-16 z-30 bg-purple-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={goToPrevious}
        >
          &lt;
        </button>

        {/* Right Arrow - Positioned on right side of image */}
        <button
          className="absolute right-0 md:right-16 z-30 bg-purple-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={goToNext}
        >
          &gt;
        </button>

        {researchData.map((item, index) => {
          const isActive = index === activeIndex;
          const position = getPosition(index);

          // Mobile: only show active card
          // Desktop: show all cards as in original code
          const translateX = position * 200;
          const scale = isActive ? 1.05 : 0.9;

          return (
            <div
              key={index}
              className={`absolute w-64 md:w-72 h-64 md:h-96 rounded-lg overflow-hidden transition-all duration-500 cursor-pointer ${
                isActive
                  ? "z-20 scale-105 opacity-100 blur-none"
                  : "z-10 scale-90 opacity-80 blur-sm hidden md:block"
              }`}
              style={{
                transform: `translateX(${translateX}px) scale(${
                  isActive ? scale : 0.9
                })`,
              }}
              onClick={() => handleClick(index)}
            >
              <img
                src={images[index]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-start p-4">
                <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
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
          );
        })}
      </div>

      <Link to="/antei-hk/contactus">
        <button className="mt-6 flex justify-center m-auto border-4 border-[#E6AC00] text-[#E6AC00] px-6 py-2 rounded-lg text-lg font-semibold hover:cursor-pointer transition-all w-[260px]">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default RecentResearch;
