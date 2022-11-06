import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import Request from "../Components/Request/Request";
import Intro from "../Components/Intro/Intro";
import Experience from '../Components/Experience/Experience'
const Home = () => {
  return (
    <div className="main-container">
      <Nav />
      <Intro />
      <Experience />
      <Request />
      <Footer />
    </div>
  );
};

export default Home;
