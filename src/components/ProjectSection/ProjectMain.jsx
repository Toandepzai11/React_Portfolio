import React from "react";
import Particle from "./LandingPage/JS/BackgroundAnimation.jsx";
import IntroduceProject from "./LandingPage/JS/Landing.jsx";
import ProjectBar from "./Projects/ProjectContainer.jsx"

function ProjectMain() {
  return (
    <>
      <Particle />
      <IntroduceProject />
      <ProjectBar />
    </>
  );
}

export default ProjectMain;
