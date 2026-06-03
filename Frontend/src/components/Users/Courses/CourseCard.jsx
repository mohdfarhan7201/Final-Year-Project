import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';

const CourseCard = ({ course, isLearning, onAction, onBookmark, isBookmarked }) => {
  if (!course) return null;

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="relative group h-full"
    >
      {/* 🔥 Light Gradient Glow (Very Soft) */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 blur-lg bg-gradient-to-r from-purple-200 to-pink-200"></div>

      {/* 🔥 Card */}
      <div className="relative bg-white rounded-3xl p-5 border border-gray-200 hover:border-gray-300 transition-all shadow-sm flex flex-col h-full">
        
        {/* Thumbnail */}
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <img 
            src={course.thumbnail}
            alt="course"
            className="w-full h-full object-cover"
          />

          {/* Bookmark */}
          <button
            onClick={onBookmark}
            className={`absolute top-3 right-3 p-2 rounded-full transition ${
              isBookmarked
                ? "bg-purple-500 text-white shadow-sm"
                : "bg-white text-gray-500 shadow-sm"
            }`}
          >
            <Bookmark size={16} />
          </button>
        </div>

        {/* 🔥 Content */}
        <div className="mt-4 flex flex-col flex-grow">
          
          <p className="text-xs text-purple-500 font-bold uppercase tracking-wide mb-1">
            {course.category}
          </p>

          {/* ✅ FIXED HEIGHT TITLE */}
          <h3 className="font-bold text-gray-800 leading-snug line-clamp-2 min-h-[44px]">
            {course.title}
          </h3>

        </div>

        {/* Button */}
        <button
          onClick={onAction}
          className="mt-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm shadow-sm hover:scale-[1.01] active:scale-95 transition"
        >
          {isLearning ? "Continue Learning" : "Watch Now"}
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;