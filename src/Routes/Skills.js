import React from "react";
import "./routeStyle.css";
import Nav from "../Components/Nav/Nav";
import { workData, skillData } from "../Data/Data";
import Footer from "../Components/Footer/Footer";
import Left from "../Assets/left.svg";
import Right from "../Assets/right.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [selected, setSelected] = useState(0);
  const tLenght = workData.length;
  const transition = { type: "spring", duration: 3 };
  return (
    <div>
      <Nav />
      <div className="skill-container">
        <div className="skill-header">
          <span>
            What i can do? ~ <span>Nicholas Kiplimo</span>
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
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            {workData[selected].institution}
          </motion.span>
          <span>
            {workData[selected].skills}{" "}
          </span>
          <span>
            <span className="extras def">Duration:</span>{" "}
            {workData[selected].duration}
          </span>
        </div>
        <div className="exp-right">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>
          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={workData[selected].img}
            alt=""
          />
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
