import React from 'react';
import { motion } from 'framer-motion';
import { Paperclip, Send } from 'lucide-react';

const ResumeAIInput = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background Soft Blue Glows */}
      <div className="absolute top-1/2 left-[15%] w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-[15%] w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[120px] -translate-y-1/2" />

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6">
          Optimize Your <span className="text-[#4F46E5]">Resume</span> With <span className="text-[#4F46E5]">Real AI</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-sm leading-relaxed font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do <br />
          eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit. Sed do eiusmod tempor.
        </p>
      </div>

      {/* Main Chat/Input Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl h-[300px] bg-white/40 backdrop-blur-md border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-cyan-100/20 flex flex-col justify-between p-6 relative z-10"
      >
        {/* Placeholder Center Text */}
        <div className="flex-1 flex items-center justify-center ">
          <h3 className="text-xl font-bold text-[#37306B] opacity-80 tracking-tight ">
            Your Growth Journey at Uphirex
          </h3>
        </div>

        {/* Input Field Container */}
        <div className="relative w-full flex items-center gap-4 bg-[#FFF1F5] rounded-full p-2 pl-6 pr-2 border border-pink-50">
          <button className="text-gray-400 hover:text-gray-600 transition">
            <Paperclip size={22} className="rotate-45" />
          </button>
          
          <input 
            type="text" 
            placeholder="Ask AI to optimize your resume..." 
            className="flex-1 bg-transparent border-none outline-none text-gray-700 font-medium placeholder:text-gray-300 py-3"
          />

          <button className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition-transform active:scale-95">
            <Send size={22} className="text-black fill-black" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeAIInput;