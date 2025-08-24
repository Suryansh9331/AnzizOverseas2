import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import "swiper/css";

const testimonials = [
  {
    name: "Ralph Edwards",
    role: "Product Manager",
    text: "A creative agency providing an innovative and unique solutions to businesses build their brand",
  },
  {
    name: "Marvin McKinney",
    role: "Nursing Assistant",
    text: "A creative agency providing an innovative and unique solutions to businesses build their brand",
  },
  {
    name: "Devon Lane",
    role: "Marketing Coordinator",
    text: "A creative agency providing an innovative and unique solutions to businesses build their brand",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-white py-20 px-4 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        {/* Subheading */}
        <p className="text-[#E44F39] text-sm font-medium tracking-wider uppercase mb-2">
          ------ Client Testimonial ------
        </p>

        {/* Main Heading */}
        <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-12">
          Excellence in Every Pixel <br />
          Where <span className="text-[#E44F39]">Ideas</span>
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!w-[85%] sm:!w-[60%] md:!w-[40%] lg:!w-[32%] py-4">
              {({ isActive }) => (
                <div
                  className={`rounded-lg shadow-md border p-6 text-left bg-white transition-all duration-500
                  ${isActive ? "scale-105 -translate-y-2 z-20" : "scale-95 opacity-60 blur-[1px] z-10"}
                `}
                >
                  <h3 className="font-outfit text-lg font-bold">{t.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{t.role}</p>
                  <p className="text-gray-700 mb-6">{t.text}</p>
                  <div className="flex justify-between items-center">
                    <Quote className="text-[#E44F39]" />
                    <div className="flex gap-1 text-[#E44F39]">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={16} fill="#E44F39" stroke="none" />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
