import React from 'react';
import Portfolioimg from './PortfolioImg.jsx';
import DrumImage from "../../assets/DrumKit.png";
import MarivelesGrabImage from "../../assets/mariveles.grab.png";
import InvestmentCalculatorImage from "../../assets/InvestmentCalc.png";
import AnimeSiteImage from "../../assets/Anime.png";
import tictacToeImage from "../../assets/tic-tac-toe.png";
import MagePortfolioImage from "../../assets/MagePortfolio.png";

const PortfolioImage = () => {
  const images = [
    DrumImage,
    MarivelesGrabImage,
    InvestmentCalculatorImage,
    AnimeSiteImage,
    tictacToeImage,
    MagePortfolioImage
  ];

  return (
    <div>
      <Portfolioimg images={images} />
    </div>
  );
};

export default PortfolioImage;
