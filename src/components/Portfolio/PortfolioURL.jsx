import { PORTFOLIO_CONCEPTS } from "../Portfolio/PortfolioSelection-CSS/Portfolio.js";
import "../../component-CSS/Portfolio.css";

export default function PortfolioURL() {
    const URL = PORTFOLIO_CONCEPTS.slice(0,4)
  return (
    <div id="portfolio-Griditem">
      <div id="image-selection">
        <div className="wrapper">
          {URL.map((concept, index) => (
            <a href={concept.url}>
            <div className="image" key={index}>
              <img src={concept.image} alt="portfolio item" />
              <div className="content">
                <h2>{concept.description}</h2>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
