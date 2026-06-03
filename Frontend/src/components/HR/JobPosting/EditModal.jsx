import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  MapPin,
  IndianRupee,
  FileText,
  Briefcase,
  Type,
  Wifi,
} from "lucide-react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import { API_BASE_URL } from "../../../Api/config";

const EditModal = ({ job, onClose, onSave }) => {
  const { authState } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    title: job.title || "",
    description: job.description || "",
    requirements: job.requirements || "",
    salary_range: job.salary_range || "",
    location: job.location || "",
    remote: job.remote || false,

    // 🔥 FIX: invalid value ko safe bana diya
    status: job.status === "active" ? "active" : "closed",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "remote") {
      setForm({
        ...form,
        remote: checked,
        location: checked ? "" : form.location,
      });
      return;
    }

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.patch(
        `${API_BASE_URL}jobs/${job.id}/`,
        form,
        {
          headers: {
            Authorization: `Bearer ${authState.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const updatedJob = response.data;

      onSave(updatedJob);
      onClose();

    } catch (err) {
      console.error("Update Error:", err);

      // 🔥 backend error show kar rahe
      if (err.response?.data) {
        setError(JSON.stringify(err.response.data));
      } else {
        setError("Failed to update job.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl"
      >

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Edit Job ✨
            </h2>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-red-100 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-4 text-red-500 text-sm font-semibold break-words">
              {error}
            </div>
          )}

          {/* FORM */}
          <div className="space-y-4">

            <div className="inputBox">
              <Type size={16} />
              <input name="title" value={form.title} onChange={handleChange} placeholder="Job Title" />
            </div>

            <div className="inputBox items-start">
              <FileText size={16} className="mt-2" />
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Job Description" />
            </div>

            <div className="inputBox">
              <Briefcase size={16} />
              <input name="requirements" value={form.requirements} onChange={handleChange} placeholder="Skills (comma separated)" />
            </div>

            <div className="inputBox"> 
              <IndianRupee size={16} />
              <input name="salary_range" value={form.salary_range} onChange={handleChange} placeholder="Salary / Stipend" />
            </div>

            {/* REMOTE */}
            <div className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 border rounded-xl px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Wifi size={16} /> Remote Job
              </div>

              <div
                onClick={() =>
                  handleChange({
                    target: {
                      name: "remote",
                      type: "checkbox",
                      checked: !form.remote,
                    },
                  })
                }
                className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
                  form.remote ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <motion.div
                  animate={{ x: form.remote ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-5 h-5 bg-white rounded-full"
                />
              </div>
            </div>

            {/* LOCATION */}
            <div className={`inputBox ${form.remote ? "opacity-50 cursor-not-allowed" : ""}`}>
              <MapPin size={16} />
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder={form.remote ? "Disabled (Remote Job)" : "Enter Location"}
                disabled={form.remote}
              />
            </div>

            {/* 🔥 STATUS FIXED */}
            <div className="inputBox">
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
              </select>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-xl font-semibold shadow-lg disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Changes"}
            </motion.button>

            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 py-2.5 rounded-xl"
            >
              Cancel
            </button>
          </div>

        </div>
      </motion.div>

      <style>{`
        .inputBox {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          border: 1px solid #e5e7eb;
          padding: 10px 12px;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
};

export default EditModal;