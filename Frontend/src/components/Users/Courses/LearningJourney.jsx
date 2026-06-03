import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react'; 
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';
import { fetchCourses } from './courseApi';
import { useAuth } from '../../../Context/AuthContext';

const LearningJourney = ({ onStartCourse }) => {
  const [activeTab, setActiveTab] = useState('All Courses');

  const [courses, setCourses] = useState([]);
  const [bookmarks, setBookmarks] = useState([]); // 🔥 bookmarks
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("web development");
  const [loading, setLoading] = useState(false);

  const { authState } = useAuth();

  // ❌ removed Completed
  const categories = ["All Courses", "My Learning"];

  // 🔥 Load bookmarks
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(saved);
  }, []);

  // 🔥 API CALL
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);

        const res = await fetchCourses(
          searchQuery,
          12,
          authState.accessToken
        );

        const courseArray = res.data || [];

        const formatted = courseArray.map((item, index) => ({
          id: index,
          title: item.title,
          category: item.channel,
          progress: 0,
          lessons: 0,
          thumbnail: item.thumbnail,
          playlistId: item.playlist_id,
          playlistUrl: item.playlist_url,
        }));

        setCourses(formatted);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (authState.accessToken) {
      loadCourses();
    }

  }, [searchQuery, authState.accessToken]);

  // 🔍 Search
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchInput);
    }
  };

  // 🔥 toggle bookmark
  const toggleBookmark = (course) => {
    let updated = [...bookmarks];

    const exists = updated.find(item => item.playlistId === course.playlistId);

    if (exists) {
      updated = updated.filter(item => item.playlistId !== course.playlistId);
    } else {
      updated.push(course);
    }

    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  // 🔥 decide data
  const displayCourses =
    activeTab === "My Learning" ? bookmarks : courses;

  return (
    <div className="h-screen flex flex-col bg-[#FAFAFA] overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 pt-6 flex-shrink-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              My <span className="text-[#A855F7]">Learning</span> Journey
            </h1>
        <p className="text-gray-400 max-w-2xl text-sm font-medium">
          Find your next career-defining role within our ecosystem 🚀
        </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              type="text" 
              placeholder="Search courses..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full bg-white border border-gray-100 rounded-full py-3 pl-12 pr-6 text-sm outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-10 border-b border-gray-100">
          {categories.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg font-bold relative ${
                activeTab === tab ? 'text-[#A855F7]' : 'text-gray-400'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#A855F7]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1 overflow-y-auto px-6 md:px-12 pb-12 pt-8">
        <div className="max-w-7xl mx-auto">

          {loading && (
            <p className="text-center text-gray-400">Loading...</p>
          )}

          {!loading && displayCourses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayCourses.map((item) => (
                <motion.div key={item.playlistId}>
                  <CourseCard 
                    course={item}
                    isLearning={activeTab !== 'All Courses'}
                    onAction={() => onStartCourse(item)}
                    onBookmark={() => toggleBookmark(item)}
                    isBookmarked={
                      bookmarks.some(b => b.playlistId === item.playlistId)
                    }
                  />
                </motion.div>
              ))}
            </div>
          )}

          {!loading && displayCourses.length === 0 && (
            <p className="text-center text-gray-400">
              {activeTab === "My Learning"
                ? "No bookmarked courses yet 😢"
                : "No courses found"}
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default LearningJourney;