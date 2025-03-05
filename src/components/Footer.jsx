import React from "react";
import anteiLogo from "../assets/ANTEI_Logo_Name_White.png";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-[#808080] py-8 px-40">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Top Section */}
        <div className="flex items-center space-x-50">
          <a href="#">
            <img src={anteiLogo} alt="Antei Logo" className="h-9" />
          </a>
          <nav className="flex space-x-50 text-xl">
            <a
              href="https://anteihk.com/contacts.html"
              className="hover:text-[#FFA500] text-[5F5F5F] underline transition"
            >
              CONTACTS
            </a>
            <a
              href="https://anteihk.com/locations.html"
              className="hover:text-[#FFA500] transition underline text-"
            >
              LOCATIONS
            </a>
          </nav>
          <a
            href="https://www.linkedin.com/company/antei-limited/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[5F5F5F] hover:text-[#FFA500] text-2xl cursor-pointer transition" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-center space-x-40 text-md">
          <a
            href="https://anteihk.com/privacy-statement.html"
            className="hover:text-[#FFA500] transition"
          >
            Privacy Statement
          </a>
          <a
            href="https://anteihk.com/terms-and-conditions.html"
            className="hover:text-[#FFA500] transition"
          >
            Terms & Conditions
          </a>
          <a
            href="https://anteihk.com/cookie-policy.html"
            className="hover:text-[#FFA500] transition"
          >
            Cookie Policy/Settings
          </a>
          <span>Copyright © 2025 ANTEI Limited</span>
        </div>
      </div>
    </footer>
  );
}
