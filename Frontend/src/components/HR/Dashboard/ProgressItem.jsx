import { motion } from "framer-motion";

export default function ProgressItem() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between p-3 rounded-lg border border-pink-200 bg-white/50 backdrop-blur-sm"
    >
      
      {/* TEXT */}
      <div>
        <p className="text-xs text-purple-600 font-medium">
          Most Applied Role :
        </p>
        <p className="text-xs text-gray-500">
          Frontend Developer
        </p>
      </div>

      {/* CIRCLE */}
      <div className="relative w-10 h-10">
        <svg className="w-full h-full">
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="#e5e7eb"
            strokeWidth="3"
            fill="none"
          />
          <motion.circle
            cx="20"
            cy="20"
            r="16"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset="10"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 10 }}
            transition={{ duration: 1 }}
          />
        </svg>

        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-gray-600">
          90%
        </span>
      </div>
    </motion.div>
  );
}