// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   MapPin,
//   IndianRupee,
//   Building2,
//   Sparkles,
//   ExternalLink,
//   CheckCircle,
//   Briefcase
// } from 'lucide-react';

// const JobCard = ({ job, onView, onApply }) => {
//   // Data Logic
//   const company = job.organization_name || job.posted_by_name || "Unknown Company";
//   const location = job.remote ? "Remote" : job.location || "Not specified";
//   const salary = job.salary_range || job.salary || "Not disclosed";
//   const skills = job.requirements ? job.requirements.split(",") : [];
//   const source = (job.source || "internal").toLowerCase();
//   const isExternal = source !== "internal";
//   const applyLink = job.apply_url || job.external_url || "#";
//   const isApplied = job.is_applied || job.applied || false;

//   const handleApply = () => {
//     if (typeof onApply === "function") {
//       onApply(job);
//     }
//   };

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -10 }}
//       transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//       className="relative group h-full"
//     >
//       {/* 🔥 THE COLOR GRADIENT SHADOW (HOVER PE CHAMKEGA) */}
//       <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-500 -z-10 group-hover:scale-105" />

//       {/* Main Card Container */}
//       <div className="relative h-full rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden flex flex-col shadow-sm group-hover:border-transparent transition-all duration-500">
        
//         <div className="p-7 h-full flex flex-col relative z-10 bg-white rounded-[2.4rem]">
          
//           {/* Header */}
//           <div className="flex justify-between items-start mb-6">
//             <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-50 shadow-sm group-hover:scale-110 transition-transform duration-500">
//               <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 font-black text-xl">
//                 {company.substring(0, 1).toUpperCase()}
//               </span>
//             </div>

//             <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
//               isExternal ? 'bg-orange-50 text-orange-600' : 'bg-purple-50 text-purple-600'
//             }`}>
//               <Sparkles size={12} />
//               {source}
//             </span>
//           </div>

//           {/* Job Info */}
//           <div className="mb-6 flex-grow">
//             <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight group-hover:text-purple-600 transition-colors">
//               {job.title}
//             </h3>
            
//             <div className="flex flex-wrap gap-4 text-gray-500 text-[13px] font-bold">
//               <div className="flex items-center gap-1.5">
//                 <Building2 size={15} />
//                 <span>{company}</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <MapPin size={15} />
//                 <span>{location}</span>
//               </div>
//             </div>

//             <p className="mt-4 text-[13px] text-gray-400 leading-relaxed line-clamp-2 font-medium">
//               {job.description}
//             </p>
//           </div>

//           {/* Skills */}
//           <div className="flex flex-wrap gap-2 mb-8">
//             {skills.slice(0, 3).map((skill, i) => (
//               <span key={i} className="bg-gray-50 text-gray-500 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-gray-100 group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-100 transition-colors">
//                 {skill.trim()}
//               </span>
//             ))}
//           </div>

//           {/* Footer */}
//           <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
//             <div>
//               <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest block mb-1">Package</span>
//               <div className="flex items-center gap-0.5 text-gray-900 font-black text-lg">
//                 <IndianRupee size={16} />
//                 {salary}
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => onView(job)}
//                 className="p-3 rounded-2xl text-gray-400 hover:bg-gray-100 hover:text-purple-600 transition-all active:scale-90"
//               >
//                 <Briefcase size={20} />
//               </button>

//               {isExternal ? (
//                 <a
//                   href={applyLink}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-[1.2rem] text-[13px] font-black shadow-lg shadow-purple-100 hover:shadow-purple-300 transition-all active:scale-95"
//                 >
//                   Apply <ExternalLink size={14} />
//                 </a>
//               ) : isApplied ? (
//                 <div className="flex items-center gap-2 bg-green-50 text-green-600 px-6 py-3 rounded-[1.2rem] text-[13px] font-black border border-green-100">
//                   Applied <CheckCircle size={14} />
//                 </div>
//               ) : (
//                 <button
//                   onClick={handleApply}
//                   className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-[1.2rem] text-[13px] font-black shadow-lg shadow-purple-100 hover:shadow-purple-300 transition-all active:scale-95"
//                 >
//                   Apply
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default JobCard;









import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  IndianRupee,
  Building2,
  Sparkles,
  ExternalLink,
  CheckCircle,
  Briefcase
} from 'lucide-react';

const JobCard = ({ job, onView, onApply }) => {
  // 🔥 FIXED LOGIC: Priority only to organization_name
  const company = job.organization_name || "Company";
  
  const location = job.remote ? "Remote" : job.location || "Not specified";
  const salary = job.salary_range || job.salary || "Not disclosed";
  const skills = job.requirements ? job.requirements.split(",") : [];
  const source = (job.source || "internal").toLowerCase();
  const isExternal = source !== "internal";
  const applyLink = job.apply_url || job.external_url || "#";
  const isApplied = job.is_applied || job.applied || false;

  const handleApply = () => {
    if (typeof onApply === "function") {
      onApply(job);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="relative group h-full"
    >
      {/* 🔥 THE COLOR GRADIENT SHADOW (HOVER GLOW) */}
      <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-500 -z-10 group-hover:scale-105" />

      {/* Main Card Container */}
      <div className="relative h-full rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden flex flex-col shadow-sm group-hover:border-transparent transition-all duration-500">
        
        <div className="p-7 h-full flex flex-col relative z-10 bg-white rounded-[2.4rem]">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-500">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 font-black text-xl">
                {company.substring(0, 1).toUpperCase()}
              </span>
            </div>

            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
              isExternal ? 'bg-orange-50 text-orange-600' : 'bg-purple-50 text-purple-600'
            }`}>
              <Sparkles size={12} className={isExternal ? "animate-pulse" : ""} />
              {source}
            </span>
          </div>

          {/* Job Info */}
          <div className="mb-6 flex-grow">
            <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight group-hover:text-purple-600 transition-colors duration-300">
              {job.title}
            </h3>
            
            <div className="flex flex-wrap gap-4 text-gray-500 text-[13px] font-bold">
              <div className="flex items-center gap-1.5">
                <Building2 size={15} className="text-gray-400" />
                <span>{company}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={15} className="text-gray-400" />
                <span>{location}</span>
              </div>
            </div>

            <p className="mt-4 text-[13px] text-gray-400 leading-relaxed line-clamp-2 font-medium italic">
              {job.description}
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.slice(0, 3).map((skill, i) => (
              <span key={i} className="bg-gray-50 text-gray-500 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-gray-100 group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-100 transition-colors duration-300">
                {skill.trim()}
              </span>
            ))}
          </div>

          {/* Footer Action Area */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
            <div>
              <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest block mb-1">Package</span>
              <div className="flex items-center gap-0.5 text-gray-900 font-black text-lg">
                <IndianRupee size={16} />
                {salary}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onView(job)}
                className="p-3 rounded-2xl text-gray-400 hover:bg-gray-100 hover:text-purple-600 transition-all active:scale-90"
                title="View Details"
              >
                <Briefcase size={20} />
              </button>

              {isExternal ? (
                <a
                  href={applyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-[1.2rem] text-[13px] font-black shadow-lg shadow-purple-100 hover:shadow-purple-300 transition-all active:scale-95"
                >
                  Apply <ExternalLink size={14} />
                </a>
              ) : isApplied ? (
                <div className="flex items-center gap-2 bg-green-50 text-green-600 px-6 py-3 rounded-[1.2rem] text-[13px] font-black border border-green-100">
                  Applied <CheckCircle size={14} />
                </div>
              ) : (
                <button
                  onClick={handleApply}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-[1.2rem] text-[13px] font-black shadow-lg shadow-purple-100 hover:shadow-purple-300 transition-all active:scale-95 hover:-translate-y-0.5"
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;