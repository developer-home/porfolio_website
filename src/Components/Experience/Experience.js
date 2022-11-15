import React from "react";
//import react from "../../logo.svg";
import { Link } from "react-router-dom";
import html from "../../Assets/skills_img/html.png";
import css from "../../Assets/skills_img/css.png";
import js from "../../Assets/skills_img/js.png";

import "./experience.css";

const Experience = () => {
  return (
    <div className="exp_c-container" id="experience">
      <div className="exp_c-left">
        <div className="exp_c-head">
          <span className="def"> Software Development Knowledge</span>
          <span className="def">+ Others</span>
          <span>
            I have skills and Knowledge in working with the following
            <br />
            Software development Programing languages and familiar terminologies
            <br />
          </span>
          <Link to={"/skills"}>
            {" "}
            <button className="btn-primary s-btn">Learn More</button>
          </Link>
        </div>
      </div>

      <div className="exp_c-right">
        <div className="exp_c-mainCircle">
          <div className="exp_c-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="exp_c-secCircle">
            <img src={html} alt="" />
          </div>
          <div className="exp_c-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="exp_c-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="exp_c-secCircle">
            <img src={css} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
