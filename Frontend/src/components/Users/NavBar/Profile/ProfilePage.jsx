import React, { useEffect, useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";

import {
  FiArrowLeft,
  FiEdit2,
  FiSave,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { API_BASE_URL } from "../../../../Api/config";
import { useAuth } from "../../../../Context/AuthContext";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { authState } = useAuth();

  const token = authState?.accessToken;

  // ================= STATES =================

  const [loading, setLoading] = useState(true);

  const [editing, setEditing] = useState(false);

  const [saving, setSaving] = useState(false);

  const [profile, setProfile] = useState({
    user: "",
    displayName: "",
    email: "",
    phone: "",
    headline: "",
    summary: "",
    bio: "",
    location: "",
    profile_photo_url: "",
  });

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

      setProfile({
        user: data?.user || "",

        displayName:
          data?.displayName || "",

        email: data?.email || "",

        phone: data?.phone || "",

        headline: data?.headline || "",

        summary: data?.summary || "",

        bio: data?.bio || "",

        location: data?.location || "",

        profile_photo_url:
          data?.profile_photo_url || "",
      });
    } catch (error) {
      console.log(error);

      toast.error("Profile Load Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SAVE PROFILE =================

  const handleSave = async () => {
    try {
      setSaving(true);

      // IMPORTANT
      // displayName added

      const payload = {
        displayName:
          profile.displayName,

        phone: profile.phone,

        headline: profile.headline,

        summary: profile.summary,

        bio: profile.bio,

        location: profile.location,
      };

      console.log(
        "PATCH PAYLOAD :",
        payload
      );

      await axios.patch(
        `${API_BASE_URL}profiles/${profile.user}/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":
              "application/json",
          },
        }
      );

      toast.success(
        "Profile Updated Successfully"
      );

      setEditing(false);

      fetchProfile();
    } catch (error) {
      console.log(
        "PATCH ERROR :",
        error.response?.data
      );

      toast.error(
        error.response?.data?.detail ||
          "Update Failed"
      );
    } finally {
      setSaving(false);
    }
  };

  // ================= LOADER =================

  if (loading) {
    return (
      <div className="h-screen bg-[#f5f7ff] flex items-center justify-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="w-16 h-16 rounded-full border-4 border-indigo-500 border-t-transparent"
        />

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7ff] p-4 md:p-8">

      <div className="max-w-6xl mx-auto">

        {/* TOPBAR */}

        <div className="flex justify-between items-center mb-8">

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => navigate(-1)}
            className="bg-white px-5 py-3 rounded-2xl shadow-md flex items-center gap-2 font-semibold text-slate-700"
          >
            <FiArrowLeft />

            Back
          </motion.button>

          {!editing ? (
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                setEditing(true)
              }
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 font-semibold"
            >
              <FiEdit2 />

              Edit Profile
            </motion.button>
          ) : (
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={handleSave}
              disabled={saving}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 font-semibold"
            >
              <FiSave />

              {saving
                ? "Saving..."
                : "Save"}
            </motion.button>
          )}
        </div>

        {/* PROFILE CARD */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="bg-white rounded-[40px] overflow-hidden shadow-2xl"
        >

          {/* COVER */}

          <div className="h-56 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 relative">

            <div className="absolute inset-0 bg-black/10" />

          </div>

          {/* CONTENT */}

          <div className="px-8 pb-10 relative">

            {/* PROFILE IMAGE */}

            <div className="absolute -top-20 left-8">

              <div className="w-40 h-40 rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-gradient-to-br from-indigo-500 to-cyan-400">

                {profile.profile_photo_url ? (
                  <img
                    src={
                      profile.profile_photo_url
                    }
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl font-black text-white">
                    {profile.displayName?.charAt(
                      0
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* MAIN */}

            <div className="pt-28 grid lg:grid-cols-3 gap-8">

              {/* LEFT */}

              <div className="space-y-5">

                {/* NAME */}

                <div>

                  {/* EDITABLE NAME */}

                  {editing ? (
                    <input
                      type="text"
                      name="displayName"
                      value={
                        profile.displayName
                      }
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full text-4xl font-black bg-slate-100 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
                    />
                  ) : (
                    <h1 className="text-5xl font-black text-slate-800">
                      {profile.displayName ||
                        "User"}
                    </h1>
                  )}

                  {/* HEADLINE */}

                  {editing ? (
                    <input
                      type="text"
                      name="headline"
                      value={profile.headline}
                      onChange={handleChange}
                      placeholder="Headline"
                      className="w-full mt-4 bg-slate-100 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
                    />
                  ) : (
                    <p className="mt-4 text-xl text-indigo-600 font-semibold">
                      {profile.headline ||
                        "Developer"}
                    </p>
                  )}
                </div>

                {/* INFO */}

                <InfoCard
                  icon={<FiMail />}
                  title="Email"
                  value={profile.email}
                />

                {editing ? (
                  <EditableCard
                    icon={<FiPhone />}
                    title="Phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                ) : (
                  <InfoCard
                    icon={<FiPhone />}
                    title="Phone"
                    value={
                      profile.phone ||
                      "Not Added"
                    }
                  />
                )}

                {editing ? (
                  <EditableCard
                    icon={<FiMapPin />}
                    title="Location"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                  />
                ) : (
                  <InfoCard
                    icon={<FiMapPin />}
                    title="Location"
                    value={
                      profile.location ||
                      "Unknown"
                    }
                  />
                )}

              </div>

              {/* RIGHT */}

              <div className="lg:col-span-2 space-y-6">

                {/* ABOUT */}

                <Section title="About Me">

                  {editing ? (
                    <textarea
                      rows={6}
                      name="summary"
                      value={profile.summary}
                      onChange={handleChange}
                      className="w-full bg-slate-100 border border-slate-200 rounded-3xl p-5 outline-none focus:border-indigo-500"
                    />
                  ) : (
                    <p className="text-slate-600 leading-9 text-lg">
                      {profile.summary ||
                        "No summary added yet."}
                    </p>
                  )}

                </Section>

                {/* BIO */}

                <Section title="Bio">

                  {editing ? (
                    <textarea
                      rows={5}
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      className="w-full bg-slate-100 border border-slate-200 rounded-3xl p-5 outline-none focus:border-indigo-500"
                    />
                  ) : (
                    <p className="text-slate-600 leading-9 text-lg">
                      {profile.bio ||
                        "No bio available."}
                    </p>
                  )}

                </Section>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Section = ({
  title,
  children,
}) => {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-lg border border-slate-100">

      <h2 className="text-3xl font-black text-slate-800 mb-6">
        {title}
      </h2>

      {children}

    </div>
  );
};

const InfoCard = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg border border-slate-100 flex items-center gap-4">

      <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="font-semibold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
};

const EditableCard = ({
  icon,
  title,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg border border-slate-100">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl">
          {icon}
        </div>

        <div className="flex-1">

          <p className="text-sm text-slate-500 mb-2">
            {title}
          </p>

          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="w-full bg-slate-100 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-indigo-500"
          />

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;