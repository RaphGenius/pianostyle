import React from "react";
import { motion as m } from "framer-motion";
import PianoModel from "../components/PianoModel";
import data from "../Data/Piano";

const PianoStore = () => {
  return (
    <div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="piano"
      >
        <h2 className="piano__title">Nos piano</h2>
        <div className="piano__container">
          {data.map((item) => (
            <PianoModel
              key={item.id}
              name={item.name}
              srcImage={item.src}
              alt={item.alt}
              id={item.id}
            />
          ))}
        </div>
      </m.div>
    </div>
  );
};

export default PianoStore;
