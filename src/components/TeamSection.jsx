import { useState } from "react";
import aiml from "../assets/aiml.png";
import fullstack from "../assets/full_stack.png";
import cybersecurity from "../assets/cybersecurity.png";
import strategy from "../assets/strategy.png";
import RandD from "../assets/rnd.png";
import trade from "../assets/trade.png";
import industry from "../assets/industry_experts.png";

const teamData = [
  {
    title: "AI & ML",
    description:
      "A highly skilled team of professionals with advanced Master's or Doctoral degrees in Data Science and Machine Learning bringing a deep understanding of algorithms, statistical analysis, and data modelling.",
    image: aiml,
  },
  {
    title: "Full Stack Development",
    description:
      "Our Full Stack team excels in modern web technologies, including React, Node.js, and databases, delivering scalable and efficient applications.",
    image: fullstack,
  },
  {
    title: "Cybersecurity",
    description:
      "Experts in cybersecurity, ensuring secure systems, data protection, and advanced threat mitigation strategies.",
    image: cybersecurity,
  },
  {
    title: "Strategy & Consulting",
    description:
      "Providing strategic insights and consulting services to optimize technology adoption and business growth.",
    image: strategy,
  },
  {
    title: "R&D Practice",
    description:
      "Dedicated R&D professionals exploring innovative solutions to push technological advancements.",
    image: RandD,
  },
  {
    title: "International Trade",
    description:
      "Specialists in global trade strategies, ensuring compliance and efficient cross-border transactions.",
    image: trade,
  },
  {
    title: "Industrial Expertise",
    description:
      "Experts in various industries, from manufacturing to logistics, leveraging technology for efficiency.",
    image: industry,
  },
];

export default function TeamSection() {
  const [selectedTeam, setSelectedTeam] = useState(teamData[0]);

  return (
    <div className="flex flex-col pl-[150px] md:flex-row items-start gap-10 pt-[70px] p-10 bg-black text-white">
      {/* Left Side: Team Categories */}
      <div className="flex flex-col gap-4 w-1/3">
        <h2 className="text-4xl font-semibold mb-0">Our Team</h2>
        <div className="w-[158px] h-[3px] bg-yellow-500 mb-9"></div>
        {teamData.map((team, index) => (
          <button
            key={index}
            onMouseEnter={() => setSelectedTeam(team)}
            className={`text-xl font-bold text-left px-4 py-3 rounded-md transition-all duration-300 ${
              selectedTeam.title === team.title
                ? "bg-yellow-500"
                : "hover:text-yellow-500"
            }`}
          >
            {team.title}
          </button>
        ))}
      </div>

      {/* Right Side: Image & Description */}
      <div className="w-2/3 ml-[150px] mt-[100px] flex flex-col">
        {/* Image */}
        <img
          src={selectedTeam.image}
          alt={selectedTeam.title}
          className="w-[550px] h-[300px] object-cover rounded-xl transition-all duration-500"
        />

        {/* Description */}
        <p className="mt-6 w-[500px] h-[54px] text-lg leading-relaxed">
          {selectedTeam.description}
        </p>

        {/* Learn More */}
        <p className="mt-20 text-gray-400 cursor-pointer hover:text-white transition-all duration-300">
          Learn more
        </p>
      </div>
    </div>
  );
}
