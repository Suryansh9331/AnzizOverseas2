import React, { useEffect } from 'react'
import BgImg from '../../assets/sollutions/hero-bg.png' 
import BulbImg from '../../assets/sollutions/bulb.png'
import Img1 from '../../assets/sollutions/image1.png'
import Img2 from '../../assets/sollutions/image2.png'
import Img3 from '../../assets/sollutions/image3.png'
import Img4 from '../../assets/sollutions/image4.png'
import Img5 from '../../assets/sollutions/image5.png'
import Img6 from '../../assets/sollutions/image6.png'
import Img7 from '../../assets/sollutions/image7.png'
import Img8 from '../../assets/sollutions/image8.png'
import Img9 from '../../assets/sollutions/image9.png'
import { ArrowRight, Play, Phone, Check } from 'lucide-react'


const Sollutions = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div>
        <div 
            className="h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
            style={{ backgroundImage: `url(${BgImg})` }}
        >
            <div className="container mx-auto px-6 lg:px-12 py-10 flex items-center justify-center min-h-screen">
                {/* Content Section */}
                <div className="text-center">
                    {/* Main Heading */}
                    <div className="mb-12 mt-10">
                        {/* First Line with Bulb and Text */}
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <img 
                                src={BulbImg} 
                                alt="Bulb" 
                                className="w-16 h-16 lg:w-20 lg:h-20"
                            />
                            <h1 className=" text-3xl md:text-6xl lg:text-7xl font-bold text-white">
                                WE SOLVE THE
                            </h1>
                        </div>
                        <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
                            <span className="md:text-6xl text-3xl lg:text-7xl font-bold text-white">
                                PROBLEMS
                            </span>
                            <span className="md:text-6xl text-3xl lg:text-7xl  font-thin text-[#1DA1F2]">
                                THAT STOP
                            </span>
                        </div>
                        <h1 className="md:text-6xl text-3EXPLORE HOW IT WORKSxl lg:text-7xl font-bold text-white">
                            YOUR IMPORTS.
                        </h1>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        {/* Read More Button */}
                        <button className="flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
                          onClick={() =>
                    window.scrollBy({
                      top: window.innerHeight,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                        >
                            <span className="font-medium">EXPLORE MORE</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        
                        {/* Watch Video Button */}
                        <button className="flex items-center gap-3 bg-[#1DA1F2] text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 group">
                            <span className="font-medium">WATCH VIDEO</span>
                            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <DescriptionSection />

        <ShippingSection />

        <ServicesGridSection />

        <LostOrDamageSection />

        <StreamlineSupplyChain />

        <GlobalTradeSection />
    </div>
  )
}

export default Sollutions

const DescriptionSection = () => {
  return (
    <div className="bg-gray-50 py-12 lg:py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="">  {/* Removed mx-auto here */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 leading-relaxed text-left">
            <span className='font-semibold text-black'>From shipment delays to fraud risks —</span> we fix it all, so your goods arrive 
            safely and on time.
          </h2>
        </div>
      </div>
    </div>
  )
}

const ShippingSection = () => {
  return (
    <div className="bg-gray-50 py-16 lg:py-20">
      <div className="container max-w-6xl mx-auto px-6 lg:px-16">
        
        {/* Title with dotted lines */}
        <div className="flex items-center justify-center mb-8 lg:mb-12">
          {/* Left Dotted Line */}
          <div className="flex-1 max-w-16 lg:max-w-32">
            <div
              className="h-px w-full"
              style={{
                backgroundImage: `repeating-linear-gradient(to right, #1DA1F2 0, #1DA1F2 4px, transparent 4px, transparent 8px)`
              }}
            ></div>
          </div>

          {/* Text */}
          <div
            className="px-6 text-sm lg:text-base font-medium tracking-wider uppercase"
            style={{ color: '#1DA1F2' }}
          >
            Faster, Hassle-Free Global Shipping
          </div>

          {/* Right Dotted Line */}
          <div className="flex-1 max-w-16 lg:max-w-32">
            <div
              className="h-px w-full"
              style={{
                backgroundImage: `repeating-linear-gradient(to right, #1DA1F2 0, #1DA1F2 4px, transparent 4px, transparent 8px)`
              }}
            ></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Get Your Goods Across<br />
            Borders Without <span className="text-[#1DA1F2]">Delays</span>
          </h2>
        </div>

        {/* Image */}
        <div className="mb-12 lg:mb-16">
          <div className="relative rounded-2xl overflow-hidden ">
            <img 
              src={Img1} 
              alt="Shipping and logistics operations" 
              className="w-full h-64 sm:h-80 lg:h-96 object-fit"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 rounded-full p-4 lg:p-6 shadow-lg hover:bg-opacity-100 transition-all duration-300 cursor-pointer">
                <svg className="w-8 h-8 lg:w-12 lg:h-12 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Shipping Delays Label */}
            {/* <div className="absolute top-6 left-6 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
              <span className="text-gray-700 font-medium text-sm lg:text-base">SHIPPING DELAYS</span>
            </div> */}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Shipping Delays
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Get your cargo moving again with real-time route optimization and carrier coordination.
            </p>
            
            {/* Call to Expert Button */}
            <button className="inline-flex items-center gap-3 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-medium transition-all duration-300 group"
            style={{ backgroundColor: '#1DA1F2' }}>
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>CALL TO EXPERT</span>
            </button>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Get your cargo moving again with real-time route optimization and carrier coordination. Reduce delays, cut costs, and keep your shipments on schedule every time.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

const ServicesGridSection = () => {
  const services = [
    {
      id: 1,
      image: Img2,
      title: "Customs Blockages",
      description: "Resolve clearance issues with AI-generated documentation and local compliance experts.",
      alt: "Tablet showing customs tracking interface"
    },
    {
      id: 2,
      image: Img3,
      title: "Supplier Fraud Risk",
      description: "Verify supplier credentials and secure payments with escrow-backed trade protection.",
      alt: "Person working on laptop with holographic security interface"
    },
    {
      id: 3,
      image: Img4,
      title: "Product Quality Disputes",
      description: "Use pre-shipment inspections and third-party quality audits to avoid costly returns.",
      alt: "Quality control and logistics management illustration"
    },
    {
      id: 4,
      image: Img5,
      title: "High Duties & Hidden Costs",
      description: "Estimate all costs upfront with our duty calculators and hidden fee alerts",
      alt: "Person calculating costs with documents and laptop"
    }
  ]

  return (
    <div className="bg-gray-50 py-16 lg:py-20">
      <div className="container max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="group">
              
              {/* Image Container */}
              <div className="relative mb-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.alt}
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Orange accent line */}
                  <div 
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ backgroundColor: '#1DA1F2' }}
                  ></div>
                  
                  {/* Orange corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-16 h-16 rounded-bl-2xl"
                    style={{ backgroundColor: '#1DA1F2' }}
                  ></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
                
                {/* Call to Expert Button */}
                <button 
                  className="inline-flex items-center gap-3 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-medium transition-all duration-300 group/btn hover:shadow-lg transform hover:-translate-y-1"
                  style={{ backgroundColor: '#1DA1F2' }}
                >
                  <Phone className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>CALL TO EXPERT</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

const LostOrDamageSection = () => {
  return (
    <div className="bg-gray-50 py-16 lg:py-20">
      <div className="container max-w-6xl mx-auto px-6 lg:px-16">

        {/* Image */}
        <div className="mb-12 lg:mb-16">
          <div className="relative rounded-2xl overflow-hidden ">
            <img 
              src={Img6} 
              alt="Shipping and logistics operations" 
              className="w-full h-64 sm:h-80 lg:h-96 object-fit"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 rounded-full p-4 lg:p-6 shadow-lg hover:bg-opacity-100 transition-all duration-300 cursor-pointer">
                <svg className="w-8 h-8 lg:w-12 lg:h-12 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Shipping Delays Label */}
            {/* <div className="absolute top-6 left-6 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
              <span className="text-gray-700 font-medium text-sm lg:text-base">SHIPPING DELAYS</span>
            </div> */}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Lost or Damaged Goods
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
               Track every shipment in real time and file claims instantly with our partner insurers
            </p>
            
            {/* Call to Expert Button */}
            <button className="inline-flex items-center gap-3 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-medium transition-all duration-300 group"
            style={{ backgroundColor: '#1DA1F2' }}>
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>CALL TO EXPERT</span>
            </button>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Monitor all shipments in real time and initiate claims seamlessly through our accredited insurance partners.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

const StreamlineSupplyChain = () => {
  const features = [
    "Real-Time Tracking",
    "Smart Route Optimization",
    "Integrated Documentation", 
    "Verified Logistics Partners"
  ]

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col lg:flex-row min-h-screen items-center">
        
        {/* Left Section */}
        <div className="flex-1 px-6 sm:px-8 lg:px-16 py-16 lg:py-20 flex items-center">
          <div className="w-full max-w-2xl">
            
            {/* Title with dotted line */}
            <div className="flex items-center mb-8">
              {/* Left Dotted Line */}
              <div className="flex-1 max-w-16">
                <div
                  className="h-px w-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(to right, #1DA1F2 0, #1DA1F2 4px, transparent 4px, transparent 8px)`
                  }}
                ></div>
              </div>

              {/* Text */}
              <div
                className="ml-6 text-sm lg:text-base font-medium tracking-wider uppercase"
                style={{ color: '#1DA1F2' }}
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
                    style={{ backgroundColor: '#1DA1F2' }}
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
              style={{ backgroundColor: '#1DA1F2' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#d63384'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#1DA1F2'}
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

const GlobalTradeSection = () => {
  const stats = [
    { number: "300+", label: "Clients Review" },
    { number: "120+", label: "Team Member" },
    { number: "1k+", label: "Complete Project" }
  ]

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Main Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
              <div className="mb-2">
                A creative agency specializes in
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 mb-2">
                <span>crafting</span>
                <div className="flex -space-x-2">
                  <img 
                    src={Img8} 
                    alt="Team member 1"
                    className="w-24 h-10 sm:w-12 sm:h-12 lg:w-40 lg:h-16 rounded-full border-2 border-white object-cover"
                  />
                  
                </div>
                <span>unique and impact and</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
                <span>digital solutions</span>
                <div className="flex -space-x-2">
                  <img 
                    src={Img9} 
                    alt="Client 1"
                    className="w-28 h-10 sm:w-12 sm:h-12 lg:w-40 lg:h-16 rounded-full border-2 border-white object-cover"
                  />
                  
                </div>
                <span>for clients</span>
              </div>
            </h2>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-[#E4F5FF] rounded-2xl py-6">
              <div 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                style={{ color: '#1DA1F2' }}
              >
                {stat.number}
              </div>
              <div 
                className="text-base lg:text-lg font-medium"
                style={{ color: '#1DA1F2' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            Ready to Expand Your Global Trade?
          </h3>
          
          <button 
            className="inline-flex items-center gap-3 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-medium text-base lg:text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            style={{ backgroundColor: '#1DA1F2' }}
          >
            <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
            <span>BOOK CALL</span>
          </button>
        </div>

      </div>
    </div>
  )
}

