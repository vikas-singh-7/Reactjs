import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Car from "./pages/Car";
import { Route, Routes } from "react-router-dom";
import Video from "./pages/Video";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Video/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
