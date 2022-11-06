import React from "react";
import "./routeStyle.css";
import Nav from "../Components/Nav/Nav";
import { workData, skillData } from "../Data/Data";
import Footer from "../Components/Footer/Footer";
import Left from "../Assets/left.svg";
import Right from "../Assets/right.svg";
import { useState } from "react";

const Skills = () => {
  const [selected, setSelected] = useState(0);
  const tLenght = workData.length;
  return (
    <div>
      <Nav />
      <div className="skill-container">
        <div className="skill-header">
          <span>
            My Skills ~ <span>Nicholas Kiplimo</span>
          </span>
        </div>
        <div className="skill-card">
          {skillData.map((skill) => [
            <div className="skill-c">
              {skill.image}
              <span>{skill.skill}</span>
              <span>{skill.info}</span>
            </div>,
          ])}
        </div>
      </div>
      <div className="experience">
        <div className="exp-left">
          <span>Work Experience ~ Nicholas Kiplimo</span>
          <span>{workData[selected].institution}</span>
          <span>{workData[selected].skills}</span>
          <span><span className="extras def">Duration:</span> {workData[selected].duration}</span>
        </div>
        <div className="exp-right">
          <div></div>
          <div></div>
          <img src={workData[selected].img} alt="" />
          <div className="exp-arrows">
            <img
              onClick={() => {
                selected === 0
                  ? setSelected(tLenght - 1)
                  : setSelected((prev) => prev - 1);
              }}
              src={Left}
              alt=""
            />
            <img
              onClick={() => {
                selected === tLenght - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
              src={Right}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
