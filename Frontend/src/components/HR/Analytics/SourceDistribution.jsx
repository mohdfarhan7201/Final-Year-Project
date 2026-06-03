import React from "react";
import { motion } from "framer-motion";

export default function SourceDistribution() {
  const data = [
    { label: "LinkedIn", value: 60, color: "#6D28D9" },
    { label: "Referrals", value: 25, color: "#8B5CF6" },
    { label: "Direct Ads", value: 15, color: "#C4B5FD" },
  ];

  const radius = 65;
  const stroke = 16;
  const circumference = 2 * Math.PI * radius;

  const total = data.reduce((acc, item) => acc + item.value, 0);
  const progress = (total / 100) * circumference;

  return (
    <div className="w-[320px] bg-white rounded-xl p-4 shadow border border-gray-200">
      
      {/* Title */}
      <h2 className="text-sm font-semibold text-gray-700">
        Source Distribution
      </h2>
      <p className="text-xs text-gray-400 mb-4">
        Where your talent comes from
      </p>

      {/* Chart */}
      <div className="relative flex justify-center items-center">
        <svg width="180" height="180">
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C4B5FD" />
              <stop offset="40%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
          </defs>

          {/* Background Ring */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth={stroke}
            fill="transparent"
          />

          {/* Animated Gradient Ring */}
          <motion.circle
            cx="90"
            cy="90"
            r={radius}
            stroke="url(#purpleGradient)"
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>

        {/* Center Text */}
        <div className="absolute text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            2.4k
          </h3>
          <p className="text-[10px] text-gray-400 tracking-wide">
            TOTAL LEADS
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-gray-600">
                {item.label}
              </span>
            </div>
            <span className="text-gray-700 font-medium">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}