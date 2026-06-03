import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const jobs = [
  {
    title: "Senior Interface Designer",
    company: "Lumina Systems",
    location: "San Francisco, CA (Remote)",
    tags: ["Figma", "Prototyping", "Design Systems"],
    salary: "$140k - $180k",
    type: "FULL TIME",
    typeColor: "bg-purple-100 text-purple-600",
    borderColor: "border-cyan-200",
  },
  {
    title: "Senior Interface Designer",
    company: "Lumina Systems",
    location: "San Francisco, CA (Remote)",
    tags: ["Figma", "Prototyping", "Design Systems"],
    salary: "$140k - $180k",
    type: "REMOTE",
    typeColor: "bg-pink-100 text-pink-600",
    borderColor: "border-pink-200",
  },
  {
    title: "Senior Interface Designer",
    company: "Lumina Systems",
    location: "San Francisco, CA (Remote)",
    tags: ["Figma", "Prototyping", "Design Systems"],
    salary: "$140k - $180k",
    type: "HYBRID",
    typeColor: "bg-green-100 text-green-600",
    borderColor: "border-green-200",
  },
];

export default function OpenPositions() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-slate-50/50 py-5 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e1b4b]">
            Open <span className="text-[#f43f5e]">Position</span>
          </h1>
          <p className="text-gray-500 mt-4 text-lg md:text-xl">
            Search and Apply to Latest Job Vacancies & Openings in India
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="flex justify-center mb-20">
          <div className="relative flex items-center w-full max-w-2xl bg-white rounded-xl shadow-sm border border-gray-100 p-2">
            <div className="pl-4 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Searching Tech"
              className="w-full px-4 py-2 outline-none text-gray-600 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-[#1e1bff] text-white px-8 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all">
              Search
            </button>
          </div>
        </div>

        {/* JOB CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-3xl p-8 border-b-4 ${job.borderColor} shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative flex flex-col`}
            >
              {/* Top Row: Icon & Type Tag */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-cyan-400 rounded-sm transform rotate-45"></div>
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-md tracking-wider ${job.typeColor}`}>
                  {job.type}
                </span>
              </div>

              {/* Job Info */}
              <div className="space-y-1 mb-6">
                <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                  {job.title}
                </h2>
                <p className="text-gray-400 text-sm font-medium">
                  {job.company} • {job.location}
                </p>
              </div>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {job.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-500 text-[11px] px-3 py-1 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Row: Salary & Apply */}
              <div className="mt-auto flex justify-between items-center">
                <span className="text-gray-800 font-bold text-lg">
                  {job.salary}
                </span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#b933ff] text-white px-7 py-2 rounded-xl font-bold text-sm shadow-lg shadow-purple-100 hover:bg-purple-600 transition-all"
                >
                  Apply
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}