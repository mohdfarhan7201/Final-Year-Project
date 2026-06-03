// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Plus, Briefcase } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';
// // import JobPostCard from './JobPostCard';

// // const JOB_DATA = [
// //   { id: 1, title: "Lead Product Designer", team: "Design Team", location: "Remote", exp: "2-3 Years", salary: "$12k-$20k", status: "Urgent", category: "Job" },
// //   { id: 2, title: "Senior Fullstack Engineer", team: "Engineering", location: "Hybrid", exp: "2-3 Years", salary: "$12k-$20k", status: "New", category: "Job" },
// //   { id: 3, title: "Marketing Data Analytics", team: "Marketing", location: "Remote", exp: "2-3 Years", salary: "$12k-$20k", status: "Urgent", category: "Job" },
// //   { id: 4, title: "UI Intern", team: "Design Team", location: "Remote", exp: "Fresher", salary: "$5k-$8k", status: "New", category: "Internship" },
// //   { id: 5, title: "Lead Product Designer", team: "Design Team", location: "Remote", exp: "2-3 Years", salary: "$12k-$20k", status: "Urgent", category: "Job" },
// //   { id: 6, title: "Senior Fullstack Engineer", team: "Engineering", location: "Hybrid", exp: "2-3 Years", salary: "$12k-$20k", status: "New", category: "Job" },
// //   { id: 7, title: "Marketing Data Analytics", team: "Marketing", location: "Remote", exp: "2-3 Years", salary: "$12k-$20k", status: "Urgent", category: "Job" },
// //   { id: 8, title: "UI Intern", team: "Design Team", location: "Remote", exp: "Fresher", salary: "$5k-$8k", status: "New", category: "Internship" },
// //   { id: 9, title: "Lead Product Designer", team: "Design Team", location: "Remote", exp: "2-3 Years", salary: "$12k-$20k", status: "Urgent", category: "Job" },
// //   { id: 10, title: "Senior Fullstack Engineer", team: "Engineering", location: "Hybrid", exp: "2-3 Years", salary: "$12k-$20k", status: "New", category: "Job" },
// //   { id: 11, title: "Marketing Data Analytics", team: "Marketing", location: "Remote", exp: "2-3 Years", salary: "$12k-$20k", status: "Urgent", category: "Job" },
// //   { id: 12, title: "UI Intern", team: "Design Team", location: "Remote", exp: "Fresher", salary: "$5k-$8k", status: "New", category: "Internship" },
// // ];

// // const JobBoard = () => {
// //   const [activeTab, setActiveTab] = useState("Job");
// //   const navigate = useNavigate();

// //   const filteredJobs = JOB_DATA.filter(job => 
// //     activeTab === "Job" ? job.category === "Job" : job.category === "Internship"
// //   );

// //   return (
// //     <div className="max-w-7xl mx-auto p-10 bg-[#f8f9fe] min-h-screen rounded-[3rem]">
// //       {/* Header Section */}
// //       <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
// //         <div className="flex items-center gap-8">
// //           <div className="bg-white p-3 rounded-2xl shadow-sm">
// //             <Briefcase className="text-[#8b5cf6]" size={24} />
// //           </div>
          
// //           {/* Tabs with Underline Animation */}
// //           <div className="flex gap-10">
// //             {["Job Posts", "Internship Posts"].map((tab) => {
// //               const isSelected = (tab.startsWith("Job") && activeTab === "Job") || 
// //                                (tab.startsWith("Intern") && activeTab === "Internship");
// //               return (
// //                 <button
// //                   key={tab}
// //                   onClick={() => setActiveTab(tab.startsWith("Job") ? "Job" : "Internship")}
// //                   className="relative pb-2 text-2xl font-bold transition-colors"
// //                   style={{ color: isSelected ? '#3b35b1' : '#9ca3af' }}
// //                 >
// //                   {tab}
// //                   {isSelected && (
// //                     <motion.div 
// //                       layoutId="underline"
// //                       className="absolute bottom-0 left-0 w-full h-1 bg-[#8b5cf6] rounded-full"
// //                     />
// //                   )}
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* Create Post Button */}
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={() => navigate('create-post')}
// //           className="bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-purple-100"
// //         >
// //           <div className="bg-white/20 p-1 rounded-full">
// //             <Plus size={16} />
// //           </div>
// //           Create Posts
// //         </motion.button>
// //       </div>

// //       {/* Scrollable Container */}
// //       <div className="h-[500px] overflow-y-auto pr-4 custom-scrollbar -mt-6">
// //         <motion.div 
// //           layout
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
// //         >
// //           <AnimatePresence mode='popLayout'>
// //             {filteredJobs.map((job) => (
// //               <JobPostCard key={job.id} job={job} />
// //             ))}
// //           </AnimatePresence>
// //         </motion.div>
// //       </div>

// //       <style>{`
// //         .custom-scrollbar::-webkit-scrollbar { width: 6px; }
// //         .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
// //         .custom-scrollbar::-webkit-scrollbar-thumb { 
// //           background: #e2e8f0; 
// //           border-radius: 10px; 
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default JobBoard;






// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Plus, Briefcase, RefreshCw, AlertCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import JobPostCard from './JobPostCard';
// import { useAuth } from '../../../Context/AuthContext';
// import { API_BASE_URL } from '../../../Api/config';

// const JobBoard = () => {
//   const [activeTab, setActiveTab] = useState("Job");
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { authState } = useAuth();

//   const fetchJobs = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`${API_BASE_URL}jobs/`, {
//         headers: { Authorization: `Bearer ${authState.accessToken}` }
//       });
      
//       // API response handle kar rahe hain (data key check kar rahe hain)
//       const dataFromApi = response.data.data || response.data.results || response.data;
      
//       if (Array.isArray(dataFromApi)) {
//         setJobs(dataFromApi);
//       } else {
//         setJobs([]);
//       }
//     } catch (err) {
//       console.error("API Error:", err);
//       setError("Failed to load your vacancies.");
//       setJobs([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // --- YAHAN HAI MAIN FILTER LOGIC ---
//   const filteredJobs = Array.isArray(jobs) ? jobs.filter(job => {
//     // 1. Check Job vs Internship tab
//     const type = job.employment_type?.toLowerCase() || "";
//     const tabMatch = activeTab === "Job" ? type !== "internship" : type === "internship";
    
//     // 2. Sirf Wahi posts dikhao jo CURRENT USER ne post ki hain
//     // Hum match kar rahe hain backend ki 'posted_by' ID aur aapki login ID
//     const isMyPost = job.posted_by === authState.user?.id;

//     return tabMatch && isMyPost; 
//   }) : [];

//   return (
//     <div className="max-w-7xl mx-auto p-6 md:p-10 bg-[#f8f9fe] min-h-screen rounded-[3rem]">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
//         <div className="flex items-center gap-8">
//           <div className="bg-white p-3 rounded-2xl shadow-sm border border-purple-50">
//             <Briefcase className="text-[#8b5cf6]" size={24} />
//           </div>
//           <div className="flex gap-10">
//             {["Job", "Internship"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className="relative pb-2 text-2xl font-black transition-all outline-none"
//                 style={{ color: activeTab === tab ? '#1e1b4b' : '#9ca3af' }}
//               >
//                 My {tab}s
//                 {activeTab === tab && (
//                   <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-1.5 bg-[#8b5cf6] rounded-full" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <button onClick={fetchJobs} className="p-3.5 bg-white rounded-2xl shadow-sm text-gray-400 hover:text-indigo-600 transition-all active:scale-95">
//             <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
//           </button>
//           <button
//             onClick={() => navigate('create-post')}
//             className="bg-[#1e1b4b] text-white px-8 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-black transition-all active:scale-95"
//           >
//             <Plus size={18} strokeWidth={3} /> Post New
//           </button>
//         </div>
//       </div>

//       <div className="h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">
//         {loading ? (
//           <div className="flex flex-col items-center justify-center h-64 text-gray-400 font-bold">
//              <div className="w-12 h-12 border-4 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
//              Loading your posts...
//           </div>
//         ) : (
//           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
//             <AnimatePresence mode="popLayout">
//               {filteredJobs.length > 0 ? (
//                 filteredJobs.map((job) => (
//                   <JobPostCard key={job.id} job={job} />
//                 ))
//               ) : (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
//                   <p className="text-2xl font-black text-gray-300">You haven't posted any {activeTab.toLowerCase()}s yet.</p>
//                   <button onClick={() => navigate('create-post')} className="mt-4 text-indigo-600 font-bold hover:underline">Create your first post now</button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         )}
//       </div>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar { width: 8px; }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 20px; }
//       `}</style>
//     </div>
//   );
// };

// export default JobBoard;











// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Plus, Briefcase, RefreshCw, AlertCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import JobPostCard from './JobPostCard';
// import { useAuth } from '../../../Context/AuthContext';
// import { API_BASE_URL } from '../../../Api/config';

// const JobBoard = () => {
//   const [activeTab, setActiveTab] = useState("Job"); // "Job" or "Internship"
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { authState } = useAuth();

//   const fetchJobs = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`${API_BASE_URL}jobs/`, {
//         headers: { Authorization: `Bearer ${authState.accessToken}` }
//       });
      
//       // API response handle kar rahe hain
//       const dataFromApi = response.data.data || response.data.results || response.data;
      
//       if (Array.isArray(dataFromApi)) {
//         setJobs(dataFromApi);
//       } else {
//         setJobs([]);
//       }
//     } catch (err) {
//       console.error("API Error:", err);
//       setError("Failed to load your vacancies.");
//       setJobs([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // --- UPDATED FILTER LOGIC (Using hiring_type) ---
//   const filteredJobs = Array.isArray(jobs) ? jobs.filter(job => {
//     // 1. Backend ke hiring_type ko check kar rahe hain ('job' ya 'internship')
//     // Isse filter ekdum accurate ho jayega
//     const currentHiringType = job.hiring_type?.toLowerCase() || "";
//     const tabMatch = currentHiringType === activeTab.toLowerCase();
    
//     // 2. Sirf wahi posts jo aapki user ID se match karti hain
//     const isMyPost = job.posted_by === authState.user?.id;

//     return tabMatch && isMyPost; 
//   }) : [];

//   return (
//     <div className="max-w-7xl mx-auto p-6 md:p-10 bg-[#f8f9fe] min-h-screen rounded-[3rem]">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
//         <div className="flex items-center gap-8">
//           <div className="bg-white p-3 rounded-2xl shadow-sm border border-purple-50">
//             <Briefcase className="text-[#8b5cf6]" size={24} />
//           </div>
//           <div className="flex gap-10">
//             {["Job", "Internship"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className="relative pb-2 text-2xl font-black transition-all outline-none"
//                 style={{ color: activeTab === tab ? '#1e1b4b' : '#9ca3af' }}
//               >
//                 My {tab}s
//                 {activeTab === tab && (
//                   <motion.div 
//                     layoutId="underline" 
//                     className="absolute bottom-0 left-0 w-full h-1.5 bg-[#8b5cf6] rounded-full" 
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <button 
//             onClick={fetchJobs} 
//             className="p-3.5 bg-white rounded-2xl shadow-sm text-gray-400 hover:text-indigo-600 transition-all active:scale-95"
//             title="Refresh"
//           >
//             <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
//           </button>
//           <button
//             onClick={() => navigate('create-post')}
//             className="bg-[#1e1b4b] text-white px-8 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-black transition-all active:scale-95"
//           >
//             <Plus size={18} strokeWidth={3} /> Post New
//           </button>
//         </div>
//       </div>

//       <div className="h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">
//         {loading ? (
//           <div className="flex flex-col items-center justify-center h-64 text-gray-400 font-bold">
//              <div className="w-12 h-12 border-4 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
//              Fetching your dashboard...
//           </div>
//         ) : error ? (
//           <div className="flex flex-col items-center justify-center py-20 text-red-400 bg-red-50 rounded-[2rem] border border-red-100">
//              <AlertCircle size={40} className="mb-3"/>
//              <p className="font-black">{error}</p>
//              <button onClick={fetchJobs} className="mt-4 text-sm font-bold underline">Try Again</button>
//           </div>
//         ) : (
//           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
//             <AnimatePresence mode="popLayout">
//               {filteredJobs.length > 0 ? (
//                 filteredJobs.map((job) => (
//                   <JobPostCard key={job.id} job={job} />
//                 ))
//               ) : (
//                 <motion.div 
//                   initial={{ opacity: 0 }} 
//                   animate={{ opacity: 1 }} 
//                   className="col-span-full text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-100"
//                 >
//                   <p className="text-2xl font-black text-gray-300">
//                     You haven't posted any {activeTab.toLowerCase()}s yet.
//                   </p>
//                   <button 
//                     onClick={() => navigate('create-post')} 
//                     className="mt-4 text-indigo-600 font-bold hover:underline"
//                   >
//                     Create your first post now
//                   </button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         )}
//       </div>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar { width: 8px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
//         .custom-scrollbar::-webkit-scrollbar-thumb { 
//           background: #e2e8f0; 
//           border-radius: 20px; 
//           border: 2px solid #f8f9fe;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
//       `}</style>
//     </div>
//   );
// };

// export default JobBoard;












import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Briefcase, RefreshCw, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import JobPostCard from './JobPostCard';
import ViewModal from './ViewModal';
import EditModal from './EditModal';
import { useAuth } from '../../../Context/AuthContext';
import { API_BASE_URL } from '../../../Api/config';

const JobBoard = () => {
  const [activeTab, setActiveTab] = useState("Job");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ NEW STATES
  const [selectedJob, setSelectedJob] = useState(null);
  const [editJob, setEditJob] = useState(null);

  const navigate = useNavigate();
  const { authState } = useAuth();

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}jobs/`, {
        headers: { Authorization: `Bearer ${authState.accessToken}` }
      });

      const dataFromApi =
        response.data.data || response.data.results || response.data;

      if (Array.isArray(dataFromApi)) {
        setJobs(dataFromApi);
      } else {
        setJobs([]);
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to load your vacancies.");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // ✅ FILTER LOGIC (PERFECT)
  const filteredJobs = Array.isArray(jobs)
    ? jobs.filter((job) => {
        const currentHiringType = job.hiring_type?.toLowerCase() || "";
        const tabMatch = currentHiringType === activeTab.toLowerCase();
        const isMyPost = job.posted_by === authState.user?.id;
        return tabMatch && isMyPost;
      })
    : [];

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 bg-[#f8f9fe] min-h-screen rounded-[3rem]">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="flex items-center gap-8">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-purple-50">
            <Briefcase className="text-[#8b5cf6]" size={24} />
          </div>

          <div className="flex gap-10">
            {["Job", "Internship"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative pb-2 text-2xl font-black"
                style={{
                  color: activeTab === tab ? '#1e1b4b' : '#9ca3af'
                }}
              >
                My {tab}s
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-1.5 bg-[#8b5cf6] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={fetchJobs}
            className="p-3.5 bg-white rounded-2xl shadow-sm text-gray-400 hover:text-indigo-600"
          >
            <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
          </button>

          <button
            onClick={() => navigate('create-post')}
            className="bg-[#1e1b4b] text-white px-8 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-black"
          >
            <Plus size={18} /> Post New
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className="h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">

        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400 font-bold">
            <div className="w-12 h-12 border-4 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
            Fetching your dashboard...
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-red-400 bg-red-50 rounded-[2rem] border">
            <AlertCircle size={40} className="mb-3" />
            <p className="font-black">{error}</p>
            <button onClick={fetchJobs} className="mt-4 underline">
              Try Again
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobPostCard
                    key={job.id}
                    job={job}
                    onView={(job) => setSelectedJob(job)}   // ✅ FIX
                    onEdit={(job) => setEditJob(job)}       // ✅ FIX
                  />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-32 bg-white rounded-[3rem] border-2 border-dashed"
                >
                  <p className="text-2xl font-black text-gray-300">
                    You haven't posted any {activeTab.toLowerCase()}s yet.
                  </p>
                  <button
                    onClick={() => navigate('create-post')}
                    className="mt-4 text-indigo-600 font-bold"
                  >
                    Create your first post
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* ✅ VIEW MODAL */}
      {selectedJob && (
        <ViewModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

      {/* ✅ EDIT MODAL */}
      {editJob && (
        <EditModal
          job={editJob}
          onClose={() => setEditJob(null)}
          onSave={(updatedData) => {
            console.log("UPDATED:", updatedData);

            // optional: update UI instantly
            setJobs((prev) =>
              prev.map((j) =>
                j.id === editJob.id ? { ...j, ...updatedData } : j
              )
            );
          }}
        />
      )}

      {/* SCROLLBAR */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 20px;
        }
      `}</style>

    </div>
  );
};

export default JobBoard;