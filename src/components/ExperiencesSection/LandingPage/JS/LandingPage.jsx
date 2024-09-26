import React from "react";
import Navbar from "../../../HomeSection/Navbar/JS/Navbar.jsx";
import "boxicons";
import Particles from "../../LandingPage/JS/BackgroundAnimation.jsx";
// import "../CSS/introduceProject.css";

const IntroduceExperiences = () => {
  return (
    <>
      <Navbar activeLink="experiences" />
      <div className="introduceDiv">
        <h3 style={{"width": "70%"}} className="ProjectTitle">Work Experiences</h3>

        <h3>
          <i>
            "Throughout the years of work experiences with different companies,
            I've learned various valuable lessons that will help me to improve
            and advance to be a better programmer."
          </i>
        </h3>
      </div>
      <Particles />

    </>
  );
};

export default IntroduceExperiences;
