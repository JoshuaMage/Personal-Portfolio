import { PORTFOLIO_CONCEPTS } from "../Portfolio/PortfolioSelection-CSS/Portfolio.js";
import "../../component-CSS/Portfolio.css";

export default function PortfolioDetailed() {
  const Detailed = PORTFOLIO_CONCEPTS.slice(0, 2);

  return (
    <div id="portfolio-Griditem">
      <div id="image-selection">
        <div className="wrapper">
          {Detailed.map((concept, index) => (
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
