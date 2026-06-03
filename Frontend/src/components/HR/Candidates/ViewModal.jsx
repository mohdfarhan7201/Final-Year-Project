import { motion } from "framer-motion";
import {
  X,
  FileText,
  Briefcase,
  CalendarDays,
  CheckCircle,
  XCircle,
} from "lucide-react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import { API_BASE_URL } from "../../../Api/config";

export default function ViewModal({ data, onClose, onUpdate }) {
  const { authState } = useAuth();

  const handleStatusUpdate = async (newStatus) => {
    try {
      await axios.patch(
        `${API_BASE_URL}applications/${data.id}/update_status/`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${authState.accessToken}` } }
      );
      onUpdate();
      onClose();
    } catch (error) {
      alert(
        "Error: " +
          (error.response?.data?.message || "Failed to update status")
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative"
      >
        {/* 🔥 CLOSE BUTTON (NOW VISIBLE PROPERLY) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow-md hover:scale-110 hover:bg-gray-100 transition"
        >
          <X size={18} className="text-gray-700" />
        </button>

        {/* 🔥 HEADER */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 pt-8 pb-10 text-center text-white">
          <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-2xl font-bold shadow-lg border border-white/30">
            {data.applicant_name?.[0]?.toUpperCase()}
          </div>

          <h2 className="mt-3 text-xl font-bold">
            {data.applicant_name}
          </h2>

          <p className="text-sm opacity-90 flex items-center justify-center gap-1">
            <Briefcase size={14} /> {data.job_title}
          </p>

          {/* STATUS */}
          <div className="mt-3">
            <span
              className={`px-3 py-1 text-xs rounded-full font-semibold
              ${
                data.status === "shortlisted"
                  ? "bg-green-100 text-green-600"
                  : data.status === "rejected"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {data.status}
            </span>
          </div>
        </div>

        {/* 🔥 BODY */}
        <div className="p-6 space-y-4">

          {/* INFO */}
          <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
            <p className="text-xs font-semibold text-gray-400 uppercase">
              Application Info
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={14} />
              {new Date(data.applied_at).toLocaleString()}
            </p>

            <p className="text-sm text-gray-600 italic mt-2 leading-relaxed">
              “{data.cover_letter || "No cover letter"}”
            </p>
          </div>

          {/* RESUME */}
          <a
            href={data.resume}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            <FileText size={16} />
            View Resume
          </a>

          {/* ACTIONS */}
          <div className="flex gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => handleStatusUpdate("rejected")}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition"
            >
              <XCircle size={16} />
              Reject
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => handleStatusUpdate("shortlisted")}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-purple-600 text-white rounded-xl font-semibold shadow hover:bg-purple-700 transition"
            >
              <CheckCircle size={16} />
              Shortlist
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}