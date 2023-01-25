import React from "react";
import pianoImg from "../assets/piano_presentation.jpg";
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
                et de savoir faire. <br />
              </p>
            </div>
            <div className=" description__text">
              <p>
                Entreprise familiale, nous excercons notre passion dans la
                confection du noble instrument afin de vous proposer la meilleur
                qualité qu'il soit.
              </p>
            </div>
            <div className="description_item">
              <ul>
                <li>2566 pianos créés</li>
                <li>Exportation dans toute l'europe </li>
                <li>Bois Français </li>
                <li>Eco-responsable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Societe;
