import React, { useState } from 'react';
import LearningJourney from './LearningJourney';
import VideoPlayerView from './VideoPlayerView';

export default function LearningPlatform() {
  const [view, setView] = useState('dashboard'); 
  const [activeCourse, setActiveCourse] = useState(null);

  const startCourse = (course) => {
    setActiveCourse(course);
    setView('player');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {view === 'dashboard' ? (
        <LearningJourney onStartCourse={startCourse} />
      ) : (
        <VideoPlayerView 
          course={activeCourse} 
          onBack={() => setView('dashboard')} 
        />
      )}
    </div>
  );
}