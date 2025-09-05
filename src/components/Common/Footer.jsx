// import React from "react";
// import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
// import { ArrowRight } from "lucide-react";
// import logo from "../../assets/Home/footerlogo.png";
// import { Link } from "react-router-dom";





import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/Home/footerlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white font-poppins">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-start md:items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold mb-3 text-[#1DA1F2]">
              Get Started Now
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              A creative agency speciali innovative and solutions to businesses
              A creative agency speciali
            </p>
          </div>

          {/* Logo */}
          <div className="shrink-0 mx-auto md:mx-0">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-24 sm:w-28 md:w-32 object-contain"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-12 ">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full">
                <FaMapMarkerAlt className="text-[#1DA1F2] text-lg" />
              </span>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Address</p>
                <p className="text-sm sm:text-base font-semibold">
                  66 Broklyant, New India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full">
                <FaEnvelope className="text-[#1DA1F2] text-lg" />
              </span>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Email</p>
                <p className="text-sm sm:text-base font-semibold">
                  sara.cruz@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-gray-300 text-sm">
            <a href="#" className="hover:text-white transition">
              » About us
            </a>
            <a href="#" className="hover:text-white transition">
              » Testimonial
            </a>
            <a href="#" className="hover:text-white transition">
              » Services
            </a>
            <a href="#" className="hover:text-white transition">
              » Blog
            </a>
            <a href="#" className="hover:text-white transition">
              » Contact Us
            </a>
            <Link to="/tools" className="hover:text-white transition">
              » Tools
            </Link>
            <Link to="/sollutions" className="hover:text-white transition">
              » Solution
            </Link>
          </div>

          {/* Subscribe Box */}
          <div className="w-full">
            <form className="flex flex-col sm:flex-row items-stretch bg-[#1A1A1A] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent text-sm outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="flex items-center justify-center sm:justify-between gap-2 bg-black px-5 py-3 sm:rounded-full text-xs font-semibold tracking-wide hover:bg-[#1DA1F2] transition"
              >
                SUBSCRIBE NOW
                <span className="w-[51px] h-[40px] flex items-center justify-center">
                  <svg
                    width="71"
                    height="40"
                    viewBox="0 0 71 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.7071 20.7071C56.0976 20.3166 56.0976 19.6834 55.7071 19.2929L49.3431 12.9289C48.9526 12.5384 48.3195 12.5384 47.9289 12.9289C47.5384 13.3195 47.5384 13.9526 47.9289 14.3431L53.5858 20L47.9289 25.6568C47.5384 26.0474 47.5384 26.6805 47.9289 27.0711C48.3195 27.4616 48.9526 27.4616 49.3431 27.0711L55.7071 20.7071ZM0 20L8.74228e-08 21L55 21L55 20L55 19L-8.74228e-08 19L0 20Z"
                      fill="white"
                    />
                    <circle cx="51" cy="20" r="19.5" stroke="#1DA1F2" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p className="text-center md:text-left">
            © Anjisoverseas 2024 | All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="#" className="hover:text-white transition">
              Terms & Condition
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="mailto:infoanjisoverseas@gmail.com" className="hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
