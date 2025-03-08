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
import { X } from "lucide-react";

const projects = [
  {
    category: "Business Development",
    title: "Cement Production & Logistics (Asia)",
    image: cement,
    overview: "Major supply chain management platform.",
    challenge:
      "Identify the reasons behind the nonoptimal platform performance and conduct the relevant optimizations.",
    solution:
      "Comprehensive web optimization including JavaScript and CSS optimization, reduction of loading and initial server response times, minimization of main-thread work, among others.",
    implementation:
      "Regional Experts Engaging: Identified and engaged on-site experts from all countries of interest.\n" +
      "Manufacturing Sites: Identified 55+ production factories with the sought manufacturing capabilities. Contacts with them were established and terms negotiated.\n" +
      "Logistics: Our team has engaged with 14+ logistics companies to negotiate transportation details for 19+ routes of interest and obtained the most favorable quotes for our client.\n" +
      "Import and Taxes: Considering the type of goods, manufacturing costs, logistics, import fees, and taxes, a realization pricing of the production at the destination ports was calculated.",
    results: [
      "The company obtained a deep understanding about the Asian cement market with logistics details and produce realization prices at the destinations of interest.",
    ],
    duration: "1 month",
    testimonial:
      '"ANTEI Team worked wonders on our website. In just one week, they pinpointed our performance issues and optimized our site significantly. The platform is now faster and more efficient, making a huge difference for our clients. We couldn\'t be happier with the results and highly recommend their services."',
  },
  {
    category: "AI & ML",
    title: "ML-driven Platform for R&D Innovations",
    image: aiml,
    overview: "AI-powered research and development platform.",
    challenge:
      "Create a machine learning system to accelerate innovation discovery.",
    solution:
      "Developed a neural network architecture that analyzes research papers and identifies potential cross-disciplinary applications.",
    implementation:
      "Analysis: Collected and processed 50,000+ research documents across multiple domains.\nOptimization: Fine-tuned models for specific industry applications.",
    results: [
      "35% increase in novel research directions identified",
      "42% reduction in initial research time",
      "7 new patents filed based on system recommendations",
    ],
    duration: "3 months",
    testimonial:
      '"The ML platform has transformed how our R&D department operates. We\'re discovering connections between fields that we would have never considered before."',
  },
  {
    category: "Web Development",
    title: "Web Platform Performance Optimization",
    image: webDevelopment,
    overview: "Major supply chain management platform.",
    challenge:
      "Identify the reasons behind the nonoptimal platform performance and conduct the relevant optimizations.",
    solution:
      "Comprehensive web optimization including JavaScript and CSS optimization, reduction of loading and initial server response times, minimization of main-thread work, among others.",
    implementation:
      "Analysis: Identified the platform's weak points through various testing mechanisms.\nOptimization: Introduced relevant optimizations.",
    results: [
      "The platform performance increased significantly. Among the parameters:",
      "272.4% improvement in Speed Index (from 7.9s to 2.9s)",
      "326% improvement in Largest Content Paint (from 18.9s to 5.8s)",
      "18% Total Blocking Time improvement (from 780ms to 640ms)",
      "100/100 Best Practices Score",
    ],
    duration: "1 week",
    testimonial:
      '"ANTEI Team worked wonders on our website. In just one week, they pinpointed our performance issues and optimized our site significantly. The platform is now faster and more efficient, making a huge difference for our clients. We couldn\'t be happier with the results and highly recommend their services."',
  },
  {
    category: "Product Strategy",
    title: "Tokenization for Real Estate Development",
    image: realEstate,
    overview: "Blockchain-based real estate investment platform.",
    challenge:
      "Create a secure and transparent system for fractional property ownership.",
    solution:
      "Developed a tokenization platform using smart contracts to enable fractional investment in commercial properties.",
    implementation:
      "Analysis: Researched regulatory compliance across multiple jurisdictions.\nOptimization: Created an accessible interface for non-technical investors.",
    results: [
      "Successfully tokenized $25M worth of commercial real estate",
      "Lowered minimum investment threshold by 98%",
      "Increased investor diversity by 340%",
    ],
    duration: "6 months",
    testimonial:
      '"This platform has democratized access to premium real estate investments that were previously only available to institutional investors."',
  },
  {
    category: "Business Strategy",
    title: "Football Club Business Strategy",
    image: football,
    overview:
      "Comprehensive business transformation for a professional football club.",
    challenge: "Develop new revenue streams while enhancing fan engagement.",
    solution:
      "Created integrated digital and physical fan experiences with monetization opportunities.",
    implementation:
      "Analysis: Conducted fan segmentation and engagement analysis.\nOptimization: Designed personalized engagement channels for different segments.",
    results: [
      "45% increase in non-matchday revenue",
      "78% growth in digital engagement",
      "28% increase in season ticket renewals",
    ],
    duration: "12 months",
    testimonial:
      '"The strategy transformed our business model and strengthened our connection with fans worldwide."',
  },
  {
    category: "Business Development",
    title: "Market Entry Strategy (Asia)",
    image: dubai,
    overview:
      "Strategic market entry for a European luxury brand into Asian markets.",
    challenge:
      "Navigate cultural differences and establish brand positioning in competitive markets.",
    solution:
      "Developed a phased entry strategy with localized marketing and strategic partnerships.",
    implementation:
      "Analysis: Conducted comprehensive market analysis and consumer behavior studies.\nOptimization: Created region-specific product adaptations and marketing campaigns.",
    results: [
      "Successful launch in 4 key Asian markets",
      "15% market share achieved within first year",
      "320% ROI on market entry investment",
    ],
    duration: "9 months",
    testimonial:
      '"Their cultural insights and strategic approach made our Asian market entry remarkably smooth and successful."',
  },
];

export default function PortfolioSection() {
  const [year, setYear] = useState(2024);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    // Re-enable body scrolling
    document.body.style.overflow = "auto";
  };

  // Close modal when clicking outside the content
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="bg-black text-white py-6 md:py-10 px-4 sm:px-6 md:px-10 lg:px-[5vw] xl:px-[8vw] 2xl:px-[10vw] md:pr-6 md:pl-8 lg:pl-32 relative">
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
          spaceBetween={120}
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
              <div
                className="relative h-96 sm:h-[420px] lg:h-[480px] w-full sm:w-auto lg:w-[320px] rounded-xl overflow-hidden shadow-lg group mx-auto cursor-pointer"
                onClick={() => openModal(project)}
              >
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

      {/* Modal */}
      {showModal && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 modal-overlay"
          onClick={handleModalClick}
        >
          <div className="relative bg-white text-black w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto rounded-lg shadow-xl">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {/* Project content */}
            <div className="p-6">
              {/* Banner image and title */}
              <div className="relative h-64 md:h-72 lg:h-80 w-full overflow-hidden rounded-lg mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded-md mb-2 inline-block">
                    {selectedProject.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-white text-2xl md:text-3xl font-bold">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Project details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    Overview
                  </h3>
                  <p>{selectedProject.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    Challenge
                  </h3>
                  <p>{selectedProject.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    Solution
                  </h3>
                  <p>{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    Implementation
                  </h3>
                  {selectedProject.implementation
                    .split("\n")
                    .map((line, idx) => (
                      <p key={idx} className="mb-1">
                        <span className="font-bold">{line.split(":")[0]}:</span>{" "}
                        {line.split(":")[1]}
                      </p>
                    ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    Results
                  </h3>
                  <div>
                    {selectedProject.results.map((result, idx) => (
                      <p key={idx} className={idx > 0 ? "font-bold" : ""}>
                        {result}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    Duration
                  </h3>
                  <p>{selectedProject.duration}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                    Client Testimonial
                  </h3>
                  <blockquote className="border-l-4 border-yellow-500 pl-4 italic">
                    {selectedProject.testimonial}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
