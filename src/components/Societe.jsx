import React from "react";
import pianoImg from "../assets/piano_presentation.jpg";
import { GiGrandPiano, GiFrance, GiRecycle } from "react-icons/gi";
import { FaGlobeEurope } from "react-icons/fa";
const Societe = () => {
  return (
    <section className="section_societe">
      <div className="societe_container">
        <div>
          <h2>Plus de 30 ans d'experience</h2>
        </div>

        <div className="description">
          <div className="description__img description__content">
            <img src={pianoImg} alt="une personne jouant du piano" />
          </div>
          <div className="description__content ">
            <div className=" description__text">
              <p>
                Fondé en 1985, <span>PianoStyle</span> est un mélange de passion
                et de savoir faire transmit de génération en génération. <br />
              </p>
            </div>
            <div className=" description__text">
              <p>
                Entreprise familiale, nous exerçons notre passion dans la
                confection du noble instrument afin de vous proposer la meilleur
                expérience possible.
              </p>
            </div>
            <div className="description_item">
              <ul>
                <li>
                  2566 pianos créés{" "}
                  <span>
                    <GiGrandPiano />
                  </span>
                </li>
                <li>
                  Livré en Europe{" "}
                  <span>
                    <FaGlobeEurope />
                  </span>
                </li>
                <li>
                  Bois Français{" "}
                  <span>
                    <GiFrance />
                  </span>
                </li>
                <li>
                  Eco-responsable{" "}
                  <span>
                    {" "}
                    <GiRecycle />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Societe;
