import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiUserPlus, FiUpload, FiBarChart2 } from "react-icons/fi";

const steps = [
  {
    icon: <FiUserPlus size={28} />,
    title: "Sign Up",
    desc: "Create your free account and set up your career profile in minutes.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <FiUpload size={28} />,
    title: "Upload Resume",
    desc: "Upload your CV and let our AI analyze your skills and experience.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FiBarChart2 size={28} />,
    title: "Get AI Insights",
    desc: "Receive instant feedback and smart suggestions to improve your career path.",
    color: "from-pink-500 to-rose-500",
  },
];

/* ===== VARIANTS ===== */

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1, // 👈 reverse while going out
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.25, // 👈 ek ek karke entry
      staggerDirection: 1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-120px",
  });

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">

      {/* ===== TITLE ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-bold text-indigo-600"
      >
        How it works?
      </motion.h2>

      {/* ===== LINE ===== */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8 }}
        className="origin-left mx-auto mt-20 h-[2px] w-[70%]
        bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400"
      />

      {/* ===== STEPS (STAGGER CONTAINER) ===== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto px-8"
      >
        {steps.map((step) => (
          <motion.div
            key={step.title}
            variants={cardVariants}
            whileHover={{
              y: -25,
              rotateX: 6,
              rotateY: -6,
            }}
            className="relative text-center perspective-[1000px]"
          >
            {/* ICON */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center
              bg-gradient-to-br ${step.color} text-white shadow-xl`}
            >
              {step.icon}
            </motion.div>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              {step.title}
            </h3>

            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              {step.desc}
            </p>

            {/* GLOW */}
            <div
              className={`absolute inset-0 -z-10 blur-3xl opacity-30
              bg-gradient-to-br ${step.color}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
