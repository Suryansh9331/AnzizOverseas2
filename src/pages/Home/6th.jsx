import Img7 from "../../assets/sollutions/image7.png"
import { Check, Phone } from "lucide-react"; // clean vector icons
const StreamlineSupplyChain = () => {
  const features = [
    "Real-Time Tracking",
    "Smart Route Optimization",
    "Integrated Documentation", 
    "Verified Logistics Partners"
  ]

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col-reverse lg:flex-row min-h-screen items-center">
        
        {/* Left Section */}
        <div className="flex-1 px-6 sm:px-8 lg:px-16 py-8 lg:py-20 flex items-center">
          <div className="w-full max-w-2xl">
            
            {/* Title with dotted line */}
            <div className="flex items-center mb-8">
              {/* Left Dotted Line */}
              <div className="flex-1 max-w-16">
                <div
                  className="h-px w-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(to right, #E44F39 0, #E44F39 4px, transparent 4px, transparent 8px)`
                  }}
                ></div>
              </div>

              {/* Text */}
              <div
                className="ml-6 text-sm lg:text-base font-medium tracking-wider uppercase"
                style={{ color: '#E44F39' }}
              >
                Logistics Solutions
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-8">
              Streamline Your<br />
              Supply Chain
            </h2>

            {/* Features with Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#E44F39' }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 text-base lg:text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
              Simplify complex logistics with our all-in-one platform. From planning to delivery, we help you move goods faster, safer, and more cost-effectively.
            </p>

            {/* Book Call Button */}
            <button 
              className="inline-flex items-center gap-3 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-medium text-base lg:text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              style={{ backgroundColor: '#E44F39' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#d63384'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#E44F39'}
            >
              <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>BOOK CALL</span>
            </button>

          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 relative min-h-96">
          <img 
            src={Img7} 
            alt="Logistics tracking dashboard and map interface"
            className="w-full object-fit"
          />
          
          {/* Optional: Add some overlay elements to simulate the UI elements shown in the reference */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-50 opacity-20 lg:opacity-10"></div>
        </div>

      </div>
    </div>
  )
}
export default StreamlineSupplyChain;