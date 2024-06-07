import { useState } from "react";
import Aboutme from "./Aboutme.jsx";
import Resume from "./Resume.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import "../component-CSS/Header.css";

function App() {
  const [currentSelection, setCurrentSelection] = useState(null);

  const showAbout = () => {
    setCurrentSelection("about");
  };

  const showResume = () => {
    setCurrentSelection("resume");
  };

  const showPortfolio = () => {
    setCurrentSelection("portfolio");
  };

  return (
    <div id="header-section">
      <div id="header-Container">
        <section>
          <h1>J</h1>
        </section>

        <div>
          <h2 id="applicant-Name">
            <strong>Joshua</strong> Del Rosario
          </h2>
        </div>

        <section id="button-Container">
          <ul>
            <li>
              <button className="header-Button" onClick={() => showAbout()}>
                About Me
              </button>
            </li>
            <li>
              <button className="header-Button" onClick={() => showResume()}>
                Resume
              </button>
            </li>
            <li>
              <button className="header-Button" onClick={() => showPortfolio()}>
                Portfolio
              </button>
            </li>
            <li>
              <button className="header-Button">blog</button>
            </li>
            <li>
              <button className="header-Button">Contact</button>
            </li>
            <li>
              <button id="header-Hireme">Hire Me</button>
            </li>
          </ul>
        </section>
      </div>
      {currentSelection === "about" && <Aboutme />}
      {currentSelection === "resume" && <Resume />}
      {currentSelection === "portfolio" && <Portfolio />}
    </div>
  );
}

export default App;
