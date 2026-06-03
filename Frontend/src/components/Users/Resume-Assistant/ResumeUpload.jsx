import React from 'react';
import { motion } from 'framer-motion';
import AIImage from '../../../assets/AI.svg'; // path check kar lena

const ResumeUpload = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full max-w-lg h-[600px] mx-auto">

      {/* Heading */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-black text-gray-800 leading-tight">
          Elevate your{" "}
          <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
            Professional Identity
          </span>
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
          Upload your resume to receive AI-driven insights, keyword optimization, and real-time formatting improvements.
        </p>
      </div>

      {/* AI Image */}
      <motion.img
        src={AIImage}
        alt="AI Illustration"
        className="w-156"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

    </div>
  );
};

export default ResumeUpload;