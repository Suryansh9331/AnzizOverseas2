import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Globe } from "lucide-react";
import logo from "../../assets/images/logo2.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Tools", path: "/tools" },
    { name: "Learning Hub", path: "/learning-hub" },
    { name: "Verified Supplier", path: "/verified-supplier" },
    { name: "Logistics Solution", path: "/logistic" },
  ];

  return (
    <nav className="absolute top-4 w-full flex justify-center font-outfit z-50">
      {/* Floating Box */}
      <div className="flex items-center justify-between w-[95%] lg:w-[92%] px-6 py-1  rounded-full bg-white/90 backdrop-blur shadow-md">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className=" h-10 md:h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-900 text-md font-medium hover:text-[#E44F39] transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Icons */}
          <Search className="w-5 h-5 cursor-pointer hover:text-[#E44F39]" />
          <Globe className="w-5 h-5 cursor-pointer hover:text-[#E44F39]" />

          {/* Buttons */}
          <Link
            to="/login"
            className="px-6 py-2 border border-black rounded-full text-xs font-medium hover:bg-gray-100 transition"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-[#E44F39] text-white rounded-full text-xs font-medium hover:bg-[#c93f2d] transition"
          >
            SIGN UP
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 w-[90%] mx-auto bg-white rounded-2xl shadow-md p-5 md:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-900 text-base font-medium hover:text-[#E44F39] transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Icons */}
            <div className="flex space-x-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-[#E44F39]" />
              <Globe className="w-5 h-5 cursor-pointer hover:text-[#E44F39]" />
            </div>

            {/* Buttons */}
            <Link
              to="/login"
              className="px-5 py-2 border border-black rounded-full text-sm font-medium hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              LOGIN
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 bg-[#E44F39] text-white rounded-full text-sm font-medium hover:bg-[#c93f2d] transition"
              onClick={() => setIsOpen(false)}
            >
              SIGN UP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
