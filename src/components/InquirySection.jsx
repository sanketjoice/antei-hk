import React, { useState } from "react";
import img1 from "../assets/inquiry1.png";
import img2 from "../assets/inquiry2.png";
import img3 from "../assets/inquiry3.png";
import logo1 from "../assets/agent_icon.png";
import logo2 from "../assets/partners_icon.png";
import logo3 from "../assets/white_label_icon.png";
import { Link } from "react-router-dom";

const InquirySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const partners = [
    {
      backgroundImage: img1,
      logo: logo1,
      title: "Agent",
      details: [
        "UP to 20% of the first contract;",
        "5% from another client contracts during a 1-year;",
        "Individually customizable terms;",
      ],
      hoverText:
        "Partner refers Customers for ANTEI products and services, while ANTEI carries the communication with Client, executes the entire project with own resources.",
    },
    {
      backgroundImage: img2,
      logo: logo2,
      title: "Equal partner",
      details: [
        "UP to 50/50 earnings split;",
        "ANTEI and Partner's joint expertise;",
      ],
      hoverText:
        "Joint development and promotion of the product/services. Both entities split the revenue as agreed.",
    },
    {
      backgroundImage: img3,
      logo: logo3,
      title: "White-label partner",
      details: [
        "Tailor-made Product;",
        "Get all or major part of the earnings;",
      ],
      hoverText:
        "ANTEI develops/customises products for the Partner. Partner is reselling the products under its own brand.",
    },
  ];

  return (
    <>
      {/* Desktop view */}
      <div className="bg-black py-10 pt-[130px] text-center md:block hidden px-4 sm:px-6 md:px-10 lg:px-[5vw] xl:px-[8vw] 2xl:px-[10vw]">
        <div className="w-full h-2 bg-gradient-to-r from-purple-700 via-purple-500 to-orange-400"></div>
        <h2 className="text-white text-3xl font-semibold mt-20">
          Choose the most suitable model for your business
        </h2>
      </div>
      <div className="bg-black py-12 flex justify-center pb-[150px] space-x-8 md:flex hidden">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative w-96 flex flex-col"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-[380px] rounded-xl h-100 overflow-hidden">
              <img
                src={partner.backgroundImage}
                alt={`${partner.title} background`}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-purple-600 transition-all duration-700 ${
                  hoveredIndex === index
                    ? "bg-opacity-50 opacity-90"
                    : "bg-opacity-0 opacity-0"
                } flex p-10`}
              >
                <p className="text-white text-lg font-bold">
                  {partner.hoverText}
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg -mt-8 pt-12 pb-6 px-4 z-10 w-80 mx-auto border-2 border-transparent flex flex-col flex-grow">
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 -top-13 w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-purple-600 shadow-md`}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.title} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-center mb-4 mt-4">
                {partner.title}
              </h3>

              <ul className="text-md text-black space-y-2 mb-6 flex-grow">
                {partner.details.map((detail, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-2">➠</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link to="/antei-hk/contactus">
                <div className="relative mt-4 overflow-hidden">
                  <button className="relative w-full py-2 bg-white text-black border border-black rounded-lg overflow-hidden group">
                    <span className="absolute inset-0 bg-yellow-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                      Inquire
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view */}
      <div className="bg-black py-10 pt-16 px-4 text-center md:hidden">
        <div className="w-full h-2 bg-gradient-to-r from-purple-700 via-purple-500 to-orange-400"></div>
        <h2 className="text-white text-2xl font-semibold mt-8">
          Choose the most suitable model for your business
        </h2>
      </div>
      <div className="bg-black py-8 flex flex-col items-center pb-16 space-y-8 px-4 md:hidden">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs flex flex-col"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full rounded-xl h-64 overflow-hidden">
              <img
                src={partner.backgroundImage}
                alt={`${partner.title} background`}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-purple-600 transition-all duration-700 ${
                  hoveredIndex === index
                    ? "bg-opacity-50 opacity-90"
                    : "bg-opacity-0 opacity-0"
                } flex p-6`}
              >
                <p className="text-white text-base font-bold">
                  {partner.hoverText}
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg -mt-8 pt-12 pb-6 px-4 z-10 w-full mx-auto border-2 border-transparent flex flex-col flex-grow">
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 -top-12 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-purple-600 shadow-md`}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.title} logo`}
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-center mb-4 mt-4">
                {partner.title}
              </h3>

              <ul className="text-sm text-black space-y-2 mb-6 flex-grow">
                {partner.details.map((detail, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-2">➠</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link to="/antei-hk/contactus" className="block">
                <div className="relative mt-4 overflow-hidden">
                  <button className="relative w-full py-2 bg-white text-black border border-black rounded-lg overflow-hidden group">
                    <span className="absolute inset-0 bg-yellow-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                      Inquire
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InquirySection;
