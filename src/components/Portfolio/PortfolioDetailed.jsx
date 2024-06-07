import MagePortfolio from "../../assets/MagePortfolio.png";
import MarivelesGrab from "../../assets/mariveles.grab.png";

export default function PortfolioDetailed() {
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
      <div id="portfolio-Griditem">
        <PortfolioImage image={MarivelesGrab} Title="Mariveles Grab" />

        <PortfolioImage image={MagePortfolio} Title="Mage Portfolio" />
      </div>
    </div>
  );
}
