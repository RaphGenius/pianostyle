import React from "react";
// import pianoImg from "../assets/piano_queu.jpg";
import { Link } from "react-router-dom";
const PianoModel = ({ name, srcImage, alt, id }) => {
  console.log(id);
  return (
    <div className="piano_container">
      <div className="piano_container__image">
        <img src={srcImage} alt={alt} />
      </div>

      <div className="piano_container__description">
        <div className="piano_container__description-title">
          <h3>{name} </h3>

          <button>
            {" "}
            <Link to={`/piano/${id}`}>En savoir plus </Link>
          </button>
        </div>

        <p className="piano_container__description-paragraphe"></p>
      </div>
    </div>
  );
};

export default PianoModel;
