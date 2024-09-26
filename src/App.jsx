import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeMain from "./components/HomeSection/HomeMain.jsx";
import ProjectMain from "./components/ProjectSection/ProjectMain.jsx";
import EducationMain from "./components/EducationSection/EducationMain.jsx";
import ExperiencesMain from "./components/ExperiencesSection/ExperiencePage.jsx";

function App() {

  return (
    <>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/project" element={<ProjectMain />} />
            <Route path="/education" element={<EducationMain />} />
            <Route path="/experiences" element={<ExperiencesMain />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </>
  );
}

export default App;

