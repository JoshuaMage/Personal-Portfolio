import React from "react";
import PortfolioLogic from "../PortfolioProject/PortfolioLogic.jsx";

export default function PortfolioProject({ projectSet }) {
  return (
    <div id="portfolio-Project">
      <section id="title-Project1">
        <h2 className="title">Mage Example Project</h2>
        <PortfolioLogic projectSet={projectSet} />
      </section>
    </div>
  );
}
