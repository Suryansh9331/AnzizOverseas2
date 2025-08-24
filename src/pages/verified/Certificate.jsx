import React from "react";

const ComplianceCertificates = () => {
  const certificates = [
    { id: 1, name: "ISO 9001" },
    { id: 2, name: "Fair Trade Certification" },
    { id: 3, name: "Organic Certification" },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-20 font-[Outfit]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-lg md:text-4xl font-semibold text-[#0D171C] mb-4">
          Compliance Certificates
        </h2>

        <div className="bg-[#F7FAFC] p-4 md:p-6 rounded-md">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`flex items-center justify-between py-3 ${
                index !== certificates.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <span className="text-[#0D171C] text-sm font-semibold md:text-base">
                {cert.name}
              </span>

              <button className="bg-[#E44F39] text-white text-xs md:text-sm px-5 py-1.5 rounded-full font-[Outfit] hover:opacity-90 transition">
                VIEW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceCertificates;
