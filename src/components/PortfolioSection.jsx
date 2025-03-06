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
    <div className="bg-black text-white py-6 md:py-10 px-4 md:pr-6 md:pl-8 lg:pl-32 relative">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Explore Our Key Projects
        </h2>
        <div className="text-xl md:text-2xl lg:text-4xl text-gray-600 mt-2 md:mt-0 md:ml-8 font-bold cursor-pointer">
          {year} &#x25BC;
        </div>
      </div>
      <hr className="border-yellow-500 w-full md:w-96 lg:w-[450px] mb-8 md:mb-16" />

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ el: ".custom-swiper-pagination", clickable: true }}
          modules={[Pagination]}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-96 sm:h-[420px] lg:h-[480px] w-full sm:w-auto lg:w-[320px] rounded-xl overflow-hidden shadow-lg group mx-auto">
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
                />

                {/* Gray Overlay on Hover */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500"></div>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col p-4 md:p-6 transition-all duration-500 group-hover:text-white">
                  <span className="bg-purple-600 text-white px-2 py-1 md:px-[10px] md:py-[5px] text-xs md:text-sm rounded-[5px] w-fit mb-2">
                    {project.category}
                  </span>

                  {/* Animated Line */}
                  <div className="relative h-[2px] w-full bg-transparent mt-2">
                    <div className="absolute h-[2px] bg-orange-400 w-0 transition-all duration-500 group-hover:w-full"></div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mt-4 md:mt-7">
                    {project.title}
                  </h3>

                  {/* Click for More (Appears on Hover) */}
                  <p className="text-orange-400 text-xs md:text-sm font-semibold mt-auto cursor-pointer opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2">
                    CLICK FOR MORE
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots BELOW the Cards */}
        <div className="flex justify-center md:justify-start md:ml-32 lg:ml-64 mt-6">
          <div className="custom-swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
