import React from "react";
import BgImg from "../../assets/verefied/bg.png";
import ReadMoreArrowImg from "../../assets/verefied/read-more-arrow.png";

export default function Hero() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="max-w-7xl w-full flex items-center justify-between">
        <div className="max-w-3xl">
          <h1 className="text-6xl lg:text-8xl font-bold mb-6">
            <div className="text-white mb-3">Verified Exporter</div>
            <div className="text-[#1DA1F2]">Showroom</div>
          </h1>

          <p className="text-white text-xl lg:text-2xl mb-10 leading-relaxed max-w-xl">
            Browse trusted, pre-verified exporters from around the globe — ready
            to ship quality products directly to you.
          </p>

          <button
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 flex items-center gap-3 group"
            onClick={() =>
              window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            <span className="text-lg font-medium">READ MORE</span>
            <img
              src={ReadMoreArrowImg}
              alt="arrow"
              className="w-10 h-6 group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        <div className="hidden lg:block flex-1"></div>
      </div>
    </div>
  );
}
