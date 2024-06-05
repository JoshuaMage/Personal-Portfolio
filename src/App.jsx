import { useState } from "react";
import Aboutme from "./components/Aboutme";
import Resume from "./components/Resume";
import "./component-CSS/Header.css";

function App() {
  const [currentSelection, setCurrentSelection] = useState(null);

  const showAbout = () => {
    setCurrentSelection("about");
  };

  const showResume = () => {
    setCurrentSelection("resume");
  };

  return (
    <div id="app-Container">
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
              <button className="header-Button">Portfolio</button>
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
    </div>
  );
}

export default App;
