import Footer from "../../components/Common/Footer";
import FAQ from "./8th";
import SupplierSection from "./5th";
import FourthSectiion from "./4th";
import Hero from "./Hero";
import Second from "./2nd";
import BrandSection from "./7th";
import { Phone } from "lucide-react";
import Sixth from "./6th";
import ConsultationBooking from "./11th";
import ToolsSection from "./3rd";
import TestimonialSection from "./10th";
import GlobalTradeSection from "./9th";

function Home() {
  return (
    <div>
      <Hero/>
      <Second />
      <ToolsSection />
      <FourthSectiion />
      <SupplierSection />
      <Sixth />
      <BrandSection />
      <FAQ />
<GlobalTradeSection/>
    
      <ConsultationBooking />
      <TestimonialSection />
      <section className="w-full bg-white py-20   h-[50vh]  px-4 b">
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
            <button className="flex items-center gap-2 bg-[#E44F39] text-white px-6 py-3 rounded-full font-light font-['Poppins'] hover:opacity-90 transition">
              <Phone size={18} /> BOOK CALL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
