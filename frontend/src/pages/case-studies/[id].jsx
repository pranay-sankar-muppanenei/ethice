import { useRouter } from "next/router";
import { caseStudies } from "@/data/caseStudiesData";

export default function CaseStudyDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  const study = caseStudies.find((c) => c.id === parseInt(id));

  if (!study) return <p>Case study not found</p>;

  return (
    <>
      {/* Full-width Hero Section */}
      <section className="w-full bg-[#f5f7f4] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
  

          {/* Title */}
          <h1 className="text-4xl font-serif font-semibold leading-snug mb-6">
            {study.title}
          </h1>

          {/* Button */}
          <button className="px-4 py-1 rounded-md text-sm border border-gray-300 bg-white hover:bg-gray-100 transition">
            Case Studies
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        {/* Image */}
        <div className="flex">
        <img
              src={study.image}
              alt={study.title}
              className="h-[400px] w-[300px] object-cover rounded-xl"
            />
            <div className="flex flex-col">
                <div className="p-5 flex flex-col space-y-4">
              <h3 className="text-md font-semibold mb-2">{study.title}</h3>
              <p className="text-sm text-gray-600">{study.description}</p>
            </div>
            <div className="p-5 flex flex-col space-y-4">
              <h3 className="text-md font-semibold mb-2">{study.title}</h3>
              <p className="text-sm text-gray-600">{study.description}</p>
            </div>
            <div className="p-5 flex flex-col space-y-4">
              <h3 className="text-md font-semibold mb-2">{study.title}</h3>
              <p className="text-sm text-gray-600">{study.description}</p>
            </div>
            </div>
            
            
</div>
        {/* Opportunity */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">The Opportunity</h2>
          <p className="text-gray-700 leading-relaxed">{study.opportunity}</p>
        </div>

        {/* Solution */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">The Solution</h2>
          <p className="text-gray-700 leading-relaxed">{study.solution}</p>
        </div>

        {/* Impact */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">The Impact</h2>
          <p className="text-gray-700 leading-relaxed">{study.impact}</p>
        </div>
      </section>
    </>
  );
}
