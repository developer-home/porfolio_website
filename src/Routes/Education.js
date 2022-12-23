import React from "react";
import Nav from "../Components/Nav/Nav";
import "./edu.css";
import { educationData, certificationData } from "../Data/Data";
import Footer from "../Components/Footer/Footer";

const Education = () => {
  return (
    <div>
      <Nav />

      <div className="container">
        <div className="row">
          <section className="col">
            <div className="title">
              <h5>EDUCATION INFO</h5>
            </div>
            <div className="content">
              {educationData.map((education)=>[
              <div className="box">
                <h3>{education.year}</h3>
                <h4>{education.school}</h4>
                <p>{education.program}</p>
              </div>
            ])}
            </div>
          </section>
          <section className="col">
            <div className="title">
              <h5>CERTIFICATION & TRAININGS</h5>
            </div>
            <div className="content">
              {certificationData.map((cert)=>[
                <div className="box">
                <h3>{cert.year}</h3>
                <p>{cert.certificate}</p>
              </div>
              ])}
              
            </div>
          </section>
       </div>
      </div>

      <Footer />
    </div>
  );
};

export default Education;
