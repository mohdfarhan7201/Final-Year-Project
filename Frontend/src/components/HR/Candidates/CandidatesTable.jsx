import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function CandidatesTable({ data, setSelected }) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-3 text-left">Candidate</th>
            <th className="p-3 text-left">Applied Job</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c, i) => (
            <motion.tr
              key={c.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-3 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-[10px] font-bold">
                  {c.applicant_name ? c.applicant_name[0].toUpperCase() : "C"}
                </div>
                <p className="font-medium text-gray-800">{c.applicant_name}</p>
              </td>
              <td className="px-3 py-4 text-gray-600">{c.job_title}</td>
              <td className="px-3 py-4 text-gray-500 text-xs">
                {new Date(c.applied_at).toLocaleDateString()}
              </td>
              <td className="px-3 py-4">
                <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                  c.status === "shortlisted" ? "bg-green-100 text-green-600" :
                  c.status === "rejected" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-700"
                }`}>
                  {c.status}
                </span>
              </td>
              <td className="px-3 py-4">
                <button
                  onClick={() => setSelected(c)}
                  className="flex items-center gap-1 text-purple-600 font-semibold hover:underline"
                >
                  View <Eye size={14} />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}