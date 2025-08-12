import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import testimonialsData from "../data/testimonialdummyData"; // adjust path if needed

const brandLogos = [
  { src: "/coins.svg", alt: "Coin's" },
  { src: "/swift.svg", alt: "Swift Line" },
  { src: "/brand.svg", alt: "Diamond" },
  { src: "/waves.svg", alt: "Fabrik" },
  { src: "/brand-1.svg", alt: "Waves" },

];

const Testimonials = ({ showFooter = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <div className={`${
    showFooter ? "mb-16" : "mb-0"
  } bg-white max-w-7xl mx-auto overflow-hidden relative py-12`}>
      {/* Heading */}


      {/* Brand Logos */}
    <div className="py-12 flex flex-col items-center relative">
  <button className="text-center text-black bg-gray-100 py-1 px-4 rounded-md mb-4 text-sm z-1 relative">
    Fortune 500 Professionals Trust ExeCor CPA
  </button>
  <hr className="w-full border-t border-gray-300 absolute top-16 left-0 z-0" />
  <div className="flex flex-wrap justify-center gap-12 mt-12">
    {brandLogos.map((brand, idx) => (
      <img
        key={idx}
        src={brand.src}
        alt={brand.alt}
        className="h-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
      />
    ))}
  </div>
</div>


      {/* Carousel wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testimonialsData.map(({ name, role, image, quote, stat, statLabel }, idx) => (
          <div
            key={idx}
            className="bg-[#f1f5f1] grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-xl p-6 min-w-full"
          >
            {/* Left */}
            <div className="flex flex-col items-center md:items-start">
              <img src={image} alt={name} className="w-20 h-20 rounded-full mb-4" />
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded-md mt-1">{role}</p>
            </div>

            {/* Right */}
            <div>
              <FaQuoteLeft className="text-green-900 text-3xl mb-4" />
              <p className="text-gray-800 leading-relaxed">{quote}</p>
              <FaQuoteRight className="text-green-900 text-3xl mt-4 ml-auto" />
              <div className="flex items-center gap-4 mt-6 border-t border-gray-300 pt-4">
                <p className="text-4xl font-light text-green-900">{stat}</p>
                <p className="text-gray-600">{statLabel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Arrows */}
     <button
  onClick={prevTestimonial}
  className={`absolute left-4 ${
    showFooter ? "bottom-1/6" : "bottom-1/10"
  } -translate-y-1/2 bg-white text-gray-500 w-10 h-10 rounded-md flex items-center justify-center hover:bg-green-900 hover:text-white transition-colors duration-300 shadow`}
>
  <FaChevronLeft />
</button>

<button
  onClick={nextTestimonial}
  className={`absolute left-20 ${
    showFooter ? "bottom-1/6" : "bottom-1/10"
  } -translate-y-1/2 bg-white text-gray-500 w-10 h-10 rounded-md flex items-center justify-center hover:bg-green-900 hover:text-white transition-colors duration-300 shadow`}
>
  <FaChevronRight />
</button>


      {/* Footer (conditionally rendered) */}
      {showFooter && (
        <div className="bg-[#0F3D3A] flex justify-between items-center px-6 py-4 rounded-b-lg">
          <p className="text-white font-medium">What Our Clients Say</p>
          <button className="bg-[#C8F8A9] text-black px-5 py-2 rounded-md hover:bg-[#0F3D3A] hover:text-white flex items-center gap-2 transition-colors duration-300">
            Read All Testimonials →
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
