import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // Replace with your custom icon if needed
import vid from "../../assets/Logistic/hero (2).mp4";

const HeroSection = () => {
  return (
    <section className="bg-white lg:py-20 py-8 px-6 lg:px-16">
      <div className=" mx-auto flex flex-col-reverse lg:flex-row items-center gap-0">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          {/* Main Heading */}
          <h1 className="font-[Outfit] text-4xl md:text-6xl font-bold leading-tight">
            Smarter Shipping, <br />
            <span className="text-[#1DA1F2]">Global Reach..</span>
          </h1>

          {/* Subheading */}
          <p className="font-[Poppins] text-gray-600 lg:mt-6 mt-2 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
            Ship smarter, faster, and safer with our global logistics partners —
            from factory to final destination.
          </p>

          {/* Buttons */}
          <div className="lg:mt-16 md:mt-12 mt-6 flex flex-col sm:flex-row items-center md:gap-12 gap-6 justify-center md:justify-start">
            <a href="tel:9893361171"
            
              className="px-6 py-4 rounded-full bg-[#1DA1F2] text-white   font-medium  hover:opacity-90 transition text-md flex items-center gap-2"
            >
              GET A SHIPPING QUOTE
            </a>
            <button
              
              className="flex items-center gap-2 font-medium text-black border-2 border-black rounded-full px-4  py-1  hover:border-black transition-all text-lg"
            >
              EXPLORE MORE
              {/* Replace with your own custom arrow icon */}
              <span className="w-[71px] h-[40px]">
                <svg
                  width="71"
                  height="40"
                  viewBox="0 0 71 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.7071 20.7071C56.0976 20.3166 56.0976 19.6834 55.7071 19.2929L49.3431 12.9289C48.9526 12.5384 48.3195 12.5384 47.9289 12.9289C47.5384 13.3195 47.5384 13.9526 47.9289 14.3431L53.5858 20L47.9289 25.6568C47.5384 26.0474 47.5384 26.6805 47.9289 27.0711C48.3195 27.4616 48.9526 27.4616 49.3431 27.0711L55.7071 20.7071ZM0 20L8.74228e-08 21L55 21L55 20L55 19L-8.74228e-08 19L0 20Z"
                    fill="#232323"
                  />
                  <circle cx="51" cy="20" r="19.5" stroke="#1DA1F2" />
                </svg>
              </span>
            </button>

          </div>
        </div>

        {/* Right Section - Video */}
        <div className="flex-1 w-full">
          <video className="w-full " autoPlay loop muted playsInline>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
