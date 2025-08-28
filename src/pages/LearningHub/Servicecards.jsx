import React from "react";
import Img2 from "../../assets/Learninghub/image2.png"; 
import Img3 from "../../assets/Learninghub/image3.png"; 
import Img4 from "../../assets/Learninghub/image4.png"; 
import Img5 from "../../assets/Learninghub/image5.png"; 




const ServicesGridSection = () => {
  const services = [
    {
      id: 1,
      image:
        Img2,
      title: "Avoiding Supplier Fraud",
      description:
        "Learn how to verify suppliers and protect payments with step-by-step checks, trusted verification tools, and secure payment methods.",
      button: "START LESSON",
      alt: "Supplier fraud prevention image",
    },
    {
      id: 2,
      image:
        Img3,
      title: "Customs & Compliance Made Easy",
      description:
        "Understand HS codes, required documents, and clearance rules to avoid delays, reduce costs, and keep your shipments moving smoothly.",
      button: "WATCH NOW",
      alt: "Customs compliance image",
    },
    {
      id: 3,
      image:
        Img4,
      title: "Cutting Logistics Costs",
      description:
        "Practical tips to save on shipping without compromising speed, helping you cut costs while still delivering on time.",
      button: "START LESSON",
      alt: "Logistics cost saving image",
    },
    {
      id: 4,
      image:
        Img5,
      title: "Winning with Negotiation",
      description:
        "Get better deals and payment terms from suppliers to improve your cash flow and reduce overall costs.",
      button: "WATCH NOW",
      alt: "Business negotiation image",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 font-[Outfit]">
      <div className="container max-w-6xl mx-auto px-6 lg:px-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col space-y-4"
            >
              {/* Image Container with corner border */}
              <div className="relative mb-2 rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                />

                {/* Orange corner lines */}
                <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#1DA1F2] rounded-tl-md"></span>
                <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#1DA1F2] rounded-tr-md"></span>
                <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#1DA1F2] rounded-bl-md"></span>
                <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#1DA1F2] rounded-br-md"></span>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <div>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: "#1DA1F2" }}
                >
                  {service.button}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
