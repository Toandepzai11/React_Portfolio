import React from "react";
import Navbar from "../../../HomeSection/Navbar/JS/Navbar.jsx";
import "boxicons";
import "../CSS/IntroduceEdu.css";
// import Particle from "../../LandingPage/JS/BackgroundAnimation.jsx";


const IntroduceEducations = () => {
  return (
    <>
      <Navbar activeLink="education" />
      <div className="introduceDiv">
        <h3 className="EducationTitle">Education</h3>

        <h3>
          <i className="good-sentence-edu">
            “We now accept the fact that learning is a lifelong process of
            keeping abreast of change. And the most pressing task is to teach
            people how to learn.”
          </i>
          <strong>- Peter Drucker</strong>
        </h3>
      </div>
      
    </>
  );
};

export default IntroduceEducations;
