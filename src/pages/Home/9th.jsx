import Img7 from '../../assets/sollutions/image7.png'
import Img8 from '../../assets/sollutions/image8.png'
import Img9 from '../../assets/sollutions/image9.png'
import { Phone } from 'lucide-react'
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
            <div key={index} className="text-center">
              <div 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                style={{ color: '#E44F39' }}
              >
                {stat.number}
              </div>
              <div 
                className="text-base lg:text-lg font-medium"
                style={{ color: '#E44F39' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            Ready to Expand Your Global Trade?
          </h3>
          
          <button 
            className="inline-flex items-center gap-3 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-medium text-base lg:text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            style={{ backgroundColor: '#E44F39' }}
          >
            <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
            <span>BOOK CALL</span>
          </button>
        </div> */}

      </div>
    </div>
  )
}
export default GlobalTradeSection;