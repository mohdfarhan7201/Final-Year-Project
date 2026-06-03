import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    category: "DESIGN ARCHITECTURE",
    title: "Modern UI Design Systems",
    desc: "Master the principles of scalable design systems, component...",
    lessons: 17,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500", 
  },
  {
    id: 2,
    category: "CLOUD SYSTEMS",
    title: "AWS Solutions Architect",
    desc: "Master the principles of scalable design systems, component...",
    lessons: 12,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500", 
  },
  {
    id: 3,
    category: "DATA SCIENCE",
    title: "Data Engineering Foundations",
    desc: "Master the principles of scalable design systems, component...",
    lessons: 20,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500",
  },
];

export default function BuildSkills() {
  return (
    <section className="py-5 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-4xl font-bold text-[#A824CC]">
            Build Skills with Our Courses
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Discover high-quality programs built to develop practical, career-ready skills.
          </p>
        </motion.div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-4 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col"
            >
              {/* IMAGE CONTAINER */}
              <div className="overflow-hidden rounded-[1.5rem] h-48 mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="text-left px-2 flex-1 flex flex-col">
                <span className="text-[10px] font-bold text-purple-600 tracking-widest uppercase">
                  {course.category}
                </span>
                
                <h3 className="mt-2 text-xl font-bold text-gray-800 leading-tight">
                  {course.title}
                </h3>
                
                <div className="mt-4 flex justify-between items-start gap-4">
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[180px]">
                    {course.desc}
                  </p>
                  <span className="text-xs font-bold text-gray-800 whitespace-nowrap">
                    {course.lessons} Lessons
                  </span>
                </div>

                {/* WATCH BUTTON */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full py-4 bg-gradient-to-r from-[#A824CC] to-[#D946EF] text-white font-bold rounded-2xl shadow-lg shadow-purple-100 hover:shadow-purple-200 transition-all"
                >
                  Watch Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}