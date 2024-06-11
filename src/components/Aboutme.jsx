import React, { useState } from "react";
import Profile from "../assets/Profile.png";
import "../component-CSS/About.css";
import Resume from "../assets/Resume.pdf";
import Contacts from "./Contact";

export default function Aboutme() {
  const [contact, setContact] = useState(null)

  const showContact = () => {
    setContact("contact")
  }


  return (
    <div id="C:\Users\Administrator\Desktop\Personal.Portfolio\src\component-CSS\About.css">
      <div id="About-Container">
        <section >
          <h2>Web Developer</h2>
          <p>
            As a dedicated and passionate web developer with 1 year of
            experience, I specialize in creating dynamic  <br /> and responsive websites
            using a range of technologies including HTML, CSS, JavaScript, and
            frameworks such as React and Svelte. My strong foundation in both
            front-end and back-end development, combined with a keen eye for
            design and detail, allows me to build seamless user experiences and
            robust web applications.
          </p>
          <a href={Resume} download="resume">
            <button>Download CV </button>
          </a>
            <button onClick={showContact}>Contact</button>
        </section>
        <img src={Profile} alt="My picture" />
      </div>
      {contact === "contact" && <Contacts />}
      
    </div>
  );
}
