import React from "react";
import "./intro.css";
import { BsCheck2Square, BsDownload } from "react-icons/bs";
import Resume from "../../Assets/cv/Nicholas25166.pdf";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div className="intro-main">
      <div className="intro-t">
        <div className="intro-info">
          <span className="def">Hello there, I am, </span>
          <span className="info-n">Nicholas Kiplimo, </span>
          <span className="def">
            Juniour React Developer, ICT Consultant and Support Engineer.
          </span>
          <div className="intro-btn">
            <button className="btn-primary btn-h">
              <Link to={"/contact"}>
                Hire Me
                <BsCheck2Square size={11} style={{ marginLeft: "4px" }} />
              </Link>
            </button>
            <button className="btn-primary btn-d">
              <Link to={Resume} style={{ color: "black" }}>
                Download Resume <BsDownload style={{ marginLeft: "4px" }} />
              </Link>
            </button>
          </div>
        </div>
        <div className="intro-img">
          <img className="i" src={require("../../Assets/intro.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
/* <div className="into-lfs">
        <div className="intro-contents">
          <div>
            <span>H!, Am Nicholas Kiplimo</span>
          </div>
          <div>
            <span>ICT Consultant, Software Developer and freelance</span>
          </div>
        </div>
        <div className="intro-lfs-btn">
          <button className="btn-primary">
            Hire Me {"  "}
            <BsArrowRightCircle
              size={10}
              style={{ gap: "2rem", alignContent: "center" }}
            />
          </button>
          <button className="btn-primary">
            Download Resume <BsCloudArrowDown size={10} />
          </button>
        </div>
      </div>
      <div className="intro-rts">right side</div>*/
