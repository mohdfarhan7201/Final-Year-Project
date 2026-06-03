import React from "react";
import { motion } from "framer-motion";
import {
  X,
  MapPin,
  IndianRupee,
  Building2,
  Sparkles,
  FileText
} from "lucide-react";

const ViewModal = ({ job, onClose }) => {
  if (!job) return null;

  // Priority only to organization_name
  const company = job.organization_name || "Company";
  const salary = job.salary_range || job.salary || "Not disclosed";
  const location = job.remote ? "Remote" : job.location || "Not specified";
  const skills = job.requirements ? job.requirements.split(",") : [];
  const source = (job.source || "internal").toLowerCase();
  const isExternal = source !== "internal";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-[100] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl group"
      >
        {/* THE COLOR GRADIENT SHADOW (GLOW EFFECT) */}
        <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-40 blur-3xl -z-10" />

        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
          
          {/* HEADER AREA */}
          <div className="p-8 pb-0 flex justify-between items-start relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 font-black text-xl">
                    {company.substring(0, 1).toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    isExternal ? 'bg-orange-50 text-orange-600' : 'bg-purple-50 text-purple-600'
                  }`}>
                    <Sparkles size={12} />
                    {source}
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl font-black text-gray-900 leading-tight mb-2">
                {job.title}
              </h2>

              <div className="flex flex-wrap gap-4 text-gray-500 text-sm font-bold">
                <div className="flex items-center gap-1.5">
                  <Building2 size={16} className="text-gray-400" />
                  <span>{company}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-gray-400" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all active:scale-90 shadow-sm"
            >
              <X size={20} />
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="p-8 pt-6 overflow-y-auto no-scrollbar space-y-8">
            
            {/* SALARY BOX */}
            
              <div>
                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest block mb-1">Budget Range</span>
                <div className="flex items-center gap-1 text-gray-900 font-black text-2xl">
                  <IndianRupee size={22} />
                  {salary}
                </div>
              </div>
          
            {/* SKILLS */}
            {skills.length > 0 && (
              <div className="space-y-4 pb-8">
                <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest">
                  Key Requirements
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white text-gray-600 text-xs font-bold px-4 py-2 rounded-xl border border-gray-100 shadow-sm"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
            {/* DESCRIPTION */}
            <div className="space-y-3 pt-2">
              <h4 className="flex items-center gap-2 font-black text-gray-900 uppercase text-xs tracking-widest">
                <FileText size={16} className="text-purple-500" /> Job Overview
              </h4>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                {job.description || "No description provided by the organization."}
              </p>
            </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewModal;