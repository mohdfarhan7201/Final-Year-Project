import { motion } from "framer-motion";
import ProgressItem from "./ProgressItem";

export default function CandidatesAnalytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-[320px] bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-5 shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Candidates Analytics
      </h2>

      <div className="flex flex-col gap-3">
        <ProgressItem />
        <ProgressItem />
        <ProgressItem />
      </div>
    </motion.div>
  );
}