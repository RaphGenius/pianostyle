import React from "react";
import { motion as m } from "framer-motion";
const Piano = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ durantion: 1 }}
    ></m.div>
  );
};

export default Piano;
