import React from "react";
import { Link } from "react-router-dom";
import { GiGrandPiano } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar__title">
          <GiGrandPiano className="navbar__title_icon" />
          <h1>PianoStyle </h1>
        </div>
      </Link>
      <nav className="navbar__menu">
        <div className="navbar__menu-container">
          <Link to="/pianos">
            <div className="navbar__menu-container-piano">Nos pianos</div>
          </Link>
        </div>
        <div className="navbar__menu-container">
          <div className="navbar__menu-container-contact">
            <Link to="/contact">Nous contacter</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
