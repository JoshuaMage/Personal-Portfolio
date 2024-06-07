import React, { useState } from "react";
import "../../component-CSS/Portfolio.css";
import "../../component-CSS/Resume.css";
import { TitleConcept } from "../Resume.jsx";
import PortfolioAll from "./PortfolioAll.jsx";
import PortfolioDetailed from "./PortfolioDetailed.jsx";

export default function Portfolio() {
  const [currentPortfolio, setCurrentPortfolio] = useState();

  const showAll = () => {
    setCurrentPortfolio("All");
  };

  const showDetailed = () => {
    setCurrentPortfolio("Detailed")
  }

  return (
    <div id="Portfolio-Section">
      <section id="resume">
        <TitleConcept Title="Portfolio" />
      </section>

      <div id="Portfolio-Selection">
        <ul>
          <li>
            <button onClick={() =>showAll()}>All</button>
            <button onClick={() => showDetailed()}>Detailed</button>
            <button>Direct Url</button>
            <button>Image</button>
          </li>
        </ul>
      </div>
      {currentPortfolio === "All" && <PortfolioAll />}
      {currentPortfolio === "Detailed" && <PortfolioDetailed />}
    </div>
  );
}
