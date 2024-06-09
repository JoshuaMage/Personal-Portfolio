import React, { useEffect, useState } from "react";
import MageAbout from "./images/MageAbout.png";
import MageBlog from "./images/mageBlog.png";
import MagePortfolio from "./images/magePortfolio.png";
import MageService from "./images/mageService.png";
import "../PortfolioSelection-CSS/PortfolioProject.css";
import grab1 from "./images/grab1.png";
import grab2 from "./images/grab2.png";
import grab3 from "./images/grab3.png";
import grab4 from "./images/grab4.png";
import grab5 from "./images/grab5.png";
import grab6 from "./images/grab6.png";

const FirstProject = [MageAbout, MageBlog, MagePortfolio, MageService];
const SecondProject = [grab1, grab2, grab3, grab4, grab5, grab6];

export default function PortfolioLogic({ projectSet }) {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = projectSet === "first" ? FirstProject : SecondProject;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProject((prevIndex) => (prevIndex + 1) % projects.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [projects.length]);

  const handleImageClick = () => {
    setCurrentProject(0); // Reset the current project index when toggling
  };

  return (
    <div className="projectCarousel">
      {projects.map((project, index) => (
        <img
          key={index}
          src={project}
          alt={`Project ${index + 1}`}
          className={`project-image ${index === currentProject ? "active" : ""}`}
          onClick={handleImageClick}
        />
      ))}
    </div>
  );
}
