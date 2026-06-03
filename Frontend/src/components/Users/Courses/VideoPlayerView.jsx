import React, { useEffect, useState } from 'react';
import { ChevronLeft, PlayCircle, ExternalLink, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoPlayerView({ course, onBack }) {
  const [playlistId, setPlaylistId] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (course?.playlistId) {
      setPlaylistId(course.playlistId);
    }

    // 🔖 check bookmark
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const exists = saved.find(item => item.playlistId === course?.playlistId);
    setBookmarked(!!exists);

  }, [course]);

  // 🔖 toggle bookmark
  const toggleBookmark = () => {
    let saved = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (bookmarked) {
      saved = saved.filter(item => item.playlistId !== course.playlistId);
    } else {
      saved.push(course);
    }

    localStorage.setItem("bookmarks", JSON.stringify(saved));
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 md:px-10 py-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 font-semibold"
        >
          <ChevronLeft size={20} />
          Back
        </button>

        {/* 🔖 Bookmark Button */}
        <button
          onClick={toggleBookmark}
          className={`p-2 rounded-full transition ${
            bookmarked ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-500"
          }`}
        >
          <Bookmark size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 🎥 VIDEO */}
        <motion.div 
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-xl bg-black">
            {playlistId ? (
              <iframe
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                title="YouTube Playlist Player"
                allowFullScreen
                className="w-full aspect-video"
              />
            ) : (
              <p className="text-center text-gray-400 p-10">Loading...</p>
            )}
          </div>

          {/* INFO */}
          <div className="mt-6 bg-white p-6 rounded-3xl shadow-sm">
            <h1 className="text-2xl font-bold">{course?.title}</h1>
            <p className="text-gray-500 mt-1">{course?.category}</p>

            <a
              href={course?.playlistUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-purple-600 text-white rounded-xl"
            >
              <ExternalLink size={16} />
              Open in YouTube
            </a>
          </div>
        </motion.div>

        {/* 📋 PLAYLIST STYLE SIDEBAR */}
        <motion.div 
          className="lg:col-span-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white rounded-3xl p-5 shadow-sm">

            <h3 className="font-bold mb-4 text-gray-800">
              Playlist Preview
            </h3>

            {/* 🔥 Fake playlist items (UI feel like YouTube) */}
            {[1,2,3,4,5].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex gap-3 mb-4 cursor-pointer group"
              >
                <div className="relative w-28 h-16 rounded-lg overflow-hidden">
                  <img
                    src={course?.thumbnail}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <PlayCircle className="text-white" size={24} />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {course?.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    Video {i + 1}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </div>
  );
}