import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  Upload,
  Send,
  Briefcase,
  CheckCircle2,
  Paperclip,
  Loader2
} from "lucide-react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import { API_BASE_URL } from "../../../Api/config";

const ApplyModal = ({ job, onClose }) => {
  const { authState } = useAuth();
  const [form, setForm] = useState({
    cover_letter: "",
    resume: null
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setForm({ ...form, resume: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    if (!form.resume) {
      alert("Please upload your resume");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("job", job.id);
      formData.append("cover_letter", form.cover_letter);
      formData.append("resume", form.resume);

      await axios.post(`${API_BASE_URL}applications/`, formData, {
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Application submitted successfully 🚀");
      onClose();
    } catch (err) {
      console.error(err.response?.data);
      alert("Failed to apply");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-[110] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-xl group"
      >
        {/* THE COLOR GRADIENT SHADOW (GLOW) */}
        <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-30 blur-3xl -z-10" />

        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col relative">
          
          {/* HEADER */}
          <div className="p-8 pb-4 flex justify-between items-center relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-inner">
                <Briefcase size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">
                  Join the Team
                </h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {job.title}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all active:scale-90"
            >
              <X size={20} />
            </button>
          </div>

          {/* FORM CONTENT */}
          <div className="p-8 pt-2 space-y-6">
            
            {/* COVER LETTER SECTION */}
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Cover Letter (Optional)
              </label>
              <div className="relative">
                <textarea
                  name="cover_letter"
                  value={form.cover_letter}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us why you are a great fit..."
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-[1.5rem] p-4 text-sm font-medium focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all placeholder:text-gray-300 resize-none"
                />
                <div className="absolute top-4 right-4 text-gray-200">
                  <FileText size={20} />
                </div>
              </div>
            </div>

            {/* UPLOAD SECTION */}
            <div className="space-y-2 -mt-4">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Resume / CV
              </label>
              
              <div className="relative">
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="hidden"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                />
                <label
                  htmlFor="resume-upload"
                  className={`flex flex-col items-center justify-center w-full min-h-[120px] border-2 border-dashed rounded-[1.5rem] cursor-pointer transition-all ${
                    form.resume 
                    ? 'border-green-400 bg-green-50/30' 
                    : 'border-gray-200 bg-gray-50/50 hover:border-purple-400 hover:bg-purple-50/30'
                  }`}
                >
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    {form.resume ? (
                      <>
                        <CheckCircle2 className="text-green-500 mb-2" size={32} />
                        <p className="text-sm font-black text-gray-700 line-clamp-1">
                          {form.resume.name}
                        </p>
                        <p className="text-[10px] font-bold text-green-600 uppercase mt-1">
                          Click to change file
                        </p>
                      </>
                    ) : (
                      <>
                        <Upload className="text-gray-300 mb-2 group-hover:text-purple-500 transition-colors" size={32} />
                        <p className="text-sm font-bold text-gray-500">
                          Click to upload resume
                        </p>
                        <p className="text-[10px] font-medium text-gray-400 mt-1">
                          PDF, DOC up to 5MB
                        </p>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* FOOTER ACTION */}
          <div className="p-8 pt-4 bg-gray-50/50 border-t border-gray-100">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-[1.2rem] font-black text-sm transition-all shadow-xl ${
                loading 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-purple-200 hover:shadow-purple-300'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Submit Application <Send size={18} />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplyModal;