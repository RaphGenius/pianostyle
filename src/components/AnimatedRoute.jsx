import React from "react";
import Home from "../pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Piano from "../pages/Piano";
import { AnimatePresence } from "framer-motion";
const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/pianos" element={<Piano />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
