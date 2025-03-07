import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ANTEI Logo Bright.png";
import nameLogo from "../assets/ANTEI_Logo_Name_White.png";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/antei-hk" },
    { name: "Partners", path: "/antei-hk/partners" },
    { name: "Clients", path: "/antei-hk/clients" },
    { name: "Contacts", path: "/antei-hk/contactus" },
  ];

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-white fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg" : "pt-2"
      }`}
      style={{
        background:
          "linear-gradient(to right, rgb(2, 1, 4) 0%, rgb(39, 11, 96) 40%, rgb(72, 25, 154) 60%, rgb(81, 34, 162) 78%, rgb(43, 9, 105) 98%, rgb(41, 10, 100) 100%)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-32">
        <Link
          to="/antei-hk"
          className="flex items-center space-x-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`transition-transform duration-500 ${
              isHovered ? "rotate-y-180" : "rotate-y-0"
            }`}
          >
            <img
              src={logo}
              alt="ANTEI Logo"
              className="w-[40px] sm:w-[50px] md:w-[70px] lg:w-[80px]"
            />
          </div>
          <img
            src={nameLogo}
            alt="ANTEI Name"
            className={`hidden sm:block w-[100px] md:w-[120px] lg:w-[150px] transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0 w-0"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative text-white font-black text-sm lg:text-base transition-all duration-300 ease-in-out
                   hover:text-[#F2B44B] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px]
                   after:bg-current after:transition-all after:duration-300 after:ease-in-out
                   hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-gradient-to-r from-[rgb(39,11,96)] to-[rgb(81,34,162)]
        transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-64 opacity-100 shadow-xl"
            : "max-h-0 opacity-0 overflow-hidden"
        } md:hidden flex flex-col items-center`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block w-full px-6 py-3 text-white text-base border-b border-purple-800/30 hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
