// // import React from 'react';
// // import CreatePostForm, { FloatingInput } from './CreatePostForm'; 

// // const CreateInternshipPost = ({ onToggle, onBack }) => {
// //   return (
// //     <CreatePostForm formType="internship" onToggle={onToggle} onBack={onBack}>
// //       <FloatingInput label="Role Title" placeholder="e.g., UI/UX Intern" />
// //       <FloatingInput label="Experience" placeholder="e.g., Fresher / 0-1 Year" />
// //       <FloatingInput label="Stipend" placeholder="e.g., $5k-$8k per month" />
// //       <FloatingInput label="Duration" placeholder="e.g., 6 Months" />
// //     </CreatePostForm>
// //   );
// // };
// // export default CreateInternshipPost;








// import React from 'react';
// import CreatePostForm, { FloatingInput } from './CreatePostForm'; 

// const CreateInternshipPost = ({ onToggle, onBack, orgData, setOrgData, postDetails, setPostDetails }) => {
//   const handleInput = (e) => setPostDetails({ ...postDetails, [e.target.name]: e.target.value });

//   return (
//     <CreatePostForm 
//       formType="internship" 
//       onToggle={onToggle} 
//       onBack={onBack} 
//       orgData={orgData} 
//       setOrgData={setOrgData}
//       postDetails={postDetails}
//     >
//       <FloatingInput label="Internship Title" name="title" value={postDetails.title} onChange={handleInput} placeholder="e.g. UI/UX Intern" />
//       <FloatingInput label="Stipend" name="salary_range" value={postDetails.salary_range} onChange={handleInput} placeholder="e.g. 10k - 15k" />
//       <FloatingInput label="Location" name="location" value={postDetails.location} onChange={handleInput} placeholder="e.g. Remote" />
//       <FloatingInput label="Requirements" name="requirements" value={postDetails.requirements} onChange={handleInput} placeholder="Figma, Adobe XD..." />
//     </CreatePostForm>
//   );
// };
// export default CreateInternshipPost;









import React from 'react';
import CreatePostForm, { FloatingInput } from './CreatePostForm'; 

const CreateInternshipPost = ({ onToggle, onBack, orgData, setOrgData, postDetails, setPostDetails }) => {
  
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
        formType="internship" 
        onToggle={onToggle} 
        onBack={onBack} 
        orgData={orgData} 
        setOrgData={setOrgData}
        postDetails={postDetails}
        setPostDetails={setPostDetails}
      >
        {/* Internship Title */}
        <FloatingInput 
          label="Internship Title" 
          name="title" 
          value={postDetails?.title} 
          onChange={handleInput} 
          placeholder="e.g., Frontend Web Intern" 
        />

        {/* Poster Name - Crucial for tracking who posted */}
        <FloatingInput 
          label="Your Name" 
          name="posted_by_name" 
          value={postDetails?.posted_by_name} 
          onChange={handleInput} 
          placeholder="e.g., Sahil Bhai" 
        />

        {/* Stipend / Salary */}
        <FloatingInput 
          label="Stipend Range" 
          name="salary_range" 
          value={postDetails?.salary_range} 
          onChange={handleInput} 
          placeholder="e.g., 5k - 10k per month" 
        />
        
        {/* Location Fix: Remote logic handled via 'disabled' state */}
        <FloatingInput 
          label="Location" 
          name="location" 
          value={postDetails?.remote ? "Remote" : postDetails?.location} 
          onChange={handleInput} 
          disabled={postDetails?.remote} 
          placeholder={postDetails?.remote ? "Location locked to Remote" : "e.g., Delhi, India"} 
        />
        
        {/* Key Skills/Requirements */}
        <FloatingInput 
          label="Requirements" 
          name="requirements" 
          value={postDetails?.requirements} 
          onChange={handleInput} 
          placeholder="e.g., HTML, CSS, JavaScript, React" 
        />
      </CreatePostForm>
    </div>
  );
};

export default CreateInternshipPost;