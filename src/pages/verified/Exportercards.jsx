import Img1 from "../../assets/verefied/card1.png";
import Img2 from "../../assets/verefied/card2.png";
import Img3 from "../../assets/verefied/card3.png";
import Img4 from "../../assets/verefied/card4.png";
import { ArrowRight, ChevronRight } from "lucide-react";


const ExporterCards = () => {
    const exporters = [
        {
            id: 1,
            image: Img1,
            title: "Premium Textiles Co. — India",
            description: "Organic cotton fabrics with custom dyeing & printing services.",
            moq: "MOQ: 500 units | Lead Time: 15 days"
        },
        {
            id: 2,
            image: Img2,
            title: "Global Spices Ltd. — Vietnam",
            description: "Certified spice exporter with sustainable farming practices",
            moq: "MOQ: 100 kg | Lead Time: 7 days"
        },
        {
            id: 3,
            image: Img3,
            title: "Ocean Harvest — Norway",
            description: "Frozen and fresh seafood with international cold-chain shipping",
            moq: "MOQ: 200 kg | Lead Time: 10 days"
        },
        {
            id: 4,
            image: Img4,
            title: "GreenTech Electronics — China",
            description: "Energy-efficient consumer electronics, OEM & ODM available.",
            moq: "MOQ: 100 pcs | Lead Time: 20 days"
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Showroom Exporter Cards
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-52 mb-16">
                    {exporters.map((exporter) => (
                        <div key={exporter.id} className="bg-white rounded-2xl overflow-hidden">
                            {/* Image */}
                            <div className="w-full min-h-72 overflow-hidden">
                                <img 
                                    src={exporter.image} 
                                    alt={exporter.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-[outfit] ">
                                    {exporter.title}
                                </h3>
                                
                                {/* Description with arrow bullet */}
                                <div className="flex items-start gap-3 mb-3">
                                    <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                    <p className=" text-sm text-[#7B7B7B] font-[poppins] font-medium  ">
                                        {exporter.description}
                                    </p>
                                </div>
                                
                                {/* MOQ Info with arrow bullet */}
                                <div className="flex items-start gap-3 mb-6">
                                    <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                    <p className=" text-sm text-[#7B7B7B] font-[poppins] font-medium ">
                                        {exporter.moq}
                                    </p>
                                </div>
                                
                                {/* View Profile Button */}
                                <button className="bg-[#1DA1F2] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 text-sm uppercase tracking-wider">
                                    VIEW PROFILE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Browse All Button */}
                <div className="text-center">
                    <button className="bg-[#1DA1F2] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200 text-sm uppercase tracking-wider">
                        BROWSE ALL VERIFIED EXPORTERS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExporterCards;