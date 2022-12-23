import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact me!</h1>
            <p>0791980616</p>
            <p>nicholaskiplimo5@gmail.com</p>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedinIn />
              <FaGithub />
            </div>
          </div>
          <div className="contact-right">
            <form action="">
                <input type="text" name="name" placeholder="Enter your name..." />
                <input type="text" name="email" placeholder="Enter your email..." />
                <textarea type="text" rows="6" placeholder="Enter your name..." />

                <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
