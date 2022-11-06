import React from "react";
import Nav from "../Components/Nav/Nav";
import "./routeStyle.css";
import Footer from "../Components/Footer/Footer";
import ProfileImg from "../Assets/profile.jpg";
import { BsArrowRight, BsCheckCircleFill } from "react-icons/bs";

const Profile = () => {
  return (
    <div>
      <Nav />
      <div className="p-container" id="profile">
        <div className="p-left">
          <div className="profile-heading">My Profile</div>
          <div className="profile-summary">
            <ul>
              <li>
                <p>
                  <span>
                    <BsCheckCircleFill
                      size={13}
                      style={{ color: "blue", marginRight: "0.7rem" }}
                    />
                    Bio
                    <BsArrowRight
                      size={10}
                      style={{ color: "blue", margin: "0 0.5rem" }}
                    />
                  </span>
                  I am Nicholas Kiplimo, BsC. Computer science graduate from{" "}
                  <span>Laikipia University</span>, I am a Front-end Software
                  Developer and Tecnical support Engineer, Providing ICT
                  Services, Strong self drive, a goal getter mentality, Sharp
                  business acumen describes what I uphold. I am also a
                  passionate and a dedicated person who loves doing what is best
                  of Me.
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <BsCheckCircleFill
                      size={13}
                      style={{ color: "blue", marginRight: "0.7rem" }}
                    />
                    Believe{" "}
                    <BsArrowRight
                      size={10}
                      style={{ color: "blue", margin: "0 0.5rem" }}
                    />
                  </span>
                  I believe in God the father, son and holy spirit, and through
                  him i can do all things because he is the one who strengthens
                  me.
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <BsCheckCircleFill
                      size={13}
                      style={{ color: "blue", marginRight: "0.7rem" }}
                    />
                    Outstanding Values
                    <BsArrowRight
                      size={10}
                      style={{ color: "blue", margin: "0 0.5rem" }}
                    />
                  </span>
                  <ul className="values">
                    <li>TrustWorthy</li>
                    <li>Accountable</li>
                    <li>Integrity</li>
                    <li>Determined</li>
                  </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-right">
          <div></div>
          <div></div>
          <img src={ProfileImg} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
