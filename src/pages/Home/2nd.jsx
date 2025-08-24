// import Navbar from "../../components/Common/Navbar";

// function Second() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <section className=" mx-auto  sm:px-6 lg:px-8 py-12 lg:py-20">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content */}
//           <div className="order-2 lg:order-1">
//             {/* Tagline */}
//             <div className="mb-8">
//               <div className="flex items-center gap-2 text-gray-600 text-sm font-medium tracking-wide uppercase">
//                 <div className="flex gap-1 ">
//                   {[...Array(5)].map((_, i) => (
//                     <div key={i} className="w-1 h-1 bg-[#E44F39] rounded-full"></div>
//                   ))}
//                 </div>
//                 <span className="text-[#E44F39]">Solving Your Biggest Trade Challenges</span>
//               </div>
//             </div>

//             {/* Main Headline */}
//             <div className="mb-12">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
//                 We Solve The Problems
//                 <br />
//                 That Stop Your <span className="text-red-500">Imports</span>
//               </h1>
//             </div>

//             <div className="space-y-8">
//               <div className="flex gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
//                     <img src="public/Group 1321315081.png" alt="Global Sourcing" className="w-8 h-8" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">Global Sourcing</h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     Find reliable suppliers from around the world with our extensive network and verification process.
//                   </p>
//                 </div>
//               </div>

//               {/* Efficient Logistics */}
//               <div className="flex gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
//                     <img src="public/truck-icon.png" alt="Efficient Logistics" className="w-8 h-8" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Logistics</h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     Streamline your shipping and customs clearance with our integrated logistics solutions.
//                   </p>
//                 </div>
//               </div>

//               {/* Secure Payments */}
//               <div className="flex gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
//                     <img src="public/credit-card-icon.png" alt="Secure Payments" className="w-8 h-8" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     Ensure secure and transparent transactions with our trusted payment gateway.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
//             <div className="relative">
//               <img
//                 src="/imgi_15_person-their-job-posi 2.png"
//                 alt="Professional logistics worker with delivery cart"
//                 className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-2xl"
//               />

//               <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-20"></div>
//               <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
//               <div className="absolute top-1/2 -left-8 w-6 h-6 bg-yellow-500 rounded-full opacity-30 hidden lg:block"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Second;


import img from "../../assets/images/logistic.png"
import { Globe, Truck, CreditCard } from "lucide-react"; // clean vector icons

function Second() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-full mx-auto px-6 sm:px-8 lg:px-20 py-4 lg:py-22">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-2 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Tagline */}
            <div className="mb-6">
              <p className="flex items-center gap-2 md:text-sm text-xs  font-semibold tracking-wide uppercase text-[#E44F39]">
                <span className="h-[1px] w-8 bg-[#E44F39]"></span>
                Solving Your Biggest Trade Challenges
              </p>
            </div>

            {/* Main Headline */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Solve the Problems
                <br />
                That Stop Your{" "}
                <span className="text-[#E44F39]">Imports</span>
              </h1>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {/* Global Sourcing */}
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[#E44F39]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg  font-bold text-gray-800 mb-1">
                    Global Sourcing
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Find reliable suppliers from around the world with our
                    extensive network and verification process.
                  </p>
                </div>
              </div>

              {/* Efficient Logistics */}
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-[#E44F39]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg  font-bold text-gray-800 mb-1">
                    Efficient Logistics
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Streamline your shipping and customs clearance with our
                    integrated logistics solutions.
                  </p>
                </div>
              </div>

              {/* Secure Payments */}
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#E44F39]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg  font-bold text-gray-800 mb-1">
                    Secure Payments
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Ensure secure and transparent transactions with our trusted
                    payment gateway.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={img}
              alt="Professional logistics worker with delivery cart"
              className="w-full max-w-sm md:max-w-md lg:max-full xl:max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Second;
