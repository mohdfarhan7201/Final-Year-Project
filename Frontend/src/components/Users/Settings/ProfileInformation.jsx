import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import { FaUser } from "react-icons/fa";
import GlassCard from "./GlassCard";

import { API_BASE_URL } from "../../../Api/config";
import { useAuth } from "../../../Context/AuthContext";

const ProfileInformation = () => {
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchProfile();
  }, [token]);

  const name = profile?.displayName || "User";
  const firstLetter = name?.charAt(0)?.toUpperCase();

  const email = profile?.email || "";
  const phone = profile?.phone || "";

  if (loading) {
    return (
      <div className="p-6 text-sm text-gray-400">
        Loading profile...
      </div>
    );
  }

  return (
    <GlassCard icon={FaUser} title="Profile Information">

      <div className="flex flex-col gap-10">

        {/* HEADER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-6"
        >

          {/* AVATAR (FIRST LETTER ONLY) */}
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg text-white text-3xl font-black">
            {firstLetter}
          </div>

          {/* NAME SECTION */}
          <div>

            <h2 className="text-2xl font-black text-gray-800">
              {name}
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Your profile overview
            </p>

          </div>
        </motion.div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InfoBox label="Full Name" value={name} />

          <InfoBox label="Email Address" value={email} />

          <InfoBox label="Phone Number" value={phone || "Not added"} />

          <InfoBox label="User Status" value="Active" />

        </div>

      </div>

    </GlassCard>
  );
};

// ================= INFO BOX =================

const InfoBox = ({ label, value }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-5 shadow-sm"
    >

      <p className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-gray-700 break-words">
        {value}
      </p>

    </motion.div>
  );
};

export default ProfileInformation;