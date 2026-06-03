import React from 'react';
import { motion } from 'framer-motion';

const OperationModelCard = ({ id, icon: Icon, title, subtitle, isActive, onClick }) => {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(id)}
      whileHover={{ y: -2 }}
      className={`flex-1 flex items-center gap-4 p-5 rounded-2xl border-2 transition-all group min-w-[200px] text-left
        ${isActive 
          ? 'bg-gradient-to-r from-pink-500 to-indigo-600 text-white border-transparent' 
          : 'bg-white text-gray-800 border-gray-100 hover:border-purple-100 shadow-sm'
        }`}
    >
      <div className={`p-2.5 h-fit rounded-full transition-colors ${
        isActive ? 'bg-white' : 'bg-gray-100'
      }`}>
        <Icon size={20} className={`${isActive ? 'text-indigo-600' : 'text-gray-600'}`} />
      </div>
      <div>
        <h4 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}>{title}</h4>
        <p className={`text-[11px] leading-tight ${isActive ? 'text-white/80' : 'text-gray-400'}`}>{subtitle}</p>
      </div>
    </motion.button>
  );
};

export default OperationModelCard;