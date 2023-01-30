import React from "react";
import Home from "../pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import PianoStore from "../pages/PianoStore";
import Piano from "../pages/Piano";
import SmoothScroll from "./SmoothScroll";
const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
      <SmoothScroll>
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/pianos" element={<PianoStore />} />
          <Route path="/piano/:id" element={<Piano />} />
        </Routes>
      </SmoothScroll>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
