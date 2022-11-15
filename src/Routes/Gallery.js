import React from "react";
import Nav from "../Components/Nav/Nav";
import "./routeStyle.css";
import img from "../Assets/profile.jpg";
import Footer from "../Components/Footer/Footer";
import { galleryData } from "../Data/Data";

const Gallery = () => {

  return (
    <div>
      <Nav />
      <div className="gallery_section">
        <div className="gallery-header">
          <h2>
            <span>----- Gallery Section -----</span>
          </h2>
          <p>Welcome to my Gallery page.</p>
        </div>
        <div className="gallery_m">
          <div className="categoty">
            <ul>
              <li>My gallery</li>
              <li>My Gallery</li>
              <li>Exampled</li>
            </ul>
          </div>
          <div className="gallery">
            {galleryData.map((gallery)=>[
            <div className="image_card">
                <img src={gallery.image} alt="" />
              <div className="desc">
                <p>{gallery.imageDescription}</p>
              </div>
            </div>
            ])};
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
