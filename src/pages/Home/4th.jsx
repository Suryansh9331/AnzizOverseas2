import React from "react";
import { MapPin, FileText } from "lucide-react"; // icons
import Img6 from "../../assets/Home/c1.png"; 
import Img7 from "../../assets/Home/c2.png"; 
import Img8 from "../../assets/Home/c3.png"; 



// Sample data with internet images
const courses = [
  {
    id: 1,
    title: "Import Documents Made Easy",
    img: Img6,
    tags: [
      { type: "location", label: "Asia" },
      { type: "category", label: "Supplier Sources" },
    ],
  },
  {
    id: 2,
    title: "Dropshipping 101 – USA Market Entry",
    img: Img7,
    tags: [
      { type: "location", label: "USA" },
      { type: "category", label: "Documentation" },
    ],
  },
  {
    id: 3,
    title: "Negotiating With Suppliers Like a Pro",
    img: Img8,
    tags: [
      { type: "location", label: "UK" },
      { type: "category", label: "Supplier Sources" },
    ],
  },
];

export default function LearningSection() {
  return (
    <div className="bg-[#DDF2FF] min-h-screen px-4 sm:px-6 lg:px-12 py-12 font-outfit">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#232323]">
          Learn to Trade Smarter — Not Harder
        </h2>
        <p className="mt-2 text-[#232323] text-base sm:text-lg">
          Free for all buyers, no registration needed
        </p>
      </div>

      {/* Category Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 bg-[#B9E2FB] rounded-xl px-6 py-3 w-fit mx-auto mb-10">
        <button className="px-6 py-2 rounded-lg bg-[#1DA1F2] text-white font-medium">
          View All
        </button>
        <button className="px-4 py-2 rounded-lg text-[#232323] font-medium hover:bg-white transition">
          Region
        </button>
        <button className="px-4 py-2 rounded-lg text-[#232323] font-medium hover:bg-white transition">
          Topic
        </button>
        <button className="px-4 py-2 rounded-lg text-[#232323] font-medium hover:bg-white transition">
          Language
        </button>
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col">
            {/* Image with play button */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-66 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#033651] w-12 h-12 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Text content */}
            <h3 className="font-[outfit] font-semibold text-3xl text-gray-900 mt-4 mb-3">
              {course.title}
            </h3>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-4">
              {course.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 px-3 py-1 bg-transparent border border-gray-300 rounded-full font-medium text-sm text-gray-500"
                >
                  {tag.type === "location" ? (
                    <MapPin className="w-4 h-4 text-[#232323]" />
                  ) : (
                    <FileText className="w-4 h-4 text-[#232323]" />
                  )}
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Explore button */}
            <button className="flex items-center gap-2 text-sm font-semibold text-[#232323] group w-fit">
              EXPLORE COURSES
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
        ))}
      </div>
    </div>
  );
}
