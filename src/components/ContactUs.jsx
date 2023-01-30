import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contact">
      <h3>Interessé par nos modèles ?</h3>

      <button>
        <Link to={"/pianos"}> Découvrez nos pianos !</Link>
      </button>
    </div>
  );
};

export default ContactUs;
