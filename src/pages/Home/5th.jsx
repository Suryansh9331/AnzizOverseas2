import React, { useState } from "react";
import { BookOpen, MessageSquare, Phone } from "lucide-react";
import img1  from "../../assets/images/c1.png"
import img2  from "../../assets/images/c2.png"
import img3  from "../../assets/images/c3.png"
import img4  from "../../assets/images/c4.png"
import img5  from "../../assets/images/c5.png"
import img6  from "../../assets/images/c6.png"
import img7  from "../../assets/images/c7.png"
const suppliers = [
  {
    id: 1,
    name: "Global Manufacturing Inc.",
    country: "China",
    product: "Machinery",
    badge: "ISO 9001 Certified",
    image: img1,
  },
  {
    id: 2,
    name: "Tech Solutions Ltd.",
    country: "India",
    product: "Electronics",
    badge: "CE, RoHS Compliant",
    image: img2,
  },
  {
    id: 3,
    name: "AgriCorp Exports",
    country: "Brazil",
    product: "Agriculture",
    badge: "Organic Certified",
    image: img3,
  },
  {
    id: 4,
    name: "Textile Masters Co.",
    country: "Turkey",
    product: "Textiles",
    badge: "GOTS Certified",
    image: img4,
  },
  {
    id: 5,
    name: "Eco-Packaging Group",
    country: "Vietnam",
    product: "Packaging",
    badge: "FSC Certified",
    image: img5,
  },
  {
    id: 6,
    name: "Food & Beverage Traders",
    country: "Spain",
    product: "Food",
    badge: "HACCP Certified",
    image: img6,
  },
];

const SupplierSection = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState("All");
  const [selectedBadge, setSelectedBadge] = useState("All");

  const filteredSuppliers = suppliers.filter((s) => {
    return (
      (selectedCountry === "All" || s.country === selectedCountry) &&
      (selectedProduct === "All" || s.product === selectedProduct) &&
      (selectedBadge === "All" || s.badge.includes(selectedBadge))
    );
  });

  return (
    <section className="px-6 lg:px-16 md:px-12 py-16 lg:py-20 min-h-screen  ">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-outfit font-semibold mb-6 text-gray-900">
        Meet Verified Suppliers You Can Trust
      </h2>

      {/* Filter Box */}
      <div className="inline-flex flex-wrap gap-4 bg-[#FDE0C0] p-3 rounded-md mb-10">
        {/* Country */}
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="font-semibold px-4 py-2 rounded font-poppins text-sm"
        >
          <option value="All">Country</option>
          <option value="China">China</option>
          <option value="India">India</option>
          <option value="Brazil">Brazil</option>
          <option value="Turkey">Turkey</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Spain">Spain</option>
        </select>

        {/* Product */}
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="font-semibold px-4 py-2 rounded font-poppins text-sm"
        >
          <option value="All">Product</option>
          <option value="Machinery">Machinery</option>
          <option value="Electronics">Electronics</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Textiles">Textiles</option>
          <option value="Packaging">Packaging</option>
          <option value="Food">Food</option>
        </select>

        {/* Verified Badge */}
        <select
          value={selectedBadge}
          onChange={(e) => setSelectedBadge(e.target.value)}
          className="font-semibold px-4 py-2 rounded font-poppins text-sm"
        >
          <option value="All">Verified Badge</option>
          <option value="ISO">ISO 9001 Certified</option>
          <option value="CE">CE, RoHS Compliant</option>
          <option value="Organic">Organic Certified</option>
          <option value="GOTS">GOTS Certified</option>
          <option value="FSC">FSC Certified</option>
          <option value="HACCP">HACCP Certified</option>
        </select>
      </div>

      {/* Supplier Grid */}
      <div className="grid py-12 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {filteredSuppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="font-poppins text-left"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={supplier.image}
                alt={supplier.name}
                className="w-full h-44 object-cover rounded-md"
              />
            </div>
            <h3 className="font-semibold mt-3 text-black">{supplier.name}</h3>
            <p className="text-[#A16E45]">{supplier.country}</p>
            <p className="text-gray-600 text-sm">{supplier.badge}</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-8 mt-14   mb-10 justify-center">
        <button className="flex uppercase items-center gap-2 px-5 py-2 rounded-full text-white bg-[#665957] font-poppins text-sm">
          <BookOpen size={16} /> Request Sample
        </button>
        <button className="flex uppercase items-center gap-2 px-5 py-2 rounded-full text-white bg-black font-poppins text-sm">
          <MessageSquare size={16} /> Message Supplier
        </button>
        <button className="flex uppercase items-center gap-2 px-5 py-2 rounded-full text-white bg-[#E44F39] font-poppins text-sm">
          <Phone size={16} /> Book Call
        </button>
      </div>
    </section>
  );
};

export default SupplierSection;
