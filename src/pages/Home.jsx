import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import AboutSection from "../components/AboutSection/AboutSection";
import DepartmentsSection from "../components/DepartmentsSection/DepartmentsSection";
import MedicalServiceSection from "../components/MedicalServiceSection/MedicalServiceSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import ExpertDoctors from "../components/ExpertDoctors/ExpertDoctors";




const Home = () => {
  return (
    <>
      
      <HeroSection />
      <InfoSection/>
      <AboutSection/>
      <DepartmentsSection/>
      <TestimonialSection/>
      <MedicalServiceSection/>
      <ExpertDoctors/>
      
      
    </>
  );
};

export default Home;