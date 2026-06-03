import React from "react";
import { motion } from "framer-motion";
import { X, MapPin, Briefcase, IndianRupee, Building2 } from "lucide-react";

const ViewModal = ({ job, onClose }) => {
  if (!job) return null;

  const isInternship = job.hiring_type === "internship";

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-br from-white to-gray-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-6"
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-red-100 transition"
        >
          <X size={18} />
        </button>

        {/* HEADER */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>

          <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
            <Building2 size={16} />
            {job.organization_name}
          </div>
        </div>

        {/* TAGS */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
            {job.hiring_type}
          </span>

          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
            {job.status}
          </span>

          <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
            {job.remote ? "Remote" : "On-site"}
          </span>
        </div>

        {/* DESCRIPTION */}
        <div className="mb-5">
          <p className="text-gray-600 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-2 gap-4 mb-5">

          <div className="bg-white shadow-sm border rounded-xl p-3 flex items-center gap-3">
            <MapPin className="text-blue-500" size={18} />
            <div>
              <p className="text-xs text-gray-400">Location</p>
              <p className="text-sm font-semibold">
                {job.remote ? "Remote" : job.location}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-sm border rounded-xl p-3 flex items-center gap-3">
            <IndianRupee className="text-green-500" size={18} />
            <div>
              <p className="text-xs text-gray-400">
                {isInternship ? "Stipend" : "Package"}
              </p>
              <p className="text-sm font-semibold">
                {job.salary_range}
              </p>
            </div>
          </div>

        </div>

        {/* REQUIREMENTS */}
        <div>
          <p className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Briefcase size={16} /> Requirements
          </p>

          <div className="flex flex-wrap gap-2">
            {job.requirements?.split(",").map((r, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 text-xs rounded-full text-gray-700 shadow-sm"
              >
                {r.trim()}
              </motion.span>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default ViewModal;