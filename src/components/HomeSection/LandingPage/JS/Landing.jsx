import React from "react";
import "../CSS/introduce.css";
import "../CSS/social.css";
import "../../Navbar/CSS/Navbar.css";
import Navbar from "../../Navbar/JS/Navbar.jsx";
import "boxicons";

const Introduce = () => {
  const getRecentHours = new Date().getHours();

  // const styleForGretting = {
  //   color: "#444",
  // };
  let gretting = "";
  if (getRecentHours < 13) {
    gretting = "Good morning";
    // styleForGretting.color = "lightgreen";
  } else if (getRecentHours >= 13 && getRecentHours <= 18) {
    gretting = "Good Afternoon";
    // styleForGretting.color = "brown";
  } else {
    gretting = "Good Evening";
    // styleForGretting.color = "brown";
  }
  return (
    <>
      <Navbar activeLink="home" /> {/* Truyền giá trị "home" cho activeLink */}
      <div className="introduceDiv">
        <div className="myPicture" id="myPicture">
          <img
            src="https://yt3.ggpht.com/35wYNNBK4H6i6fzGxuFo9AtUTFdCtsNSg8KSd5yCCRKuYJT3ok57PcrsjcmC6mj2rQqXpd7W=s600-c-k-c0x00ffffff-no-rj-rp-mo"
            alt=""
          />
        </div>

        <div className="myName">
          <h1 className="my-h1">{gretting}, I'm Toan Trinh.</h1>
        </div>
        <h3>
          Welcome to my personal portfolio where you can learn more about my
          professional career like Skills, Projects and Experience.
        </h3>

        <br />

        <ul className="social">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin' ></i></a>
          <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github' ></i></a>

        </ul>
      </div>
    </>
  );
};

export default Introduce;
