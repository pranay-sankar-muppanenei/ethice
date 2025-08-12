import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const awards = [
  { year: 2024, title: "Global Consulting Excellence", subtitle: "Management Consulting Firm of the Year" },
  { year: 2023, title: "Top Management Consultant", subtitle: "Management Consulting Firm of the Year" },
  { year: 2022, title: "Excellence in Client Service", subtitle: "Overall Consulting Excellence" },
  { year: 2021, title: "Innovator of the Year", subtitle: "Outstanding Strategy Implementation" },
  { year: 2020, title: "Client Satisfaction Award", subtitle: "Best in Customer Success" },
];

export default function AwardsSection() {
  const [index, setIndex] = useState(0);
  const slidesPerView = 3; // visible slides
  const totalSlides = awards.length;

  const nextSlide = () => {
    setIndex((prev) =>
      prev + 1 > totalSlides - slidesPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? totalSlides - slidesPerView : prev - 1
    );
  };

  return (
    <div className="bg-[#F2F5F1] rounded-lg p-8 overflow-hidden mb-10 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <span className="bg-white rounded px-3 py-1 text-sm">
            Awards & Recognition
          </span>
          <h2 className="text-4xl font-serif mt-4">Celebrating Excellence</h2>
          <p className="text-gray-600 mt-3 max-w-xl">
            We’re proud to be recognized for our innovation and impact. Our
            awards reflect our commitment to quality, excellence, and the trust
            our clients place in us.
          </p>
        </div>

        {/* Badge with poly.svg background */}
        <div className="hidden md:block">
          <div
            className="p-6 rounded-xl text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/poly.svg')" }}
          >
            <h3 className="text-white font-bold text-lg">Ethice</h3>
            <p className="text-xs text-white">2024</p>
            <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-900 text-xs rounded">
              Angies List
            </span>
            <p className="text-xs text-white mt-1">Super Service Award</p>
          </div>
        </div>
      </div>

      {/* Timeline Carousel */}
      <div className="mt-10 relative">
        {/* Line */}
        <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-300 z-0"></div>

        {/* Carousel wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / slidesPerView)}%)`,
            }}
          >
            {awards.map((award, i) => (
              <div key={i} className="w-1/3 flex-shrink-0 px-4 relative">
                {/* Year bubble */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-200 text-green-900 text-sm font-medium px-3 py-1 rounded-full shadow">
                  {award.year}
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold mt-6">{award.title}</h3>
                  <p className="text-gray-500 text-sm">{award.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={prevSlide}
            className="border p-3 rounded hover:bg-green-900 hover:text-white shadow"
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="border p-3 rounded hover:bg-green-900 hover:text-white shadow"
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
