import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { API_BASE_URL } from "../../../Api/config";
import { useAuth } from "../../../Context/AuthContext";

export default function SettingsHeader() {
  const navigate = useNavigate();

  const { authState, logout } = useAuth();

  const token = authState?.accessToken;

  const [loading, setLoading] = useState(false);

  // ---------------- LOGOUT ----------------
  const handleLogout = async () => {
    try {
      setLoading(true);

      await axios.post(
        `${API_BASE_URL}auth/logout/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // clear auth context
      logout?.();

      toast.success("Logged out successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error("Logout failed");
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
          Settings
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Manage your personal preferences, team collaboration tools, and
          recruitment workflow orchestration from a centralized control panel.
        </p>
      </div>

      {/* Logout Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleLogout}
        disabled={loading}
        className="px-5 py-2 rounded-full text-white text-lg font-medium shadow
        bg-gradient-to-r from-purple-500 to-pink-500"
      >
        {loading ? "Logging out..." : "Logout"}
      </motion.button>
    </motion.div>
  );
}