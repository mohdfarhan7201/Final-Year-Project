import { motion } from "framer-motion";
import TrendChart from "./TrendChart";

export default function HiringTrends() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-5 shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Hiring Trends
      </h2>

      <TrendChart />
    </motion.div>
  );
}