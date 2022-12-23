import React from "react";
import Nav from "../Components/Nav/Nav";
import "./routeStyle.css";
import Footer from "../Components/Footer/Footer";

const Education = () => {
  return (
    <div>
      <Nav />
      <div className="edu-container">
        <div className="e-left">
          <h1 className="e-hd">Educational Background</h1>
          <ul className="edu-content">
            <li className="e-event" data-date="2016 - 2021">
              <h3>Laikipia University</h3>
              <p>Bachelor of Science in Computer Science</p>
              <p style={{ fontStyle: "italic" }}>
                Second Class- Upper Division
              </p>
            </li>
            <li className="e-event" data-date="2012 - 2015">
              <h3>St Pauls High School</h3>
              <p>Kenya Certificate of Secondary Education (KCSE)</p>
              <p style={{ fontStyle: "italic" }}>B+ 70</p>
            </li>
            <li className="e-event" data-date="2002 - 2011">
              <h3>Kapchepsir Primary School</h3>
              <p>Kenya Certificate of Primary Education (KCPE)</p>
            </li>
          </ul>
        </div>
        <div className="e-righ">
          <span className="c-hd def">Certifications</span>
          <span>I have cerrification in:</span>
          <ul>
            <li>HCNA Datacom</li>
            <li>Computer Security</li>
            <li>Linux Unhatched</li>
            <li>cyber security</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
