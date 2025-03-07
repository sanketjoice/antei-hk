import { useState } from "react";
import step3Image from "../assets/download (1).png";
import step4Image from "../assets/download (2).png";
import mobileAppIcon from "../assets/download (3).png";
import webIcon from "../assets/download (5).png";
import chatbotIcon from "../assets/download (4).png";
import { Link } from "react-router-dom";

function DeploymentOptions() {
  const [selectedOption, setSelectedOption] = useState("cloud");

  const deploymentInfo = {
    cloud:
      "Most suitable for SMEs, easily scalable, with low initial investment into computational power.",
    onpremise:
      "Completely private, local solutions. Suitable for larger enterprises with security & compliance constraints.",
    hybrid:
      "Perfect for on-premise storing of sensitive data and cloud computation of resource-intensive tasks.",
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div
          className={`border border-white p-4 text-center cursor-pointer ${
            selectedOption === "cloud" ? "border-purple-500" : ""
          }`}
          onClick={() => setSelectedOption("cloud")}
        >
          <h3
            className={`text-lg sm:text-xl font-bold mb-2 ${
              selectedOption === "cloud" ? "text-purple-500" : ""
            }`}
          >
            Cloud
          </h3>
        </div>
        <div
          className={`border border-white p-4 text-center cursor-pointer ${
            selectedOption === "onpremise" ? "border-purple-500" : ""
          }`}
          onClick={() => setSelectedOption("onpremise")}
        >
          <h3
            className={`text-lg sm:text-xl font-bold mb-2 ${
              selectedOption === "onpremise" ? "text-purple-500" : ""
            }`}
          >
            On-premise
          </h3>
        </div>
        <div
          className={`border border-white p-4 text-center cursor-pointer ${
            selectedOption === "hybrid" ? "border-purple-500" : ""
          }`}
          onClick={() => setSelectedOption("hybrid")}
        >
          <h3
            className={`text-lg sm:text-xl font-bold mb-2 ${
              selectedOption === "hybrid" ? "text-purple-500" : ""
            }`}
          >
            Hybrid
          </h3>
        </div>
      </div>

      <div className="border border-white p-4">
        <p className="text-base sm:text-lg">{deploymentInfo[selectedOption]}</p>
      </div>
    </>
  );
}

const sections = [
  {
    title: "Understanding Objectives and Demo Preparation",
    content: (
      <div className="text-white">
        <p className="mb-6 text-base sm:text-lg">
          The client provides the ANTEI Team with the necessary materials for
          demo preparation. The workflow and responsibilities are outlined as
          follows:
        </p>

        <div className="flex flex-col sm:flex-row">
          {/* Client Column */}
          <div className="w-full sm:w-1/2 border-r border-white pr-0 sm:pr-6 mb-6 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Client</h3>
            <div className="w-full h-px bg-white mb-4"></div>
            <ul className="list-none text-base sm:text-lg space-y-4">
              <li className="flex items-center">
                <span className="w-1 h-1 bg-white rounded-full mr-2"></span>{" "}
                Sign the NDA
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-white rounded-full mr-2"></span>{" "}
                Identify priority use cases
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-white rounded-full mr-2"></span>{" "}
                Provide us with sample datasets
              </li>
            </ul>
          </div>
          {/* ANTEI Column */}
          <div className="w-full sm:w-1/2 pl-0 sm:pl-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2">ANTEI</h3>
            <div className="w-full h-px bg-white mb-4"></div>
            <ul className="list-none text-base sm:text-lg space-y-4">
              <li className="flex items-center">
                <span className="w-1 h-1 bg-white rounded-full mr-2"></span>{" "}
                Sign the NDA
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-white rounded-full mr-2"></span>{" "}
                Analyze your datasets
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-white rounded-full mr-2"></span>{" "}
                Show the demo
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Contract Finalization and Commencement of Work",
    content: (
      <p className="text-base sm:text-lg">
        Upon contract finalization and prepayment settlement, work commences.
        Once the product is developed and approved by the client, it is
        integrated into the client's systems according to the contract.
      </p>
    ),
  },
  {
    title: "Solutions Versatility",
    icon: step3Image,
    content: (
      <div className="text-white">
        <p className="mb-6 text-base sm:text-lg">
          ANTEI Solutions can be integrated to any system:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border-3 border-purple-500 border-dashed rounded-lg p-4 sm:p-6 flex items-center">
            <img
              src={mobileAppIcon}
              alt="Mobile App"
              className="w-8 h-8 sm:w-10 sm:h-10 mr-4"
            />
            <span className="text-lg sm:text-xl">Mobile App</span>
          </div>

          <div className="border-3 border-purple-500 border-dashed rounded-lg p-4 sm:p-6 flex items-center">
            <img
              src={webIcon}
              alt="Web"
              className="w-8 h-8 sm:w-10 sm:h-10 mr-4"
            />
            <span className="text-lg sm:text-xl">Web</span>
          </div>

          <div className="border-3 border-purple-500 border-dashed rounded-lg p-4 sm:p-6 flex items-center">
            <img
              src={chatbotIcon}
              alt="Chat-bots"
              className="w-8 h-8 sm:w-10 sm:h-10 mr-4"
            />
            <span className="text-lg sm:text-xl">Chat-bots</span>
          </div>

          <div className="border-3 border-purple-500 border-dashed rounded-lg p-4 sm:p-6 flex items-center">
            <img
              src={step4Image}
              alt="API"
              className="w-8 h-8 sm:w-10 sm:h-10 mr-4"
            />
            <span className="text-lg sm:text-xl">API</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Optimal Deployment",
    icon: step4Image,
    content: (
      <div className="text-white">
        <p className="mb-6 text-base sm:text-lg">
          At ANTEI we always strive to recommend and deploy our solutions in the
          most optimal way for our clients.
        </p>

        <DeploymentOptions />
      </div>
    ),
  },
];

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-black px-4 sm:px-6 md:px-10 lg:px-[5vw] xl:px-[8vw] 2xl:px-[10vw] py-10 pt-[130px] text-center">
        {/* Gradient line */}
        <div className="w-full h-2 bg-gradient-to-r from-purple-700 via-purple-500 to-orange-400"></div>

        {/* Heading */}
        <h2 className="text-white text-lg sm:text-2xl font-semibold mt-14 mb-6">
          ANTEI Client Program Refers to Business Digital Transformation with
          emphasis on AI & ML Implementation
        </h2>
      </div>

      <div className="bg-black text-white px-4 sm:px-8 md:px-12 lg:px-[10vw] xl:px-[10vw] 2xl:px-[12vw] mx-auto text-2xl sm:text-3xl">
        {sections.map((section, index) => (
          <div key={index} className="border-t-2 border-yellow-500">
            <button
              className="w-full text-left py-6 sm:py-10 flex justify-between items-center group"
              onClick={() => toggleSection(index)}
            >
              <span className="font-bold flex  items-center">
                {/* Mobile view - only show titles */}
                <span className="sm:hidden py-6  group-hover:text-yellow-500 transition">
                  {section.title}
                </span>

                {/* Desktop view - show step numbers and images */}
                {index < 2 ? (
                  <span className="hidden sm:inline">
                    STEP {index + 1}{" "}
                    <span className="ml-16 group-hover:text-yellow-500 transition">
                      {section.title}
                    </span>
                  </span>
                ) : (
                  <span className="hidden sm:flex items-center">
                    <img
                      src={section.icon}
                      alt={`Step ${index + 1}`}
                      className="h-10 w-10 object-contain mr-4"
                    />
                    <span className="group-hover:text-yellow-500 lg:ml-20 transition">
                      {section.title}
                    </span>
                  </span>
                )}
              </span>
              <span className="text-white text-2xl sm:text-3xl pl-6">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 sm:p-6">{section.content}</div>
            )}
          </div>
        ))}
      </div>
      <Link to="/antei-hk/contactus">
        <div className="flex justify-center items-center p-4 sm:p-8 bg-black">
          <button
            className="relative overflow-hidden border-4 text-left px-6 sm:px-8 border-yellow-500 text-yellow-500 py-2 sm:py-4 rounded-lg w-full max-w-7xl text-lg sm:text-xl font-medium transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              className={`relative z-10 transition-colors duration-300 ${
                isHovered ? "text-white" : "text-yellow-500"
              }`}
            >
              Write us and get a personal Client Offer!
            </span>
            <div
              className="absolute top-0 left-0 h-full bg-yellow-500 transition-all duration-500 ease-in-out"
              style={{
                width: isHovered ? "100%" : "0%",
                zIndex: 0,
              }}
            />
          </button>
        </div>
      </Link>
    </>
  );
}
