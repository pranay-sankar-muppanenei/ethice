// pages/services.js
import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import Testimonials from "@/components/Testimonials";
import AwardsSection from "@/components/awardSection"; // Adjust the import path as necessary

const servicesData = [
  {
    id: "business-consulting",
    title: "Business Consulting",
    description:
      "We help organizations navigate complexity, identify growth opportunities, and build resilient strategies. Our business consultants work closely with you to optimize operations, improve decision-making, and drive sustainable success. Whether you’re scaling up, entering new markets, or undergoing change, we provide the clarity and expertise to move forward with confidence.",
    checkpoints: [
      "Strategy development & growth",
      "Market research & competitors",
      "Risk management",
    ],
    image: "/s1.jpg",
  },
  {
    id: "marketing-sales",
    title: "Marketing & Sales",
    description:
      "We develop data-driven marketing strategies and optimize sales processes to boost performance.",
    checkpoints: [
      "Customer segmentation",
      "Sales funnel optimization",
      "Brand positioning",
    ],
    image: "/s2.jpg",
  },
  {
    id: "operations-management",
    title: "Operations Management",
    description:
      "We streamline operations, reduce costs, and enhance efficiency across your organization.",
    checkpoints: [
      "Process automation",
      "Cost reduction strategies",
      "Efficiency tracking",
    ],
    image: "/s3.jpg",
  },
  {
    id: "talent-acquisition",
    title: "Talent Acquisition",
    description:
      "We find, attract, and retain top talent to help your business thrive.",
    checkpoints: [
      "Talent sourcing",
      "Interview process design",
      "Employee retention plans",
    ],
    image: "/s4.jpg",
  },
];

export default function Services() {
  const sectionRefs = useRef({});

  const handleScroll = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div className=" min-h-screen">
      {/* Breadcrumb */}
      <div className="w-full bg-gray-100 py-10 px-10 border-b border-gray-200">
        <h1 className="text-4xl font-light mb-4">
          Comprehensive Business Consulting
        </h1>
        <p className="text-gray-600 max-w-3xl">
          We help organizations redefine their direction, and improve
          performance. Our consultants bring deep industry knowledge and a
          results-oriented mindset.
        </p>
      </div>
      {/* Tabs */}
   <div className="sticky top-0 bg-white  mt-2 border-gray-200 z-20">
  <div className="max-w-6xl mx-auto flex">
    {servicesData.map((service) => (
      <button
        key={service.id}
        className="relative flex-1 flex items-center justify-center gap-2 px-4 py-4 text-gray-700 hover:text-green-600 transition-colors font-medium text-sm  last:border-r-0 group"
        onClick={() => handleScroll(service.id)}
      >
        <AiOutlinePlus className="text-green-600" />
        {service.title}

        {/* Underline */}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </button>
    ))}
  </div>
</div>


      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        {servicesData.map((service, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div
              key={service.id}
              ref={(el) => (sectionRefs.current[service.id] = el)}
              id={service.id}
              className={`flex flex-col md:flex-row gap-8 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-lg object-cover shadow-sm"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <span className="bg-gray-100 px-3 py-1 text-xs rounded">
                  {service.title}
                </span>
                <h2 className="text-3xl font-light mt-4 mb-3">
                  Transforming Insight into Impact
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Checkpoints */}
                <ul className="space-y-2 mb-6">
                  {service.checkpoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <BsCheck2Circle className="text-green-500 text-lg" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="bg-[#C8F8A9] text-green-900 px-5 py-2 rounded-md hover:bg-green-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          );
        })}



      </div>
      <AwardsSection />
 
    </div>
    <div className="relative w-full h-screen overflow-hidden mb-10">
  <img
    src="/video.jpg"
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

  {/* Text + Button */}
  <div className="absolute bottom-10 right-10 max-w-xl">
    <h1 className="text-white text-4xl md:text-5xl font-light mb-4">
      Driving Growth Through <br /> Strategic Clarity
    </h1>
    <button className="bg-[#C8F8A9] text-green-900 px-5 py-2 rounded-md hover:bg-green-300 transition-colors flex items-center gap-2">
      Contact Us →
    </button>
  </div>
    </div>
    <Testimonials/>
</>
  );
}
