import React from "react";
import IntroduceEducations from "./LandingPage/JS/Landing.jsx";
import Particle from "./LandingPage/JS/BackgroundAnimation.jsx";
import EducationTabs from "./Tabs/JS/EducationTabs.jsx"

function HomePage() {
  return (
    <>
      <IntroduceEducations />
      <Particle />
      <EducationTabs />
    </>
  );
}

export default HomePage;
