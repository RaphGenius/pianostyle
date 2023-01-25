import React from "react";
import { GiGrandPiano } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <GiGrandPiano className="navbar__title_icon" />
        <h1>PianoStyle </h1>
      </div>
      <nav className="navbar__menu">
        <div className="navbar__menu-container">
          <div className="navbar__menu-container-piano">
            <a href="#">Nos pianos</a>
          </div>
        </div>

        <div className="navbar__menu-container">
          <div className="navbar__menu-container-contact">
            <a href="#">Nous contacter</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
