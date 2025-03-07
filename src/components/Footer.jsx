import React, { useEffect, useState } from "react";
import anteiLogo from "../assets/ANTEI_Logo_Name_White.png";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile and update state
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <footer className="bg-black text-[#808080] py-8 md:px-40 px-6">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Top Section */}
        <div
          className={`${
            isMobile
              ? "flex flex-col items-center space-y-4"
              : "flex items-center space-x-50"
          }`}
        >
          <a href="#">
            <img src={anteiLogo} alt="Antei Logo" className="h-9" />
          </a>
          <nav
            className={`${
              isMobile
                ? "flex space-x-8 text-sm mt-4"
                : "flex space-x-50 text-xl"
            }`}
          >
            <Link to="/antei-hk/contactus">
              <a className="hover:text-[#FFA500] text-[5F5F5F] underline transition">
                CONTACTS
              </a>
            </Link>
            <Link to="/antei-hk/contactus">
              <a className="hover:text-[#FFA500] transition underline text-">
                LOCATIONS
              </a>
            </Link>
            {isMobile && (
              <a
                href="https://www.linkedin.com/company/antei-limited/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[5F5F5F] hover:text-[#FFA500] text-lg cursor-pointer transition" />
              </a>
            )}
          </nav>
          {!isMobile && (
            <a
              href="https://www.linkedin.com/company/antei-limited/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[5F5F5F] hover:text-[#FFA500] text-2xl cursor-pointer transition" />
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div
          className={`${
            isMobile
              ? "flex flex-col items-center space-y-3 text-sm"
              : "flex flex-wrap justify-center space-x-40 text-md"
          }`}
        >
          <a className="hover:text-[#FFA500] transition">Privacy Statement</a>
          <a className="hover:text-[#FFA500] transition">Terms & Conditions</a>
          <a className="hover:text-[#FFA500] transition">
            Cookie Policy/Settings
          </a>
          <span className={`${isMobile ? "mt-4 text-xs" : ""}`}>
            Copyright © 2025 ANTEI Limited
          </span>
        </div>
      </div>
    </footer>
  );
}
