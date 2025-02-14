import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import cement from "../assets/cement-YD046z4z77uNkpy2.png";
import aiml from "../assets/brain-8530786_1920-dJoJ5yr2KMIE3Oa5.png";
import webDevelopment from "../assets/coding-1853305_1280-YX4bPGQe23fjGV6p.webp";
import realEstate from "../assets/development-A3QJwvJ5bOTxxDMp.png";
import football from "../assets/football-stadium-m7VKw6bQ7gfPbNB0.png";
import dubai from "../assets/dubai-A0xV1KJazWia7KZ0.png";

const projects = [
  {
    category: "Business Development",
    title: "Cement Production & Logistics (Asia)",
    image: cement,
  },
  {
    category: "AI & ML",
    title: "ML-driven Platform for R&D Innovations",
    image: aiml,
  },
  {
    category: "Web Development",
    title: "Web Platform Performance Optimization",
    image: webDevelopment,
  },
  {
    category: "Product Strategy",
    title: "Tokenization for Real Estate Development",
    image: realEstate,
  },
  {
    category: "Business Strategy",
    title: "Football Club Business Strategy",
    image: football,
  },
  {
    category: "Business Development",
    title: "Market Entry Strategy (Asia)",
    image: dubai,
  },
];

export default function PortfolioSection() {
  const [year, setYear] = useState(2024);

  return (
    <div className="bg-black text-white py-10 pr-6 pl-[150px] relative">
      {/* Heading */}
      <div className="flex items-center mb-4">
        <h2 className="text-[40px] font-semibold">Explore Our Key Projects</h2>
        <div className="text-[40px] text-gray-600 ml-8 font-bold cursor-pointer">
          {year} &#x25BC;
        </div>
      </div>
      <hr className="border-yellow-500 w-[450px] mb-16" />

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          pagination={{ el: ".custom-swiper-pagination", clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[480px] w-[320px] rounded-xl overflow-hidden shadow-lg group">
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
                />

                {/* Gray Overlay on Hover */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500"></div>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col p-6 transition-all duration-500 group-hover:text-white">
                  <span className="bg-purple-600 text-white px-[10px] py-[5px] text-sm rounded-[5px] w-fit mb-2">
                    {project.category}
                  </span>

                  {/* Animated Line */}
                  <div className="relative h-[2px] w-full bg-transparent mt-2">
                    <div className="absolute h-[2px] bg-orange-400 w-0 transition-all duration-500 group-hover:w-full"></div>
                  </div>

                  <h3 className="text-xl font-bold mt-7">{project.title}</h3>

                  {/* Click for More (Appears on Hover) */}
                  <p className="text-orange-400 text-sm font-semibold mt-auto cursor-pointer opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2">
                    CLICK FOR MORE
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots BELOW the Cards */}
        <div className="ml-[600px] mt-6">
          <div className="custom-swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
