import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Greeting from "./greeting";
import About from "./about";
import Skill from "./skill";
import Project from "./project";
import Contact from "./contact";
import "../css/home.css";
const Home = () => {
  const { id } = useParams();

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      const offset =
        element.offsetTop - document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }, [id]);

  return (
    <>
      <div className="flex place-content-center">
        <div className="parent-home-div">
          <div id="home">
            <Greeting />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skill">
            <Skill />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
