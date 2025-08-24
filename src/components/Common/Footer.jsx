// import React from "react";
// import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
// import { ArrowRight } from "lucide-react"; 
// import logo from "../../assets/images/logo2.png"; 
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0F0F0F] text-white font-poppins">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
//           <div className="max-w-lg">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-bold mb-3">
//               Get Started Now
//             </h2>
//             <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
//               A creative agency speciali innovative and solutions to
//               businesses A creative agency speciali
//             </p>
//           </div>

//           {/* Logo */}
//           <div className="shrink-0">
//             <img
//               src={logo}
//               alt="Brand Logo"
//               className="w-24 sm:w-28 md:w-32 object-contain"
//             />
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 my-8"></div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
//           {/* Contact Info */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-4">
//               <span className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full">
//                 <FaMapMarkerAlt className="text-red-500 text-lg" />
//               </span>
//               <div>
//                 <p className="text-xs sm:text-sm text-gray-400">Address</p>
//                 <p className="text-sm sm:text-base font-semibold">66 Broklyant, New India</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <span className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full">
//                 <FaEnvelope className="text-red-500 text-lg" />
//               </span>
//               <div>
//                 <p className="text-xs sm:text-sm text-gray-400">Email</p>
//                 <p className="text-sm sm:text-base font-semibold">sara.cruz@example.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-gray-300 text-sm">
//             <a href="#" className="hover:text-white transition">» About us</a>
//             <a href="#" className="hover:text-white transition">» Testimonial</a>
//             <a href="#" className="hover:text-white transition">» Services</a>
//             <a href="#" className="hover:text-white transition">» Blog</a>
//             <a href="#" className="hover:text-white transition">» Contact Us</a>
//             <Link to="/tools" className="hover:text-white transition">» Tools</Link>
//             <Link to="/sollutions" className="hover:text-white transition">» Solution</Link>
//           </div>

//           {/* Subscribe Box */}
//           <div className="w-full max-w-md">
//             <form className="flex flex-col sm:flex-row items-stretch bg-[#1A1A1A] rounded-full overflow-hidden">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 bg-transparent text-sm outline-none placeholder-gray-400"
//               />
//               <button
//                 type="submit"
//                 className="flex items-center justify-center sm:justify-between gap-2 bg-black px-5 py-3 sm:rounded-full text-xs font-semibold tracking-wide hover:bg-red-600 transition"
//               >
//                 SUBSCRIBE NOW
//                 <span className="hidden sm:flex w-6 h-6 items-center justify-center border border-red-500 rounded-full">
//                   <ArrowRight className="w-4 h-4 text-red-500" />
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
//           <p className="text-center md:text-left">© Yoursitename 2024 | All Rights Reserved</p>
//           <div className="flex flex-wrap justify-center md:justify-end gap-6">
//             <a href="#" className="hover:text-white transition">Terms & Condition</a>
//             <a href="#" className="hover:text-white transition">Privacy Policy</a>
//             <a href="#" className="hover:text-white transition">Contact Us</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { ArrowRight } from "lucide-react"; 
import logo from "../../assets/images/logo2.png"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-bold mb-3">
              Get Started Now
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              A creative agency speciali innovative and solutions to
              businesses A creative agency speciali
            </p>
          </div>

          {/* Logo */}
          <div className="shrink-0">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-24 sm:w-28 md:w-32 object-contain"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full">
                <FaMapMarkerAlt className="text-red-500 text-lg" />
              </span>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Address</p>
                <p className="text-sm sm:text-base font-semibold">66 Broklyant, New India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full">
                <FaEnvelope className="text-red-500 text-lg" />
              </span>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Email</p>
                <p className="text-sm sm:text-base font-semibold">sara.cruz@example.com</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-gray-300 text-sm">
            <a href="#" className="hover:text-white transition">» About us</a>
            <a href="#" className="hover:text-white transition">» Testimonial</a>
            <a href="#" className="hover:text-white transition">» Services</a>
            <a href="#" className="hover:text-white transition">» Blog</a>
            <a href="#" className="hover:text-white transition">» Contact Us</a>
            <Link to="/tools" className="hover:text-white transition">» Tools</Link>
            <Link to="/sollutions" className="hover:text-white transition">» Solution</Link>
          </div>

          {/* Subscribe Box */}
          <div className="w-full max-w-md">
            <form className="flex flex-col sm:flex-row items-stretch bg-[#1A1A1A] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent text-sm outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="flex items-center justify-center sm:justify-between gap-2 bg-black px-5 py-3 sm:rounded-full text-xs font-semibold tracking-wide hover:bg-red-600 transition"
              >
                SUBSCRIBE NOW
                <span className="hidden sm:flex w-6 h-6 items-center justify-center border border-red-500 rounded-full">
                  <ArrowRight className="w-4 h-4 text-red-500" />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p className="text-center md:text-left">© Yoursitename 2024 | All Rights Reserved</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="#" className="hover:text-white transition">Terms & Condition</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




