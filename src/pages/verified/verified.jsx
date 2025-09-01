import React from "react";
import Hero from "./Hero";
import TrustBadge from "./trustbadge";
import ExporterCards from "./Exportercards";
import { Phone } from "lucide-react";
import { useState } from "react";
import ComplianceCertificates from "./Certificate";
import ProductCatalogs from "./catalog";
import Img8 from "../../assets/sollutions/image8.png";
import Img9 from "../../assets/sollutions/image9.png";
import GlobalTradeSection from "../Home/9th";

const Verified = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Hero />
      <TrustBadge />
      <ExporterCards />

      <GlobalTradeSection />

      <ComplianceCertificates />
      <ProductCatalogs />

      <section className="max-w-6xl mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20 ">
          {/* Left Side - Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Get In Touch
            </h2>

            <div className="space-y-6 ">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 sm:py-4 text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 sm:py-4 text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message here.."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 sm:py-4 text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none resize-none transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center lg:justify-start pt-4 sm:pt-8">
                <button
                  onClick={handleSubmit}
                  className="flex items-center px-6 sm:px-8 py-3 sm:py-4 text-white font-medium text-sm sm:text-base rounded-full hover:opacity-90 transition-opacity duration-300"
                  style={{ backgroundColor: "#1DA1F2" }}
                >
                  SEND NOW
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Company Info */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Contact With Us
              <br className="hidden lg:block" />
             {" "}  Today
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              A creative agency speciali providing innovative and unique
              solutions to businesses build
            </p>

            {/* Map Container */}
            <div className="w-full h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
              {/* Map Image - Using a placeholder since we can't use unsplash */}
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <div className="text-gray-600 text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <p className="text-sm">Map Location</p>
                </div>
              </div>

              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center animate-pulse">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20    px-4 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl  md:text-5xl font-bold text-gray-900 font-['Outfit']">
            Free for all buyers — no registration required.{" "}
          </h2>

          {/* Subheading */}
          <p className="mt-5 text-gray-500 text-xs  md:text-lg font-['Poppins']">
            Unlock Markets, Build Trust, and Scale Without Borders{" "}
          </p>

          <div className="mt-6 flex justify-center">
            <button className="flex items-center gap-2 bg-[#1DA1F2] text-white px-6 py-3 rounded-full font-light font-['Poppins'] hover:opacity-90 transition">
              <Phone size={18} /> BOOK CALL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Verified;
