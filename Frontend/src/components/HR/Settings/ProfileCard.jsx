import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import toast from "react-hot-toast";

import { API_BASE_URL } from "../../../Api/config";
import { useAuth } from "../../../Context/AuthContext";

const ProfileCard = () => {
  const { authState } = useAuth();
  const token = authState?.accessToken;

  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    id: "",
    displayName: "",
    email: "",
    phone: "",
    current_company: "",
    profile_photo_url: "",
  });

  // ---------------- FETCH PROFILE ----------------
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

      const d = res.data?.data;

      setProfile({
        id: d?.id,
        displayName:
          d?.displayName || "User Name",
        email: d?.email || "-",
        phone: d?.phone || "-",
        current_company:
          d?.current_company || "-",
        profile_photo_url:
          d?.profile_photo_url || "",
      });
    } catch (err) {
      toast.error(
        "Failed to load profile"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center bg-white rounded-3xl">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
          className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="bg-white px-8 py-6 rounded-[28px] shadow-2xl border border-gray-100 flex flex-col gap-8 w-full max-w-5xl h-[500px]"
    >

      {/* HEADING */}
      <div>

        <h2 className="text-4xl font-bold text-gray-800">
          Personal Information
        </h2>

        <p className="text-lg text-gray-500 mt-1">
          Your personal profile details
        </p>

      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">

        {/* PROFILE IMAGE */}
        <div className="relative shrink-0">

          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">

            {profile.profile_photo_url ? (
              <img
                src={
                  profile.profile_photo_url
                }
                className="w-full h-full object-cover"
                alt="profile"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-blue-600 bg-gradient-to-br from-blue-50 to-gray-100">
                {profile.displayName?.charAt(
                  0
                )}
              </div>
            )}

          </div>

        </div>

        {/* DETAILS */}
        <div className="grid gap-4 w-full">

          {/* NAME CARD */}
          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl flex items-center gap-4 border border-blue-100"
          >

            <User
              className="text-blue-600"
              size={20}
            />

            <div>

              <p className="text-[11px] font-bold text-gray-400 tracking-widest">
                FULL NAME
              </p>

              <p className="font-semibold text-lg text-gray-800">
                {profile.displayName}
              </p>

            </div>

          </motion.div>

          {/* GRID INFO */}
          <div className="grid md:grid-cols-2 gap-4">

            <Info
              icon={<Mail size={18} />}
              label="EMAIL"
              value={profile.email}
            />

            <Info
              icon={<Phone size={18} />}
              label="CONTACT NUMBER"
              value={profile.phone}
            />

            <Info
              icon={
                <Building2 size={18} />
              }
              label="COMPANY"
              value={
                profile.current_company
              }
            />

            <Info
              icon={<User size={18} />}
              label="STATUS"
              value="Active User"
            />

          </div>

        </div>

      </div>

    </motion.div>
  );
};

// ---------------- INFO CARD ----------------
const Info = ({
  icon,
  label,
  value,
}) => (
  <div className="bg-[#f8fafc] p-4 rounded-2xl flex items-center gap-4 border border-gray-100 hover:shadow-sm transition">

    <div className="text-blue-600">
      {icon}
    </div>

    <div>

      <p className="text-[10px] font-bold text-gray-400 tracking-widest">
        {label}
      </p>

      <p className="font-semibold text-gray-700">
        {value || "-"}
      </p>

    </div>

  </div>
);

export default ProfileCard;