import React from 'react'
import Section1 from "./Section1";
import Logomarquee from "./LogoMarquee";
import WhatUpherix from "./WhatUpherix";
import HowItWork from "./HowItWork";
import SuccessStories from "./SuccessStories";
import Footer from "../Footer";

function home() {
  return (
    <div>
       
      <Section1/>
      <Logomarquee/>
      <WhatUpherix/>
      <HowItWork/>
      <SuccessStories/>
      <Footer/>
    </div>
  )
}

export default home
