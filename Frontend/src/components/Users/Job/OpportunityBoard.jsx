import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Check } from 'lucide-react';
import axios from 'axios';
import JobCard from './JobCard';
import JobViewModal from './ViewModal';
import ApplyModal from './ApplyModal'; 
import { useAuth } from '../../../Context/AuthContext';
import { API_BASE_URL } from '../../../Api/config';

const OpportunityBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState(["Remote"]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  const [applyJob, setApplyJob] = useState(null); 

  const { authState } = useAuth();

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API_BASE_URL}jobs/`, {
        headers: {
          Authorization: `Bearer ${authState.accessToken}`
        }
      });

      let data = res.data.data || [];

      // ❌ closed jobs remove
      data = data.filter(job => job.status !== "closed");

      setJobs(data);

    } catch (err) {
      console.error("Error fetching jobs:", err);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authState.accessToken) {
      fetchJobs();
    }
  }, [authState.accessToken]);

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  // ✅ FILTER FIX (internship issue bhi solved)
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const searchText = searchTerm.toLowerCase();

      const matchesSearch =
        job.title?.toLowerCase().includes(searchText) ||
        job.organization_name?.toLowerCase().includes(searchText) ||
        job.description?.toLowerCase().includes(searchText);

      const jobTypes = [];

      if (job.remote) jobTypes.push("Remote");

      if (
        job.hiring_type?.toLowerCase() === "internship" ||
        job.title?.toLowerCase().includes("intern")
      ) {
        jobTypes.push("Internship");
      } else {
        jobTypes.push("Full-time");
      }

      const matchesType =
        activeFilters.length === 0 ||
        activeFilters.some(filter => jobTypes.includes(filter));

      return matchesSearch && matchesType;
    });
  }, [searchTerm, activeFilters, jobs]);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-[#fdfdff] min-h-screen rounded-xl">

      {/* Header */}
      <header className="mb-4">
        <h1 className="text-3xl font-black text-gray-800 mb-2">
          Explore <span className="text-[#a855f7]">Opportunities</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-sm font-medium">
          Find your next career-defining role within our ecosystem 🚀
        </p>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-6">

        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search for job titles, keywords, or companies..."
            className="w-full bg-[#f3f0f7] border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-200 transition-all text-gray-600 placeholder:text-gray-400 font-medium"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="bg-[#8b5cf6] text-white px-6 py-4 rounded-2xl flex items-center gap-2 font-bold hover:bg-[#7c3aed] transition-colors whitespace-nowrap">
          <SlidersHorizontal size={18} />
          Filters
        </button>

        <div className="flex gap-4 items-center pl-4 border-l border-gray-100">
          {["Remote", "Internship", "Full-time"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer group">
              <div 
                onClick={() => toggleFilter(type)}
                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                  activeFilters.includes(type) 
                    ? 'bg-[#8b5cf6] border-[#8b5cf6]' 
                    : 'bg-gray-100 border-transparent'
                }`}
              >
                {activeFilters.includes(type) && <Check size={14} className="text-white" />}
              </div>
              <span className="text-gray-500 font-bold text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Jobs */}
      <div className="h-[600px] overflow-y-auto p-5 rounded-3xl custom-scrollbar">

        {loading ? (
          <div className="text-center py-20 text-gray-400 font-medium">
            Loading jobs...
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode='popLayout'>
              {filteredJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onView={() => setSelectedJob(job)}
                  onApply={() => setApplyJob(job)} // ✅ FIX
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filteredJobs.length === 0 && !loading && (
          <div className="text-center py-20 text-gray-400 font-medium">
            No jobs found matching your criteria.
          </div>
        )}
      </div>

      {/* VIEW MODAL */}
      {selectedJob && (
        <JobViewModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}

      {/* APPLY MODAL */}
      {applyJob && (
        <ApplyModal
          job={applyJob}
          onClose={() => setApplyJob(null)}
        />
      )}

      {/* Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default OpportunityBoard;