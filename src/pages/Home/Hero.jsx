import React from "react";
import img1 from "../../assets/images/Heroimg1.png";
import img2 from "../../assets/images/Heroimg2.png";

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Circle SVG */}
      <div className="absolute right-0 bottom-0 w-[700px] max-w-[85%] pointer-events-none select-none">
        <svg
          width="1056"
          height="801"
          viewBox="0 0 1056 801"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <g clipPath="url(#clip0_376_1661)">
            <ellipse
              opacity="0.1"
              cx="577.059"
              cy="579.676"
              rx="577.059"
              ry="579.676"
              fill="#E44F39"
            />
          </g>
          <defs>
            <clipPath id="clip0_376_1661">
              <path
                d="M0 0H1056V722.489C1056 765.849 1020.85 801 977.489 801H0V0Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Hero Container */}
      <div className="relative z-10 mx-auto px-3 md:py-0 py-16   lg:px-16 md:pb-16 pb-6   ">
        <div className="bg-[#FFF5E9]/60 rounded-2xl shadow-sm px-6 lg:px-10 py-10   md:pt-40 flex flex-col gap-8">
          {/* Heading */}
          <h1 className="font-outfit text-3xl md:text-4xl lg:text-3xl xl:text-[52px] font-bold leading-tight text-black max-w-4xl">
            SOLVE ANY GLOBE TRADE PROBLEMS –{" "}
            <span className="text-[#E44F39]">INSTANTLY.</span>
          </h1>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* First Image + Button */}
            <div className="flex flex-col gap-4 w-full lg:w-[45%]">
              <img
                src={img1}
                alt="Trade Problem"
                className="w-full rounded-xl object-cover"
              />
              <button className="flex items-center gap-2 text-sm font-semibold text-black hover:opacity-80 transition">
                GET STARTED FREE
                <span className="w-16 h-10 flex items-center justify-center">
                  <svg
                    width="94"
                    height="53"
                    viewBox="0 0 94 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-18 h-18"
                  >
                    <path
                      d="M73.522 27.0957C74.033 26.5847 74.033 25.7562 73.522 25.2452L65.1946 16.9178C64.6836 16.4068 63.8551 16.4068 63.3441 16.9178C62.833 17.4288 62.833 18.2573 63.3441 18.7683L70.7462 26.1705L63.3441 33.5726C62.833 34.0836 62.833 34.9121 63.3441 35.4231C63.8551 35.9341 64.6836 35.9341 65.1946 35.4231L73.522 27.0957ZM0.62793 26.1705L0.62793 27.479L72.5967 27.479L72.5967 26.1705L72.5967 24.8619L0.62793 24.8619L0.62793 26.1705Z"
                      fill="#232323"
                    />
                    <circle
                      cx="67.3626"
                      cy="26.1705"
                      r="25.5162"
                      stroke="#E44F39"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Second Image with Description + Button */}
            <div className="flex flex-col w-full lg:w-1/2">
              {/* Description above second image */}
              <p className="text-[#403F3F]  font-[poppins] text-base lg:text-md mb-4 max-w-md">
                Trusted by buyers worldwide to fix shipping delays, customs
                issues, fraud risks, and more.
              </p>

              {/* Image wrapper with button in corner */}
              <div className="relative">
                <img
                  src={img2}
                  alt="Trade Problem"
                  className="w-full rounded-xl object-cover"
                />

                <button
                  className="absolute -bottom-1  -right-2 bg-[#E44F39] hover:bg-[#c63b2a] transition text-white text-xs font-semibold px-4 py-3 rounded-full shadow-md"
                  onClick={() =>
                    window.scrollBy({
                      top: window.innerHeight,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  EXPLORE HOW IT WORKS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
