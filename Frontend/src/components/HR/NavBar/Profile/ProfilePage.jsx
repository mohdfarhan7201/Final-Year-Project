import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiEdit3,
  FiSave,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiCheckCircle,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../../../Api/config";
import { useAuth } from "../../../../Context/AuthContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { authState, updateUserData } = useAuth();
  const token = authState?.accessToken;

  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [profile, setProfile] = useState({
    id: "",
    user: "",
    displayName: "",
    email: "",
    phone: "",
    headline: "",
    summary: "",
    bio: "",
    location: "",
    current_company: "",
    total_experience: "",
    availability_status: "",
    profile_photo_url: "",
  });

  // ================= FETCH =================
  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API_BASE_URL}profiles/me/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const d = res.data?.data;

      setProfile({
        id: d?.id,
        user: d?.user,
        displayName: d?.displayName || "User",
        email: d?.email || "",
        phone: d?.phone || "",
        headline: d?.headline || "",
        summary: d?.summary || "",
        bio: d?.bio || "",
        location: d?.location || "",
        current_company: d?.current_company || "",
        total_experience: d?.total_experience || "",
        availability_status: d?.availability_status || "active",
        profile_photo_url: d?.profile_photo_url || "",
      });
    } catch (err) {
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ================= CHANGE =================
  const handleChange = (e) => {
    setProfile((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  // ================= SAVE =================
  const handleSave = async () => {
    try {
      setSaving(true);

      const id = profile.user || profile.id;

      const payload = {
        displayName: profile.displayName,
        phone: profile.phone,
        headline: profile.headline,
        summary: profile.summary,
        bio: profile.bio,
        location: profile.location,
        current_company: profile.current_company,
        total_experience: Number(profile.total_experience),
        availability_status: profile.availability_status,
      };

      let res;

      try {
        res = await axios.patch(
          `${API_BASE_URL}profiles/${id}/`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch {
        res = await axios.put(
          `${API_BASE_URL}profiles/${id}/`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      updateUserData(res.data?.data);

      toast.success("Profile updated");
      setEditing(false);
    } catch (err) {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-gray-800">

      {/* TOP BAR */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">

        <button
          onClick={() => navigate(-1)}
          className="px-5 py-3 bg-white shadow-md rounded-xl flex items-center gap-2 hover:shadow-lg transition"
        >
          <FiArrowLeft /> Back
        </button>

        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2 shadow-md hover:bg-blue-700"
          >
            <FiEdit3 /> Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-green-600 text-white rounded-xl flex items-center gap-2 shadow-md hover:bg-green-700"
          >
            <FiSave /> {saving ? "Saving..." : "Save"}
          </button>
        )}
      </div>

      {/* PROFILE CARD */}
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >

          {/* CONTENT */}
          <div className="p-8">

            {/* PROFILE HEADER */}
            <div className=" flex items-end gap-6">

              <div className="w-36 h-36 rounded-full bg-white shadow-xl border-4 border-white overflow-hidden ">

                {profile.profile_photo_url ? (
                  <img
                    src={profile.profile_photo_url}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-blue-600">
                    {profile.displayName?.charAt(0)}
                  </div>
                )}

              </div>

              <div>

                {editing ? (
                  <input
                    name="displayName"
                    value={profile.displayName}
                    onChange={handleChange}
                    className="text-3xl font-bold border-b-2 outline-none "
                  />
                ) : (
                  <h1 className="text-4xl font-bold">
                    {profile.displayName}
                  </h1>
                )}

                <p className="text-blue-600  font-medium">
                  {profile.headline || "HR"}
                </p>

              </div>
            </div>

            {/* GRID INFO */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <Card icon={<FiMail />} label="Email" value={profile.email} />
              <EditCard editing={editing} icon={<FiPhone />} label="Phone" name="phone" value={profile.phone} onChange={handleChange} />
              <EditCard editing={editing} icon={<FiMapPin />} label="Location" name="location" value={profile.location} onChange={handleChange} />
              <EditCard editing={editing} icon={<FiBriefcase />} label="Company" name="current_company" value={profile.current_company} onChange={handleChange} />
              <EditCard editing={editing} icon={<FiClock />} label="Experience" name="total_experience" value={profile.total_experience} onChange={handleChange} />
              <EditCard editing={editing} icon={<FiCheckCircle />} label="Status" name="availability_status" value={profile.availability_status} onChange={handleChange} />

            </div>

            {/* ABOUT */}
            <Section title="About Me">
              {editing ? (
                <textarea
                  name="summary"
                  value={profile.summary}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-xl"
                />
              ) : (
                <p className="text-gray-600 leading-8">{profile.summary}</p>
              )}
            </Section>

            {/* BIO */}
            <Section title="Bio">
              {editing ? (
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-xl"
                />
              ) : (
                <p className="text-gray-600 leading-8">{profile.bio}</p>
              )}
            </Section>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

// ---------------- COMPONENTS ----------------

const Card = ({ icon, label, value }) => (
  <div className="bg-gray-50 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
    <div className="text-blue-600 text-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const EditCard = ({ editing, icon, label, name, value, onChange }) => (
  <div className="bg-gray-50 p-5 rounded-2xl flex items-center gap-4">
    <div className="text-blue-600 text-xl">{icon}</div>
    <div className="flex-1">
      <p className="text-sm text-gray-500">{label}</p>
      {editing ? (
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border-b outline-none bg-transparent"
        />
      ) : (
        <p className="font-semibold">{value || "-"}</p>
      )}
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mt-10">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

export default ProfilePage;