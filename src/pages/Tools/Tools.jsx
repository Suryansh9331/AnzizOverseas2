import React, { useEffect, useState } from "react";
import BgImg from "../../assets/tools/tools-hero-bg.png";
import arrowImg from "../../assets/tools/arrow.png";
import Sec2Img from "../../assets/tools/sec2.png";
import Grid1Img from "../../assets/tools/grid-1.png";
import Grid2Img from "../../assets/tools/grid-2.png";
import Grid3Img from "../../assets/tools/grid-3.png";
import Grid4Img from "../../assets/tools/grid-4.png";
import Grid5Img from "../../assets/tools/grid-5.png";
import UseToolBtnImg from "../../assets/tools/use-tool-btn.png";
import ContactBtnImg from "../../assets/tools/contact-btn.png";

const cardsData = [
  {
    id: 1,
    title: "Duty & Tax Calculator",
    description:
      "Instantly calculate import duties, taxes, and fees before you ship.",
    leftIcon: Grid1Img,
    rightIcon: UseToolBtnImg,
    colSpan: 1,
  },
  {
    id: 2,
    title: "HS Code Finder",
    description:
      "Find the correct customs code to avoid clearance delays and penalties.",
    leftIcon: Grid2Img,
    rightIcon: UseToolBtnImg,
    colSpan: 1,
  },
  {
    id: 3,
    title: "Freight Cost Estimator",
    description:
      "Get accurate shipping quotes across multiple carriers in seconds.",
    leftIcon: Grid3Img,
    rightIcon: UseToolBtnImg,
    colSpan: 1,
  },
  {
    id: 4,
    title: "Supplier Verification Checker",
    description:
      "Ensure every supplier you work with is legitimate by instantly verifying their business licenses, certifications, and past trading records. Our tool provides a detailed background check, helping you confirm legal status and industry compliance before making any commitments.",
    leftIcon: Grid4Img,
    rightIcon: UseToolBtnImg,
    colSpan: 2,
  },
  {
    id: 5,
    title: "Route Planner",
    description:
      "Optimize your cargo routes to save time and reduce transport risks.",
    leftIcon: Grid5Img,
    rightIcon: UseToolBtnImg,
    colSpan: 1,
  },
  {
    id: 6,
    title: "Trade Document Generator",
    description:
      "Create compliant invoices, packing lists, and certificates in minutes.",
    leftIcon: Grid1Img,
    rightIcon: UseToolBtnImg,
    colSpan: 1,
  },
  {
    id: 7,
    title: "Fraud Risk Scanner",
    description: "Check suppliers and transactions for fraud or scam signals.",
    leftIcon: Grid2Img,
    rightIcon: UseToolBtnImg,
    colSpan: 1,
  },
  {
    id: 8,
    title: "Hidden Cost Alert",
    description:
      "Spot storage fees, handling charges, and other unexpected costs early.",
    leftIcon: Grid3Img,
    rightIcon: UseToolBtnImg,
    colSpan: 1,
  },
];

const Tools = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            {/* Main Heading */}
            <h1 className="text-white mb-6 sm:mb-8">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-2 sm:mb-4">
                SMART TOOL BUILT FOR
              </div>

              {/* Second Line with Arrow and GLOBAL */}
              <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 sm:gap-4 mb-2 sm:mb-4">
                <img
                  src={arrowImg}
                  alt="Arrow"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36"
                />
                <span
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-transparent"
                  style={{
                    WebkitTextStroke: "1px white",
                    textStroke: "1px white",
                  }}
                >
                  GLOBAL
                </span>
              </div>

              {/* Third Line - BUYERS */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
                BUYERS
              </div>
            </h1>

            {/* Description */}
            <p className="text-white text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-lg mx-auto sm:mx-0 leading-relaxed">
              Everything you need to trade confidently — from cost calculators
              to fraud protection.
            </p>

            {/* Play Button */}
            <button className="flex items-center text-white px-4 sm:px-6 py-3 rounded-full transition-colors duration-300 group gap-2 sm:gap-3 mx-auto sm:mx-0">
              <div className="rounded-full flex items-center justify-center bg-orange-500 hover:bg-orange-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-base sm:text-lg font-medium">Play Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Explore by category */}
      <div className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left text-gray-800 mb-6 sm:mb-8">
            Explore Tools by Category
          </h2>

          {/* Category Tabs Container */}
          <div className="overflow-x-auto">
            <div
              className="rounded-xl p-3 px-6 sm:px-12 flex items-center gap-2 sm:gap-4 min-w-max sm:max-w-2xl"
              style={{ backgroundColor: "#FDE0C0" }}
            >
              {/* Active Tab - Documentation */}
              <button
                className="px-4 sm:px-8 py-3 rounded-xl text-white font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap"
                style={{ backgroundColor: "#E44F39" }}
              >
                Documentation
              </button>

              {/* Inactive Tabs */}
              <button className="px-3 sm:px-6 py-3 text-gray-700 font-medium text-sm sm:text-base flex items-center hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                Logistics
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <button className="px-3 sm:px-6 py-3 text-gray-700 font-medium text-sm sm:text-base flex items-center hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                Frauds
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <button className="px-3 sm:px-6 py-3 text-gray-700 font-medium text-sm sm:text-base flex items-center hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                Cost
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Solutions */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
            {/* Left Section - Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                Advanced Solutions for
                <br className="hidden sm:block" />
                Confident Global Trade
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left">
                Trade without guesswork. From calculating your true import costs
                to verifying suppliers and spotting fraud risks, our smart tools
                help you ship faster, safer, and with full confidence.
              </p>

              {/* Progress Bar Section */}
              <div className="space-y-4">
                <div className="text-lg font-semibold text-gray-900 text-center lg:text-left">
                  93.3% Work Success
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{ backgroundColor: "#E44F39", width: "93.3%" }}
                  ></div>
                </div>
              </div>

              {/* Call to Expert Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  className="flex items-center px-6 sm:px-8 py-3 sm:py-4 text-white font-medium text-sm sm:text-base rounded-full hover:opacity-90 transition-opacity duration-300"
                  style={{ backgroundColor: "#E44F39" }}
                >
                  CALL TO EXPERT
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <img
                src={Sec2Img}
                alt="Advanced Solutions"
                className="rounded-2xl max-w-full h-auto w-full max-w-md lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Small Orange Text with Dotted Lines */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            {/* Left Dotted Line */}
            <div className="flex-1 max-w-8 sm:max-w-16">
              <div
                className="h-px w-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(to right, #E44F39 0, #E44F39 4px, transparent 4px, transparent 8px)`,
                }}
              ></div>
            </div>

            {/* Text */}
            <div
              className="px-4 sm:px-6 text-xs sm:text-sm font-medium tracking-wider uppercase"
              style={{ color: "#E44F39" }}
            >
              SMARTER TRADING STARTS HERE
            </div>

            {/* Right Dotted Line */}
            <div className="flex-1 max-w-8 sm:max-w-16">
              <div
                className="h-px w-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(to right, #E44F39 0, #E44F39 4px, transparent 4px, transparent 8px)`,
                }}
              ></div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-900">Trade Smarter with These</span>
            <br />
            <span style={{ color: "#E44F39" }}>Essential Tools</span>
          </h2>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Grid Container - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className={`${
                  card.colSpan === 2
                    ? "md:col-span-2 lg:col-span-2"
                    : "col-span-1"
                } bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow min-h-[280px] sm:min-h-[320px] flex flex-col`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed flex-grow text-sm sm:text-base">
                  {card.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <img
                    src={card.leftIcon}
                    alt={`${card.title} left icon`}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
                  />
                  <button className="flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors group">
                    <img
                      src={card.rightIcon}
                      alt={`${card.title} right icon`}
                      className="w-24 sm:w-32 h-6 sm:h-8 rounded-lg ml-4"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FAQSection />
      <ContactSection />
    </>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      id: 1,
      question: "What types of businesses do you support?",
      answer:
        "Car service is essential for maintaining the performance and maintaining the performance and longevity Car service is essential for maintaining",
    },
    {
      id: 2,
      question: "What are the signs of brake wear?",
      answer:
        "Common signs include squeaking or grinding noises, vibration when braking, longer stopping distances, and the brake pedal feeling soft or spongy.",
    },
    {
      id: 3,
      question: "Can regular maintenance prevent major repairs?",
      answer:
        "Yes, regular maintenance can significantly reduce the likelihood of major repairs by catching issues early and keeping your vehicle systems running efficiently.",
    },
    {
      id: 4,
      question: "Are scheduled service intervals important for my car?",
      answer:
        "Absolutely. Following scheduled service intervals helps maintain warranty coverage, ensures optimal performance, and prevents costly breakdowns.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            {/* Left Dotted Line */}
            <div className="flex-1 max-w-8 sm:max-w-16">
              <div
                className="h-px w-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(to right, #E44F39 0, #E44F39 4px, transparent 4px, transparent 8px)`,
                }}
              ></div>
            </div>

            {/* Text */}
            <div
              className="px-4 sm:px-6 text-xs sm:text-sm font-medium tracking-wider uppercase"
              style={{ color: "#E44F39" }}
            >
              ASK QUESTION
            </div>

            {/* Right Dotted Line */}
            <div className="flex-1 max-w-8 sm:max-w-16">
              <div
                className="h-px w-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(to right, #E44F39 0, #E44F39 4px, transparent 4px, transparent 8px)`,
                }}
              ></div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Got Questions? We've
            <br className="hidden sm:block" />
            Got Answers
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Left Side - FAQ */}
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-gray-200 pb-4 sm:pb-6"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-start justify-between w-full text-left gap-4"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                    <span className="text-gray-600 font-medium text-base sm:text-lg flex-shrink-0 mt-1">
                      0{faq.id}.
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ borderColor: "#E44F39" }}
                  >
                    {activeIndex === index ? (
                      <svg
                        className="w-4 h-4"
                        style={{ color: "#E44F39" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        style={{ color: "#E44F39" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {activeIndex === index && (
                  <div className="mt-4 pl-6 sm:pl-8">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Brand Info */}
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
            {/* Circular Logo */}
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#E44F39" }}
            >
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>

            {/* Brand Name */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Brand Bliss Creations
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-md text-sm sm:text-base">
              A creative agency speciali providing innovative and unique
              solutions to businesses build
            </p>

            {/* Contact Us Button */}
            <button className="flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors group text-sm sm:text-base">
              CONTACT US
              <img
                src={ContactBtnImg}
                alt="Contact icon"
                className="w-12 sm:w-16 h-8 sm:h-10 rounded-lg ml-4"
              />
            </button>
          </div>
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
    // Handle form submission here
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
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

              {/* Message Textarea */}
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
                  style={{ backgroundColor: "#E44F39" }}
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

          {/* Right Side - Company Info */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Contact With Us
              <br className="hidden sm:block" />
              Today
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              A creative agency speciali providing innovative and unique
              solutions to businesses build
            </p>

            {/* Map Container */}
            <div className="w-full h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
              {/* Map Image - Using a placeholder since we can't use unsplash */}
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

        {/* Bottom CTA Section */}
        <div className="text-center space-y-4 sm:space-y-6 pt-12 sm:pt-16 border-t border-gray-200">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Ready to Expand Your Global Trade?
          </h3>

          <p className="text-gray-600 text-base sm:text-lg">
            Unlock Markets, Build Trust, and Scale Without Borders
          </p>

          <button
            className="flex items-center justify-center mx-auto px-6 sm:px-8 py-3 sm:py-4 text-white font-medium text-sm sm:text-base rounded-full hover:opacity-90 transition-opacity duration-300"
            style={{ backgroundColor: "#E44F39" }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            BOOK CALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
