import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ANTEI Logo Bright.png";
import nameLogo from "../assets/ANTEI_Logo_Name_White.png";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/antei-hk" },
    { name: "Partners", path: "/antei-hk/partners" },
    { name: "Clients", path: "/antei-hk/clients" },
    { name: "Contacts", path: "/antei-hk/contactus" },
  ];

  return (
    <header
      className="text-white pt-2 fixed top-0 z-50 w-full"
      style={{
        background:
          "linear-gradient(to right, rgb(2, 1, 4) 0%, rgb(39, 11, 96) 40%, rgb(72, 25, 154) 60%, rgb(81, 34, 162) 78%, rgb(43, 9, 105) 98%, rgb(41, 10, 100) 100%)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-[180px]">
        {/* Logo with Hover Effect */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`transition-transform duration-500 ${
              isHovered ? "rotate-y-180" : "rotate-y-0"
            }`}
          >
            <img src={logo} alt="ANTEI Logo" className="w-[60px] md:w-[80px]" />
          </div>
          {/* Name logo appears on hover (hidden on mobile) */}
          <img
            src={nameLogo}
            alt="ANTEI Name"
            className={`hidden md:block w-[150px] transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0 w-0"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative text-white font-black text-[16px] transition-all duration-300 ease-in-out
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
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="block h-1 w-full bg-white"></span>
            <span className="block h-1 w-full bg-white"></span>
            <span className="block h-1 w-full bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-gradient-to-r from-[rgb(39,11,96)] to-[rgb(81,34,162)]
        transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block px-6 py-3 text-white hover:bg-white/10"
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
