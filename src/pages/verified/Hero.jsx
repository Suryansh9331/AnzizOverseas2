import React from "react";
import BgImg from "../../assets/verefied/bg3.png";
import ReadMoreArrowImg from "../../assets/verefied/read-more-arrow.png";

export default function Hero() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat  relative flex items-center justify-center px-4 sm:px-6 lg:px-8 " 
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="max-w-7xl w-full flex items-center justify-between">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold mb-6">
            <div className="text-white mb-3">Verified Exporter</div>
            <div className="text-[#1DA1F2]">Showroom</div>
          </h1>

          <p className="text-white text-md mb-4  md:text-lg  lg:text-lg mb-10 leading-relaxed lg:max-w-lg md:max-w-md max-w-xs  ">
            Browse trusted, pre-verified exporters from around the globe — ready
            to ship quality products directly to you.
          </p>

          <button
            className=" bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 flex items-center gap-3 group"
            onClick={() =>
              window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            <span className="text-lg font-medium">READ MORE</span>
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
                    fill="#ffffff"
                  />
                  <circle cx="51" cy="20" r="19.5" stroke="#1DA1F2" />
                </svg>
              </span>
          </button>
        </div>

        <div className="hidden lg:block flex-1"></div>
      </div>
    </div>
  );
}
