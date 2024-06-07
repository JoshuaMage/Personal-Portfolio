import { PORTFOLIO_CONCEPTS } from "../Portfolio/PortfolioSelection-CSS/Portfolio.js";
import "../../component-CSS/Portfolio.css";

export default function PortfolioAll() {
  return (
    <div id="portfolio-Griditem">
      <div id="image-selection">
        <div className="wrapper">
          {PORTFOLIO_CONCEPTS.map((concept, index) => (
            <div className="image" key={index}>
              <img src={concept.image} alt="portfolio item" />
              <div className="content">
                <h2>{concept.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
