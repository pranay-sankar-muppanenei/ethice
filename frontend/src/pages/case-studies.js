import { useState } from "react";
import { caseStudies } from "@/data/caseStudiesData";

export default function CaseStudiesPage() {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleToggle = () => {
    if (visibleCount === 2) {
      setVisibleCount(caseStudies.length);
    } else {
      setVisibleCount(2);
    }
  };

  return (
    <section className="bg-[#f7faf7] py-12 px-6 md:px-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home <span className="mx-2">›</span> Case Studies
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-light mb-4">Case Studies</h1>
      <p className="text-gray-600 max-w-3xl mb-10">
        By harnessing technology, we unlock new growth, pioneer net-zero innovation, 
        and build enterprise-wide skills—delivering impact beyond financial metrics.
      </p>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {caseStudies.slice(0, visibleCount).map((study) => (
          <div
            key={study.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
              <p className="text-sm text-gray-600">{study.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-[#C8F8A9] hover:bg-green-900 hover:text-white text-black font-medium px-6 py-3 rounded-md transition"
        >
          {visibleCount === 2 ? "Load More" : "Show Less"}
        </button>
      </div>
    </section>
  );
}
