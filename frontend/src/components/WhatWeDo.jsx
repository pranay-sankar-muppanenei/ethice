import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

const services = [
  {
    title: "Corporate Bond Trading",
description:null,
    image: "/s1.svg",
 list: [
      "Income Generation",
      "Capital Preservation",
      "Hedge Against Economic Slowdown",
    ],
  },
  {
    title: "Government Securities",
    description:null,
    image: "/s2.svg",
 list: [
      "Income Generation",
      "Capital Preservation",
      "Hedge Against Economic Slowdown",
    ],
  },
  {
    title: "State Development Loans",
    description:null,
    image: "/s3.svg",
     list: [
      "Income Generation",
      "Capital Preservation",
      "Hedge Against Economic Slowdown",
    ],
  },
  {
    title: "Why Fixed Income?",
    description: null,
    image: "/s1.svg",
    list: [
      "Income Generation",
      "Capital Preservation",
      "Hedge Against Economic Slowdown",

    ],
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-white py-5 px-6">
      <div className="w-full mx-auto">
        <button className="text-sm bg-gray-100 px-2 py-2  text-black rounded-md mb-2">Our Services</button>
        <div className="flex justify-between mx-auto w-full">
        <h2 className="text-4xl font-serif font-semibold mb-4">What We Do!</h2>
        <p className="text-gray-600 text-[14px] max-w-xl mb-12">
          We specialize in fixed-income securities to help you grow and preserve
          your wealth strategically.
        </p>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-gray-200 hover:border-[#C8F8A9] hover:scale-102 rounded-lg overflow-hidden transition duration-300"
            >
              {/* Image Section */}
              <div className="h-30 flex items-center justify-center bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-16 object-contain"
                />
              </div>

              {/* Title (Static) */}
              <div className="p-6 text-left">
                <h3 className="text-xl  mb-4 text-black">
                  {service.title}
                </h3>
              </div>

              {/* Bottom Section (hover effect here only) */}
              <div className="bg-gray-50 group-hover:bg-[#C8F8A9]  transition-all duration-300 p-6 text-left">
                {service.description && (
                  <p className="text-sm text-gray-600 group-hover:text-black mb-6">
                    {service.description}
                  </p>
                )}

                {service.list && (
                  <ul className="space-y-2 mb-6">
                    {service.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 group-hover:text-black"
                      >
                        <FaCheck className="text-green-500 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button className="mt-auto w-full bg-white hover:bg-green-900 hover:text-white border border-gray-50 text-sm text-black py-2 px-4 rounded-md flex justify-between items-center transition">
  Learn More <FaArrowRight size={12} />
</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
