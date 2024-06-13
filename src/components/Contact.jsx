import React, { useState } from "react";
import { TitleConcept } from "./Resume";
import { CONTACT_DETAILS } from "../components/Portfolio/Contact.js";
import map from "../assets/googleMap.png";
import "../component-CSS/Map.css";

const ContactDetails = ({ svg, details, description }) => (
  <div className="contact-item">
    <section
      className="contact-icon"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
    <section className="contact-info">
      <h2>{details}</h2>
      <p>{description}</p>
    </section>
  </div>
);

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (fullName.length === 0) {
      formErrors.fullName = "Please input Full Name";
    }
    if (emailAddress.length === 0) {
      formErrors.emailAddress = "Please input Email Address";
    }
    if (subject.length === 0) {
      formErrors.subject = "Please input Subject";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Handle form submission (e.g., send data to server)
      console.log("Form submitted successfully");
      // Clear the form fields
      setFullName("");
      setEmailAddress("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div id="CONTACT">
      <section id="resume">
        <TitleConcept Title="Contact" />
      </section>

      <section id="map-Address">
        <img src={map} alt="my address" />
        <button>
          <a href="https://www.google.com/maps/place/1015+Vista+Grande+St,+Mariveles,+Bataan/@14.4415498,120.4736302,17z/data=!3m1!4b1!4m5!3m4!1s0x3396192933eae7e1:0xadc19d61e18c8ebb!8m2!3d14.4415498!4d120.4762051?hl=en-US&entry=ttu">
            View large Map
          </a>
        </button>
      </section>

      <div id="information">
        <section>
          {CONTACT_DETAILS.map((contacts) => (
            <ContactDetails key={contacts.id} {...contacts} />
          ))}
        </section>
        <div id="contact-Details">
          <section id="fill-Up">
            <h2>How Can I Help You?</h2>

            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {errors.fullName && (
                <label style={{ color: "red" }}>{errors.fullName}</label>
              )}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              {errors.emailAddress && (
                <label style={{ color: "red" }}>{errors.emailAddress}</label>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              {errors.subject && (
                <label style={{ color: "red" }}>{errors.subject}</label>
              )}
              <button id="message" type="submit">
                Send message
              </button>
            </form>
          </section>
        </div>

        <section id="messege-section">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </section>
      </div>
    </div>
  );
}
