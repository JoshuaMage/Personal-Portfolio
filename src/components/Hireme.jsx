import "../component-CSS/Hire.css";
import { TitleConcept } from "./Resume";

export default function Hireme() {


  return (
    <div id="HIRE">
      <section id="resume">
        <TitleConcept Title="Hire Me" />
      </section>

      <div id="Hire-Section">
        <h2>Send a message</h2>

        <div id="hire-Fillup">
          <section id="column-one">
            <input type="text" placeholder="First name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Project title" />
          </section>
          <section id="column-two">
            <input type="text" placeholder="Last name" />
            <input type="number" placeholder="phone" />
            <select name="selected-service" id="hire-button" >
              <option className="option-selection">Choose Service</option>
              <option className="option-selection">Apps and Web Development</option>
              <option className="option-selection">Web & Graphic Design</option>
            </select>
          </section>
        </div>
        <section>
          <textarea placeholder="Message" />
        </section>
        <button id="submit-button">SUBMIT NOW</button>
      </div>
    </div>
  );
}
