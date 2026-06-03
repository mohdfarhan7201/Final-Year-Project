import { motion } from "framer-motion";
import CareerImg from "../../assets/Career.svg";

export default function JobHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-10">

      {/* Content (TEXT CENTERED) */}
      <div className="relative z-20 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-bold leading-tight">
          The <span className="text-indigo-600">Easiest Way</span>
          <br />
          To Get Your New <span className="text-indigo-600">Job</span>
        </h1>

        <p className="mt-6 text-gray-500">
          The easiest way to land your new job is by showcasing your real
          skills. Highlight your strengths clearly and connect with the
          right opportunities.
        </p>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full shadow-lg"
        >
          View Open Position
        </motion.button>
      </div>

      {/* 👇 FULL WIDTH IMAGE (OUTSIDE CONTAINER) */}
      <motion.img
        src={CareerImg}
        alt="Career Illustration"
        className="relative z-20  w-full  px-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

    </section>
  );
}