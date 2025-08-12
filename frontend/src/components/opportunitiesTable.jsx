import { FaArrowRight } from "react-icons/fa";

const jobs = [
  { position: "Associate Consultant", city: "New York", type: "Hybrid" },
  {
    position: "Consultant – Remuneration & Total Rewards",
    city: "New York",
    type: "Onsite",
  },
  {
    position: "Consulting Team, Organizational Strategy",
    city: "New York",
    type: "Onsite",
  },
  {
    position: "Intern – KFI Outcomes/Data Analytics",
    city: "New York",
    type: "Remote",
  },
  {
    position: "Intern – Consulting Operations",
    city: "New York",
    type: "Hybrid",
  },
];

export default function OpportunitiesTable() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Tag */}
      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded mb-4">
        Open Positions
      </span>

      {/* Heading */}
      <h2 className="text-4xl font-serif mb-8">Experienced Opportunities</h2>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4  text-gray-600">Position</th>
              <th className="p-4  text-gray-600">City</th>
              <th className="p-4  text-gray-600">Location type</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="p-4">{job.position}</td>
                <td className="p-4">{job.city}</td>
                <td className="p-4">{job.type}</td>
                <td className="p-4">
                  <button className="flex items-center gap-2 bg-[#C8F8A9] hover:bg-green-300 transition text-sm px-4 py-2 rounded">
                    Apply
                    <FaArrowRight />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
