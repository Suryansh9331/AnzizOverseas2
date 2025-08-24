import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = {
  Documentation: [
    {
      title: "Supplier Discovery",
      description:
        "Easily search and filter suppliers based on your specific requirements and industry.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=600",
    },
    {
      title: "Product Catalog",
      description:
        "Browse a vast catalog of products from verified suppliers across various categories.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=600",
    },
    {
      title: "Direct Communication",
      description:
        "Communicate directly with suppliers to negotiate terms and build relationships.",
      img: "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=600",
    },
    {
      title: "Customs Clearance",
      description:
        "Simplify customs clearance with our expert guidance and support.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600",
    },
    {
      title: "Shipping Management",
      description:
        "Manage your shipments efficiently with our integrated tracking and logistics tools.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=600",
    },
    {
      title: "Documentation Support",
      description:
        "Ensure compliance with trade regulations through our comprehensive documentation services.",
      img: "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=600",
    },
  ],
  Logistics: [
    {
      title: "Warehouse Solutions",
      description: "Organize and manage global warehouses with efficiency.",
      img: "https://images.unsplash.com/photo-1581091215360-7a61b5a5c4c8?q=80&w=600",
    },
    {
      title: "Freight Tracking",
      description: "Track international freight shipments in real-time.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=600",
    },
  ],
  Frauds: [
    {
      title: "Fraud Detection",
      description: "Protect your business from supplier fraud with AI checks.",
      img: "https://images.unsplash.com/photo-1581090700227-4c4d9d3c3f3f?q=80&w=600",
    },
  ],
  Cost: [
    {
      title: "Cost Calculator",
      description: "Estimate total landed cost including duties and taxes.",
      img: "https://images.unsplash.com/photo-1567427013953-7b8a50d4eeaa?q=80&w=600",
    },
  ],
};

export default function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState("Documentation");

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      {/* Constrain the inner content so the category bar won't fill entire screen */}
      <div className=" mx-auto">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold font-outfit mb-6 text-center lg:text-left">
          Smart Tools Built for Global Buyers
        </h2>

        {/* Category box: inline-flex so it sizes to content and wraps when needed */}
        <div className="inline-flex flex-wrap items-center gap-2 bg-[#FDE0C0] rounded-lg px-3 py-2 mb-8 mx-auto lg:mx-0">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-2 py-2 rounded-md font-poppins transition text-sm md:text-base whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#E44F39] text-white font-medium shadow-sm"
                  : "bg-transparent text-black hover:text-[#E44F39]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Navigation Arrows (layout-preserving) */}
        <div className="flex justify-center lg:justify-end items-center mb-6 gap-3">
          <button
            className="p-2 border rounded-full hover:bg-gray-100"
            aria-label="previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="p-2 border rounded-full hover:bg-gray-100"
            aria-label="next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Responsive card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeCategory].map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl overflow-hidden  hover:shadow-lg transition flex flex-col"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 md:h-54 lg:h-72 object-cover rounded-xl"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-outfit text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="font-poppins text-sm text-gray-600 mb-4 flex-grow">
                  {item.description}
                </p>

                {/* Restored button */}
                <div className="mt-2">
                  <button
                    className="bg-[#E44F39] text-white px-4 py-2 rounded-full font-poppins text-sm inline-flex items-center gap-2"
                    aria-label={`Use ${item.title}`}
                  >
                    <span>USE TOOL</span>
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
