// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const JobPostCard = ({ job }) => {
// //   return (
// //     <motion.div 
// //       layout
// //       initial={{ opacity: 0, scale: 0.95 }}
// //       animate={{ opacity: 1, scale: 1 }}
// //       whileHover={{ y: -5 }}
// //       className="bg-white p-6 rounded-[2rem] border border-gray-100 flex flex-col justify-between min-h-[300px] relative group"
// //       style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04)' }}
// //     >
// //       {/* Bottom Gradient Line */}
// //       <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-[2rem]" />

// //       <div>
// //         <div className="flex justify-between items-start mb-6">
// //           {/* Logo Placeholder */}
// //           <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
// //              <div className="w-6 h-6 bg-orange-400 rounded-lg transform rotate-45" /> 
// //           </div>
          
// //           <span className={`text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ${
// //             job.status === 'Urgent' ? 'bg-[#ccfbf1] text-[#14b8a6]' : 'bg-[#f3f0ff] text-[#8b5cf6]'
// //           }`}>
// //             {job.status}
// //           </span>
// //         </div>

// //         <h3 className="text-xl font-bold text-[#3b35b1] mb-1">{job.title}</h3>
// //         <p className="text-gray-400 text-xs font-semibold mb-8">{job.team} • {job.location}</p>
// //       </div>

// //       <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-6">
// //         <div>
// //           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mb-1">Experience</p>
// //           <p className="text-gray-800 font-black text-sm">{job.exp}</p>
// //         </div>
// //         <div>
// //           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mb-1">Annual Salary</p>
// //           <p className="text-gray-800 font-black text-sm">{job.salary}</p>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default JobPostCard;









// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { MapPin, Building2, User, Zap, DollarSign } from 'lucide-react';

// // const JobPostCard = ({ job }) => {
// //   // 1. Agar job prop missing hai toh error na aaye
// //   if (!job) return null;

// //   return (
// //     <motion.div 
// //       layout
// //       initial={{ opacity: 0, y: 15 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       exit={{ opacity: 0, scale: 0.9 }}
// //       className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-2xl transition-all group relative"
// //     >
// //       <div>
// //         <div className="flex justify-between items-start mb-6">
// //           <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center">
// //             <Building2 className="text-indigo-600" size={26} />
// //           </div>
// //           <div className="flex flex-col items-end gap-2">
// //             {/* 2. Optional Chaining (job?.status) crash se bachati hai */}
// //             <span className="text-[10px] font-black px-3 py-1 rounded-lg uppercase bg-purple-50 text-purple-600 border border-purple-100">
// //               {job?.status || "Active"}
// //             </span>
// //             {job?.remote && (
// //               <span className="text-[9px] font-black bg-blue-50 text-blue-500 px-2 py-0.5 rounded flex items-center gap-1">
// //                 <Zap size={10} fill="currentColor"/> REMOTE
// //               </span>
// //             )}
// //           </div>
// //         </div>

// //         <h3 className="text-2xl font-black text-[#1e1b4b] mb-1 group-hover:text-indigo-600 transition-colors leading-tight">
// //           {job?.title || "Position Title"}
// //         </h3>
        
// //         {/* Posted By Section */}
// //         <div className="flex items-center gap-2 mb-4">
// //             <div className="flex items-center gap-1 text-gray-400 text-[11px] font-bold">
// //                 <User size={12}/> {job?.posted_by_name || "Admin"}
// //             </div>
// //             <span className="text-gray-200">|</span>
// //             <div className="text-indigo-500 text-[11px] font-black uppercase tracking-tight">
// //                 {job?.organization_name || "Organization"}
// //             </div>
// //         </div>

// //         {/* Requirements Badges (Backend synced) */}
// //         <div className="flex flex-wrap gap-2 mb-6">
// //           {job?.requirements ? job.requirements.split(',').slice(0, 3).map((req, i) => (
// //             <span key={i} className="bg-gray-50 text-gray-400 text-[9px] font-black px-2.5 py-1.5 rounded-lg border border-gray-100 uppercase">
// //               {req.trim()}
// //             </span>
// //           )) : (
// //             <span className="text-[9px] text-gray-300 font-bold italic uppercase tracking-widest">General Role</span>
// //           )}
// //         </div>

// //         <div className="flex items-center gap-1 text-gray-400 text-xs font-bold mb-6">
// //           <MapPin size={12} className="text-red-400"/> {job?.location || "Not Specified"}
// //         </div>
// //       </div>

// //       <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
// //         <div>
// //           <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-widest">Package</p>
// //           <div className="flex items-center gap-0.5 text-[#1e1b4b] font-black text-sm">
// //             <DollarSign size={14} className="text-emerald-500"/>
// //             {job?.salary_range || "Negotiable"}
// //           </div>
// //         </div>
// //         <button className="bg-indigo-50 text-indigo-600 text-[11px] font-black px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm active:scale-95">
// //           View Details
// //         </button>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default JobPostCard;







// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Building2, User, Zap, DollarSign, Clock } from 'lucide-react';

// const JobPostCard = ({ job }) => {
//   // 1. Safety Check
//   if (!job) return null;

//   // Logic: Agar remote true hai toh "Remote" dikhao, warna original location
//   const displayLocation = job?.remote ? "Remote" : (job?.location || "Not Specified");

//   return (
//     <motion.div 
//       layout
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
//     >
//       {/* Top Accent Line */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

//       <div>
//         <div className="flex justify-between items-start mb-6">
//           <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-indigo-100">
//             <Building2 className="text-indigo-600" size={26} />
//           </div>
//           <div className="flex flex-col items-end gap-2">
//             <span className="text-[10px] font-black px-3 py-1 rounded-lg uppercase bg-purple-50 text-purple-600 border border-purple-100">
//               {job?.status || "Active"}
//             </span>
//             {job?.remote && (
//               <span className="text-[9px] font-black bg-blue-50 text-blue-500 px-2 py-0.5 rounded flex items-center gap-1">
//                 <Zap size={10} fill="currentColor"/> REMOTE
//               </span>
//             )}
//           </div>
//         </div>

//         <h3 className="text-2xl font-black text-[#1e1b4b] mb-1 group-hover:text-indigo-600 transition-colors leading-tight">
//           {job?.title || "Position Title"}
//         </h3>
        
//         <div className="flex items-center gap-2 mb-4">
//             <div className="flex items-center gap-1 text-gray-400 text-[11px] font-bold">
//                 <User size={12}/> {job?.posted_by_name || "Admin"}
//             </div>
//             <span className="text-gray-200">|</span>
//             <div className="text-indigo-500 text-[11px] font-black uppercase tracking-tight">
//                 {/* Yahan organization name ab dynamic aayega */}
//                 {job?.organization_name || "Organization"}
//             </div>
//         </div>

//         {/* Requirements Badges */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {job?.requirements ? job.requirements.split(',').slice(0, 3).map((req, i) => (
//             <span key={i} className="bg-gray-50 text-gray-400 text-[9px] font-black px-2.5 py-1.5 rounded-lg border border-gray-100 uppercase">
//               {req.trim()}
//             </span>
//           )) : (
//             <span className="text-[9px] text-gray-300 font-bold italic uppercase tracking-widest">General Role</span>
//           )}
//         </div>

//         {/* Location & Duration Section */}
//         <div className="flex items-center gap-4 mb-6">
//           <div className="flex items-center gap-1 text-gray-400 text-xs font-bold">
//             <MapPin size={12} className={job?.remote ? "text-blue-400" : "text-red-400"}/> 
//             {displayLocation}
//           </div>
          
//           {/* Sirf Internship ke liye Duration dikhao */}
//           {job?.duration && (
//             <div className="flex items-center gap-1 text-purple-600 text-xs font-bold bg-purple-50 px-2 py-1 rounded-md">
//               <Clock size={12}/> {job?.duration}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="pt-6 border-t border-gray-50 flex justify-between items-center mt-auto">
//         <div>
//           <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-widest">Package</p>
//           <div className="flex items-center gap-0.5 text-[#1e1b4b] font-black text-sm">
//             <DollarSign size={14} className="text-emerald-500"/>
//             {job?.salary_range || "Negotiable"}
//           </div>
//         </div>
//         <button className="bg-indigo-600 text-white text-[11px] font-black px-6 py-3 rounded-xl hover:bg-black transition-all shadow-md active:scale-95">
//           View Details
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default JobPostCard;











// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Building2, User, Zap, DollarSign, Clock } from 'lucide-react';

// const JobPostCard = ({ job }) => {
//   // 1. Safety Check
//   if (!job) return null;

//   // 2. Logic: Hiring type check (job vs internship)
//   const isInternship = job?.hiring_type?.toLowerCase() === 'internship';

//   // 3. Logic: Remote status check for display
//   const displayLocation = job?.remote ? "Remote" : (job?.location || "Not Specified");

//   return (
//     <motion.div 
//       layout
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
//     >
//       {/* Dynamic Top Accent Line based on type */}
//       <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${isInternship ? 'from-purple-500 to-pink-500' : 'from-indigo-500 to-cyan-500'} opacity-0 group-hover:opacity-100 transition-opacity`} />

//       <div>
//         <div className="flex justify-between items-start mb-6">
//           {/* Dynamic Icon Background */}
//           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${isInternship ? 'bg-purple-50 group-hover:bg-purple-100' : 'bg-indigo-50 group-hover:bg-indigo-100'}`}>
//             <Building2 className={isInternship ? 'text-purple-600' : 'text-indigo-600'} size={26} />
//           </div>
          
//           <div className="flex flex-col items-end gap-2">
//             {/* Status Badge */}
//             <span className="text-[10px] font-black px-3 py-1 rounded-lg uppercase bg-green-50 text-green-600 border border-green-100">
//               {job?.status || "Active"}
//             </span>
            
//             {/* Remote Badge */}
//             {job?.remote && (
//               <span className="text-[9px] font-black bg-blue-50 text-blue-500 px-2 py-0.5 rounded flex items-center gap-1">
//                 <Zap size={10} fill="currentColor"/> REMOTE
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Job Title */}
//         <h3 className="text-2xl font-black text-[#1e1b4b] mb-1 group-hover:text-indigo-600 transition-colors leading-tight capitalize">
//           {job?.title || "Position Title"}
//         </h3>
        
//         {/* Poster & Organization Info */}
//         <div className="flex items-center gap-2 mb-4">
//             <div className="flex items-center gap-1 text-gray-400 text-[11px] font-bold">
//                 <User size={12}/> {job?.posted_by_name || "Admin"}
//             </div>
//             <span className="text-gray-200">|</span>
//             <div className="text-indigo-500 text-[11px] font-black uppercase tracking-tight">
//                 {job?.organization_name || "Organization"}
//             </div>
//         </div>

//         {/* Requirements Badges (Comma separated strings handle) */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {job?.requirements ? job.requirements.split(',').slice(0, 3).map((req, i) => (
//             <span key={i} className="bg-gray-50 text-gray-400 text-[9px] font-black px-2.5 py-1.5 rounded-lg border border-gray-100 uppercase">
//               {req.trim()}
//             </span>
//           )) : (
//             <span className="text-[9px] text-gray-300 font-bold italic uppercase tracking-widest">General Role</span>
//           )}
//         </div>

//         {/* Location & Duration Section */}
//         <div className="flex items-center gap-4 mb-6">
//           <div className="flex items-center gap-1 text-gray-400 text-xs font-bold">
//             <MapPin size={12} className={job?.remote ? "text-blue-400" : "text-red-400"}/> 
//             {displayLocation}
//           </div>
          
//           {/* Internship Duration Badge */}
//           {isInternship && job?.duration && (
//             <div className="flex items-center gap-1 text-purple-600 text-xs font-bold bg-purple-50 px-2 py-1 rounded-md">
//               <Clock size={12}/> {job?.duration}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Footer: Package & Action Button */}
//       <div className="pt-6 border-t border-gray-50 flex justify-between items-center mt-auto">
//         <div>
//           <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-widest">Package</p>
//           <div className="flex items-center gap-0.5 text-[#1e1b4b] font-black text-sm">
//             <DollarSign size={14} className="text-emerald-500"/>
//             {job?.salary_range || "Negotiable"}
//           </div>
//         </div>
//         <button className="bg-indigo-600 text-white text-[11px] font-black px-6 py-3 rounded-xl hover:bg-black transition-all shadow-md active:scale-95">
//           View Details
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default JobPostCard;





// import React from "react";
// import { motion } from "framer-motion";
// import {
//   MapPin,
//   User,
//   Zap,
//   DollarSign,
//   Clock,
//   ArrowRight,
//   Briefcase,
//   Sparkles,
//   CalendarDays
// } from "lucide-react";

// const JobPostCard = ({ job }) => {
//   if (!job) return null;

//   const isInternship = job?.hiring_type?.toLowerCase() === "internship";

//   const displayLocation = job?.remote
//     ? "Remote"
//     : job?.location || "Not Specified";

//   const formattedDate = job?.created_at
//     ? new Date(job.created_at).toLocaleDateString()
//     : "Recently";

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -10 }}
//       transition={{ duration: 0.35 }}
//       className="relative group rounded-[2rem] p-[1px] 
//       bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200
//       hover:shadow-2xl transition-all duration-500"
//     >
//       {/* Inner Card */}
//       <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 h-full flex flex-col justify-between">

//         {/* Glow */}
//         <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 
//           ${isInternship 
//             ? "bg-gradient-to-br from-purple-200 via-pink-100 to-transparent" 
//             : "bg-gradient-to-br from-indigo-200 via-cyan-100 to-transparent"}`} 
//         />

//         {/* CONTENT */}
//         <div className="relative z-10">

//           {/* Header */}
//           <div className="flex justify-between items-start mb-4">

//             {/* Icon */}
//             <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner
//               ${isInternship 
//                 ? "bg-purple-100 text-purple-600" 
//                 : "bg-indigo-100 text-indigo-600"}`}
//             >
//               {isInternship ? <Sparkles size={26}/> : <Briefcase size={26}/>}
//             </div>

//             {/* Status + Remote */}
//             <div className="flex flex-col items-end gap-2">
//               <span className="text-[10px] font-bold px-3 py-1 rounded-lg uppercase bg-green-50 text-green-600 border">
//                 {job?.status}
//               </span>

//               {job?.remote && (
//                 <span className="text-[9px] font-bold bg-blue-50 text-blue-500 px-2 py-0.5 rounded flex items-center gap-1">
//                   <Zap size={10} fill="currentColor"/> Remote
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* TITLE */}
//           <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-1">
//             {job?.title}
//           </h3>

//           {/* ORG + USER */}
//           <div className="flex items-center gap-2 text-xs mb-3">
//             <span className="flex items-center gap-1 text-gray-400 font-semibold">
//               <User size={12}/> {job?.posted_by_name}
//             </span>
//             <span className="text-gray-300">|</span>
//             <span className="text-indigo-600 font-bold uppercase">
//               {job?.organization_name}
//             </span>
//           </div>

//           {/* DESCRIPTION (NEW 🔥) */}
//           <p className="text-sm text-gray-500 line-clamp-2 mb-4">
//             {job?.description}
//           </p>

//           {/* SKILLS */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             {job?.requirements
//               ? job.requirements.split(",").slice(0, 4).map((req, i) => (
//                   <span
//                     key={i}
//                     className="text-[10px] font-bold px-3 py-1 rounded-full 
//                     bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
//                   >
//                     {req.trim()}
//                   </span>
//                 ))
//               : (
//                 <span className="text-xs text-gray-300 italic">
//                   General Role
//                 </span>
//               )}
//           </div>

//           {/* LOCATION + DATE */}
//           <div className="flex items-center justify-between text-xs mb-3">

//             <div className="flex items-center gap-1 text-gray-500">
//               <MapPin size={12} className={job?.remote ? "text-blue-400" : "text-red-400"}/>
//               {displayLocation}
//             </div>

//             <div className="flex items-center gap-1 text-gray-400">
//               <CalendarDays size={12}/>
//               {formattedDate}
//             </div>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="relative z-10 flex justify-between items-center pt-4 border-t">

//           {/* Salary / Stipend */}
//           <div>
//             <p className="text-[10px] text-gray-400 font-bold uppercase">
//               {isInternship ? "Stipend" : "Package"}
//             </p>

//             <div className="flex items-center gap-1 font-extrabold text-gray-900">
//               <DollarSign size={14} className="text-emerald-500"/>
//               {job?.salary_range || "Not disclosed"}
//             </div>
//           </div>

//           {/* BUTTON */}
//           <button className={`flex items-center gap-1 text-[11px] font-bold px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95
//             ${isInternship
//               ? "bg-purple-600 hover:bg-black text-white"
//               : "bg-indigo-600 hover:bg-black text-white"}`}
//           >
//             View <ArrowRight size={14}/>
//           </button>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// export default JobPostCard;











import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  User,
  Zap,
  DollarSign,
  ArrowRight,
  Briefcase,
  Sparkles,
  CalendarDays,
  Pencil
} from "lucide-react";

const JobPostCard = ({ job, onView, onEdit }) => {
  if (!job) return null;

  const isInternship = job?.hiring_type?.toLowerCase() === "internship";

  const displayLocation = job?.remote
    ? "Remote"
    : job?.location || "Not Specified";

  const formattedDate = job?.created_at
    ? new Date(job.created_at).toLocaleDateString()
    : "Recently";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full rounded-[2rem] p-[1px] 
      bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200"
    >
      {/* Inner Card */}
      <div className="relative flex flex-col justify-between h-full bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500">

        {/* Glow Effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 
          ${
            isInternship
              ? "bg-gradient-to-br from-purple-200 via-pink-100 to-transparent"
              : "bg-gradient-to-br from-indigo-200 via-cyan-100 to-transparent"
          }`}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex-1 flex flex-col">

          {/* HEADER */}
          <div className="flex justify-between items-start mb-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center
              ${
                isInternship
                  ? "bg-purple-100 text-purple-600"
                  : "bg-indigo-100 text-indigo-600"
              }`}
            >
              {isInternship ? <Sparkles size={26} /> : <Briefcase size={26} />}
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] font-bold px-3 py-1 rounded-lg uppercase bg-green-50 text-green-600 border">
                {job?.status || "active"}
              </span>

              {job?.remote && (
                <span className="text-[9px] font-bold bg-blue-50 text-blue-500 px-2 py-0.5 rounded flex items-center gap-1">
                  <Zap size={10} fill="currentColor" /> Remote
                </span>
              )}
            </div>
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-extrabold text-gray-900 leading-snug mb-1 line-clamp-2 min-h-[44px]">
            {job?.title}
          </h3>

          {/* ORG + USER */}
          <div className="flex items-center gap-2 text-xs mb-2">
            <span className="flex items-center gap-1 text-gray-400 font-semibold">
              <User size={12} /> {job?.posted_by_name}
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-indigo-600 font-bold uppercase truncate max-w-[120px]">
              {job?.organization_name}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-500 line-clamp-2 mb-3 min-h-[40px]">
            {job?.description || "No description"}
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[36px]">
            {job?.requirements ? (
              job.requirements.split(",").slice(0, 3).map((req, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                >
                  {req.trim()}
                </span>
              ))
            ) : (
              <span className="text-xs text-gray-300 italic">
                General Role
              </span>
            )}
          </div>

          {/* LOCATION + DATE */}
          <div className="flex justify-between text-xs text-gray-500 mt-auto">
            <span className="flex items-center gap-1">
              <MapPin
                size={12}
                className={job?.remote ? "text-blue-400" : "text-red-400"}
              />
              {displayLocation}
            </span>

            <span className="flex items-center gap-1">
              <CalendarDays size={12} />
              {formattedDate}
            </span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="relative z-10 pt-4 mt-4 border-t flex justify-between items-center">

          {/* Salary / Stipend */}
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase">
              {isInternship ? "Stipend" : "Package"}
            </p>

            <div className="flex items-center gap-1 font-extrabold text-gray-900 text-sm">
              <DollarSign size={14} className="text-emerald-500" />
              {job?.salary_range || "Not disclosed"}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2">

            {/* VIEW */}
            <button
              onClick={() => onView(job)}
              className={`flex items-center gap-1 text-[11px] font-bold px-4 py-2 rounded-lg shadow
              ${
                isInternship
                  ? "bg-purple-600 hover:bg-black text-white"
                  : "bg-indigo-600 hover:bg-black text-white"
              }`}
            >
              View <ArrowRight size={14} />
            </button>

            {/* EDIT */}
            <button
              onClick={() => onEdit(job)}
              className="flex items-center gap-1 text-[11px] font-bold px-4 py-2 rounded-lg bg-gray-100 hover:bg-black hover:text-white transition"
            >
              <Pencil size={13} />
            </button>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobPostCard;