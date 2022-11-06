import "./footer.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPen,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-footer" id="footer">
      <div className="footer-container">
        <div className="footer-l">
          <div className="location">
            {" "}
            <FaHome size={20} style={{ color: "black", marginTop: "17px" }} />
            <div>
              <p>Po Box 1119- 30200</p>
              <p>Kitale, Kenya</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "green" }} /> +254791980616
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "red" }} />{" "}
              nicholaskiplimo5@gmail.com
            </h4>
          </div>
        </div>
        <div className="footer-r">
          <h4>About Nicholas</h4>
          <p>
            <FaPen />
            {"   "}I am a person full of enery and zeal to work to my level best
            with or without any supervision
          </p>
          <div className="f-social">
            <FaFacebook
              size={30}
              style={{ color: "blue", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "lightblue", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "blue", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
      <p className="sp">Designed by Nicholas Kiplimo: ( +254791980616 )</p>
    </div>
  );
};

export default Footer;
