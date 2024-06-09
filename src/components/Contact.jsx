import { TitleConcept } from "./Resume";
import {CONTACT_DETAILS} from "../components/Portfolio/Contact.js"
import map from "../assets/googleMap.png";
import "../component-CSS/Map.css";

const ContactDetails = ({ svg, details, description }) => (
    <div className="contact-item">
      <section className="contact-icon" dangerouslySetInnerHTML={{ __html: svg }} />
      <section className="contact-info">
        <h2>{details}</h2>
        <p>{description}</p>
      </section>
    </div>
  );


export default function Contact() {
  return (
    <div>
      <section id="resume">
        <TitleConcept Title="Contact" />
      </section>

      <section id="map-Address">
        <img src={map} alt="my address" />
        <button>
          <a href="https://www.google.com/maps/place/1015+Vista+Grande+St,+Mariveles,+Bataan/@14.4415498,120.4736302,17z/data=!3m1!4b1!4m5!3m4!1s0x3396192933eae7e1:0xadc19d61e18c8ebb!8m2!3d14.4415498!4d120.4762051?hl=en-US&entry=ttu"></a>
          View large Map
        </button>
      </section>

      <section id="information">
    {CONTACT_DETAILS.map(contacts => (
        <ContactDetails key={contacts.id} {...contacts}/>
    ))}
      </section>
    </div>
  );
}
