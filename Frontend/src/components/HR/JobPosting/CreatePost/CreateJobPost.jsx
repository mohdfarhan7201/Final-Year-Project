// // import React from 'react';
// // import CreatePostForm, { FloatingInput } from './CreatePostForm'; 

// // const CreateJobPost = ({ onToggle, onBack }) => {
// //   return (
// //     <CreatePostForm formType="job" onToggle={onToggle} onBack={onBack}>
// //       <FloatingInput label="Role Title" placeholder="e.g., Senior Product Designer" />
// //       <FloatingInput label="Department" placeholder="e.g., Design Team" />
// //       <FloatingInput label="Experience" placeholder="e.g., 2-3 Years" />
// //       <FloatingInput label="Salary Range (Annual)" placeholder="e.g., $140k - $180k" />
// //     </CreatePostForm>
// //   );
// // };
// // export default CreateJobPost;






// // import React from 'react';
// // import CreatePostForm, { FloatingInput } from './CreatePostForm'; 

// // const CreateJobPost = ({ onToggle, onBack, orgData, setOrgData, postDetails, setPostDetails }) => {
// //   // Input handling logic
// //   const handleInput = (e) => {
// //     const { name, value } = e.target;
// //     setPostDetails(prev => ({ ...prev, [name]: value }));
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto">
// //       <CreatePostForm 
// //         formType="job" 
// //         onToggle={onToggle} 
// //         onBack={onBack} 
// //         orgData={orgData} 
// //         setOrgData={setOrgData}
// //         postDetails={postDetails}
// //         setPostDetails={setPostDetails}
// //       >
// //         {/* Saare inputs jo aapko chahiye */}
// //         <FloatingInput 
// //           label="Job Title" 
// //           name="title" 
// //           value={postDetails?.title} 
// //           onChange={handleInput} 
// //           placeholder="e.g., Frontend Developer" 
// //         />
// //         <FloatingInput 
// //           label="Salary / Package" 
// //           name="salary_range" 
// //           value={postDetails?.salary_range} 
// //           onChange={handleInput} 
// //           placeholder="e.g., 5-7 LPA" 
// //         />
// //         <FloatingInput 
// //           label="Location" 
// //           name="location" 
// //           value={postDetails?.location} 
// //           onChange={handleInput} 
// //           placeholder="e.g., Bangalore, India" 
// //         />
// //         <FloatingInput 
// //           label="Requirements (Comma separated)" 
// //           name="requirements" 
// //           value={postDetails?.requirements} 
// //           onChange={handleInput} 
// //           placeholder="React, Tailwind, Node.js" 
// //         />
// //       </CreatePostForm>
// //     </div>
// //   );
// // };

// // export default CreateJobPost;





// import React from 'react';
// import CreatePostForm, { FloatingInput } from './CreatePostForm'; 

// const CreateJobPost = ({ onToggle, onBack, orgData, setOrgData, postDetails, setPostDetails }) => {
//   const handleInput = (e) => setPostDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));

//   return (
//     <div className="max-w-4xl mx-auto">
//       <CreatePostForm 
//         formType="job" 
//         onToggle={onToggle} 
//         onBack={onBack} 
//         orgData={orgData} 
//         setOrgData={setOrgData}
//         postDetails={postDetails}
//         setPostDetails={setPostDetails}
//       >
//         <FloatingInput label="Job Title" name="title" value={postDetails?.title} onChange={handleInput} placeholder="e.g., Senior Developer" />
//         <FloatingInput label="Salary" name="salary_range" value={postDetails?.salary_range} onChange={handleInput} placeholder="e.g., 10-15 LPA" />
        
//         {/* Location Fix: Disable if Remote is ON */}
//         <FloatingInput 
//             label="Location" 
//             name="location" 
//             value={postDetails?.remote ? "Remote" : postDetails?.location} 
//             onChange={handleInput} 
//             disabled={postDetails?.remote} 
//             placeholder="e.g., Mumbai" 
//         />
        
//         <FloatingInput label="Requirements" name="requirements" value={postDetails?.requirements} onChange={handleInput} placeholder="React, Node" />
//       </CreatePostForm>
//     </div>
//   );
// };

// export default CreateJobPost;










import React from 'react';
import CreatePostForm, { FloatingInput } from './CreatePostForm'; 

const CreateJobPost = ({ onToggle, onBack, orgData, setOrgData, postDetails, setPostDetails }) => {
  
  // Generic input handler for post details
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPostDetails(prev => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <CreatePostForm 
        formType="job" 
        onToggle={onToggle} 
        onBack={onBack} 
        orgData={orgData} 
        setOrgData={setOrgData}
        postDetails={postDetails}
        setPostDetails={setPostDetails}
      >
        {/* Job Title */}
        <FloatingInput 
          label="Job Title" 
          name="title" 
          value={postDetails?.title} 
          onChange={handleInput} 
          placeholder="e.g., Senior React Developer" 
        />

        {/* Poster Name - Important for your backend structure */}
        <FloatingInput 
          label="Your Name / Recruiter Name" 
          name="posted_by_name" 
          value={postDetails?.posted_by_name} 
          onChange={handleInput} 
          placeholder="e.g., Ankit Singh" 
        />

        {/* Salary Range */}
        <FloatingInput 
          label="Salary Range" 
          name="salary_range" 
          value={postDetails?.salary_range} 
          onChange={handleInput} 
          placeholder="e.g., 12-18 LPA" 
        />
        
        {/* Location Fix: Remote logic handled here and in parent */}
        <FloatingInput 
          label="Office Location" 
          name="location" 
          value={postDetails?.remote ? "Remote" : postDetails?.location} 
          onChange={handleInput} 
          disabled={postDetails?.remote} 
          placeholder={postDetails?.remote ? "Location set to Remote" : "e.g., Bangalore, India"} 
        />
        
        {/* Key Skills/Requirements */}
        <FloatingInput 
          label="Requirements (Comma Separated)" 
          name="requirements" 
          value={postDetails?.requirements} 
          onChange={handleInput} 
          placeholder="e.g., React, Tailwind CSS, Node.js" 
        />
      </CreatePostForm>
    </div>
  );
};

export default CreateJobPost;