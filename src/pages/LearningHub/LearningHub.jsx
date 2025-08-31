//contact page
import React from "react";
import HeroSection from "./Hero";
import LearningResources from "./Reesources";
import FeaturedVideoSection from "./f1";
import ServicesGridSection from "./Servicecards";
import TradeStrategiesSection from "./f2";
import { Phone } from "lucide-react";
import FourthSectiion from "../Home/4th";
const Learninghub = () => {
  return (
    <div>
      <HeroSection />

      <div className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto md:block  hidden">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left text-gray-800 mb-6 sm:mb-8">
            Explore Tools by Category
          </h2>

          <div className="overflow-x-auto">
            <div
              className="rounded-xl p-3 px-6 sm:px-12 flex items-center gap-2 sm:gap-4 min-w-max sm:max-w-2xl"
              style={{ backgroundColor: "#B9E2FB" }}
            >
              <button
                className="px-4 sm:px-8 py-3 rounded-xl text-white font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap"
                style={{ backgroundColor: "#1DA1F2" }}
              >
                Documentation
              </button>

              {/* Inactive Tabs */}
              <button className="px-3 sm:px-6 py-3 text-gray-700 font-medium text-sm sm:text-base flex items-center hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                Logistics
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <button className="px-3 sm:px-6 py-3 text-gray-700 font-medium text-sm sm:text-base flex items-center hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                Frauds
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <button className="px-3 sm:px-6 py-3 text-gray-700 font-medium text-sm sm:text-base flex items-center hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                Cost
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <FeaturedVideoSection />
      <ServicesGridSection />
      <TradeStrategiesSection />
<FourthSectiion/>
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
export default Learninghub;
