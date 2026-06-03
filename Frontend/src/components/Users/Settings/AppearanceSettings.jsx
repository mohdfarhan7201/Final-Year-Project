// src/components/settings/AppearanceSettings.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaRegSun, FaMoon } from 'react-icons/fa';
import GlassCard from './GlassCard';

const AppearanceSettings = () => {
  const [theme, setTheme] = useState('light');

  return (
    <GlassCard icon={FaEye} title="Appearance">
      <div className="grid grid-cols-2 gap-6 pt-2 -mt-6">
        <ThemeButton 
          icon={FaRegSun} 
          title="Light" 
          isActive={theme === 'light'} 
          onClick={() => setTheme('light')} 
        />
        <ThemeButton 
          icon={FaMoon} 
          title="Dark" 
          isActive={theme === 'dark'} 
          onClick={() => setTheme('dark')} 
        />
      </div>
    </GlassCard>
  );
};

const ThemeButton = ({ icon: Icon, title, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all relative overflow-hidden group 
      ${isActive 
        ? 'bg-[#A855F7] text-white border-transparent' 
        : 'bg-gray-50/50 text-gray-800 border-gray-100/30 hover:border-pink-100 hover:shadow-inner'}`}
  >
    <div className={`p-2.5 rounded-full ${isActive ? 'bg-white' : 'bg-white/90 group-hover:bg-white'} border border-gray-100 transition`}>
        <Icon size={18} className={`${isActive ? 'text-[#A855F7]' : 'text-gray-400'}`} />
    </div>
    <span className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}>{title}</span>
    {isActive && (
        <div className="absolute w-2 h-2 bg-white rounded-full top-3 right-3 shadow-[0_0_10px_white]" />
    )}
  </motion.button>
);

export default AppearanceSettings;