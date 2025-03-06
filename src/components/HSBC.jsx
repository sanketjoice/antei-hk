import { div } from "framer-motion/client";
import hsbcLogo from "../assets/HSBC.svg";

const HSBC = () => {
  return (
    <div className="bg-black py-[60px]">
      <section
        id="hsbc"
        className="w-4/5 flex flex-col md:flex-row items-center text-white border-4 border-[#f2b54b19] rounded-2xl bg-[#f2b54b19] mx-auto p-6 text-center md:text-left"
      >
        {/* HSBC Logo */}
        <img
          src={hsbcLogo}
          alt="HSBC Logo"
          className="w-20 sm:w-24 md:w-[10%] max-w-full h-auto object-contain mb-4 md:mb-0"
        />

        {/* Text Content */}
        <div className="flex-1 min-w-0 md:pl-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#f2b54b] pb-2">
            As featured at HSBC
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
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
