import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// 🧾 LOCAL ASSETS
import resume1 from "../../assets/Resume1.svg";
import resume2 from "../../assets/Resume2.svg";
import resume3 from "../../assets/Resume3.svg";
import resume4 from "../../assets/Resume4.svg";
import resume5 from "../../assets/Resume5.svg";

const ResumeAISection = () => {
  const resumeCards = [
    { id: 1, name: "Modern Resume", image: resume1 },
    { id: 2, name: "Developer CV", image: resume2 },
    { id: 3, name: "Sarah Johnson", image: resume3, isActive: true },
    { id: 4, name: "Marketing CV", image: resume4 },
    { id: 5, name: "ATS Optimized", image: resume5 },
  ];

  return (
    <div className="min-h-screen bg-[#FDF2F8] py-5 px-6 flex flex-col items-center gap-16 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-purple-200 blur-[140px] rounded-full opacity-40" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-pink-200 blur-[140px] rounded-full opacity-40" />

      {/* HEADER */}
      <div className="text-center z-10">
        <h1 className="text-5xl font-black text-gray-900">
          Your <span className="text-purple-600">Resume</span>
        </h1>

        <h2 className="text-4xl font-black mt-3 text-gray-800 flex items-center justify-center gap-3">
          AI Analyzed <BrainCircuit className="text-purple-500" />
        </h2>

        <p className="text-gray-500 mt-6 max-w-xl mx-auto">
          Upload your resume and let AI evaluate your skills, experience and job fit.
        </p>
      </div>

      {/* ✅ SINGLE LINE LAYOUT */}
      <div className="flex items-center justify-center gap-6 flex-nowrap z-10">
        {resumeCards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="w-56 flex-shrink-0"
          >
            <div
              className={`bg-white rounded-3xl shadow-xl border p-3 -mb-15 ${
                card.isActive
                  ? "border-purple-400 ring-4 ring-purple-100"
                  : "border-gray-100"
              }`}
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-52 object-cover rounded-2xl"
              />

              <h3 className="mt-3 text-center font-bold text-gray-800 text-sm">
                {card.name}
              </h3>

              {card.isActive && (
                <p className="text-xs text-purple-600 text-center font-semibold">
                  Active Resume
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* BUTTON */}
      <Link to="/login">
        <button className="mt-10 flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg">
          Upload Resume
          <ArrowRight size={18} />
        </button>
      </Link>
    </div>
  );
};

export default ResumeAISection;