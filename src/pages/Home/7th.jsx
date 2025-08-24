import React from "react";
import brandBanner from "../../assets/images/logosbanner.png"; // replace with your image path

export default function BrandSection() {
  return (
    <section className="w-full bg-white flex items-center justify-center py-16 px-4">
      <img
        src={brandBanner}
        alt="Popular Brands"
        className="max-w-full h-auto sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%]"
      />
    </section>
  );
}
