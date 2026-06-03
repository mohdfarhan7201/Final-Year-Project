// // import React, { useState } from 'react';
// // import { AnimatePresence, motion } from 'framer-motion';
// // import CreateJobPost from './CreateJobPost';
// // import CreateInternshipPost from './CreateInternshipPost';

// // const CreatePostParent = () => {
// //   const [activeType, setActiveType] = useState('job');

// //   const handleBack = () => {
// //     console.log("Back button clicked");
// //     // Aap yahan navigation logic dal sakte hain: navigate(-1)
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f8f9fd] py-6 px-6">
// //       <AnimatePresence mode="wait">
// //         <motion.div
// //           key={activeType}
// //           initial={{ opacity: 0, x: 20 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           exit={{ opacity: 0, x: -20 }}
// //           transition={{ duration: 0.2 }}
// //         >
// //           {activeType === 'job' ? (
// //             <CreateJobPost 
// //               onToggle={setActiveType} 
// //               onBack={handleBack} 
// //             />
// //           ) : (
// //             <CreateInternshipPost 
// //               onToggle={setActiveType} 
// //               onBack={handleBack} 
// //             />
// //           )}
// //         </motion.div>
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default CreatePostParent;











// import React, { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import CreateJobPost from './CreateJobPost';
// import CreateInternshipPost from './CreateInternshipPost';

// const CreatePostParent = () => {
//   const navigate = useNavigate();
//   const [activeType, setActiveType] = useState('job');

//   const [orgData, setOrgData] = useState({
//     name: "",
//     description: "",
//   });

//   // Default values set kar di hain taaki undefined ka error na aaye
//   const [jobDetails, setJobDetails] = useState({ 
//     title: "", 
//     salary_range: "", 
//     location: "", 
//     requirements: "",
//     posted_by_name: "", 
//     remote: true 
//   });

//   const [internshipDetails, setInternshipDetails] = useState({ 
//     title: "", 
//     salary_range: "", 
//     location: "", 
//     requirements: "",
//     posted_by_name: "", 
//     remote: true 
//   });

//   const handleBack = () => navigate(-1);

//   return (
//     <div className="min-h-screen bg-[#f8f9fd] py-12 px-4 md:px-10">
//       <AnimatePresence mode="wait">
//         <motion.div 
//           key={activeType} 
//           initial={{ opacity: 0, y: 10 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           exit={{ opacity: 0, y: -10 }}
//         >
//           {activeType === 'job' ? (
//             <CreateJobPost 
//               onToggle={setActiveType} 
//               onBack={handleBack} 
//               orgData={orgData} 
//               setOrgData={setOrgData} 
//               postDetails={jobDetails} 
//               setPostDetails={setJobDetails} 
//             />
//           ) : (
//             <CreateInternshipPost 
//               onToggle={setActiveType} 
//               onBack={handleBack} 
//               orgData={orgData} 
//               setOrgData={setOrgData} 
//               postDetails={internshipDetails} 
//               setPostDetails={setInternshipDetails} 
//             />
//           )}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CreatePostParent;






import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CreateJobPost from './CreateJobPost';
import CreateInternshipPost from './CreateInternshipPost';

const CreatePostParent = () => {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState('job');

  // Organization data shared across forms
  const [orgData, setOrgData] = useState({
    name: "",
    description: "",
  });

  // Job specific details
  const [jobDetails, setJobDetails] = useState({ 
    title: "", 
    salary_range: "", 
    location: "", 
    requirements: "",
    posted_by_name: "", 
    remote: true 
  });

  // Internship specific details (Added duration field)
  const [internshipDetails, setInternshipDetails] = useState({ 
    title: "", 
    salary_range: "", 
    location: "", 
    requirements: "",
    posted_by_name: "", 
    duration: "", // Added for internship logic
    remote: true 
  });

  const handleBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-[#f8f9fd] py-12 px-4 md:px-10">
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeType} 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activeType === 'job' ? (
            <CreateJobPost 
              onToggle={setActiveType} 
              onBack={handleBack} 
              orgData={orgData} 
              setOrgData={setOrgData} 
              postDetails={jobDetails} 
              setPostDetails={setJobDetails} 
            />
          ) : (
            <CreateInternshipPost 
              onToggle={setActiveType} 
              onBack={handleBack} 
              orgData={orgData} 
              setOrgData={setOrgData} 
              postDetails={internshipDetails} 
              setPostDetails={setInternshipDetails} 
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CreatePostParent;