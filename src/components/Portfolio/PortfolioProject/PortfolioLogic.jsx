import React, { useEffect, useState } from "react";
import MageAbout from "./images/MageAbout.png";
import MageBlog from "./images/mageBlog.png";
import MagePortfolio from "./images/magePortfolio.png";
import MageService from "./images/mageService.png";
import "../PortfolioSelection-CSS/PortfolioProject.css";

const FirstProject = [MageAbout, MageBlog, MagePortfolio, MageService];

export default function PortfolioLogic() {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProject((prevIndex) => (prevIndex + 1) % FirstProject.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="projectCarousel">
      {FirstProject.map((project, index) => (
        <img
          key={index}
          src={project}
          alt={`Project ${index + 1}`}
          className={`project-image ${index === currentProject ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
