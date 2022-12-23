import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import Education from './Routes/Education'
import Skills from './Routes/Skills'
import Gallery from './Routes/Gallery'
import Contact from './Routes/contact/Contact'


function App() {
  return (
    <div className="main-controller">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
