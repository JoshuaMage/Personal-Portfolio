import Drum from "../../assets/DrumKit.png";
import MarivelesGrab from "../../assets/mariveles.grab.png";
import InvestmentCalculator from "../../assets/InvestmentCalc..png";
import AnimeSite from "../../assets/Anime.png";
import tictacToe from "../../assets/tic-tac-toe.png";
import MagePortfolio from "../../assets/MagePortfolio.png";

export default function PortfolioAll() {
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
  return (
    <div>
      <div>
        <div id="portfolio-Griditem">
          <PortfolioImage image={Drum} Title="Drum and kit" />
          <PortfolioImage image={MarivelesGrab} Title="Mariveles Grab" />
          <PortfolioImage
            image={InvestmentCalculator}
            Title="Investment Calculator"
          />
          <PortfolioImage image={AnimeSite} Title="Anime" />
          <PortfolioImage image={tictacToe} Title="Tic-Tact-Toe" />
          <PortfolioImage image={MagePortfolio} Title="Mage Portfolio" />
        </div>
      </div>
    </div>
  );
}
