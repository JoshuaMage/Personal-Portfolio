import React, { useState } from "react";
import { PORTFOLIO_CONCEPTS } from "../Portfolio/PortfolioSelection-CSS/Portfolio.js";
import "../../component-CSS/Portfolio.css";
import PortfolioProject from "./PortfolioProject/PortfolioProject.jsx";

export default function PortfolioDetailed() {
  const [showPortfolioProject, setShowPortfolioProject] = useState(false);
  const Detailed = PORTFOLIO_CONCEPTS.slice(0, 2);

  const handleImageClick = (id) => {
    if (id === 1) { // Check if the first image is clicked
      setShowPortfolioProject(true);
    }
  };

  return (
    <div>
      <div id="portfolio-Griditem">
        <div id="image-selection">
          <div className="wrapper">
            {Detailed.map((concept, index) => (
              <div className="image" key={index} onClick={() => handleImageClick(concept.id)}>
                <img src={concept.image} alt="portfolio item" />
                <div className="content">
                  <h2>{concept.description}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showPortfolioProject && <PortfolioProject />}
    </div>
  );
}
