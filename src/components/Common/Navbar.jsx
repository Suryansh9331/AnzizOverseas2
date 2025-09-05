

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Globe } from "lucide-react";
import logo from "../../assets/images/logo2.png";

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

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="absolute top-4 w-full flex justify-center font-outfit z-50">
      {/* Navbar Wrapper */}
      <div className="flex items-center justify-between w-[95%] lg:w-[92%] px-6 py-2 rounded-full bg-white/90 backdrop-blur shadow-md">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10 md:h-14 w-auto" />
        </Link>

        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-900 text-md font-medium hover:text-[#1DA1F2] transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Icons */}
          <Search className="w-5 h-5 cursor-pointer hover:text-[#1DA1F2]" />
          <Globe className="w-5 h-5 cursor-pointer hover:text-[#1DA1F2]" />

          {/* Buttons */}
          <Link
            to="/login"
            className="px-6 py-2 border border-black rounded-full text-xs font-medium hover:bg-gray-100 transition"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-[#1DA1F2] text-white rounded-full text-xs font-medium hover:bg-[#c93f2d] transition"
          >
            SIGN UP
          </Link>
        </div>

        {/* Hamburger (for tablet + mobile, hidden on lg+) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md text-gray-900 hover:bg-gray-100 transition"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <button
            onClick={handleClose}
            className="p-2 rounded-md text-gray-900 hover:bg-gray-200 transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-6 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-800 text-lg font-medium hover:text-[#1DA1F2] transition"
              onClick={handleClose}
            >
              {link.name}
            </Link>
          ))}

          {/* Icons */}
          <div className="flex space-x-5 pt-3">
            <Search className="w-6 h-6 cursor-pointer hover:text-[#1DA1F2]" />
            <Globe className="w-6 h-6 cursor-pointer hover:text-[#1DA1F2]" />
          </div>

          {/* Buttons */}
          <Link
            to="/login"
            className="px-5 py-2 border border-black rounded-full text-sm font-medium hover:bg-gray-100 transition text-center"
            onClick={handleClose}
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 bg-[#1DA1F2] text-white rounded-full text-sm font-medium hover:bg-[#c93f2d] transition text-center"
            onClick={handleClose}
          >
            SIGN UP
          </Link>
        </div>
      </aside>
    </nav>
  );
}
