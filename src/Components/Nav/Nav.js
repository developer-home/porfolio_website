import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
/*import Logo from "../../Assets/intro.png";
import Logo1 from "../../logo.svg";*/
import { useState } from "react";

const Nav = () => {
  const [clickHam, setClickHam] = useState(false);
  const handleClickHam = () => setClickHam(!clickHam);
  return (
    <div className="nav-header">
      <Link to={'./'}>
        <span className="nav-l-header def">Nicholas Kiplimo</span>
      </Link>
      {/*<Link>
        <img src={Logo} alt="logo" className="logo-img" />
  </Link>*/}

      <ul className={clickHam ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <hr className="hr-nav" />
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
        <hr className="hr-nav" />
        <li>
          <Link to={"/education"}>Education</Link>
        </li>
        <hr className="hr-nav" />
        <li>
          <Link to={"/skills"}>Skills</Link>
        </li>
        <hr className="hr-nav" />
        <li>
          <Link to={"/gallery"}>Gallery</Link>
        </li>
        <hr className="hr-nav" />
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="ham-menu" onClick={handleClickHam}>
        {clickHam ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;
