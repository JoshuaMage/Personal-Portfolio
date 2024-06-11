import React from 'react';
import '../component-CSS/Resume.css';

// Define and export the TitleConcept component
export function TitleConcept(props) {
  return <h2>{props.Title}</h2>;
}

export default function Resume() {
  return (
    <div id='RESUME'>
      <section id="resume">
        <TitleConcept Title ="Resume" />
      </section>

      <div id="background">
        <section> 
          <h2
            style={{
              fontSize: "40px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: "#002244",
              paddingLeft: "20px",
            }}
            className='x'
          >
            Education
          </h2>
          <div>
            <section className="education">
              <p className="Year-Graduate">2016-2020</p>
              <section className="school-Name">
                <h3 className="school">
                  Polytechnic University of the Philippines
                </h3>
                <h3 className="course-Year">
                  Bachelor of Science Business Administration
                  <br />
                  major in Human resource Manage
                </h3>
              </section>
            </section>

            <section className="education">
              <p className="Year-Graduate">2010-2014</p>
              <section className="school-Name">
                <h3 className="school">Mariveles National Highschool</h3>
                <h3 className="course-Year">Secondary</h3>
              </section>
            </section>

            <section className="education">
              <p className="Year-Graduate">2004-2010</p>
              <section className="school-Name">
                <h3 className="school">Ipag Elementary School</h3>
                <h3 className="course-Year">Primary</h3>
              </section>
            </section>
          </div>
        </section>

        <section>
          <h2
            style={{
              fontSize: "40px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: "#002244",
              paddingLeft: "20px",
            }}
          >
            Experince
          </h2>
          <div>
            <section className="education">
              <p className="Year-Graduate">2024 - Current</p>
              <section className="school-Name">
                <h3 className="school">Web Developer</h3>
                <h3 className="course-Year"><ul>
                  <li>Front-End: HTML, CSS, JavaScript, JSX</li>
                  <li>Back-End: Node.js, Express.js, EJS, </li>
                  <li>DataBases: SQL, PostgreSQL</li>
                  <li></li>
                  </ul></h3>
              </section>
            </section>

            <section className="education">
              <p className="Year-Graduate">2021-2023</p>
              <section className="school-Name">
                <h3 className="school">Material Planner</h3>
                <h3 className="course-Year">
                  <ul>
                    <li>
                      Coordinated transportation and logistics activities,
                      including scheduling shipments and tracking deliveries to
                      ensure timely arrivals.
                    </li>
                    <li>
                      Prepared and maintained documentation related to shipping,
                      receiving, and inventory transactions.
                    </li>
                    <li>
                      Excellent analytical, problem solving, decision making and
                      strategic thinking skills with ability to manage and
                      prioritize multiple conflicting demands
                    </li>
                    <li>
                      Ensuring the consistent and adequate supply of materials
                      necessary for production.
                    </li>
                  </ul>
                </h3>
              </section>
            </section>
          </div>
        </section>
      </div>
      <div id="percentage-Section">
        <div>
          <h2 id="percentage-Title">Coding Skills</h2>
        </div>

        <div className="percentage-Element">
          <h4>
            HTML <span>95%</span>
          </h4>
          <section>
            <p className="percentage-Border">
              <span className="inside-Border" style={{ width: "95%" }}></span>
            </p>
          </section>
        </div>

        <div className="percentage-Element">
          <h4>
            CSS <span>90%</span>
          </h4>
          <section>
            <p className="percentage-Border">
              <span className="inside-Border" style={{ width: "90%" }}></span>
            </p>
          </section>
        </div>

        <div className="percentage-Element">
          <h4>
            JAVASCRIPT <span>65%</span>
          </h4>
          <section>
            <p className="percentage-Border">
              <span className="inside-Border" style={{ width: "65%" }}></span>
            </p>
          </section>
        </div>

        <div className="percentage-Element">
          <h4>
            REACT <span>70%</span>
          </h4>
          <section>
            <p className="percentage-Border">
              <span className="inside-Border" style={{ width: "70%" }}></span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
