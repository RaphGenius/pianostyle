import React from "react";
// import pianoImg from "../assets/piano_queu.jpg";
import { Link } from "react-router-dom";
const PianoModel = ({ item, name, srcImage, alt }) => {
  console.log(srcImage);
  return (
    <div className="piano_container">
      <div className="piano_container__image">
        <img src={srcImage} alt={alt} />
      </div>

      <div className="piano_container__description">
        <div className="piano_container__description-title">
          <h3>{name} </h3>
          <button>En savoir plus</button>
        </div>

        <p className="piano_container__description-paragraphe">
          <Link></Link>
        </p>
      </div>
    </div>
  );
};

export default PianoModel;
