// import React from 'react';
// import ResumeUpload from './ResumeUpload';
// import AIChat from './AIChat';

// const ProfileElevator = () => {
//   return (
//     <div className="min-h-screen bg-[#f4f7fe] p-6 md:p-4 flex items-center justify-center">
//       <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 items-start justify-between">
//         {/* Left Side */}
//         <ResumeUpload />

//         {/* Right Side */}
//         <AIChat />
//       </div>
//     </div>
//   );
// };

// export default ProfileElevator;








import React, { useState } from "react";
import ResumeUpload from "./ResumeUpload";
import AIChat from "./AIChat";

const ProfileElevator = () => {
  const [resumeText, setResumeText] = useState("");

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 flex items-center justify-center">
      <div className="max-w-7xl w-full flex gap-12">
        
        <ResumeUpload onResumeUpload={setResumeText} />
        
        <AIChat uploadedResumeText={resumeText} />

      </div>
    </div>
  );
};

export default ProfileElevator;