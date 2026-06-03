// src/components/GlassCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ icon: Icon, title, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-white/50 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-white/40 flex flex-col gap-6"
  >
    {/* Card Header with Icon and Title */}
    <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-2">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/70 to-white/10 flex items-center justify-center text-[#DB2777] shadow-sm border border-gray-100/60">
        <Icon size={20} />
      </div>
      <h2 className="text-2xl font-black text-[#1a1a1a] tracking-tight">{title}</h2>
    </div>
    
    {/* Card Body */}
    {children}
  </motion.div>
);

export default GlassCard;