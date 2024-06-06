import React from "react";
import "../component-CSS/Portfolio.css";
import "../component-CSS/Resume.css";
import { TitleConcept } from "./Resume.jsx";
import Drum from "../assets/DrumKit.png";
import MarivelesGrab from "../assets/mariveles.grab.png"
import InvestmentCalculator from "../assets/InvestmentCalc..png"
import AnimeSite from "../assets/Anime.png"
import tictacToe from "../assets/tic-tac-toe.png"
import MagePortfolio from "../assets/MagePortfolio.png"

function PortfolioImage(props) {
  return (
    <div id="image-selection">
      <div className="wrapper">
        <div className="image">
          <img src={props.image} alt="drumkit" />
          <div className="content">
            <h2>{props.Title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div id="Portfolio-Section">
      <section id="resume">
        <TitleConcept Title="Portfolio" />
      </section>

      <div id="Portfolio-Selection">
        <ul>
          <li>
            <button>All</button>
            <button>Detailed</button>
            <button>Direct Url</button>
            <button>Image</button>
          </li>
        </ul>
      </div>

      <div id="portfolio-Griditem">
        <PortfolioImage image={Drum} Title="Drum-Kit" />
        <PortfolioImage image={MarivelesGrab} Title="Mariveles Grab" />
        <PortfolioImage image={InvestmentCalculator} Title="Investment Calculator" />
        <PortfolioImage image={AnimeSite} Title="Anime" />
        <PortfolioImage image={tictacToe} Title="Tic-Tac-Toe" />
        <PortfolioImage image={MagePortfolio} Title="Mage Portfolio" />
      </div>
    </div>
  );
}
