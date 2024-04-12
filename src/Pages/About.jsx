import React from "react";
import Hero from '../Components/About/Hero';
import AboutSection from '../Components/About/AboutSection';
import OurPresident from '../Components/About/OurPresident';
import MissionVision from '../Components/About/MissionVision';
import OurTeam from '../Components/About/OurTeam';
import Location from '../Components/Location/Location';

   const About = () => {
  return (
    <div className='pt-14'>
      <Hero />
      <AboutSection />
      <OurPresident />
      <MissionVision />
      <OurTeam />
       <Location />
    </div>
  );
};

export default About;
