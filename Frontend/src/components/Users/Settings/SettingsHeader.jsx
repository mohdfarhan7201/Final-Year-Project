import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext"; // Context Hook import kiya

export default function SettingsHeader() {
  const navigate = useNavigate();
  const { logoutUser } = useAuth(); // Context se logout function nikala
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      // logoutUser function AuthContext mein API call aur state clear dono handle karega
      await logoutUser(navigate);
    } catch (error) {
      console.error("Logout failed during execution", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#f8fafc] border border-gray-200 rounded-xl p-6 flex justify-between items-start shadow-sm"
    >
      {/* Left Content */}
      <div>
        <h1 className="text-4xl font-semibold text-gray-800 mb-2">
          Account Configuration
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Manage your identity, security parameters, and luminous interface preferences.
        </p>
      </div>

      {/* Logout Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleLogout}
        disabled={loading}
        className={`px-5 py-2 rounded-full text-white text-lg font-medium shadow transition-all
        bg-gradient-to-r from-purple-500 to-pink-500 ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
        }`}
      >
        {loading ? "Logging out..." : "Logout"}
      </motion.button>
    </motion.div>
  );
}