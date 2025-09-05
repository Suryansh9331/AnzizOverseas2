import { useState } from "react";

import ContactBtnImg from "../../assets/tools/contact-btn.png";


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
    <div className="py-12 sm:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            {/* Left Dotted Line */}
            <div className="flex-1 max-w-8 sm:max-w-16">
              <div
                className="h-px w-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(to right, #1DA1F2 0, #1DA1F2 4px, transparent 4px, transparent 8px)`,
                }}
              ></div>
            </div>

            {/* Text */}
            <div
              className="px-4 sm:px-6 text-xs sm:text-sm font-medium tracking-wider uppercase"
              style={{ color: "#1DA1F2" }}
            >
              ASK QUESTION
            </div>

            {/* Right Dotted Line */}
            <div className="flex-1 max-w-8 sm:max-w-16">
              <div
                className="h-px w-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(to right, #1DA1F2 0, #1DA1F2 4px, transparent 4px, transparent 8px)`,
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
                    style={{ borderColor: "#1DA1F2" }}
                  >
                    {activeIndex === index ? (
                      <svg
                        className="w-4 h-4"
                        style={{ color: "#1DA1F2" }}
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
                        style={{ color: "#1DA1F2" }}
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
              style={{ backgroundColor: "#1DA1F2" }}
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
            <a href="mailto:infoanjisoverseas@gmail.com"
             className="flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors group text-sm sm:text-base">
              CONTACT US
             <span className=" ml-4 w-[71px] h-[40px]">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQSection;