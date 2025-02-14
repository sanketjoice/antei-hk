import { div } from "framer-motion/client";
import hsbcLogo from "../assets/HSBC.svg";

const HSBC = () => {
  return (
    <div className="bg-black py-[60px]">
      <section
        id="hsbc"
        className="w-4/5 flex items-center justify-between text-white border-4 border-[#f2b54b19] rounded-2xl bg-[#f2b54b19] mx-auto p-4"
      >
        {/* HSBC Logo */}
        <img
          src={hsbcLogo}
          alt="HSBC Logo"
          className="w-[10%] max-w-full h-auto object-contain"
        />

        {/* Text Content */}
        <div className="flex-1 min-w-0 pl-4">
          <h2 className="text-3xl font-semibold text-[#f2b54b] pb-4">
            As featured at HSBC
          </h2>
          <p className="text-lg leading-relaxed">
            ANTEI is a proud member of HSBC Business Go program. Find us{" "}
            <a
              href="https://www.businessgo.hsbc.com/en/company/anteihk"
              className="text-[#f2b54b] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here →
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HSBC;
