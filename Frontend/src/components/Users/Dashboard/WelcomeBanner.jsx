import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { FaBookOpen, FaBriefcase, FaUpload } from "react-icons/fa";
import UserDashboard from "../../../assets/userdashboard.svg";
import { API_BASE_URL } from "../../../Api/config";
import { useAuth } from "../../../Context/AuthContext";

const WelcomeBanner = () => {
  const navigate = useNavigate();

  const { authState } = useAuth();
  const token = authState?.accessToken;

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= FETCH PROFILE =================

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_BASE_URL}profiles/me/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data?.data || res.data;

      setProfile(data);
    } catch (error) {
      console.log("Profile fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchProfile();
  }, [token]);

  const name = profile?.displayName || "User";

  const firstLetter = name?.charAt(0)?.toUpperCase();

  // ================= UI =================

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 z-10 text-center md:text-left">

        {/* GREETING */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-black text-gray-800 mb-4"
        >
          Welcome back,{" "}
          <span className="text-[#8b5cf6]">
            {loading ? "..." : name}
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm md:text-base max-w-md mb-7"
        >
          Discover opportunities, build your skills, and take the next step toward your dream career.
        </motion.p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/user/courses")}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white px-6 py-2 rounded-2xl font-semibold shadow-md"
          >
            <FaBookOpen />
            Explore Courses
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/user/jobs")}
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-2 rounded-2xl font-semibold shadow-md"
          >
            <FaBriefcase />
            Explore Jobs
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/user/resume-assistant")}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-2xl font-semibold shadow-md"
          >
            <FaUpload />
            Upload Resume
          </motion.button>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center relative"
      >
        {/* BACKGROUND BLUR */}
        <div className="absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40 -z-10" />

        {/* IMAGE */}
        <img
          src={UserDashboard}
          alt="Dashboard"
          className="w-full max-w-[380px] drop-shadow-xl"
        />

      </motion.div>
    </motion.div>
  );
};

export default WelcomeBanner;