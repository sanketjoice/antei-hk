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
    <div className="bg-black px-36 text-white py-12">
      <h2 className="text-4xl font-semibold mb-12 border-b-2 border-yellow-500 inline-block">
        Technologies & System Integration
      </h2>
      <div className="flex flex-col gap-12">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 relative transition-transform duration-300 group-hover:translate-y-[-5px]">
              <img
                src={images[index]} // Different image per section
                alt={section.title}
                className="w-full h-72 object-cover transition-transform duration-300 blur-[1px] opacity-90 group-hover:blur-none group-hover:opacity-100 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 h-72 bg-gray-950 bg-opacity-50 flex flex-col justify-center p-6 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-5px]">
              <h3 className="text-4xl font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2 text-lg">
                {section.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
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
