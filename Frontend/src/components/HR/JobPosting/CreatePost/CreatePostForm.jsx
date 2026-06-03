// // import React, { useState, useRef, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import { ChevronLeft, Globe2, BriefcaseBusiness, Home, Plus } from 'lucide-react';

// // export const FloatingInput = ({ label, placeholder, type = "text" }) => (
// //   <div className="relative mb-6">
// //     <input 
// //       type={type} 
// //       placeholder={placeholder}
// //       className="w-full bg-[#fcfaff] border-none rounded-xl px-5 py-4 text-sm focus:ring-1 focus:ring-purple-200 placeholder:text-gray-300 font-medium outline-none"
// //     />
// //     <label className="absolute left-5 -top-2.5 bg-white px-2 text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
// //       {label}
// //     </label>
// //   </div>
// // );

// // const OperationModelCard = ({ id, icon: Icon, title, subtitle, isActive, onClick }) => (
// //   <motion.button
// //     type="button"
// //     onClick={() => onClick(id)}
// //     whileHover={{ y: -2 }}
// //     className={`flex-1 flex items-center gap-4 p-5 rounded-2xl border-2 transition-all group min-w-[200px] text-left
// //       ${isActive 
// //         ? 'bg-gradient-to-r from-pink-500 to-indigo-600 text-white border-transparent' 
// //         : 'bg-white text-gray-800 border-gray-100 hover:border-purple-100 shadow-sm'
// //       }`}
// //   >
// //     <div className={`p-2.5 h-fit rounded-full transition-colors ${isActive ? 'bg-white' : 'bg-gray-100'}`}>
// //       <Icon size={20} className={`${isActive ? 'text-indigo-600' : 'text-gray-600'}`} />
// //     </div>
// //     <div>
// //       <h4 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}>{title}</h4>
// //       <p className={`text-[11px] leading-tight ${isActive ? 'text-white/80' : 'text-gray-400'}`}>{subtitle}</p>
// //     </div>
// //   </motion.button>
// // );

// // const CreatePostForm = ({ formType, onToggle, onBack, children }) => {
// //   const [selectedModel, setSelectedModel] = useState("remote");
  
// //   // Ref for dynamic slider movement
// //   const jobRef = useRef(null);
// //   const internRef = useRef(null);
// //   const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

// //   // Slider ki width aur position update karne ke liye logic
// //   useEffect(() => {
// //     const activeRef = formType === 'job' ? jobRef.current : internRef.current;
// //     if (activeRef) {
// //       setSliderStyle({
// //         left: activeRef.offsetLeft,
// //         width: activeRef.offsetWidth
// //       });
// //     }
// //   }, [formType]);

// //   const models = [
// //     { id: "remote", icon: Globe2, title: "Remote", subtitle: "Work from anywhere" },
// //     { id: "inoffice", icon: BriefcaseBusiness, title: "In-Office", subtitle: "Fixed HQ performance" },
// //     { id: "hybrid", icon: Home, title: "Hybrid", subtitle: "Mixed flexibility" },
// //   ];
  

// //   return (
// //     <motion.form 
// //       initial={{ opacity: 0, y: 10 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="bg-white p-10 rounded-[3rem] shadow-lg border border-gray-100 max-w-5xl w-full mx-auto"
// //     >
// //       {/* Header Section */}
// //       <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-50">
// //         <h1 className="text-3xl font-black text-gray-800">Create New Post</h1>
        
// //         <div className="flex items-center gap-4">
// //           {/* Responsive Toggle Switch */}
// //           <div className="bg-[#f0efff] p-1 rounded-full flex relative items-center overflow-hidden">
// //             <button 
// //               ref={jobRef}
// //               type="button"
// //               onClick={() => onToggle('job')}
// //               className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all z-10 whitespace-nowrap ${formType === 'job' ? 'text-white' : 'text-purple-400'}`}
// //             >
// //               Job Post
// //             </button>
// //             <button 
// //               ref={internRef}
// //               type="button"
// //               onClick={() => onToggle('internship')}
// //               className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all z-10 whitespace-nowrap ${formType === 'internship' ? 'text-white' : 'text-purple-400'}`}
// //             >
// //               Internship
// //             </button>
            
// //             {/* Smooth Dynamic Slider */}
// //             <motion.div 
// //               className="absolute bg-[#a855f7] h-[80%] rounded-full shadow-md shadow-purple-200"
// //               animate={{ 
// //                 left: sliderStyle.left,
// //                 width: sliderStyle.width 
// //               }}
// //               transition={{ type: "spring", stiffness: 350, damping: 30 }}
// //             />
// //           </div>

// //           {/* Back Button */}
// //           <button 
// //             type="button" 
// //             onClick={onBack}
// //             className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-all hover:border-purple-300"
// //           >
// //             <ChevronLeft size={20} />
// //           </button>
// //         </div>
// //       </div>

// //       {/* 1. Core Vacancy Details */}
// //       <section className="mb-10">
// //         <h2 className="text-xl font-bold text-gray-800 mb-6">Core Vacancy Details</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
// //           {children}
// //         </div>
// //       </section>

// //       {/* 2. Operation Model */}
// //       <section className="mb-10">
// //         <h2 className="text-xl font-bold text-gray-800 mb-6">Operation Model</h2>
// //         <div className="flex flex-col md:flex-row gap-6">
// //           {models.map((model) => (
// //             <OperationModelCard
// //               key={model.id}
// //               {...model}
// //               isActive={selectedModel === model.id}
// //               onClick={setSelectedModel}
// //             />
// //           ))}
// //         </div>
// //       </section>

// //       {/* 3. Company Branding */}
// //       <section className="mb-10">
// //         <h2 className="text-xl font-bold text-gray-800 mb-6">Company Branding</h2>
// //         <div className="flex flex-col md:flex-row items-center gap-8">
// //           <div className="w-28 h-28 bg-[#f5f3ff] rounded-[1.5rem] flex flex-col items-center justify-center border-2 border-dashed border-purple-100 p-3 cursor-pointer hover:border-purple-300 transition-colors">
// //             <Plus size={24} className="text-[#a855f7] mb-2" />
// //             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Upload Logo</p>
// //           </div>
// //           <div className="flex-1 w-full">
// //             <FloatingInput label="Company Name (Optional)" placeholder="e.g., Stripe, Airbnb" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* 4. Position Overview */}
// //       <section className="mb-12 relative">
// //         <h2 className="text-xl font-bold text-gray-800 mb-6">Position Overview</h2>
// //         <textarea 
// //           placeholder="Detailed job description..."
// //           className="w-full h-40 bg-[#fcfaff] border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-1 focus:ring-purple-200 placeholder:text-gray-300 font-medium resize-none outline-none"
// //         />
// //         <label className="absolute left-5 -top-2.5 bg-white px-2 text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
// //           Job Description
// //         </label>
// //       </section>

// //       {/* Buttons */}
// //       <div className="flex justify-end gap-3 pt-6 border-t border-gray-50">
// //         <button type="button" className="bg-[#f0efff] text-indigo-700 px-8 py-3 rounded-2xl font-bold hover:bg-indigo-100 transition-colors">
// //           Draft Job
// //         </button>
// //         <button type="submit" className="bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white px-10 py-3 rounded-2xl font-bold shadow-lg shadow-purple-100 hover:opacity-90 transition-all">
// //           Post
// //         </button>
// //       </div>
// //     </motion.form>
// //   );
// // };

// // export default CreatePostForm;









// // import React, { useState, useRef, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import axios from 'axios';
// // import { useAuth } from '../../../../Context/AuthContext'; // Global state se token lene ke liye
// // import { API_BASE_URL } from '../../../../Api/config';
// // import { ChevronLeft, Plus, Globe, User, CheckCircle2 } from 'lucide-react';


// // export const FloatingInput = ({ label, placeholder, name, value, onChange }) => (
// //   <div className="relative mb-6">
// //     <input 
// //       name={name}
// //       value={value || ""}
// //       onChange={onChange}
// //       placeholder={placeholder}
// //       className="w-full bg-[#fcfaff] border-none rounded-xl px-5 py-4 text-sm focus:ring-1 focus:ring-purple-200 outline-none font-medium"
// //     />
// //     <label className="absolute left-5 -top-2.5 bg-white px-2 text-[11px] font-black text-indigo-700 uppercase tracking-wider">{label}</label>
// //   </div>
// // );

// // const CreatePostForm = ({ formType, onToggle, onBack, children, orgData, setOrgData, postDetails, setPostDetails }) => {
// //   const { authState } = useAuth();
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       const orgRes = await axios.post(`${API_BASE_URL}organizations/`, {
// //         name: orgData.name,
// //         industry: "Technology",
// //         description: orgData.description,
// //         location: postDetails.location,
// //       }, {
// //         headers: { Authorization: `Bearer ${authState.accessToken}` }
// //       });

// //       const jobPayload = {
// //         organization: orgRes.data.id,
// //         posted_by_name: postDetails.posted_by_name,
// //         title: postDetails.title,
// //         description: orgData.description,
// //         requirements: postDetails.requirements,
// //         salary_range: postDetails.salary_range,
// //         location: postDetails.location,
// //         remote: postDetails.remote,
// //         employment_type: formType === 'job' ? "full_time" : "internship",
// //         status: "active"
// //       };

// //       await axios.post(`${API_BASE_URL}jobs/`, jobPayload, {
// //         headers: { Authorization: `Bearer ${authState.accessToken}` }
// //       });

// //       alert("Success!");
// //       onBack();
// //     } catch (err) {
// //       console.error(err);
// //       alert("Error saving post");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <motion.form onSubmit={handleSubmit} className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-5xl mx-auto border border-gray-50">
// //       <div className="flex justify-between items-center mb-10 pb-6 border-b">
// //         <h1 className="text-3xl font-black text-[#1e1b4b]">New {formType}</h1>
// //         <div className="flex gap-4">
// //           <div className="bg-gray-100 p-1 rounded-full flex">
// //             <button type="button" onClick={() => onToggle('job')} className={`px-6 py-2 rounded-full text-[10px] font-black ${formType === 'job' ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}>JOB</button>
// //             <button type="button" onClick={() => onToggle('internship')} className={`px-6 py-2 rounded-full text-[10px] font-black ${formType === 'internship' ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}>INTERNSHIP</button>
// //           </div>
// //           <button type="button" onClick={onBack} className="p-2 border rounded-full hover:bg-gray-50"><ChevronLeft size={20}/></button>
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
// //         {children}
        
// //         {/* Posted By Name */}
// //         <FloatingInput 
// //             label="Posted By" 
// //             name="posted_by_name" 
// //             value={postDetails.posted_by_name} 
// //             onChange={(e) => setPostDetails({...postDetails, posted_by_name: e.target.value})} 
// //             placeholder="Your Name" 
// //         />
        
// //         {/* Remote Toggle Fix */}
// //         <div className="flex items-center justify-between bg-[#fcfaff] px-5 py-4 rounded-xl mb-6">
// //             <div className="flex items-center gap-3">
// //                 <Globe size={18} className="text-indigo-600"/>
// //                 <span className="text-sm font-bold text-gray-700">Remote Work</span>
// //             </div>
// //             <div 
// //                 onClick={() => setPostDetails(prev => ({...prev, remote: !prev.remote}))}
// //                 className={`w-12 h-6 rounded-full cursor-pointer transition-all relative ${postDetails.remote ? 'bg-indigo-600' : 'bg-gray-300'}`}
// //             >
// //                 <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${postDetails.remote ? 'left-7' : 'left-1'}`} />
// //             </div>
// //         </div>
// //       </div>

// //       <div className="mb-6">
// //         <FloatingInput 
// //           label="Company Name" 
// //           value={orgData.name} 
// //           onChange={(e) => setOrgData({...orgData, name: e.target.value})} 
// //           placeholder="Uphirex" 
// //         />
// //       </div>

// //       <div className="relative mb-10">
// //         <label className="absolute left-5 -top-2.5 bg-white px-2 text-[11px] font-black text-indigo-700 uppercase tracking-wider">About Role</label>
// //         <textarea 
// //           value={orgData.description} 
// //           onChange={(e) => setOrgData({...orgData, description: e.target.value})}
// //           className="w-full h-32 bg-[#fcfaff] border-none rounded-2xl p-5 outline-none focus:ring-1 focus:ring-purple-200 text-sm font-medium resize-none"
// //         />
// //       </div>

// //       <div className="flex justify-end">
// //         <button type="submit" disabled={loading} className="bg-[#1e1b4b] text-white px-12 py-4 rounded-[2rem] font-black shadow-xl hover:scale-105 transition-all">
// //           {loading ? "Publishing..." : "Publish Vacancy"}
// //         </button>
// //       </div>
// //     </motion.form>
// //   );
// // };

// // export default CreatePostForm;











// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, Globe, Clock } from 'lucide-react';
// import axios from 'axios';
// import { useAuth } from '../../../../Context/AuthContext'; 
// import { API_BASE_URL } from '../../../../Api/config';

// export const FloatingInput = ({ label, placeholder, name, value, onChange, disabled }) => (
//   <div className="relative mb-6">
//     <input 
//       name={name}
//       value={value || ""}
//       onChange={onChange}
//       disabled={disabled}
//       placeholder={placeholder}
//       className={`w-full bg-[#fcfaff] border-none rounded-xl px-5 py-4 text-sm focus:ring-1 focus:ring-purple-200 outline-none font-medium ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
//     />
//     <label className="absolute left-5 -top-2.5 bg-white px-2 text-[11px] font-black text-indigo-700 uppercase tracking-wider">{label}</label>
//   </div>
// );

// const CreatePostForm = ({ formType, onToggle, onBack, children, orgData, setOrgData, postDetails, setPostDetails }) => {
//   const { authState } = useAuth();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // 1. Pehle Organization create/update karte hain
//       const orgRes = await axios.post(`${API_BASE_URL}organizations/`, {
//         name: orgData.name,
//         industry: "Technology",
//         description: orgData.description || "Tech Company",
//       }, {
//         headers: { Authorization: `Bearer ${authState.accessToken}` }
//       });

//       // 2. Job/Internship Payload (Ab duration ke saath)
//       const jobPayload = {
//         organization: orgRes.data.id, // Fresh Org ID
//         posted_by_name: postDetails.posted_by_name,
//         title: postDetails.title,
//         description: orgData.description,
//         requirements: postDetails.requirements,
//         salary_range: postDetails.salary_range,
//         location: postDetails.remote ? "Remote" : postDetails.location,
//         remote: postDetails.remote,
//         duration: formType === 'internship' ? postDetails.duration : null, // Only for Internship
//         employment_type: formType === 'job' ? "full_time" : "internship",
//         status: "active"
//       };

//       await axios.post(`${API_BASE_URL}jobs/`, jobPayload, {
//         headers: { Authorization: `Bearer ${authState.accessToken}` }
//       });

//       alert("Post Published Successfully!");
//       onBack();
//     } catch (err) {
//       console.error(err);
//       alert("Error saving post");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.form onSubmit={handleSubmit} className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-5xl mx-auto border border-gray-50">
//       <div className="flex justify-between items-center mb-10 pb-6 border-b">
//         <h1 className="text-3xl font-black text-[#1e1b4b]">New {formType}</h1>
//         <div className="flex gap-4">
//           <div className="bg-gray-100 p-1 rounded-full flex">
//             <button type="button" onClick={() => onToggle('job')} className={`px-6 py-2 rounded-full text-[10px] font-black ${formType === 'job' ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}>JOB</button>
//             <button type="button" onClick={() => onToggle('internship')} className={`px-6 py-2 rounded-full text-[10px] font-black ${formType === 'internship' ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}>INTERNSHIP</button>
//           </div>
//           <button type="button" onClick={onBack} className="p-2 border rounded-full hover:bg-gray-50"><ChevronLeft size={20}/></button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
//         {children}
        
//         {/* Remote Toggle */}
//         <div className="flex items-center justify-between bg-[#fcfaff] px-5 py-4 rounded-xl mb-6">
//             <div className="flex items-center gap-3">
//                 <Globe size={18} className="text-indigo-600"/>
//                 <span className="text-sm font-bold text-gray-700">Remote Work</span>
//             </div>
//             <div 
//                 onClick={() => setPostDetails(prev => ({...prev, remote: !prev.remote}))}
//                 className={`w-12 h-6 rounded-full cursor-pointer transition-all relative ${postDetails.remote ? 'bg-indigo-600' : 'bg-gray-300'}`}
//             >
//                 <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${postDetails.remote ? 'left-7' : 'left-1'}`} />
//             </div>
//         </div>

//         {/* Internship Duration Field (Only shows for internship) */}
//         {formType === 'internship' && (
//           <FloatingInput 
//             label="Duration" 
//             name="duration" 
//             value={postDetails.duration} 
//             onChange={(e) => setPostDetails({...postDetails, duration: e.target.value})} 
//             placeholder="e.g., 6 Months" 
//           />
//         )}
//       </div>

//       <div className="mb-6">
//         <FloatingInput 
//           label="Company Name" 
//           value={orgData.name} 
//           onChange={(e) => setOrgData({...orgData, name: e.target.value})} 
//           placeholder="Uphirex" 
//         />
//       </div>

//       <div className="relative mb-10">
//         <label className="absolute left-5 -top-2.5 bg-white px-2 text-[11px] font-black text-indigo-700 uppercase tracking-wider">About Role</label>
//         <textarea 
//           value={orgData.description} 
//           onChange={(e) => setOrgData({...orgData, description: e.target.value})}
//           className="w-full h-32 bg-[#fcfaff] border-none rounded-2xl p-5 outline-none focus:ring-1 focus:ring-purple-200 text-sm font-medium resize-none"
//         />
//       </div>

//       <div className="flex justify-end">
//         <button type="submit" disabled={loading} className="bg-[#1e1b4b] text-white px-12 py-4 rounded-[2rem] font-black shadow-xl hover:scale-105 transition-all">
//           {loading ? "Publishing..." : "Publish Vacancy"}
//         </button>
//       </div>
//     </motion.form>
//   );
// };

// export default CreatePostForm;












import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Globe } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../../../../Context/AuthContext'; 
import { API_BASE_URL } from '../../../../Api/config';

// Reusable Input Component
export const FloatingInput = ({ label, placeholder, name, value, onChange, disabled }) => (
  <div className="relative mb-6">
    <input 
      name={name}
      value={value || ""}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      className={`w-full bg-[#fcfaff] border-none rounded-xl px-5 py-4 text-sm focus:ring-1 focus:ring-purple-200 outline-none font-medium ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    />
    <label className="absolute left-5 -top-2.5 bg-white px-2 text-[11px] font-black text-indigo-700 uppercase tracking-wider">{label}</label>
  </div>
);

const CreatePostForm = ({ formType, onToggle, onBack, children, orgData, setOrgData, postDetails, setPostDetails }) => {
  const { authState } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Organization create/update logic
      // Hum technology ko default rakh rahe hain aur user input description use kar rahe hain
      const orgRes = await axios.post(`${API_BASE_URL}organizations/`, {
        name: orgData.name,
        industry: "Technology",
        description: orgData.description || "Tech Company",
      }, {
        headers: { Authorization: `Bearer ${authState.accessToken}` }
      });

      // 2. Job/Internship Payload with hiring_type logic
      const jobPayload = {
        organization: orgRes.data.id, // Freshly created or retrieved Org ID
        posted_by_name: postDetails.posted_by_name,
        organization_name: orgData.name, // Display ke liye redundant check
        title: postDetails.title,
        description: orgData.description,
        requirements: postDetails.requirements,
        salary_range: postDetails.salary_range,
        location: postDetails.remote ? "Remote" : postDetails.location,
        remote: postDetails.remote,
        duration: formType === 'internship' ? postDetails.duration : null, // Only if internship
        hiring_type: formType, // Yahan 'job' ya 'internship' jayega as per your backend change
        status: "active"
      };

      await axios.post(`${API_BASE_URL}jobs/`, jobPayload, {
        headers: { Authorization: `Bearer ${authState.accessToken}` }
      });

      alert(`${formType.toUpperCase()} Published Successfully!`);
      onBack();
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Failed to publish post. Please check your network or token.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit} 
      className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-5xl mx-auto border border-gray-50"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10 pb-6 border-b">
        <h1 className="text-3xl font-black text-[#1e1b4b] capitalize">New {formType}</h1>
        <div className="flex gap-4">
          <div className="bg-gray-100 p-1 rounded-full flex">
            {['job', 'internship'].map((type) => (
              <button 
                key={type}
                type="button" 
                onClick={() => onToggle(type)} 
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all ${formType === type ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {type}
              </button>
            ))}
          </div>
          <button type="button" onClick={onBack} className="p-2 border rounded-full hover:bg-gray-100 transition-colors">
            <ChevronLeft size={20}/>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* Title, Requirements, Salary etc. are passed as children */}
        {children}
        
        {/* Remote Toggle */}
        <div className="flex items-center justify-between bg-[#fcfaff] px-5 py-4 rounded-xl mb-6">
            <div className="flex items-center gap-3">
                <Globe size={18} className="text-indigo-600"/>
                <span className="text-sm font-bold text-gray-700">Remote Work</span>
            </div>
            <div 
                onClick={() => setPostDetails(prev => ({...prev, remote: !prev.remote}))}
                className={`w-12 h-6 rounded-full cursor-pointer transition-all relative ${postDetails.remote ? 'bg-indigo-600' : 'bg-gray-300'}`}
            >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${postDetails.remote ? 'left-7' : 'left-1'}`} />
            </div>
        </div>

        {/* Internship Duration Field */}
        {formType === 'internship' && (
          <FloatingInput 
            label="Internship Duration" 
            name="duration" 
            value={postDetails.duration} 
            onChange={(e) => setPostDetails({...postDetails, duration: e.target.value})} 
            placeholder="e.g., 3 Months or 6 Months" 
          />
        )}
      </div>

      {/* Company Selection/Input */}
      <div className="mb-6">
        <FloatingInput 
          label="Company Name" 
          value={orgData.name} 
          onChange={(e) => setOrgData({...orgData, name: e.target.value})} 
          placeholder="Enter Organization Name" 
        />
      </div>

      {/* Role Description */}
      <div className="relative mb-10">
        <label className="absolute left-5 -top-2.5 bg-white px-2 text-[11px] font-black text-indigo-700 uppercase tracking-wider">Role Description & Responsibilities</label>
        <textarea 
          value={orgData.description} 
          onChange={(e) => setOrgData({...orgData, description: e.target.value})}
          placeholder="Describe the role in detail..."
          className="w-full h-40 bg-[#fcfaff] border-none rounded-2xl p-5 outline-none focus:ring-1 focus:ring-purple-200 text-sm font-medium resize-none shadow-inner"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center gap-6">
        <button type="button" onClick={onBack} className="text-sm font-bold text-gray-400 hover:text-gray-600">Cancel</button>
        <button 
          type="submit" 
          disabled={loading} 
          className="bg-[#1e1b4b] text-white px-12 py-4 rounded-[2rem] font-black shadow-xl hover:bg-black hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
              Publishing...
            </div>
          ) : `Publish ${formType}`}
        </button>
      </div>
    </motion.form>
  );
};

export default CreatePostForm;