import React from "react";
import BgImg from "../../assets/Learninghub/herobg.png";
export default function HeroSection() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-snug mx-auto text-center">
          Learn to Trade Smarter — <br />
          Not{" "}
          <span className="text-[#1DA1F2] relative inline-block">
            Harder.
            {/* Dashed underline */}
            <span className="absolute -bottom-3 left-0 w-full h-[3px] border-b-2 border-dashed border-[#1DA1F2]" />
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-center">
          Master the skills, strategies, and tools you need to succeed in global
          trade — completely free.
        </p>

        {/* Read More Button */}
        <div className="mt-10 flex justify-center">
          <button
            className="flex items-center gap-2 border border-white rounded-full px-8 py-3 hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all"
            onClick={() =>
              window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            <span className="text-base font-medium text-white">READ MORE</span>
            <svg
              width="26"
              height="24"
              viewBox="0 0 50 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.3536 15.8155C38.5488 15.6202 38.5488 15.3037 38.3536 15.1084L35.1716 11.9264C34.9763 11.7312 34.6597 11.7312 34.4645 11.9264C34.2692 12.1217 34.2692 12.4383 34.4645 12.6335L37.2929 15.4619L34.4645 18.2904C34.2692 18.4856 34.2692 18.8022 34.4645 18.9975C34.6597 19.1927 34.9763 19.1927 35.1716 18.9975L38.3536 15.8155ZM0 15.4619L-4.37114e-08 15.9619L38 15.9619L38 15.4619L38 14.9619L4.37114e-08 14.9619L0 15.4619Z"
                fill="white"
              />
              <circle cx="35" cy="15.4619" r="14.5" stroke="#1DA1F2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    // <section className="w-full bg-[#232323] min-h-screen font-[Outfit] text-white px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">

    //   <div className="absolute bottom-8 right-10 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
    //     <img
    //       src={chartImg}
    //       alt="Chart Illustration"
    //       className="w-full object-contain"
    //     />

    //     {/* Student Counter */}
    //     <div className="absolute -bottom-8 right-2 bg-white text-[#232323] rounded-xl shadow-lg px-5 py-3 text-sm font-semibold flex items-center gap-2">
    //       <span className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white text-xs">
    //         👤
    //       </span>
    //       <span className="text-[#1DA1F2] font-normal">
    //         <span className="block text-lg text-[#1DA1F2] font-normal">150k</span>
    //         Active Students
    //       </span>
    //     </div>
    //   </div>

    //   {/* Decorative Shapes */}
    //   <div className="absolute top-10 left-10 w-3 h-3 rounded-full border border-[#1DA1F2]"></div>
    //   <div className="absolute top-20 right-16 w-4 h-12 border border-[#1DA1F2] rotate-12"></div>
    //   <div className="absolute bottom-40 left-16 w-8 h-8 border-2 border-[#1DA1F2] rounded-full"></div>
    // </section>
  );
}
