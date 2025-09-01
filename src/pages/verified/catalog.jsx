import React from "react";
import Img5 from "../../assets/verefied/catalog1.png";
import Img6 from "../../assets/verefied/catalog2.png";
import Img7 from "../../assets/verefied/catalog3.png";

const ProductCatalogs = () => {
  const catalogs = [
    {
      image:
        Img5,
      title: "Textiles",
      description: "High-quality cotton, silk, and linen",
    },
    {
      image:
        Img6,
      title: "Handicrafts",
      description: "Unique designs from local artisans",
    },
    {
      image:
        Img7,
      title: "Spices",
      description: "Rich flavors and aromas",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-[Outfit]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Product Catalogs
      </h2>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {catalogs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden  hover:shadow-md transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 rounded-lg object-fill"
            />

            {/* Content */}
            <div className=" py-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalogs;
