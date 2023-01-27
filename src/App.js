import React from "react";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import AnimatedRoute from "./components/AnimatedRoute";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;
