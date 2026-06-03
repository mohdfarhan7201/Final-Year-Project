import React from 'react'
import Section1 from "./Section1";
import TopCourses from "./TopCourses";
import Roadmap from "./RoadmapSection";
import Footer from "../Footer";

function courses() {
  return (
    <div>
      <Section1/>
      <TopCourses/>
      <Roadmap/>
      <Footer/>
    </div>
  )
}

export default courses
