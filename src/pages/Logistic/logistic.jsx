import React, { useState } from "react";
import BgImg from "../../assets/Logistic/hero-bg.jpg";
import Img1 from "../../assets/Logistic/img1.png";
import Img2 from "../../assets/Logistic/img2.png";
import Img3 from "../../assets/Logistic/img3.png";
import Img4 from "../../assets/Logistic/img4.png";
import Img5 from "../../assets/Logistic/img5.png";
import Card1Img from "../../assets/Logistic/icon1.png";
import Card2Img from "../../assets/Logistic/icon2.png";
import Card3Img from "../../assets/Logistic/icon3.png";
import HeroSection from "./Hero";
import { Phone } from "lucide-react";
const Logistic = () => {
  return (
    <div>
      <HeroSection />

      <WhatWeOffer />

      <WhyChooseTradeFlow />

      <ContactSection />
    </div>
  );
};

export default Logistic;

const leftSectionServices = [
  {
    id: 1,
    title: "Sea Freight",
    image: Img1,
    features: [
      "Cost-effective for bulk shipments",
      "Full Container Load (FCL) & Less than Container Load (LCL) options",
      "Real-time vessel tracking",
    ],
  },
  {
    id: 2,
    title: "Door-to-Door Delivery",
    image: Img2,
    features: [
      "Integrated pick-up & last-mile delivery",
      "Customs clearance assistance",
      "Hassle-free buyer experience",
    ],
  },
  {
    id: 3,
    title: "Live Shipment Tracking",
    image: Img3,
    features: [
      "AI-powered ETA updates",
      "SMS-enabled cargo monitoring",
      "Delay alerts & proactive issue resolution",
    ],
  },
];

const rightSectionServices = [
  {
    id: 4,
    title: "Air Freight",
    image: Img4,
    features: [
      "Fastest delivery for urgent orders",
      "International cargo handling expertise",
      "Temperature-controlled solutions available",
    ],
  },
  {
    id: 5,
    title: "Warehousing & Distribution",
    image: Img5,
    features: [
      "Strategic, throughput-across major ports",
      "Inventory management tools",
      "Cross-docking services for faster turnaround",
    ],
  },
];

const WhatWeOffer = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          What We Offer
        </h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-44">
          {/* Left Section - 3 Large Cards */}
          <div className="space-y-32">
            {leftSectionServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#DDF1FD] rounded-2xl pb-6 px-6 relative"
                style={{ boxShadow: "3.55px 0px 0px 2.66px #4F95F0" }}
              >
                <div className="mb-4 ">
                  {" "}
                  {/* 👈 pushes image upward */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-[#1DA1F2] mr-2">▶</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-[#1DA1F2] hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
                  READ MORE
                </button>
              </div>
            ))}
          </div>

          {/* Right Section - Search Bar + 2 Small Cards */}
          <div className="space-y-32">
            {/* Search Bar */}
            <div className="border-2 border-gray-300 rounded-2xl p-6 bg-white shadow-lg">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Search Here
              </label>
              <div className="relative bg-[#DDF1FD] rounded-xl">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 pr-12 bg-[#DDF1FD] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] transition-all duration-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#1DA1F2] text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Section Cards */}
            {rightSectionServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#DDF1FD] rounded-2xl pb-6 px-6 relative"
                style={{ boxShadow: "3.55px 0px 0px 2.66px #4F95F0" }}
              >
                <div className="mb-3">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-1 mb-4 text-sm">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-[#1DA1F2] mr-2">▶</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-[#1DA1F2] hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseTradeFlow = () => {
  const trustFactors = [
    {
      id: 1,
      title: "Pre-vetted Partners",
      description:
        "We work with a network of trusted and reliable logistics partners.",
      image: Card1Img, // Replace with your actual image
      bgColor: "bg-[#E2F3FE]",
    },
    {
      id: 2,
      title: "Comprehensive Insurance",
      description:
        "We work with a network of trusted and reliable logistics partners.",
      image: Card2Img, // Replace with your actual image
      bgColor: "bg-[#1DA1F2]",
      isCenter: true,
    },
    {
      id: 3,
      title: "Regulatory Compliance",
      description:
        "We ensure full compliance with all international trade regulations.",
      image: Card3Img, // Replace with your actual image
      bgColor: "bg-[#E2F3FE]",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Choose TradeFlow?
        </h2>

        {/* Orange Subheading */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#1DA1F2] mb-6">
          Trust Factor
        </h3>

        {/* Description */}
        <p className="text-[#7B7B7B] text-md font-medium font-[poppins] mb-16 max-w-2xl mx-auto">
          Building confidence with compliance, credibility, and consistency
        </p>

        {/* Trust Factor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustFactors.map((factor) => (
            <div
              key={factor.id}
              className={`${
                factor.bgColor
              } rounded-2xl p-4 text-left relative ${
                factor.isCenter ? "text-white" : "text-gray-800"
              }`}
            >
              {/* Image in top-left corner */}
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-lg overflow-hidden p-1`}>
                  <img
                    src={factor.image}
                    alt={factor.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl font-medium mb-4">{factor.title}</h4>

              {/* Description */}
              <p
                className={`mb-6 lg:text-md md:text-sm text-md leading-relaxed ${
                  factor.isCenter ? "text-white/90" : "text-gray-600"
                }`}
              >
                {factor.description}
              </p>

              {/* Read More Link */}
              <div className="flex items-center">
                <span
                  className={`text-md font-medium ${
                    factor.isCenter ? "text-white" : "text-black"
                  } mr-2`}
                >
                  Read More
                </span>
                <svg
                  className={`w-4 h-4 ${
                    factor.isCenter ? "text-white" : "text-black"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Orange Button with Play Icon */}
          <button className="bg-[#1DA1F2] hover:bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold text-lg transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            GET A SHIPPING QUOTE
          </button>

          {/* White Border Button */}
          <button className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full flex items-center gap-3 font-semibold text-lg transition-all duration-300">
            EXPLORE MORE
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
          {/* Left Side - Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Get In Touch
            </h2>

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 sm:py-4 text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 sm:py-4 text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message here.."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 sm:py-4 text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none resize-none transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center lg:justify-start pt-4 sm:pt-8">
                <button
                  onClick={handleSubmit}
                  className="flex items-center px-6 sm:px-8 py-3 sm:py-4 text-white font-medium text-sm sm:text-base rounded-full hover:opacity-90 transition-opacity duration-300"
                  style={{ backgroundColor: "#1DA1F2" }}
                >
                  SEND NOW
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Contact With Us
              <br className="hidden lg:block" /> Today
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              A creative agency speciali providing innovative and unique
              solutions to businesses build
            </p>

            {/* Map Container */}
            <div className="w-full h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <div className="text-gray-600 text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <p className="text-sm">Map Location</p>
                </div>
              </div>

              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center animate-pulse">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full bg-white md:py-20 py-10   px-4 b">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-['Outfit']">
              Ready to Expand Your Global Trade?
            </h2>

            {/* Subheading */}
            <p className="mt-3 text-gray-500 text-sm sm:text-base md:text-lg font-['Poppins']">
              Unlock Markets, Build Trust, and Scale Without Borders
            </p>

            <div className="mt-6 flex justify-center">
              <a href="tel:9893361171"
               className="flex items-center gap-2 bg-[#1DA1F2] text-white px-6 py-3 rounded-full font-light font-['Poppins'] hover:opacity-90 transition">
                <Phone size={18} /> BOOK CALL
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
