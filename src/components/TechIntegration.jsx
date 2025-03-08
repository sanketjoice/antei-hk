import data from "../data/techData.json";
import image1 from "../assets/industry4.png";
import image2 from "../assets/opsec.png";
import image3 from "../assets/development.png";
import image4 from "../assets/uiux.png";
import image5 from "../assets/cloud-6515064_1280-AR0bJn68OLfE5Wgr.png";
import image6 from "../assets/ai-generated-7958874_1280-AQEpJGNP7bSQz1RM.png";

const images = [image1, image2, image3, image4, image5, image6];

const TechIntegration = () => {
  return (
    <div className="bg-black text-white py-8 px-4 sm:py-10  md:py-12  xl:px-[8vw] 2xl:px-[10vw]">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-12 border-b-2 border-yellow-500 inline-block">
        Technologies & System Integration
      </h2>

      {/* Sections */}
      <div className="flex flex-col gap-8 md:gap-12">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group hover:shadow-xl ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 transition-transform duration-300 group-hover:translate-y-[-5px]">
              <img
                src={images[index]}
                alt={section.title}
                className="w-full h-48 sm:h-56 md:h-72 object-cover transition-transform duration-300 blur-[1px] opacity-90 group-hover:blur-none group-hover:opacity-100 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 h-auto bg-gray-950 bg-opacity-50 flex flex-col justify-center p-4 sm:p-6 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-5px]">
              <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
                {section.title}
              </h3>
              <ul className="mt-2 sm:mt-4 space-y-1 sm:space-y-2 text-sm md:text-lg">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIntegration;
