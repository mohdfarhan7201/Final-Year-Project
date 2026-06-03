import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headset, X, Send } from 'lucide-react';
import ContactSupportImage from "../../../assets/ContactSupport.svg";

const HelpSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-gray-50 flex items-start  p-4">
      {/* Main Support Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2rem] p-8 shadow-xl border border-purple-100 text-center relative overflow-hidden"
      >
        <div className="flex items-center gap-2 mb-2">
          <Headset className="w-6 h-6 text-gray-800" />
          <h2 className="text-2xl font-bold text-gray-800">Help & Support</h2>
        </div>
        <p className="text-gray-500 text-sm mb-8 text-left">
          We're here to help you with any issues or questions you may have.
        </p>

        {/* Illustration Placeholder */}
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 bg-purple-100 rounded-full blur-3xl opacity-30 transform -scale-110"></div>
          <img 
            src={ContactSupportImage} 
            alt="Support Illustration" 
            className="w-64 h-auto relative z-10"
          />
        </div>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(true)}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-200 transition-all"
        >
          Contact Support
        </motion.button>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl relative z-10 border border-white/20"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Send us a message</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Request
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HelpSupport;