import React from "react";
import Img6 from "../../assets/Learninghub/f2.png";

const TradeStrategiesSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20 font-[Outfit]">
      <div className="container max-w-6xl mx-auto px-6 lg:px-12">

        <div className="relative mb-10">
          <img
            src={Img6}
            alt="Advanced trade strategies"
            className="w-full h-64 md:h-80 lg:h-96 md:object-contain object-fill bg-white"
          />

         
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-80 rounded-full p-5 shadow-md hover:bg-opacity-100 transition cursor-pointer">
              <svg
                className="w-10 h-10 text-[#1DA1F2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Advanced Trade Strategies
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Scale your importing with smart sourcing and automation tools that
              help you identify reliable suppliers, compare prices instantly, and
              automate repetitive tasks like order tracking and document
              management.
            </p>
          </div>

          {/* Right Side (Button) */}
          <div className="flex-shrink-0">
            <button
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: "#1DA1F2" }}
            >
              START LESSON
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeStrategiesSection;
