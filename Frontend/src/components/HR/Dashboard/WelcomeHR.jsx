import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import HeroDashboardImg from "../../../assets/HRDashboard.svg";

import { API_BASE_URL } from "../../../Api/config";
import { useAuth } from "../../../Context/AuthContext";

const WelcomeDashboardHero = () => {
  const { authState } = useAuth();

  const token = authState?.accessToken;

  const [profile, setProfile] = useState(null);

  // ================= FETCH PROFILE =================

  const fetchProfile = async () => {
    try {
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
      console.log("Profile Fetch Error:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  // ================= NAME =================

  const name = profile?.displayName || "HR";

  // ================= UI =================

  return (
    <div className="w-full bg-gradient-to-br from-white via-[#f8faff] to-[#eef2ff] border border-[#EEF2FF] rounded-[2rem] flex flex-col lg:flex-row items-center justify-between p-8 md:p-10 gap-12 overflow-hidden shadow-sm relative mb-5">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-40 -z-10" />

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex-1 space-y-8"
      >

        {/* WELCOME TEXT */}
        <div className="space-y-3">

          <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight">
            Welcome Back,
          </h3>

          <div className="flex items-center gap-4 flex-wrap">

            <h1 className="text-3xl md:text-3xl font-black bg-gradient-to-r from-[#001DFF] to-[#7C3AED] bg-clip-text text-transparent leading-tight">
              {name}
            </h1>

            {/* WAVE */}
            <motion.span
              animate={{
                rotate: [0, 18, 0, 18, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="text-4xl origin-bottom-right"
            >
              👋
            </motion.span>

          </div>

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-medium">
          Manage hiring workflows, track candidate progress,
          and discover top talent — all from one smart dashboard.
        </p>

        {/* QUOTE CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="relative inline-flex items-center gap-4 px-7 py-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-pink-100 shadow-[0_10px_40px_rgba(255,192,203,0.18)] overflow-hidden"
        >

          {/* GLOW */}
          <div className="absolute right-0 top-0 w-24 h-24 bg-pink-100 rounded-full blur-3xl opacity-60" />

          <span className="text-4xl text-pink-400 font-serif leading-none">
            “
          </span>

          <p className="text-[#D63384] font-bold text-sm md:text-base relative z-10">
            Great hiring builds great teams.
          </p>

          <span className="text-4xl text-pink-400 font-serif leading-none">
            ”
          </span>

        </motion.div>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          x: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex-1 flex justify-center lg:justify-end"
      >

        <motion.img
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          src={HeroDashboardImg}
          alt="HR Dashboard"
          className="w-full max-w-[430px] object-contain drop-shadow-2xl rounded-2xl"
        />

      </motion.div>

    </div>
  );
};

export default WelcomeDashboardHero;