import Profile from "../assets/Profile.png"
import "../component-CSS/About.css"

export default function Aboutme() {
  return (
    <div>
      <div id="About-Container">
        <section>
          <h2>Web Developer</h2>
          <p>
            As a dedicated and passionate web developer with 1 year of
            experience, I specialize in creating dynamic and responsive websites
            using a range of technologies including HTML, CSS, JavaScript, and
            frameworks such as React and Svelte. My strong foundation in both
            front-end and back-end development, combined with a keen eye for
            design and detail, allows me to build seamless user experiences and
            robust web applications.
          </p>
          <button>Download CV</button>
          <button>Contact</button>
        </section>
        <>
          <img src={Profile} alt="Mypicture" />
        </>
      </div>
    </div>
  );
}