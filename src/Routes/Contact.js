import React from "react";
import Nav from "../Components/Nav/Nav";
import "./routeStyle.css";
import Footer from "../Components/Footer/Footer";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="cont-container" id="contact">
        <form action="" className="contact">
          <h3>- - Contact me - -</h3>
          <h4>I will get back to you as soon as possible</h4>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            required
          />

          <input
            type="email"
            name="name"
            placeholder="Enter Your Email"
            required
          />

          <input
            type="tel"
            name="name"
            placeholder="Enter Your Phone"
            required
          />

          <textarea name="message" placeholder="Type your message..." />

          <button className="btn-primary btn-c" name="submit" type="submit">
            Submit
          </button>
        </form>
        <div className="contact-s">
          <h4>You can also contact me through</h4>
          <div className="icon">
            <BsLinkedin style={{ color: "blue" }} />
            <BsFacebook style={{ color: "blue" }} />
            <BsGithub style={{ color: "blue" }} />
            <BsTwitter style={{ color: "blue" }} />
            <BsWhatsapp style={{ fill: "green" }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
