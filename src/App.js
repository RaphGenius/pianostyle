import React from "react";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import AnimatedRoute from "./components/AnimatedRoute";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="home">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoute />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
