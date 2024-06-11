import React, { useState } from "react";
import "../../component-CSS/Portfolio.css";
import "../../component-CSS/Resume.css";
import { TitleConcept } from "../Resume.jsx";
import PortfolioAll from "./PortfolioAll.jsx";
import PortfolioDetailed from "./PortfolioDetailed.jsx";
import PortfolioURL from "./PortfolioURL.jsx";
import PortfolioImage from "./PortfolioImage.jsx"

export default function Portfolio() {
  const [currentPortfolio, setCurrentPortfolio] = useState("All");

  const showAll = () => {
    setCurrentPortfolio("All");
  };

  const showDetailed = () => {
    setCurrentPortfolio("Detailed")
  }

  const showURL = () => {
    setCurrentPortfolio("URL")
  }

  const showImage = () => {
    setCurrentPortfolio("IMAGE")
  }

  return (
    <div id="PORTFOLIO">
    <div id="Portfolio-Section">
      <section id="resume">
        <TitleConcept Title="Portfolio" />
      </section>

      <div id="Portfolio-Selection">
        <ul>
          <li>
            <button onClick={() =>showAll()}>All</button>
            <button onClick={() => showDetailed()}>Detailed</button>
            <button onClick={() => showURL()}>Github</button>
            <button onClick={() => showImage()}>Image</button>
          </li>
        </ul>
      </div>
      {currentPortfolio === "All" && <PortfolioAll />}
      {currentPortfolio === "Detailed" && <PortfolioDetailed />}
      {currentPortfolio === "URL" && <PortfolioURL />}
      {currentPortfolio === "IMAGE" && <PortfolioImage />}
    </div>
    </div>
  );
}
