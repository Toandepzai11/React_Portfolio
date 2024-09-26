import React from "react";
import Navbar from "../../../HomeSection/Navbar/JS/Navbar.jsx";
import "boxicons";
import "../CSS/introduceProject.css";

const IntroduceProject = () => {
  return (
    <>
      <Navbar activeLink="project" />
      <div className="introduceDiv">
        <h3 className="ProjectTitle">Projects</h3>

        <h3>
          <i>
            “Practice makes perfect. After a long time of practicing, our work
            will become natural, skillful, swift, and steady.”
          </i>
          ― Bruce Lee
        </h3>
      </div>
    </>
  );
};

export default IntroduceProject;
