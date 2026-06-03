import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PreferenceItem = ({ title, subtitle, defaultChecked }) => {
  const [isOn, setIsOn] = useState(defaultChecked);

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
      <div>
        <h4 className="text-gray-800 font-bold text-mb">{title}</h4>
        <p className="text-gray-400 text-[11px] mt-0.5">{subtitle}</p>
      </div>
      <button 
        onClick={() => setIsOn(!isOn)}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-[#6366f1]' : 'bg-gray-200'}`}
      >
        <motion.div 
          animate={{ x: isOn ? 24 : 0 }}
          className="bg-white w-4 h-4 rounded-full shadow-sm"
        />
      </button>
    </div>
  );
};

const PreferencesCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full max-w-sm max-h-sm "
    >
      <h2 className="text-2xl font-black text-gray-800 mb-6">Preferences</h2>
      
      <div className="space-y-2">
        <PreferenceItem 
          title="Email Alerts" 
          subtitle="Weekly summary reports" 
          defaultChecked={true} 
        />
        <PreferenceItem 
          title="Desktop Push" 
          subtitle="Immediate stage updates" 
          defaultChecked={true} 
        />
        <PreferenceItem 
          title="SMS Alerts" 
          subtitle="Urgent interview alerts" 
          defaultChecked={false} 
        />
      </div>
    </motion.div>
  );
};

export default PreferencesCard;