import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Users, Briefcase } from "lucide-react";
import AnalyticsImg from "../../../assets/Analytics.svg";

import { API_BASE_URL } from "../../../Api/config";
import { useAuth } from "../../../Context/AuthContext";

export default function RecruitmentAnalytics() {
  const { authState } = useAuth();
  const token = authState?.accessToken;

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    totalCandidates: 0,
    activeJobs: 0,
  });

  // ---------------- FETCH DATA ----------------
  const fetchData = async () => {
    try {
      setLoading(true);

      // TOTAL CANDIDATES
      const applicationsRes = await axios.get(
        `${API_BASE_URL}applications/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const totalCandidates =
        applicationsRes.data?.data?.length ||
        applicationsRes.data?.results?.length ||
        0;

      // ACTIVE JOBS ONLY
      const jobsRes = await axios.get(
        `${API_BASE_URL}jobs/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const jobs =
        jobsRes.data?.data ||
        jobsRes.data?.results ||
        [];

      const activeJobs = jobs.filter(
        (job) =>
          job.status === "active" ||
          job.status === "ACTIVE" ||
          job.is_active === true
      ).length;

      setData({
        totalCandidates,
        activeJobs,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cards = [
    {
      title: "Total Candidates",
      value: loading ? "..." : data.totalCandidates,
      icon: (
        <Users size={14} className="text-gray-700" />
      ),
      bgClass:
        "bg-gradient-to-br from-pink-50/40 via-white to-pink-50/20",
      borderClass: "border-pink-100",
      glow: "bg-pink-400/10",
    },
    {
      title: "Active Jobs",
      value: loading ? "..." : data.activeJobs,
      icon: (
        <Briefcase size={14} className="text-gray-700" />
      ),
      bgClass:
        "bg-gradient-to-br from-indigo-50/40 via-white to-indigo-50/20",
      borderClass: "border-indigo-100",
      glow: "bg-indigo-400/10",
    },
  ];

  return (
    <div className="w-full max-w-8xl mx-auto p-10 flex flex-col lg:flex-row items-center gap-12 bg-white rounded-lg">

      {/* LEFT */}
      <div className="flex-1 space-y-6">

        <div>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Recruitment Analytics
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            Deep insight into your hiring engine.
            Track velocity, source quality and
            funnel efficiency with our curated business intelligence suite.
          </p>

        </div>

        {/* CARDS */}
        <div className="flex flex-wrap gap-5 pt-4">

          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative w-52 p-4 rounded-2xl border ${card.borderClass} ${card.bgClass} shadow-sm overflow-hidden backdrop-blur-md`}
            >

              <div className={`absolute -right-2 -bottom-2 w-14 h-14 blur-2xl rounded-full ${card.glow}`} />

              <div className="relative z-10">

                <div className="flex items-center gap-2 mb-2">

                  <div className="p-1.5 bg-white/80 rounded-md shadow-sm border border-gray-50">
                    {card.icon}
                  </div>

                  <span className="text-gray-600 font-medium text-xs md:text-sm whitespace-nowrap">
                    {card.title}
                  </span>

                </div>

                <div className="text-2xl font-bold text-gray-900 tracking-tight ml-1">
                  {card.value}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <img
          src={AnalyticsImg}
          alt="Analytics Illustration"
          className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl mr-20"
        />
      </motion.div>

    </div>
  );
}